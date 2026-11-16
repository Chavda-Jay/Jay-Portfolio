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
            className="fixed inset-0 z-40 bg-[#05070F]/80 backdrop-blur-md md:hidden"
            aria-hidden="true"
          />

          {/* Drawer Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#0A1020] border-l border-[#1E2A4A] p-6 flex flex-col justify-between shadow-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#1E2A4A]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#2F6BFF] to-[#8B5CF6] flex items-center justify-center font-bold text-white text-sm">
                    JC
                  </div>
                  <span className="font-heading font-semibold text-[#E8ECF8]">
                    Jay Chavda
                  </span>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-[#8C97B5] hover:text-[#E8ECF8] hover:bg-[#101935] focus:outline-none focus:ring-2 focus:ring-[#5B8CFF]"
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
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-[#2F6BFF]/15 text-[#5B8CFF] border border-[#2F6BFF]/30"
                          : "text-[#8C97B5] hover:text-[#E8ECF8] hover:bg-[#101935]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#1E2A4A] flex flex-col gap-3">
              {hasResume && (
                <Button
                  variant="outline"
                  href="/resume/Jay_Chavda_Resume.pdf"
                  external
                  size="md"
                  leftIcon={<FileText className="w-4 h-4 text-[#5B8CFF]" />}
                  className="w-full justify-center"
                >
                  Download Resume
                </Button>
              )}
              <Button
                variant="primary"
                href="#contact"
                size="md"
                onClick={onClose}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
