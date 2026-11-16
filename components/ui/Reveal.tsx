import React from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  return (
    <div
      style={delay ? { animationDelay: `${delay}s` } : undefined}
      className={cn("animate-fade-up", className)}
    >
      {children}
    </div>
  );
}
