import React from "react";
import { cn } from "@/lib/utils";

interface ParallaxGlowProps {
  className?: string;
}

export function ParallaxGlow({ className }: ParallaxGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      {/* Top electric blue ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#2F6BFF]/10 blur-[130px] pointer-events-none" />

      {/* Subtle purple accent glow on the right */}
      <div className="absolute top-[35%] -right-40 w-[500px] h-[450px] rounded-full bg-[#8B5CF6]/8 blur-[140px] pointer-events-none" />

      {/* Subtle cyan glow on bottom left */}
      <div className="absolute top-[70%] -left-40 w-[450px] h-[450px] rounded-full bg-[#22D3EE]/6 blur-[150px] pointer-events-none" />
    </div>
  );
}
