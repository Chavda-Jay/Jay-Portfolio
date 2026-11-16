import React from "react";
import { Container } from "@/layout/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { Badge } from "@/ui/Badge";
import { Reveal } from "@/ui/Reveal";
import { educationData } from "@/data/education";
import { GraduationCap, MapPin, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Academic Background"
          title="Education &"
          highlight="Degrees"
          description="Formal computer applications degrees providing the foundational mathematics, data structures, and computer science grounding."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <Reveal
              key={edu.id}
              direction="up"
              delay={index * 0.1}
            >
              <GlassCard
                elevated={index === 0}
                className="p-6 md:p-8 h-full flex flex-col justify-between"
                interactive
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#2F6BFF]/10 border border-[#2F6BFF]/20 text-[#5B8CFF]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <Badge variant={index === 0 ? "primary" : "default"} size="sm">
                      {edu.period}
                    </Badge>
                  </div>

                  <h3 className="font-heading font-bold text-lg md:text-xl text-[#E8ECF8] mb-1">
                    {edu.degree}
                  </h3>

                  <p className="text-sm font-medium text-[#5B8CFF] mb-3">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-[#8C97B5] mb-5">
                    <MapPin className="w-3.5 h-3.5 text-[#5B8CFF]" />
                    <span>{edu.location}</span>
                  </div>

                  {edu.scoreDetails && (
                    <div className="p-3.5 rounded-xl bg-[#05070F]/70 border border-[#1E2A4A] flex items-start gap-2.5">
                      <Award className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#8C97B5] block">
                          Academic Score
                        </span>
                        <p className="text-xs font-mono text-[#34D399] mt-0.5 font-medium">
                          {edu.scoreDetails}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#1E2A4A] flex items-center justify-between text-xs font-mono text-[#8C97B5]">
                  <span>Status</span>
                  <span className={index === 0 ? "text-[#5B8CFF]" : "text-[#8C97B5]"}>
                    {index === 0 ? "Pursuing (Graduation 2026)" : "Completed"}
                  </span>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
