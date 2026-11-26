"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, GmailIcon } from "@/ui/Icons";
import { Container } from "./Container";
import { profileData } from "@/data/profile";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Education", href: "/#education" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="w-full border-t border-[rgba(148,163,184,0.12)] bg-[#0B1120] text-[#94A3B8] py-12 md:py-16 mt-20 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[rgba(148,163,184,0.08)]">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#151C2C] border border-[rgba(148,163,184,0.18)] flex items-center justify-center font-heading font-extrabold text-[#8B5CF6] text-sm shadow-sm">
                JC
              </div>
              <span className="font-heading font-bold text-lg text-[#F8FAFC]">
                {profileData.name}
              </span>
            </Link>
            <p className="text-sm text-[#94A3B8] max-w-md leading-relaxed font-sans">
              {profileData.title} specializing in building production-ready LLM
              applications, prompt engineering, and intelligent full-stack
              systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-[#111319] border border-white/[0.1] text-[#94A3B8] hover:text-white hover:border-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-[#111319] border border-white/[0.1] text-[#94A3B8] hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-[#111319] border border-white/[0.1] text-[#94A3B8] hover:text-[#EA4335] hover:border-[#EA4335] transition-colors"
              >
                <GmailIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-[#F8FAFC] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-sans">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-[#F8FAFC] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm font-sans">
              {navLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#8B5CF6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#22D3EE] transition-colors"
                >
                  All Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B] font-sans">
          <p>© 2026 Jay Chavda. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#151C2C] border border-[rgba(148,163,184,0.12)] hover:border-[#8B5CF6]/40 text-[#94A3B8] hover:text-[#F8FAFC] transition-all font-mono"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
