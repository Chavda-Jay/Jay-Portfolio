"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/ui/Button";

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  activeSection: string;
  hasResume?: boolean;
}

export function MobileNav({
  isOpen,
  onClose,
  items,
  activeSection,
  hasResume = false,
}: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-[#0B1120]/80 backdrop-blur-md md:hidden"
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#111827] border-l border-[rgba(148,163,184,0.12)] p-6 flex flex-col justify-between shadow-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[rgba(148,163,184,0.12)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF9900] to-[#E68A00] flex items-center justify-center font-heading font-extrabold text-[#08090C] text-xs shadow-[0_0_12px_rgba(255,153,0,0.4)]">
                    JC
                  </div>
                  <span className="font-heading font-semibold text-[#F8FAFC]">
                    Jay Chavda
                  </span>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#151C2C] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-1.5" aria-label="Mobile navigation">
                {items.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className={`px-4 py-3 rounded-xl text-base font-heading font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-[#FF9900]/15 text-[#F8FAFC] border border-[#FF9900]/30 font-semibold"
                          : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111319]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[rgba(148,163,184,0.12)] flex flex-col gap-3">
              {hasResume && (
                <a
                  href="/resume/Jay_Chavda_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#111319] text-[#F8FAFC] border border-white/[0.14] hover:border-[#FF9900]/60 transition-colors text-sm font-heading font-semibold"
                >
                  <FileText className="w-4 h-4 text-[#FF9900]" />
                  <span>Download Resume</span>
                </a>
              )}
              <Button
                variant="primary"
                href="#contact"
                size="md"
                onClick={onClose}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
