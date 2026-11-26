"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/layout/Container";
import { Reveal } from "@/ui/Reveal";
import { ArrowRight, Hexagon, Check } from "lucide-react";

const FOCUS_ITEMS = [
  "Machine Learning & Deep Learning",
  "Generative AI & LLMs",
  "AI-Powered Applications",
  "Full-Stack Development",
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 relative scroll-mt-20 border-t border-white/[0.06]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Left Column: Who I Am (Mockup 1:1) */}
          <div className="md:col-span-7 flex flex-col items-start pr-0 md:pr-8">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FF9900] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF9900]" />
                <span>ABOUT ME</span>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                Who I Am
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-5 text-sm sm:text-base text-[#94A3B8] leading-relaxed font-sans font-normal max-w-xl">
                I&apos;m Jay Chavda, an AI/ML Engineer and Generative AI Developer, focused on building intelligent solutions that solve real-world problems with the power of Machine Learning and AI.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-7">
                <Link
                  href="/#experience"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-[#FF9900] text-white hover:text-[#FF9900] text-sm font-heading font-medium transition-all group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block md:col-span-1 flex justify-center">
            <div className="w-[1px] h-48 bg-white/10 mx-auto" />
          </div>

          {/* Right Column: My Focus (Mockup 1:1) */}
          <div className="md:col-span-4 flex flex-col justify-center">
            <Reveal delay={0.2}>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-7 h-7 rounded-lg bg-[#FF9900]/15 border border-[#FF9900]/30 text-[#FF9900] flex items-center justify-center">
                  <Hexagon className="w-4 h-4 fill-[#FF9900]/30" />
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight">
                  My Focus
                </h3>
              </div>
            </Reveal>

            <div className="space-y-3.5">
              {FOCUS_ITEMS.map((item, idx) => (
                <Reveal key={item} delay={0.25 + idx * 0.08} direction="up">
                  <div className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-md bg-[#FF9900]/20 border border-[#FF9900]/50 flex items-center justify-center shrink-0 text-[#FF9900] shadow-[0_0_8px_rgba(255,153,0,0.3)]">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm font-sans font-medium text-[#E2E8F0] group-hover:text-[#FF9900] transition-colors">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
