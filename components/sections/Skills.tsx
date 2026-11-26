"use client";

import React from "react";
import { Container } from "@/layout/Container";
import { Reveal } from "@/ui/Reveal";
import { Brain, Sparkles, Zap, Layout, Database, Wrench } from "lucide-react";

interface SkillItem {
  title: string;
  technologies: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
}

const SKILL_CARDS: SkillItem[] = [
  {
    title: "AI & Machine Learning",
    technologies: "Python • NumPy • Pandas • Scikit-learn",
    icon: Brain,
    iconColor: "#C084FC",
    iconBg: "rgba(192, 132, 252, 0.12)",
    iconBorder: "rgba(192, 132, 252, 0.3)",
  },
  {
    title: "Generative AI & LLMs",
    technologies: "LLMs • RAG • Groq API",
    icon: Sparkles,
    iconColor: "#FF9900",
    iconBg: "rgba(255, 153, 0, 0.12)",
    iconBorder: "rgba(255, 153, 0, 0.3)",
  },
  {
    title: "Backend & APIs",
    technologies: "FastAPI • Node.js • Express.js",
    icon: Zap,
    iconColor: "#34D399",
    iconBg: "rgba(52, 211, 153, 0.12)",
    iconBorder: "rgba(52, 211, 153, 0.3)",
  },
  {
    title: "Frontend Development",
    technologies: "React.js • JavaScript • Tailwind CSS",
    icon: Layout,
    iconColor: "#22D3EE",
    iconBg: "rgba(34, 211, 238, 0.12)",
    iconBorder: "rgba(34, 211, 238, 0.3)",
  },
  {
    title: "Databases",
    technologies: "MongoDB • PostgreSQL • Supabase",
    icon: Database,
    iconColor: "#60A5FA",
    iconBg: "rgba(96, 165, 250, 0.12)",
    iconBorder: "rgba(96, 165, 250, 0.3)",
  },
  {
    title: "Dev Tools",
    technologies: "Git • GitHub • VS Code",
    icon: Wrench,
    iconColor: "#FB923C",
    iconBg: "rgba(251, 146, 60, 0.12)",
    iconBorder: "rgba(251, 146, 60, 0.3)",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 relative scroll-mt-20 border-t border-white/[0.06]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-4">
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
                Technical
                <br />
                Skills
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-3 text-sm font-sans text-[#94A3B8]">
                Technologies I work with
              </p>
            </Reveal>
          </div>

          {/* Right Column: 2x3 Grid of 6 Cards (Mockup 1:1) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {SKILL_CARDS.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={0.1 + idx * 0.06} direction="up">
                    <div className="p-4 rounded-xl bg-[#111319] border border-white/[0.08] hover:border-[#FF9900]/40 transition-all duration-200 flex items-center gap-3.5 group hover:-translate-y-0.5 shadow-sm">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                        style={{
                          backgroundColor: card.iconBg,
                          borderColor: card.iconBorder,
                          color: card.iconColor,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-heading font-bold text-sm text-[#F8FAFC] group-hover:text-[#FF9900] transition-colors truncate">
                          {card.title}
                        </h3>
                        <p className="text-[11px] font-sans text-[#94A3B8] mt-0.5 truncate">
                          {card.technologies}
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
