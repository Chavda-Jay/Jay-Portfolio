import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-bold rounded-full transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#FF9900] disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-7 py-3 text-sm sm:text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#FF9900] to-[#E68A00] text-[#08090C] hover:from-[#FFA61F] hover:to-[#FF9900] shadow-[0_0_24px_rgba(255,153,0,0.45)] hover:shadow-[0_0_32px_rgba(255,153,0,0.65)]",
    secondary:
      "bg-[#111319] hover:bg-[#161822] text-[#FFFFFF] border border-white/[0.12] hover:border-white/25 shadow-sm",
    outline:
      "bg-transparent hover:bg-white/[0.04] text-[#FFFFFF] border border-white/[0.16] hover:border-[#FF9900]/60",
    ghost:
      "bg-transparent hover:bg-white/[0.04] text-[#94A3B8] hover:text-[#FFFFFF]",
  };

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
