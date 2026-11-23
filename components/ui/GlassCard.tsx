import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  interactive?: boolean;
  as?: React.ElementType;
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
        "rounded-2xl transition-all duration-300 relative overflow-hidden",
        elevated
          ? "bg-[#161822] border border-white/[0.12] shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
          : "bg-[#111319] border border-white/[0.08] shadow-[0_10px_28px_rgba(0,0,0,0.35)]",
        interactive &&
          "hover:border-[#FF9900]/50 hover:shadow-[0_20px_40px_-12px_rgba(255,153,0,0.2)] hover:-translate-y-1 cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </Component>
  );
}
