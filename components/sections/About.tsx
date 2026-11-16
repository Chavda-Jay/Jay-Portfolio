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
  Compass,
  MapPin,
  Bot,
} from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Background &"
          highlight="Technical Journey"
          description="A blend of AI/ML specialization, LLM system architecture, and practical full-stack software engineering."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Tile 1: Main Story / Profile Summary (Span 2 cols on md, 2 or 3 on lg) */}
          <Reveal
            direction="up"
            delay={0.1}
            className="md:col-span-2 lg:col-span-2"
          >
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between" interactive>
              <div>
                <div className="flex items-center gap-2.5 text-[#5B8CFF] mb-4">
                  <div className="p-2 rounded-lg bg-[#2F6BFF]/10 border border-[#2F6BFF]/20">
                    <Sparkles className="w-5 h-5 text-[#5B8CFF]" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-[#E8ECF8]">
                    Practical AI/ML & Engineering
                  </h3>
                </div>
                <p className="text-sm md:text-base text-[#8C97B5] leading-relaxed">
                  {profileData.summary}
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#1E2A4A] flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8C97B5]">
                  <MapPin className="w-4 h-4 text-[#5B8CFF]" />
                  <span>{profileData.location}</span>
                </div>
                <div className="h-3 w-[1px] bg-[#1E2A4A]" />
                <div className="text-xs font-mono text-[#34D399] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                  <span>~10 Mos Combined Experience</span>
                </div>
              </div>
            </GlassCard>
          </Reveal>

          {/* Tile 2: Currently Working On (Span 2 cols on lg) */}
          <Reveal
            direction="up"
            delay={0.2}
            className="md:col-span-1 lg:col-span-2"
          >
            <GlassCard
              elevated
              className="p-6 md:p-8 h-full flex flex-col justify-between border-[#2F6BFF]/30 bg-[#101935]/90"
              interactive
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-[#2F6BFF]/15 border border-[#2F6BFF]/30">
                      <Bot className="w-5 h-5 text-[#5B8CFF]" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#5B8CFF]">
                      Current Focus
                    </span>
                  </div>
                  <Badge variant="success" dot size="sm">
                    Active
                  </Badge>
                </div>
                <h3 className="font-heading font-bold text-lg text-[#E8ECF8] mb-2">
                  Sales Automation & LLM Workflows
                </h3>
                <p className="text-sm text-[#8C97B5] leading-relaxed">
                  {profileData.currentlyWorkingOn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E2A4A] flex items-center gap-2">
                <span className="text-xs font-mono text-[#8C97B5]">Role:</span>
                <span className="text-xs font-medium text-[#E8ECF8]">
                  AI/ML Intern at Saubhagyam Web Pvt. Ltd.
                </span>
              </div>
            </GlassCard>
          </Reveal>

          {/* Tile 3: Education Summary */}
          <Reveal
            direction="up"
            delay={0.3}
            className="md:col-span-2 lg:col-span-2"
          >
            <GlassCard className="p-6 md:p-8 h-full flex flex-col justify-between" interactive>
              <div>
                <div className="flex items-center gap-2.5 text-[#8B5CF6] mb-4">
                  <div className="p-2 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/20">
                    <GraduationCap className="w-5 h-5 text-[#8B5CF6]" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-[#E8ECF8]">
                    Academic Foundation
                  </h3>
                </div>

                <div className="space-y-4">
                  {educationData.map((edu) => (
                    <div
                      key={edu.id}
                      className="p-3.5 rounded-xl bg-[#05070F]/60 border border-[#1E2A4A]"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                        <h4 className="font-heading font-medium text-sm text-[#E8ECF8]">
                          {edu.degree}
                        </h4>
                        <span className="text-xs font-mono text-[#5B8CFF]">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs text-[#8C97B5]">{edu.institution}</p>
                      {edu.scoreDetails && (
                        <p className="text-[11px] font-mono text-[#34D399] mt-1.5">
                          {edu.scoreDetails}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          {/* Tile 4: Core Interests */}
          <Reveal
            direction="up"
            delay={0.4}
            className="md:col-span-1 lg:col-span-1"
          >
            <GlassCard className="p-6 h-full flex flex-col justify-between" interactive>
              <div>
                <div className="flex items-center gap-2 text-[#22D3EE] mb-4">
                  <div className="p-2 rounded-lg bg-[#22D3EE]/10 border border-[#22D3EE]/20">
                    <Compass className="w-5 h-5 text-[#22D3EE]" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-[#E8ECF8]">
                    Areas of Interest
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  {profileData.interests.map((interest) => (
                    <div
                      key={interest}
                      className="px-3 py-2 rounded-lg bg-[#101935]/60 border border-[#1E2A4A] text-xs font-mono text-[#E8ECF8] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          {/* Tile 5: Multilingual Capabilities */}
          <Reveal
            direction="up"
            delay={0.5}
            className="md:col-span-1 lg:col-span-1"
          >
            <GlassCard className="p-6 h-full flex flex-col justify-between" interactive>
              <div>
                <div className="flex items-center gap-2 text-[#5B8CFF] mb-4">
                  <div className="p-2 rounded-lg bg-[#2F6BFF]/10 border border-[#2F6BFF]/20">
                    <Languages className="w-5 h-5 text-[#5B8CFF]" />
                  </div>
                  <h3 className="font-heading font-semibold text-base text-[#E8ECF8]">
                    Languages
                  </h3>
                </div>
                <p className="text-xs text-[#8C97B5] mb-3 leading-relaxed">
                  Fluent in regional & global languages, vital for multilingual NLP & conversational agents:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {profileData.languages.map((lang) => (
                    <Badge key={lang} variant="primary" size="sm">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
