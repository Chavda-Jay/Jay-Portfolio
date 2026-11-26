"use client";

import React, { useState } from "react";
import { Container } from "@/layout/Container";
import { Reveal } from "@/ui/Reveal";
import { profileData } from "@/data/profile";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, GmailIcon } from "@/ui/Icons";

const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "c020ce63-04f0-40ff-8b36-becdd35dcf21";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      errors.name = "Please enter your name.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errors.message = "Message must be at least 5 characters.";
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

    // Bot honeypot check (anti-spam)
    if (formData._honey && formData._honey.length > 0) {
      setStatus("success");
      setServerMessage("Your message has been sent successfully to Jay Chavda!");
      setFormData({ name: "", email: "", message: "", _honey: "" });
      return;
    }

    setFieldErrors({});
    setStatus("loading");
    setServerMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          subject: `Portfolio Message from ${formData.name.trim()}`,
          from_name: "Jay Chavda Portfolio",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setServerMessage(
          data.message || "Failed to send message. Please email directly via chavdajay510@gmail.com"
        );
      } else {
        setStatus("success");
        setServerMessage("Your message has been sent successfully to Jay Chavda!");
        setFormData({ name: "", email: "", message: "", _honey: "" });
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please email directly via chavdajay510@gmail.com");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative scroll-mt-20 border-t border-white/[0.06]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Direct Email, Socials */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-6">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FF9900] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF9900]" />
                <span>LET&apos;S CONNECT</span>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
                Have an Idea?
                <br />
                Let&apos;s <span className="text-[#FF9900]">Build</span> Something <span className="text-[#FF9900]">Intelligent</span>.
              </h2>
            </Reveal>

            {/* Direct Email Link */}
            <Reveal delay={0.25}>
              <div className="mt-8">
                <a
                  href={`mailto:${profileData.email}`}
                  className="inline-flex items-center gap-2.5 text-sm sm:text-base font-mono text-[#CBD5E1] hover:text-[#FF9900] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#FF9900]" />
                  <span className="underline-offset-4 group-hover:underline">
                    {profileData.email}
                  </span>
                </a>
              </div>
            </Reveal>

            {/* Social Icons Row */}
            <Reveal delay={0.32}>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="Connect with Jay Chavda on LinkedIn"
                  className="w-10 h-10 rounded-xl bg-[#111319] hover:bg-[#0A66C2]/15 border border-white/[0.12] hover:border-[#0A66C2] text-[#CBD5E1] hover:text-[#0A66C2] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md group"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="View Jay Chavda on GitHub"
                  className="w-10 h-10 rounded-xl bg-[#111319] hover:bg-white/10 border border-white/[0.12] hover:border-white text-[#CBD5E1] hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md group"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Send Direct Email"
                  title={`Email Jay Chavda: ${profileData.email}`}
                  className="w-10 h-10 rounded-xl bg-[#111319] hover:bg-[#EA4335]/15 border border-white/[0.12] hover:border-[#EA4335] text-[#CBD5E1] hover:text-[#EA4335] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md group"
                >
                  <GmailIcon className="w-5 h-5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean Dark Form */}
          <div className="lg:col-span-7 w-full">
            <Reveal delay={0.2} direction="up">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#111319] border border-white/[0.08] shadow-xl">
                
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Honeypot field for anti-spam */}
                  <input
                    type="text"
                    name="_honey"
                    value={formData._honey}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name *"
                        disabled={status === "loading"}
                        className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border text-sm text-white placeholder-[#64748B] focus:outline-none transition-colors ${
                          fieldErrors.name
                            ? "border-[#EF4444] focus:border-[#EF4444]"
                            : "border-white/[0.1] focus:border-[#FF9900]"
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="mt-1 text-xs text-[#EF4444]">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email *"
                        disabled={status === "loading"}
                        className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border text-sm text-white placeholder-[#64748B] focus:outline-none transition-colors ${
                          fieldErrors.email
                            ? "border-[#EF4444] focus:border-[#EF4444]"
                            : "border-white/[0.1] focus:border-[#FF9900]"
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-xs text-[#EF4444]">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Message */}
                  <div>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message *"
                      disabled={status === "loading"}
                      className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border text-sm text-white placeholder-[#64748B] focus:outline-none transition-colors resize-none ${
                        fieldErrors.message
                          ? "border-[#EF4444] focus:border-[#EF4444]"
                          : "border-white/[0.1] focus:border-[#FF9900]"
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="mt-1 text-xs text-[#EF4444]">{fieldErrors.message}</p>
                    )}
                  </div>

                  {/* Status Alerts */}
                  {serverMessage && (
                    <div
                      className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
                        status === "success"
                          ? "bg-[#10B981]/10 text-[#34D399] border border-[#10B981]/25"
                          : "bg-[#EF4444]/10 text-[#F87171] border border-[#EF4444]/25"
                      }`}
                    >
                      {status === "success" ? (
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 shrink-0" />
                      )}
                      <span>{serverMessage}</span>
                    </div>
                  )}

                  {/* Full-width Golden Orange Gradient Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 px-6 rounded-full gradient-amber-btn text-sm font-heading font-bold text-[#08090C] flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-lg shadow-[#FF9900]/20 disabled:opacity-60 cursor-pointer"
                  >
                    <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>

              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
