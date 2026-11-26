"use client";

import React from "react";
import { Container } from "@/layout/Container";
import { Reveal } from "@/ui/Reveal";
import { GraduationCap, ShieldCheck, Check } from "lucide-react";

const EDUCATION_ITEMS = [
  {
    degree: "MCA (2024 – 2026)",
    institution: "Sardar Vallabhbhai Global University, Ahmedabad",
    score: "8.30 CGPA",
  },
  {
    degree: "BCA (2021 – 2024)",
    institution: "Shri Chimanbhai Patel Institute, Ahmedabad",
    score: "68.30%",
  },
  {
    degree: "12th - HSC (2021)",
    institution: "Shree Madhyamik Shala, Viramgam, Ahmedabad",
    score: "70.86%",
  },
  {
    degree: "10th - SSC (2019)",
    institution: "Anand Primary School, Viramgam, Ahmedabad",
    score: "74.67%",
  },
];

const CERTIFICATION_ITEMS = [
  "Prompt Engineering for ChatGPT – Vanderbilt University",
  "Generative AI Fundamentals – Databricks Academy",
  "Machine Learning with Python – IBM Cognitive Class",
  "Claude Platform 101 – Anthropic",
  "MERN Stack Development – Udemy",
  "Python for Data Science – Infosys Springboard",
];

export function Education() {
  return (
    <section id="education" className="py-16 md:py-20 relative scroll-mt-20 border-t border-white/[0.06]">
      {/* Anchor for certifications nav link */}
      <div id="certifications" className="absolute -top-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
                Education &amp;
                <br />
                Certifications
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans">
                Academic foundation and specialized AI credentials backing every line of production code.
              </p>
            </Reveal>
          </div>

          {/* Right Column: 2 Sub-Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            
            {/* Sub-Column 1: Education */}
            <div className="space-y-6">
              <Reveal delay={0.15}>
                <div className="flex items-center gap-2.5 text-[#FF9900]">
                  <GraduationCap className="w-5 h-5 text-[#FF9900]" />
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                    Education
                  </h3>
                </div>
              </Reveal>

              <div className="space-y-4">
                {EDUCATION_ITEMS.map((item, idx) => (
                  <Reveal key={item.degree} delay={0.2 + idx * 0.07} direction="up">
                    <div className="border-l-2 border-[#FF9900]/40 pl-4 py-1.5 group hover:border-[#FF9900] transition-colors">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#FF9900] transition-colors">
                          {item.degree}
                        </h4>
                        {item.score && (
                          <span className="text-xs sm:text-sm font-mono px-2.5 py-0.5 rounded-full bg-[#111319] text-[#FF9900] border border-[#FF9900]/30 shadow-sm shrink-0 font-medium">
                            {item.score}
                          </span>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-[#CBD5E1] font-sans mt-1">
                        {item.institution}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sub-Column 2: Certifications */}
            <div className="space-y-6">
              <Reveal delay={0.2}>
                <div className="flex items-center gap-2.5 text-[#FF9900]">
                  <ShieldCheck className="w-5 h-5 text-[#FF9900]" />
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                    Certifications
                  </h3>
                </div>
              </Reveal>

              <div className="space-y-4">
                {CERTIFICATION_ITEMS.map((cert, idx) => (
                  <Reveal key={cert} delay={0.25 + idx * 0.06} direction="up">
                    <div className="flex items-start gap-3 group">
                      <div className="w-4.5 h-4.5 rounded bg-[#FF9900]/20 text-[#FF9900] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_6px_rgba(255,153,0,0.3)]">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-sm sm:text-base font-sans text-[#F1F5F9] group-hover:text-[#FF9900] transition-colors leading-relaxed">
                        {cert}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
