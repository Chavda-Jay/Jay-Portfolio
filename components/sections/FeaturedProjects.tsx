"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/layout/Container";
import { Reveal } from "@/ui/Reveal";
import { ArrowRight } from "lucide-react";

interface FeaturedProjectItem {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  schematicType: "interview" | "sales" | "car";
  github?: string;
  liveDemo?: string;
}

const FEATURED_PROJECTS: FeaturedProjectItem[] = [
  {
    slug: "ai-interview-prep-bot",
    title: "AI Interview Prep Bot",
    description: "AI-powered interview preparation platform with intelligent evaluation.",
    tags: ["React", "FastAPI", "MongoDB"],
    schematicType: "interview",
  },
  {
    slug: "b2c-ai-sales-agent",
    title: "AI Sales & Marketing Agent",
    description: "Autonomous B2C AI Sales Agent for business growth.",
    tags: ["React", "FastAPI", "Supabase"],
    schematicType: "sales",
  },
  {
    slug: "carscout",
    title: "CarScout",
    description: "MERN-based automotive marketplace.",
    tags: ["React", "Node.js", "MongoDB"],
    schematicType: "car",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 md:py-20 relative scroll-mt-20 border-t border-white/[0.06]">
      <Container>
        {/* Section Header */}
        <div className="mb-10 text-left">
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-2 text-sm font-sans text-[#94A3B8]">
              Some of my best work
            </p>
          </Reveal>
        </div>

        {/* 3 Projects Grid (Mockup 1:1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, idx) => (
            <Reveal key={project.slug} delay={0.1 + idx * 0.08} direction="up">
              <div className="h-full rounded-2xl bg-[#111319] border border-white/[0.08] hover:border-[#FF9900]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1 shadow-lg">
                
                <div>
                  {/* Visual Banner Preview */}
                  <div className="relative w-full h-44 bg-[#08090C] border-b border-white/[0.06] overflow-hidden flex items-center justify-center p-4">
                    {/* Background grid */}
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage: "radial-gradient(#FF9900 1px, transparent 1px)",
                        backgroundSize: "16px 16px",
                      }}
                    />

                    {/* Schematic Visualization */}
                    {project.schematicType === "interview" && (
                      <div className="relative z-10 w-full max-w-[260px] p-3 rounded-lg bg-[#111319]/90 border border-white/10 font-mono text-[10px] space-y-1.5 shadow-md">
                        <div className="flex items-center justify-between text-[#94A3B8] pb-1 border-b border-white/10">
                          <span className="text-[#22D3EE] font-bold">Groq LLaMA 3.3 70B</span>
                          <span className="text-[#34D399]">Mock Active</span>
                        </div>
                        <div className="text-white text-[11px] truncate">Q: Explain Transformer Attention?</div>
                        <div className="text-[#94A3B8] flex items-center justify-between pt-1">
                          <span>NLP Evaluation: 94%</span>
                          <span className="text-[#FF9900]">FastAPI</span>
                        </div>
                      </div>
                    )}

                    {project.schematicType === "sales" && (
                      <div className="relative z-10 w-full max-w-[260px] p-3 rounded-lg bg-[#111319]/90 border border-white/10 font-mono text-[10px] space-y-1.5 shadow-md">
                        <div className="flex items-center justify-between text-[#94A3B8] pb-1 border-b border-white/10">
                          <span className="text-[#FF9900] font-bold">LLM Sales Engine</span>
                          <span className="text-[#22D3EE]">Hindi/Guj/Eng</span>
                        </div>
                        <div className="text-white text-[11px] truncate">7-Factor Lead Scoring Matrix</div>
                        <div className="text-[#94A3B8] flex items-center justify-between pt-1">
                          <span className="text-[#34D399]">Score: 88/100</span>
                          <span>Supabase DB</span>
                        </div>
                      </div>
                    )}

                    {project.schematicType === "car" && (
                      <div className="relative z-10 w-full max-w-[260px] p-3 rounded-lg bg-[#111319]/90 border border-white/10 font-mono text-[10px] space-y-1.5 shadow-md">
                        <div className="flex items-center justify-between text-[#94A3B8] pb-1 border-b border-white/10">
                          <span className="text-[#FF9900] font-bold">Automotive Hub</span>
                          <span className="text-[#22D3EE]">MERN Stack</span>
                        </div>
                        <div className="text-white text-[11px] truncate">Buyer • Seller • Admin Roles</div>
                        <div className="text-[#94A3B8] flex items-center justify-between pt-1">
                          <span>Razorpay Verified</span>
                          <span className="text-[#34D399]">MongoDB</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Info */}
                  <div className="p-5">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/link flex items-center justify-between gap-2"
                    >
                      <h3 className="font-heading font-bold text-lg text-white group-hover/link:text-[#FF9900] transition-colors">
                        {project.title}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/link:text-[#FF9900] group-hover/link:translate-x-1 transition-all shrink-0" />
                    </Link>

                    <p className="mt-2.5 text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans font-normal">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tags Footer (Mockup 1:1) */}
                <div className="p-5 pt-0 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#08090C] text-[#CBD5E1] border border-white/[0.08]"
                    >
                      <span className="text-[#22D3EE]">✦</span>
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
