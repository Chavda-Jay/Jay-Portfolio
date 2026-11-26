"use client";

import React, { useState } from "react";
import { Container } from "@/layout/Container";
import { Reveal } from "@/ui/Reveal";
import { Brain, Sparkles, Zap, Layout, Database, Wrench, CheckCircle2 } from "lucide-react";

interface SkillGroup {
  title: string;
  skills: string[];
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Feature Eng."],
    icon: Brain,
    iconColor: "#C084FC",
    iconBg: "rgba(192, 132, 252, 0.15)",
    iconBorder: "rgba(192, 132, 252, 0.35)",
  },
  {
    title: "Generative AI & LLMs",
    skills: ["LLMs", "RAG Pipelines", "Groq API", "OpenAI", "ChromaDB", "Prompt Eng."],
    icon: Sparkles,
    iconColor: "#FF9900",
    iconBg: "rgba(255, 153, 0, 0.15)",
    iconBorder: "rgba(255, 153, 0, 0.35)",
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Python", "Node.js", "Express.js", "Django", "REST APIs"],
    icon: Zap,
    iconColor: "#34D399",
    iconBg: "rgba(52, 211, 153, 0.15)",
    iconBorder: "rgba(52, 211, 153, 0.35)",
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    icon: Layout,
    iconColor: "#22D3EE",
    iconBg: "rgba(34, 211, 238, 0.15)",
    iconBorder: "rgba(34, 211, 238, 0.35)",
  },
  {
    title: "Databases & Storage",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "MinIO Storage", "SQL"],
    icon: Database,
    iconColor: "#60A5FA",
    iconBg: "rgba(96, 165, 250, 0.15)",
    iconBorder: "rgba(96, 165, 250, 0.35)",
  },
  {
    title: "Dev Tools & Cloud",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Vercel / Render"],
    icon: Wrench,
    iconColor: "#FB923C",
    iconBg: "rgba(251, 146, 60, 0.15)",
    iconBorder: "rgba(251, 146, 60, 0.35)",
  },
];

export function Skills() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-16 md:py-20 relative scroll-mt-20 border-t border-white/[0.06]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Subtitle & Tech Highlights */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4 sticky top-28">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FF9900] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#FF9900]" />
                <span>EXPERTISE &amp; TOOLKIT</span>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
                Technical
                <br />
                <span className="text-[#FF9900]">Skills</span>
              </h2>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-4 text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-sans font-normal">
                A verified toolkit engineered across academic rigor (MCA, 8.30 CGPA) and real-world AI, backend, and full-stack software deployments.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <div className="px-3.5 py-1.5 rounded-full bg-[#111319] border border-white/[0.12] text-xs font-mono text-[#CBD5E1] flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>35+ Core Technologies</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-[#111319] border border-white/[0.12] text-xs font-mono text-[#CBD5E1] flex items-center gap-2 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF9900]" />
                  <span>6 Core Domains</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 2x3 Grid with Crisp Chips */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILL_GROUPS.map((group, idx) => {
                const Icon = group.icon;
                return (
                  <Reveal key={group.title} delay={0.1 + idx * 0.06} direction="up">
                    <div className="p-5 rounded-2xl bg-[#111319] border border-white/[0.12] hover:border-[#FF9900]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_32px_rgba(255,153,0,0.12)] h-full">
                      
                      {/* Top Header */}
                      <div>
                        <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/[0.08]">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div
                              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border shadow-sm"
                              style={{
                                backgroundColor: group.iconBg,
                                borderColor: group.iconBorder,
                                color: group.iconColor,
                              }}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <h3 className="font-heading font-bold text-sm text-[#F8FAFC] group-hover:text-[#FF9900] transition-colors truncate">
                              {group.title}
                            </h3>
                          </div>
                          <span className="text-[10px] font-mono text-[#94A3B8] shrink-0">
                            {group.skills.length}
                          </span>
                        </div>

                        {/* Interactive Skills Chips (Zero Truncation) */}
                        <div className="flex flex-wrap gap-1.5 mt-3.5">
                          {group.skills.map((skill) => {
                            const isSelected = activeSkill === skill;
                            return (
                              <button
                                key={skill}
                                type="button"
                                onClick={() => setActiveSkill(isSelected ? null : skill)}
                                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all select-none cursor-pointer text-left active:scale-95 ${
                                  isSelected
                                    ? "bg-[#FF9900] text-[#08090C] font-bold shadow-md shadow-[#FF9900]/30 border border-[#FF9900]"
                                    : "bg-[#08090C] text-[#CBD5E1] border border-white/[0.08] hover:border-[#FF9900]/50 hover:text-white hover:bg-[#FF9900]/10"
                                }`}
                                title={`Click to highlight ${skill}`}
                              >
                                {skill}
                              </button>
                            );
                          })}
                        </div>
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
