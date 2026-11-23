import React from "react";
import { Container } from "@/layout/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { Reveal } from "@/ui/Reveal";
import { skillCategories } from "@/data/skills";
import {
  Sparkles,
  Cpu,
  Server,
  Layout,
  Database,
  Terminal,
  LucideIcon,
  CheckCircle2,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  BrainCircuit: Cpu,
  Server,
  Layout,
  Database,
  Terminal,
};

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Technical Repertoire"
          title="Skills &amp;"
          highlight="Core Competencies"
          description="Verified technical capabilities spanning generative AI workflows, classical machine learning models, and production-tested full-stack engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = ICON_MAP[category.iconName] || Terminal;
            return (
              <Reveal
                key={category.title}
                direction="up"
                delay={index * 0.08}
              >
                <GlassCard
                  className="p-6 h-full flex flex-col justify-between group transition-all duration-300"
                  interactive
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#FF9900]/15 border border-[#FF9900]/30 text-[#FF9900] group-hover:scale-105 transition-transform duration-200">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-base md:text-lg text-[#F8FAFC]">
                            {category.title}
                          </h3>
                          <span className="text-[11px] font-mono text-[#64748B]">
                            {category.skills.length} core technologies
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Skill Chips */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#08090C] text-[#E8ECF8] border border-[rgba(255,255,255,0.08)] hover:border-[#FF9900]/50 hover:bg-[#FF9900]/10 hover:text-[#F8FAFC] transition-all duration-200 flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#FF9900]" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[rgba(148,163,184,0.12)] flex items-center justify-between text-xs font-mono text-[#64748B]">
                    <span>Category 0{index + 1}</span>
                    <span className="text-[#34D399] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Practical Experience
                    </span>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
