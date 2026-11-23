  "use client";

import React, { useState } from "react";
import { Container } from "@/layout/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { Button } from "@/ui/Button";
import { Reveal } from "@/ui/Reveal";
import { profileData } from "@/data/profile";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/ui/Icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _honey: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [showFallbackMailto, setShowFallbackMailto] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific field error on edit
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = "Please enter your name (min 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const clientErrors = validate();
    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      return;
    }

    setFieldErrors({});
    setStatus("loading");
    setServerMessage(null);
    setShowFallbackMailto(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setServerMessage(
          data.error || "An error occurred while sending your message."
        );
        setShowFallbackMailto(true);
        return;
      }

      if (data.fallback) {
        setStatus("idle");
        setServerMessage(data.message);
        setShowFallbackMailto(true);
      } else {
        setStatus("success");
        setServerMessage("Your message has been sent successfully! Jay will get back to you shortly.");
        setFormData({ name: "", email: "", message: "", _honey: "" });
      }
    } catch {
      setStatus("error");
      setServerMessage(
        "Network connection error. Please email directly using the mailto link below."
      );
      setShowFallbackMailto(true);
    }
  };

  const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(
    formData.name ? `Portfolio Contact: ${formData.name}` : "Portfolio Inquiry"
  )}&body=${encodeURIComponent(
    formData.message || "Hi Jay,\n\nI came across your portfolio and wanted to reach out regarding..."
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build"
          highlight="Something Intelligent"
          description="Interested in collaborating on AI/ML systems, LLM automation, or engineering opportunities? Drop me a message or connect directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left Column: Direct Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal direction="left">
              <GlassCard className="p-6 md:p-8 space-y-6" elevated>
                <div>
                  <h3 className="font-heading font-bold text-xl text-[#F8FAFC] mb-2">
                    Contact Information
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed font-sans">
                    Available for AI/ML Engineer, Generative AI Developer, and
                    Full-Stack roles. Let&apos;s discuss how my experience in LLM
                    orchestration and FastAPI backends can contribute to your team.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Email */}
                  <a
                    href={`mailto:${profileData.email}`}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0B1120] border border-[rgba(148,163,184,0.12)] hover:border-[#8B5CF6]/50 transition-colors group"
                  >
                    <div className="p-2.5 rounded-lg bg-[#8B5CF6]/15 text-[#8B5CF6] group-hover:bg-[#8B5CF6]/25 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                        Direct Email
                      </span>
                      <span className="text-sm font-medium text-[#F8FAFC] group-hover:text-[#8B5CF6] transition-colors">
                        {profileData.email}
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#0B1120] border border-[rgba(148,163,184,0.12)]">
                    <div className="p-2.5 rounded-lg bg-[#22D3EE]/10 text-[#22D3EE]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block">
                        Location
                      </span>
                      <span className="text-sm font-medium text-[#F8FAFC]">
                        {profileData.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-[rgba(148,163,184,0.12)]">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] block mb-3">
                    Professional Profiles
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={profileData.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0B1120] border border-[rgba(148,163,184,0.15)] text-xs font-medium text-[#F8FAFC] hover:text-[#8B5CF6] hover:border-[#8B5CF6]/50 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-[#F8FAFC]" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={profileData.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#0B1120] border border-[rgba(148,163,184,0.15)] text-xs font-medium text-[#F8FAFC] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#F8FAFC]" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Right Column: Interactive Contact Form (3 Cols) */}
          <div className="lg:col-span-3">
            <Reveal direction="right">
              <GlassCard className="p-6 md:p-8">
                <h3 className="font-heading font-bold text-xl text-[#F8FAFC] mb-1">
                  Send a Direct Message
                </h3>
                <p className="text-xs md:text-sm text-[#94A3B8] mb-6 font-sans">
                  Fill out the details below and I&apos;ll get back to you promptly.
                </p>

                {/* Success Banner */}
                {status === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-[#34D399]/10 border border-[#34D399]/30 text-[#34D399] flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">{serverMessage}</p>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="text-xs underline mt-2 text-[#F8FAFC] hover:text-white"
                      >
                        Send another message
                      </button>
                    </div>
                  </div>
                )}

                {/* Server Message / Fallback Notice */}
                {serverMessage && status !== "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#F8FAFC] flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <div className="text-xs md:text-sm space-y-2">
                      <p>{serverMessage}</p>
                      {showFallbackMailto && (
                        <a
                          href={mailtoUrl}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#8B5CF6] text-white font-medium text-xs hover:bg-[#7C3AED] transition-colors"
                        >
                          <span>Open in Mail Client</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Honeypot anti-spam field (hidden offscreen) */}
                  <div
                    style={{ display: "none" }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <label htmlFor="_honey">Do not fill this field</label>
                    <input
                      type="text"
                      id="_honey"
                      name="_honey"
                      value={formData._honey}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5"
                    >
                      Your Name <span className="text-[#8B5CF6]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      disabled={status === "loading"}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1120] border text-[#F8FAFC] placeholder-[#94A3B8]/40 text-sm outline-none transition-colors focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] ${
                        fieldErrors.name
                          ? "border-red-500/80"
                          : "border-[rgba(148,163,184,0.12)]"
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-red-400 mt-1">
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5"
                    >
                      Your Email <span className="text-[#8B5CF6]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jane@company.com"
                      disabled={status === "loading"}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1120] border text-[#F8FAFC] placeholder-[#94A3B8]/40 text-sm outline-none transition-colors focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] ${
                        fieldErrors.email
                          ? "border-red-500/80"
                          : "border-[rgba(148,163,184,0.12)]"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-red-400 mt-1">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-1.5"
                    >
                      Your Message <span className="text-[#8B5CF6]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message or inquiry here..."
                      disabled={status === "loading"}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#0B1120] border text-[#F8FAFC] placeholder-[#94A3B8]/40 text-sm outline-none transition-colors focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] resize-none ${
                        fieldErrors.message
                          ? "border-red-500/80"
                          : "border-[rgba(148,163,184,0.12)]"
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="text-xs text-red-400 mt-1">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      isLoading={status === "loading"}
                      rightIcon={<Send className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      {status === "loading" ? "Sending..." : "Send Message"}
                    </Button>

                    <a
                      href={mailtoUrl}
                      className="text-xs font-mono text-[#94A3B8] hover:text-[#8B5CF6] transition-colors"
                    >
                      Prefer email client? Click here
                    </a>
                  </div>
                </form>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
