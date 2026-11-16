import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#101935] border border-[#1E2A4A] text-xs font-mono text-[#5B8CFF] uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-fluid-h2 font-heading font-bold text-[#E8ECF8] tracking-tight">
        {title}{" "}
        {highlight && (
          <span className="gradient-text inline-block">{highlight}</span>
        )}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-[#8C97B5] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
