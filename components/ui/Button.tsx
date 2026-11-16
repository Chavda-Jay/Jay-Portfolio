import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  leftIcon,
  rightIcon,
  isLoading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070F] disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98]";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#2F6BFF] to-[#8B5CF6] text-white hover:brightness-110 shadow-lg shadow-[#2F6BFF]/20 hover:shadow-[#2F6BFF]/30",
    secondary:
      "bg-[#101935]/80 hover:bg-[#101935] text-[#E8ECF8] border border-[#1E2A4A] hover:border-[#2F6BFF]/50 backdrop-blur-md",
    outline:
      "border border-[#1E2A4A] text-[#E8ECF8] hover:border-[#5B8CFF] hover:bg-[#2F6BFF]/10",
    ghost:
      "text-[#8C97B5] hover:text-[#E8ECF8] hover:bg-[#101935]/50",
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5 h-8",
    md: "text-sm px-4 py-2.5 gap-2 h-10",
    lg: "text-base px-6 py-3.5 gap-2.5 h-12",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {rightIcon && !isLoading && (
        <span className="inline-flex shrink-0">{rightIcon}</span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
}
