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

    // 3. Honeypot check for bots
    if (_honey && _honey.length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 4. Send via Web3Forms (Primary direct delivery to chavdajay510@gmail.com)
    const web3FormsKey =
      process.env.WEB3FORMS_ACCESS_KEY || "c020ce63-04f0-40ff-8b36-becdd35dcf21";

    if (web3FormsKey) {
      try {
        const web3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name,
            email,
            message,
            subject: `Portfolio Message from ${name}`,
            from_name: "Jay Chavda Portfolio",
          }),
        });

        const rawText = await web3Response.text();
        let web3Data: { success?: boolean; message?: string } = {};
        try {
          web3Data = JSON.parse(rawText);
        } catch {
          console.warn("Web3Forms non-JSON response:", rawText.slice(0, 100));
        }

        if (web3Response.ok && web3Data.success) {
          return NextResponse.json(
            {
              success: true,
              message: "Thank you! Your message has been sent successfully to Jay Chavda.",
            },
            { status: 200 }
          );
        }
      } catch (err) {
        console.error("Web3Forms dispatch error:", err);
      }
    }

    // 5. Fallback: Send email via Resend if RESEND_API_KEY is configured
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "chavdajay510@gmail.com";
        const fromEmail = process.env.CONTACT_SENDER_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

        const { error: emailError } = await resend.emails.send({
          from: fromEmail,
          to: [toEmail],
          replyTo: email,
          subject: `Portfolio Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (!emailError) {
          return NextResponse.json(
            {
              success: true,
              message: "Thank you! Your message has been sent successfully to Jay Chavda.",
            },
            { status: 200 }
          );
        }
        console.error("Resend API error:", emailError);
      } catch (err) {
        console.error("Resend exception:", err);
      }
    }

    return NextResponse.json(
      {
        error: "Failed to dispatch email. Please email directly at chavdajay510@gmail.com.",
        fallback: true,
      },
      { status: 500 }
    );
  } catch (error) {
    const errorDetails = error instanceof Error ? error.message : String(error);
    console.error("Contact API route exception:", error);
    return NextResponse.json(
      {
        error: "Internal server error: " + errorDetails,
      },
      { status: 500 }
    );
  }
}
