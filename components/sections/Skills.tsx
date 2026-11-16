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
          eyebrow="Technical Stack"
          title="Skills &"
          highlight="Core Competencies"
          description="Comprehensive technical toolkit spanning generative AI workflows, classical machine learning, and full-stack development."
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
                  className="p-6 h-full flex flex-col justify-between"
                  interactive
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="p-2.5 rounded-xl bg-[#2F6BFF]/10 border border-[#2F6BFF]/20 text-[#5B8CFF]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-base md:text-lg text-[#E8ECF8]">
                          {category.title}
                        </h3>
                        <span className="text-xs font-mono text-[#8C97B5]">
                          {category.skills.length} competencies
                        </span>
                      </div>
                    </div>

                    {/* Skill Chips */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#101935]/80 text-[#E8ECF8] border border-[#1E2A4A] hover:border-[#5B8CFF]/50 hover:bg-[#2F6BFF]/10 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1E2A4A]/60 flex items-center justify-between text-xs font-mono text-[#8C97B5]">
                    <span>Category {index + 1} of 6</span>
                    <span className="text-[#5B8CFF]">Verified</span>
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
