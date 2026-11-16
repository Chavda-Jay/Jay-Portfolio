"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/ui/Icons";
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
    <footer className="w-full border-t border-[#1E2A4A] bg-[#05070F] text-[#8C97B5] py-12 md:py-16 mt-20 relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#1E2A4A]/60">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2F6BFF] to-[#8B5CF6] flex items-center justify-center font-heading font-bold text-white text-sm">
                JC
              </div>
              <span className="font-heading font-bold text-lg text-[#E8ECF8]">
                {profileData.name}
              </span>
            </Link>
            <p className="text-sm text-[#8C97B5] max-w-md leading-relaxed">
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
                className="p-2.5 rounded-xl bg-[#0A1020] border border-[#1E2A4A] text-[#8C97B5] hover:text-[#5B8CFF] hover:border-[#2F6BFF]/40 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-[#0A1020] border border-[#1E2A4A] text-[#8C97B5] hover:text-[#5B8CFF] hover:border-[#2F6BFF]/40 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.email}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-[#0A1020] border border-[#1E2A4A] text-[#8C97B5] hover:text-[#5B8CFF] hover:border-[#2F6BFF]/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-[#E8ECF8] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#5B8CFF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading font-semibold text-sm text-[#E8ECF8] uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.slice(3).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#5B8CFF] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#5B8CFF] transition-colors"
                >
                  All Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C97B5]">
          <p>© 2026 Jay Chavda. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A1020] border border-[#1E2A4A] hover:border-[#5B8CFF]/40 text-[#8C97B5] hover:text-[#E8ECF8] transition-all"
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
