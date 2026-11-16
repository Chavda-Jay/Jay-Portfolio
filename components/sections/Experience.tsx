"use client";

import React, { useEffect, useRef } from "react";
import { Container } from "@/layout/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { GlassCard } from "@/ui/GlassCard";
import { Badge } from "@/ui/Badge";
import { Reveal } from "@/ui/Reveal";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      if (lineRef.current) {
        lineRef.current.style.height = "100%";
      }
      return;
    }

    let ctx: { revert: () => void } | null = null;
    let observer: IntersectionObserver | null = null;

    if (containerRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer?.disconnect();
            // Dynamically load GSAP and ScrollTrigger only when needed
            Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
              ([{ default: gsap }, { ScrollTrigger }]) => {
                gsap.registerPlugin(ScrollTrigger);

                if (containerRef.current && lineRef.current) {
                  ctx = gsap.context(() => {
                    gsap.fromTo(
                      lineRef.current,
                      { scaleY: 0, transformOrigin: "top center" },
                      {
                        scaleY: 1,
                        ease: "none",
                        scrollTrigger: {
                          trigger: containerRef.current,
                          start: "top 70%",
                          end: "bottom 80%",
                          scrub: 0.5,
                        },
                      }
                    );
                  }, containerRef);
                }
              }
            );
          }
        },
        { rootMargin: "150px" }
      );

      observer.observe(containerRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="experience" className="py-20 md:py-28 relative scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Career Timeline"
          title="Professional"
          highlight="Experience"
          description="Nearly 10 months of combined hands-on industry work spanning AI/ML engineering, LLM integration, and MERN full-stack development."
        />

        <div ref={containerRef} className="relative max-w-4xl mx-auto mt-12">
          {/* Background vertical track */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#1E2A4A] -translate-x-1/2"
            aria-hidden="true"
          />

          {/* GSAP Animated active progress line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#2F6BFF] via-[#5B8CFF] to-[#8B5CF6] -translate-x-1/2 shadow-[0_0_12px_#2F6BFF]"
            aria-hidden="true"
          />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node Marker */}
                  <div
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#05070F] border-2 border-[#2F6BFF] flex items-center justify-center z-20 shadow-[0_0_15px_rgba(47,107,255,0.5)] mt-1"
                    aria-hidden="true"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5B8CFF]" />
                  </div>

                  {/* Card Container */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <Reveal
                      direction={isEven ? "left" : "right"}
                      delay={index * 0.1}
                    >
                      <GlassCard
                        elevated={index === 0}
                        className="p-6 md:p-8"
                        interactive
                      >
                        {/* Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <Badge
                            variant={index === 0 ? "primary" : "default"}
                            dot={index === 0}
                            size="sm"
                          >
                            {exp.type}
                          </Badge>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-[#8C97B5]">
                            <Calendar className="w-3.5 h-3.5 text-[#5B8CFF]" />
                            <span>{exp.period}</span>
                          </div>
                        </div>

                        <h3 className="font-heading font-bold text-lg md:text-xl text-[#E8ECF8] mt-1">
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 text-sm text-[#5B8CFF] font-medium mb-4">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>

                        {/* Bullet Highlights */}
                        <ul className="space-y-2.5 text-sm text-[#8C97B5]">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technology Chips */}
                        <div className="mt-6 pt-4 border-t border-[#1E2A4A] flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#101935] text-[#8C97B5] border border-[#1E2A4A]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </GlassCard>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
