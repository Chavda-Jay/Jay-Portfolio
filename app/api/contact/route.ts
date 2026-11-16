import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limit";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    // 1. Determine client IP for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded
      ? forwarded.split(",")[0].trim()
      : req.headers.get("x-real-ip") || "127.0.0.1";

    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. Please try again in an hour or email directly.",
        },
        { status: 429 }
      );
    }

    // 2. Parse request body
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          error: "Validation failed",
          details: fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, message, _honey } = result.data;

    // 3. Honeypot check
    if (_honey && _honey.length > 0) {
      // Silently accept bot submissions
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 4. Check if Resend API key is present
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Graceful fallback when Resend is not yet configured
      return NextResponse.json(
        {
          success: false,
          fallback: true,
          message:
            "The direct contact service API is pending configuration. Please use the mailto button below to send your message directly to chavdajay510@gmail.com.",
        },
        { status: 200 }
      );
    }

    // 5. Send email via Resend
    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "chavdajay510@gmail.com";
    const fromEmail = process.env.CONTACT_SENDER_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const { error: emailError } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (emailError) {
      console.error("Resend API error:", emailError);
      return NextResponse.json(
        {
          error: "Failed to dispatch email. Please email directly.",
          fallback: true,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API route exception:", error);
    return NextResponse.json(
      {
        error: "Internal server error. Please email directly.",
      },
      { status: 500 }
    );
  }
}
