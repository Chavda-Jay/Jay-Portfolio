import React from "react";
import { Container } from "@/layout/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { Badge } from "@/ui/Badge";
import { Reveal } from "@/ui/Reveal";
import { profileData } from "@/data/profile";
import { educationData } from "@/data/education";
import {
  Sparkles,
  GraduationCap,
  Languages,
  MapPin,
  Bot,
  CheckCircle2,
} from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Engineering Background"
          title="Bridging AI Models &amp;"
          highlight="Production Engineering"
          description="Combining deep exploration of Large Language Models and prompt engineering with practical full-stack software development."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Tile 1: Main Story / Profile Summary (Span 2 cols on lg) */}
          <Reveal
            direction="up"
            delay={0.1}
            className="md:col-span-2 lg:col-span-2"
          >
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between" interactive>
              <div>
                <div className="flex items-center gap-3 text-[#F8FAFC] mb-4">
                  <div className="p-2.5 rounded-xl bg-[#FF9900]/15 border border-[#FF9900]/30 text-[#FF9900]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg md:text-xl text-[#F8FAFC]">
                      Applied AI/ML &amp; Systems Architecture
                    </h3>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      Practical Problem Solving with Generative AI
                    </span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed font-sans">
                  {profileData.summary}
                </p>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[rgba(148,163,184,0.12)]">
                  <div className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                    <span>Hands-on building LLM apps using Python, FastAPI &amp; prompt design.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>Real-world full-stack development with React, Node.js, and modern DBs.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[rgba(148,163,184,0.12)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <MapPin className="w-4 h-4 text-[#FF9900]" />
                  <span>{profileData.location}</span>
                </div>
                <div className="text-[#34D399] flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#34D399]/10 border border-[#34D399]/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  <span>~10 Mos Industry Experience</span>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          {/* Tile 2: Currently Working On */}
          <Reveal
            direction="up"
            delay={0.2}
            className="md:col-span-2 lg:col-span-1"
          >
            <GlassCard
              elevated
              className="p-6 md:p-8 h-full flex flex-col justify-between border-[#FF9900]/30 bg-[#111319]"
              interactive
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#FF9900]/15 border border-[#FF9900]/30 text-[#FF9900]">
                      <Bot className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#FF9900]">
                      Active Role
                    </span>
                  </div>
                  <Badge variant="success" dot size="sm">
                    In Progress
                  </Badge>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#F8FAFC] mb-2">
                  Sales Automation &amp; LLMs
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
                  {profileData.currentlyWorkingOn}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#08090C] text-[#FF9900] border border-[rgba(255,255,255,0.08)]">
                    FastAPI
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#08090C] text-[#22D3EE] border border-[rgba(255,255,255,0.08)]">
                    Supabase
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#08090C] text-[#34D399] border border-[rgba(255,255,255,0.08)]">
                    Lead Scoring
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(148,163,184,0.12)] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                <span>Company</span>
                <span className="font-medium text-[#F8FAFC]">Saubhagyam Web Pvt. Ltd.</span>
              </div>
            </GlassCard>
          </Reveal>

          {/* Tile 3: Academic Foundation (Span 2 cols on lg) */}
          <Reveal
            direction="up"
            delay={0.3}
            className="md:col-span-2 lg:col-span-2"
          >
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between" interactive>
              <div>
                <div className="flex items-center gap-3 text-[#F8FAFC] mb-4">
                  <div className="p-2.5 rounded-xl bg-[#FF9900]/15 border border-[#FF9900]/30 text-[#FF9900]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#F8FAFC]">
                      Academic Foundation &amp; Computer Science
                    </h3>
                    <span className="text-xs font-mono text-[#94A3B8]">
                      Rigorous coursework in Data Structures, Algorithms &amp; AI
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {educationData.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-4 rounded-xl bg-[#0B1120]/70 border border-[rgba(148,163,184,0.12)] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1 mb-1.5">
                          <h4 className="font-heading font-bold text-sm text-[#F8FAFC]">
                            {edu.degree}
                          </h4>
                          <span className="text-[11px] font-mono text-[#FF9900] shrink-0">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-xs text-[#94A3B8] font-sans">{edu.institution}</p>
                      </div>

                      {edu.scoreDetails && (
                        <div className="mt-3 pt-2.5 border-t border-[rgba(148,163,184,0.08)]">
                          <p className="text-[11px] font-mono text-[#34D399]">
                            {edu.scoreDetails}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          {/* Tile 4: Multilingual Intelligence (Span 1 col on lg) */}
          <Reveal
            direction="up"
            delay={0.4}
            className="md:col-span-1 lg:col-span-1"
          >
            <GlassCard className="p-6 h-full flex flex-col justify-between" interactive>
              <div>
                <div className="flex items-center gap-2.5 text-[#22D3EE] mb-4">
                  <div className="p-2 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/25 text-[#22D3EE]">
                    <Languages className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#F8FAFC]">
                    Multilingual NLP
                  </h3>
                </div>

                <p className="text-xs text-[#94A3B8] mb-4 leading-relaxed font-sans">
                  Fluency in regional and national languages enabled building the
                  multilingual B2C AI sales assistant with catalog-aligned responses:
                </p>

                <div className="flex flex-wrap gap-2">
                  {profileData.languages.map((lang) => (
                    <Badge key={lang} variant="cyan" size="sm">
                      {lang}
                    </Badge>
                  ))}
                  <Badge variant="default" size="sm">
                    Hinglish (Colloquial)
                  </Badge>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[rgba(148,163,184,0.12)] text-[11px] font-mono text-[#64748B]">
                Regional AI Conversational Systems
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
