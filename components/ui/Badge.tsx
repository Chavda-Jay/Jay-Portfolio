import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "accent" | "cyan" | "success" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = "default",
  size = "sm",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-[#101935]/80 text-[#8C97B5] border-[#1E2A4A] hover:border-[#2F6BFF]/40",
    primary:
      "bg-[#2F6BFF]/10 text-[#5B8CFF] border-[#2F6BFF]/30",
    accent:
      "bg-[#8B5CF6]/10 text-[#A78BFA] border-[#8B5CF6]/30",
    cyan:
      "bg-[#22D3EE]/10 text-[#22D3EE] border-[#22D3EE]/30",
    success:
      "bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30",
    outline:
      "bg-transparent text-[#8C97B5] border-[#1E2A4A]",
  };

  const sizes = {
    sm: "text-xs px-2.5 py-1 font-mono tracking-tight",
    md: "text-sm px-3.5 py-1.5 font-mono tracking-tight",
  };

  const dotColors = {
    default: "bg-[#8C97B5]",
    primary: "bg-[#5B8CFF]",
    accent: "bg-[#8B5CF6]",
    cyan: "bg-[#22D3EE]",
    success: "bg-[#34D399]",
    outline: "bg-[#8C97B5]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full animate-pulse", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
