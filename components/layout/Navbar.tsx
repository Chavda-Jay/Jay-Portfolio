"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/ui/Button";
import { MobileNav } from "./MobileNav";
import { Menu, ExternalLink } from "lucide-react";

interface NavbarProps {
  hasResume?: boolean;
}

const NAV_ITEMS = [
  { label: "Home", href: "/#", sectionId: "hero" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Education", href: "/#education", sectionId: "education" },
  { label: "Certifications", href: "/#certifications", sectionId: "certifications" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export function Navbar({ hasResume = false }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver scroll-spy without layout thrashing
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    NAV_ITEMS.forEach((item) => {
      if (!item.sectionId) return;
      const el = document.getElementById(item.sectionId);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#08090C]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo / Brandmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900] rounded-lg"
            aria-label="Jay Chavda Home"
          >
            {/* Amber brand glyph matching reference */}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF9900] to-[#E68A00] flex items-center justify-center font-heading font-extrabold text-[#08090C] text-sm shadow-[0_0_15px_rgba(255,153,0,0.4)]">
              JC
            </div>
            <span className="font-heading font-bold text-base text-white tracking-tight uppercase group-hover:text-[#FF9900] transition-colors">
              Jay Chavda
            </span>
          </Link>

          {/* Desktop Navigation Links (matching DEVFUSION style) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs font-mono uppercase tracking-wider transition-colors outline-none focus-visible:text-[#FF9900] relative py-1 ${
                    isActive
                      ? "text-[#FF9900] font-semibold"
                      : "text-[#94A3B8] hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF9900] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA: Resume & Let's Talk */}
          <div className="hidden sm:flex items-center gap-3">
            {hasResume && (
              <a
                href="/resume/Jay_Chavda_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111319] hover:bg-[#161822] text-white border border-white/[0.14] hover:border-[#FF9900]/60 transition-colors text-xs font-mono uppercase tracking-wider"
              >
                <span>Resume</span>
                <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
              </a>
            )}
            <Button
              variant="outline"
              size="sm"
              href="/#contact"
              className="border-white/[0.18] hover:border-[#FF9900] text-xs font-mono uppercase tracking-wider"
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-[#111319] border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-[#FF9900]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={NAV_ITEMS}
        activeSection={activeSection}
        hasResume={hasResume}
      />
    </>
  );
}
