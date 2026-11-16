"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, FileText } from "lucide-react";
import { Container } from "./Container";
import { Button } from "@/ui/Button";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

interface NavbarProps {
  hasResume?: boolean;
}

export function Navbar({ hasResume = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const sections = ["about", "skills", "experience", "projects", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
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
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-[#05070F]/85 backdrop-blur-md border-b border-[#1E2A4A]/80 py-3 shadow-lg shadow-[#05070F]/40"
            : "bg-transparent py-5"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo / Brandmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] rounded-lg p-1"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2F6BFF] to-[#8B5CF6] flex items-center justify-center font-heading font-bold text-white text-base shadow-md shadow-[#2F6BFF]/25 group-hover:scale-105 transition-transform duration-200">
              JC
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#22D3EE] border-2 border-[#05070F]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base text-[#E8ECF8] tracking-tight group-hover:text-white transition-colors">
                Jay Chavda
              </span>
              <span className="text-[11px] font-mono text-[#8C97B5] -mt-0.5 tracking-tight">
                AI/ML Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0A1020]/80 p-1.5 rounded-full border border-[#1E2A4A]/80 backdrop-blur-md">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.split("#")[1];
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                    isActive
                      ? "text-[#E8ECF8] bg-[#1E2A4A]/90 font-semibold shadow-sm"
                      : "text-[#8C97B5] hover:text-[#E8ECF8] hover:bg-[#101935]/50"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#5B8CFF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {hasResume && (
              <Button
                variant="outline"
                size="sm"
                href="/resume/Jay_Chavda_Resume.pdf"
                external
                leftIcon={<FileText className="w-3.5 h-3.5 text-[#5B8CFF]" />}
              >
                Resume
              </Button>
            )}
            <Button
              variant="primary"
              size="sm"
              href="/#contact"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-xl text-[#8C97B5] hover:text-[#E8ECF8] hover:bg-[#101935] border border-[#1E2A4A] focus:outline-none focus:ring-2 focus:ring-[#5B8CFF]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer (Only rendered when opened) */}
      {mobileMenuOpen && (
        <MobileNav
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          items={NAV_ITEMS}
          activeSection={activeSection}
          hasResume={hasResume}
        />
      )}
    </>
  );
}
