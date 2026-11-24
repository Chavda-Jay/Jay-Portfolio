"use client";

import React from "react";
import { Container } from "@/layout/Container";
import { Reveal } from "@/ui/Reveal";
import { Briefcase, Code2 } from "lucide-react";

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  icon: React.ElementType;
}

const EXPERIENCES: TimelineItem[] = [
  {
    id: "saubhagyam",
    role: "AI/ML Intern",
    company: "Saubhagyam Web Pvt. Ltd.",
    period: "June 2026 – Present",
    description: "Working on AI/ML solutions, Generative AI and intelligent applications.",
    icon: Briefcase,
  },
  {
    id: "grownited",
    role: "MERN Full Stack Developer",
    company: "Grownited Private Limited",
    period: "Jan 2026 – Apr 2026",
    description: "Developed web applications using React, Node.js and MongoDB.",
    icon: Code2,
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 relative scroll-mt-20 border-t border-white/[0.06]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
                Professional
                <br />
                Experience
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-3 text-sm font-sans text-[#FF9900]">
                My work journey
              </p>
            </Reveal>
          </div>

          {/* Right Column: Connected Timeline (Mockup 1:1) */}
          <div className="lg:col-span-8">
            <div className="relative pl-6 sm:pl-8 space-y-8">
              
              {/* Vertical Amber Line */}
              <div
                className="absolute left-[7px] sm:left-[9px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#FF9900] via-[#FF9900]/70 to-[#FF9900]/20"
                aria-hidden="true"
              />

              {EXPERIENCES.map((exp, idx) => {
                const Icon = exp.icon;
                return (
                  <Reveal key={exp.id} delay={0.15 + idx * 0.1} direction="up">
                    <div className="relative flex items-start gap-4 sm:gap-5 group">
                      
                      {/* Orange Dot Marker on the line */}
                      <div
                        className="absolute -left-[27px] sm:-left-[31px] top-2.5 w-3 h-3 rounded-full bg-[#FF9900] ring-4 ring-[#08090C] shadow-[0_0_10px_#FF9900]"
                        aria-hidden="true"
                      />

                      {/* Icon in Rounded Box */}
                      <div className="w-11 h-11 rounded-xl bg-[#111319] border border-white/[0.1] text-[#FF9900] flex items-center justify-center shrink-0 group-hover:border-[#FF9900]/50 transition-colors shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 min-w-0 pt-0.5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                          <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#FF9900] transition-colors truncate">
                            {exp.role} <span className="text-[#94A3B8] font-normal">— {exp.company}</span>
                          </h3>
                          <span className="text-xs font-mono text-[#94A3B8] shrink-0">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
                          {exp.description}
                        </p>
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
