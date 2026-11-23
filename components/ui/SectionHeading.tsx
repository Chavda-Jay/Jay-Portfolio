import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  className = "",
  centered = true,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <Reveal direction="down">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF9900] mb-3">
            — {eyebrow} —
          </div>
        </Reveal>
      )}

      <Reveal direction="up" delay={0.05}>
        <h2 className="text-fluid-h2 font-heading font-extrabold text-[#FFFFFF] tracking-tight">
          {title}{" "}
          {highlight && <span className="text-[#FF9900]">{highlight}</span>}
        </h2>
      </Reveal>

      {description && (
        <Reveal direction="up" delay={0.1}>
          <p className="mt-3.5 text-sm sm:text-base text-[#94A3B8] leading-relaxed font-sans font-normal">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
