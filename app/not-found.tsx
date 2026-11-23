import React from "react";
import { Container } from "@/layout/Container";
import { Button } from "@/ui/Button";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-[#F8FAFC] flex items-center justify-center p-4">
      <Container className="max-w-md text-center">
        <div className="w-16 h-16 rounded-3xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#8B5CF6] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#8B5CF6]/20">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] block mb-2">
          Error 404
        </span>

        <h1 className="text-fluid-h2 font-heading font-bold text-[#F8FAFC] mb-3">
          Page Not Found
        </h1>

        <p className="text-sm text-[#94A3B8] mb-8 leading-relaxed font-sans">
          The requested page or project case study could not be located in the
          portfolio archive.
        </p>

        <Button
          variant="primary"
          size="md"
          href="/"
          leftIcon={<ArrowLeft className="w-4 h-4" />}
        >
          Return to Portfolio
        </Button>
      </Container>
    </div>
  );
}
