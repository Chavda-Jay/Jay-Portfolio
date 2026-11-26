"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/ui/Button";
import { MobileNav } from "./MobileNav";
import { Menu } from "lucide-react";

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
            ? "bg-[#08090C]/98 backdrop-blur-2xl border-b border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.85)] py-3.5"
            : "bg-[#08090C]/85 backdrop-blur-md py-4.5 border-b border-transparent"
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF9900] to-[#E68A00] flex items-center justify-center font-heading font-bold text-[#08090C] text-sm shadow-[0_0_15px_rgba(255,153,0,0.4)]">
              JC
            </div>
            <span className="font-heading font-bold text-base text-white tracking-tight uppercase group-hover:text-[#FF9900] transition-colors">
              Jay Chavda
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-[#111319]/90 border border-white/[0.12] px-2 py-1 rounded-full shadow-2xl backdrop-blur-xl"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[13px] font-heading font-medium tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-200 outline-none select-none ${
                    isActive
                      ? "bg-[#FF9900] text-[#08090C] font-bold shadow-[0_2px_10px_rgba(255,153,0,0.35)]"
                      : "text-[#94A3B8] hover:text-white hover:bg-white/[0.08] active:scale-95"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA: Let's Talk */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              href="/#contact"
              className="border-white/[0.18] hover:border-[#FF9900] bg-white/[0.04] hover:bg-[#FF9900]/10 text-white hover:text-[#FF9900] text-xs font-heading font-semibold tracking-wide rounded-full px-5 py-2 transition-all shadow-sm"
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
