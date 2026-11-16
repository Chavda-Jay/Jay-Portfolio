import React from "react";
import { Container } from "@/layout/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { Reveal } from "@/ui/Reveal";
import { certificationsData } from "@/data/certifications";
import { Award, Calendar, CheckCircle2, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-28 relative scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications &"
          highlight="Accreditations"
          description="Industry-recognized certifications in Generative AI, LLM platforms, full-stack engineering, and data science."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <Reveal
              key={cert.id}
              direction="up"
              delay={index * 0.08}
            >
              <GlassCard
                className="p-6 h-full flex flex-col justify-between"
                interactive
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-2.5 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-[#A78BFA]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#8C97B5]">
                      <Calendar className="w-3.5 h-3.5 text-[#5B8CFF]" />
                      <span>{cert.issueDate}</span>
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-base md:text-lg text-[#E8ECF8] mb-2">
                    {cert.name}
                  </h3>

                  <p className="text-sm font-medium text-[#5B8CFF] mb-4">
                    {cert.issuer}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#1E2A4A] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#34D399]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </div>

                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#5B8CFF] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-[#8C97B5]">
                      Official Certificate
                    </span>
                  )}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
