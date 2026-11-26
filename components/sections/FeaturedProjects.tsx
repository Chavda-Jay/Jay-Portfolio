"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/layout/Container";
import { Reveal } from "@/ui/Reveal";
import { ArrowRight, ExternalLink } from "lucide-react";

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
    description: "An AI practice platform that conducts real-time mock interviews across 6 tech stacks and grades answers with personalized improvement feedback.",
    tags: ["React", "FastAPI", "MongoDB"],
    schematicType: "interview",
    liveDemo: "https://interview-prep-bot-lilac.vercel.app",
    github: "https://github.com/Chavda-Jay/interview-prep-bot",
  },
  {
    slug: "b2c-ai-sales-agent",
    title: "AI Sales & Marketing Agent",
    description: "A 24/7 multilingual sales chatbot that talks with customers in Hindi, Gujarati & English, explains products, and automatically highlights ready buyers.",
    tags: ["React", "FastAPI", "Supabase"],
    schematicType: "sales",
    liveDemo: "https://ai-sales-agent-self.vercel.app",
    github: "https://github.com/Chavda-Jay/AI-Sales-Agent",
  },
  {
    slug: "carscout",
    title: "CarScout",
    description: "A complete online car buying & selling marketplace with verified vehicle listings, secure Razorpay checkout, and buyer/seller dashboards.",
    tags: ["React", "Node.js", "MongoDB"],
    schematicType: "car",
    liveDemo: "https://car-scout-ten.vercel.app",
    github: "https://github.com/Chavda-Jay/CarScout",
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 md:py-20 relative scroll-mt-20 border-t border-white/[0.06]">
      <Container>
        {/* Section Header */}
        <div className="mb-10 text-left">
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
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
              <div className="h-full rounded-2xl bg-[#111319] border border-white/[0.12] hover:border-[#FF9900]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1 shadow-[0_12px_32px_rgba(0,0,0,0.45)] hover:shadow-[0_16px_40px_rgba(255,153,0,0.15)]">
                
                <div>
                  {/* Visual Banner Preview */}
                  <div className="relative w-full h-44 bg-[#08090C] border-b border-white/[0.08] overflow-hidden flex items-center justify-center p-4">
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
                      <div className="relative z-10 w-full max-w-[270px] p-3.5 rounded-xl bg-[#0B0D13] border border-white/[0.14] font-mono text-[11px] space-y-2 shadow-lg">
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                          <span className="text-[#38BDF8] font-bold">Groq LLaMA 3.3 70B</span>
                          <span className="text-[#34D399] font-medium bg-[#34D399]/10 px-1.5 py-0.5 rounded text-[10px]">Mock Active</span>
                        </div>
                        <div className="text-white text-xs font-sans font-medium truncate">Q: Explain Transformer Attention?</div>
                        <div className="flex items-center justify-between pt-1 text-[10px]">
                          <span className="text-[#CBD5E1]">NLP Evaluation: <strong className="text-white">94%</strong></span>
                          <span className="text-[#FF9900] font-bold">FastAPI</span>
                        </div>
                      </div>
                    )}

                    {project.schematicType === "sales" && (
                      <div className="relative z-10 w-full max-w-[270px] p-3.5 rounded-xl bg-[#0B0D13] border border-white/[0.14] font-mono text-[11px] space-y-2 shadow-lg">
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                          <span className="text-[#FF9900] font-bold">LLM Sales Engine</span>
                          <span className="text-[#38BDF8] font-medium bg-[#38BDF8]/10 px-1.5 py-0.5 rounded text-[10px]">Hindi/Guj/Eng</span>
                        </div>
                        <div className="text-white text-xs font-sans font-medium truncate">7-Factor Lead Scoring Matrix</div>
                        <div className="flex items-center justify-between pt-1 text-[10px]">
                          <span className="text-[#34D399] font-bold">Score: 88/100</span>
                          <span className="text-[#CBD5E1]">Supabase DB</span>
                        </div>
                      </div>
                    )}

                    {project.schematicType === "car" && (
                      <div className="relative z-10 w-full max-w-[270px] p-3.5 rounded-xl bg-[#0B0D13] border border-white/[0.14] font-mono text-[11px] space-y-2 shadow-lg">
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                          <span className="text-[#FF9900] font-bold">Automotive Hub</span>
                          <span className="text-[#38BDF8] font-medium bg-[#38BDF8]/10 px-1.5 py-0.5 rounded text-[10px]">MERN Stack</span>
                        </div>
                        <div className="text-white text-xs font-sans font-medium truncate">Buyer • Seller • Admin Roles</div>
                        <div className="flex items-center justify-between pt-1 text-[10px]">
                          <span className="text-[#CBD5E1]">Razorpay Verified</span>
                          <span className="text-[#34D399] font-bold">MongoDB</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Info */}
                  <div className="p-6">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group/link flex items-center justify-between gap-2"
                    >
                      <h3 className="font-heading font-bold text-xl text-white group-hover/link:text-[#FF9900] transition-colors">
                        {project.title}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover/link:text-[#FF9900] group-hover/link:translate-x-1 transition-all shrink-0" />
                    </Link>

                    <p className="mt-3 text-sm text-[#CBD5E1] leading-relaxed font-sans font-normal">
                      {project.description}
                    </p>

                    {/* Actions: Solid Amber Live Demo + Case Study */}
                    <div className="mt-5 flex items-center gap-3 pt-2">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl gradient-amber-btn text-xs font-heading font-bold text-[#08090C] shadow-md shadow-[#FF9900]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.12] hover:border-[#FF9900]/50 text-xs font-heading font-semibold transition-all group/cs shadow-sm ml-auto"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FF9900] group-hover/cs:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Tags Footer (Mockup 1:1) */}
                <div className="p-6 pt-0 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#08090C] text-[#CBD5E1] border border-white/[0.12]"
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

        {/* Explore All Projects Archive Button */}
        <div className="mt-12 text-center">
          <Reveal delay={0.35} direction="up">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#111319] hover:bg-[#161822] text-[#E2E8F0] hover:text-[#FF9900] border border-white/[0.12] hover:border-[#FF9900]/50 transition-all text-xs sm:text-sm font-mono shadow-lg hover:shadow-[#FF9900]/10 group"
            >
              <span>Explore All Projects Archive (6 Projects)</span>
              <ArrowRight className="w-4 h-4 text-[#FF9900] group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
