"use client";

import React, { useState } from "react";
import { Container } from "@/layout/Container";
import { Reveal } from "@/ui/Reveal";
import { experienceData } from "@/data/experience";
import { Briefcase, Code2, ChevronDown, CheckCircle2 } from "lucide-react";

const ROLE_ICONS: Record<string, React.ElementType> = {
  saubhagyam: Briefcase,
  grownited: Code2,
};

export function Experience() {
  // Expand first item (current role) by default for immediate impression, allow toggling both
  const [expandedId, setExpandedId] = useState<string | null>("saubhagyam");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-16 md:py-20 relative scroll-mt-20 border-t border-white/[0.06]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4 sticky top-28">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FF9900] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF9900]" />
                <span>CAREER TIMELINE</span>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
                Professional
                <br />
                <span className="text-[#FF9900]">Experience</span>
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-4 text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-sans font-normal">
                Hands-on engineering experience spanning Generative AI applications, LLM lead-scoring agents, and scalable full-stack web platforms.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <div className="px-3.5 py-1.5 rounded-full bg-[#111319] border border-white/[0.12] text-xs font-mono text-[#CBD5E1] flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Actively Working in AI/ML</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Connected Timeline */}
          <div className="lg:col-span-8">
            <div className="relative pl-6 sm:pl-8 space-y-6">
              
              {/* Vertical Amber Line */}
              <div
                className="absolute left-[7px] sm:left-[9px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#FF9900] via-[#FF9900]/60 to-[#FF9900]/10"
                aria-hidden="true"
              />

              {experienceData.map((exp, idx) => {
                const Icon = ROLE_ICONS[exp.id] || Briefcase;
                const isExpanded = expandedId === exp.id;
                const isCurrent = exp.id === "saubhagyam";

                return (
                  <Reveal key={exp.id} delay={0.15 + idx * 0.1} direction="up">
                    <div className="relative flex items-start gap-4 sm:gap-5 group">
                      
                      {/* Orange Dot Marker on the line */}
                      <div
                        className={`absolute -left-[27px] sm:-left-[31px] top-4 w-3.5 h-3.5 rounded-full ring-4 ring-[#08090C] transition-all duration-300 ${
                          isExpanded
                            ? "bg-[#FF9900] shadow-[0_0_12px_#FF9900] scale-110"
                            : "bg-[#FF9900]/70 group-hover:bg-[#FF9900]"
                        }`}
                        aria-hidden="true"
                      />

                      {/* Interactive Expandable Card */}
                      <div
                        onClick={() => toggleExpand(exp.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            toggleExpand(exp.id);
                          }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-expanded={isExpanded}
                        className={`flex-1 rounded-2xl bg-[#111319] border transition-all duration-300 p-5 sm:p-6 cursor-pointer select-none shadow-[0_8px_24px_rgba(0,0,0,0.35)] ${
                          isExpanded
                            ? "border-[#FF9900]/60 shadow-[0_12px_32px_rgba(255,153,0,0.12)]"
                            : "border-white/[0.1] hover:border-[#FF9900]/40 hover:-translate-y-0.5"
                        }`}
                      >
                        {/* Header Row */}
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3.5 min-w-0">
                            {/* Icon Box */}
                            <div className="w-11 h-11 rounded-xl bg-[#08090C] border border-white/[0.12] text-[#FF9900] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                              <Icon className="w-5 h-5" />
                            </div>

                            {/* Role & Company */}
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2 mb-1">
                                <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#FF9900] transition-colors truncate">
                                  {exp.role}
                                </h3>
                                {isCurrent ? (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                                    Present Role
                                  </span>
                                ) : (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/[0.06] text-[#CBD5E1] border border-white/[0.1]">
                                    Completed
                                  </span>
                                )}
                              </div>
                              <p className="text-xs sm:text-sm text-[#FF9900] font-medium font-sans">
                                {exp.company}
                              </p>
                            </div>
                          </div>

                          {/* Period & Chevron Toggle */}
                          <div className="flex flex-col items-end shrink-0 gap-1.5">
                            <span className="text-xs font-mono text-[#94A3B8]">
                              {exp.period}
                            </span>
                            <div
                              className={`w-7 h-7 rounded-lg bg-[#08090C] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] transition-transform duration-300 ${
                                isExpanded ? "rotate-180 text-[#FF9900] border-[#FF9900]/40" : "group-hover:text-white"
                              }`}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </div>
                        </div>

                        {/* Collapsed Preview Hint */}
                        {!isExpanded && (
                          <div className="mt-3.5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-[#94A3B8]">
                            <span className="truncate pr-2">
                              {exp.highlights[0]}
                            </span>
                            <span className="text-[#FF9900] font-mono text-[11px] shrink-0 font-medium">
                              Click to view details ↓
                            </span>
                          </div>
                        )}

                        {/* Expanded Full Details */}
                        {isExpanded && (
                          <div className="mt-5 pt-4 border-t border-white/[0.1] space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                            {/* Contributions & Impact */}
                            <div>
                              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF9900] mb-2.5 font-semibold">
                                Key Contributions &amp; Impact
                              </h4>
                              <ul className="space-y-2">
                                {exp.highlights.map((highlight, hIdx) => (
                                  <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Tech Stack Used */}
                            <div className="pt-2">
                              <h4 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] mb-2 font-medium">
                                Technologies &amp; Methodologies
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#08090C] text-[#CBD5E1] border border-white/[0.1] hover:border-[#FF9900]/40 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                      </div>

                    </div>
                  </Reveal>
                );
              })}

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
