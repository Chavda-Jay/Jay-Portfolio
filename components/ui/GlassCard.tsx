import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  interactive?: boolean;
  as?: "div" | "article" | "section";
}

export function GlassCard({
  children,
  className,
  elevated = false,
  interactive = false,
  as: Component = "div",
  ...props
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border transition-all duration-300 relative overflow-hidden",
        elevated
          ? "bg-[#101935]/80 border-[#2F6BFF]/25 backdrop-blur-xl shadow-xl shadow-[#05070F]/50"
          : "bg-[#0A1020]/75 border-[#1E2A4A]/80 backdrop-blur-lg shadow-lg shadow-[#05070F]/30",
        interactive &&
          "hover:border-[#5B8CFF]/50 hover:bg-[#0A1020]/90 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#2F6BFF]/10",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
