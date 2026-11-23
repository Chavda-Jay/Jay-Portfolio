import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "cyan" | "success" | "default";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  children,
  className,
  variant = "default",
  size = "md",
  dot = false,
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-[#FF9900]/15 text-[#FF9900] border-[#FF9900]/30",
    accent: "bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30",
    cyan: "bg-[#38BDF8]/15 text-[#38BDF8] border-[#38BDF8]/30",
    success: "bg-[#10B981]/15 text-[#34D399] border-[#10B981]/30",
    default: "bg-white/[0.05] text-[#94A3B8] border-white/[0.08]",
  };

  const dotStyles = {
    primary: "bg-[#FF9900]",
    accent: "bg-[#F59E0B]",
    cyan: "bg-[#38BDF8]",
    success: "bg-[#10B981]",
    default: "bg-[#94A3B8]",
  };

  const sizeStyles = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-mono font-medium rounded-full border tracking-wide",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotStyles[variant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
