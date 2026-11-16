import React from "react";
import { Container } from "@/layout/Container";
import { Button } from "@/ui/Button";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05070F] text-[#E8ECF8] flex items-center justify-center p-4">
      <Container className="max-w-md text-center">
        <div className="w-16 h-16 rounded-3xl bg-[#2F6BFF]/15 border border-[#2F6BFF]/30 text-[#5B8CFF] flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-[#5B8CFF] block mb-2">
          Error 404
        </span>

        <h1 className="text-fluid-h2 font-heading font-bold text-[#E8ECF8] mb-3">
          Page Not Found
        </h1>

        <p className="text-sm text-[#8C97B5] mb-8 leading-relaxed">
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
