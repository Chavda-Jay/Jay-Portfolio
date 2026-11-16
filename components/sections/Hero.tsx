import React from "react";
import { ArrowDown, Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/ui/Icons";
import { Container } from "@/layout/Container";
import { Button } from "@/ui/Button";
import { Badge } from "@/ui/Badge";
import { Reveal } from "@/ui/Reveal";
import { profileData } from "@/data/profile";
import { NetworkCanvas } from "@/effects/NetworkCanvas";

interface HeroProps {
  hasResume?: boolean;
}

export function Hero({ hasResume = false }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background AI Network Canvas */}
      <NetworkCanvas />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Status Chip */}
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101935]/90 border border-[#2F6BFF]/30 text-xs font-mono text-[#5B8CFF] shadow-lg shadow-[#2F6BFF]/10 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
              <span>Available for AI/ML & Generative AI Roles</span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.2}>
            <h1 className="text-fluid-h1 font-heading font-extrabold text-[#E8ECF8] tracking-tight">
              Hi, I&apos;m{" "}
              <span className="gradient-text inline-block">
                {profileData.name}
              </span>
            </h1>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.3}>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl font-heading font-semibold text-[#5B8CFF] tracking-tight">
              {profileData.title}
            </p>
          </Reveal>

          {/* 2-Line Intro */}
          <Reveal delay={0.4}>
            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#8C97B5] max-w-2xl leading-relaxed">
              Engineering LLM-powered applications, FastAPI services, and prompt
              workflows with practical full-stack experience in React, Python, and
              modern databases.
            </p>
          </Reveal>

          {/* Quick Context Chips */}
          <Reveal delay={0.45}>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              <Badge variant="primary" dot size="sm">
                MCA 2026
              </Badge>
              <Badge variant="accent" size="sm">
                LLM Applications & Prompt Engineering
              </Badge>
              <Badge variant="cyan" size="sm">
                FastAPI & MERN Stack
              </Badge>
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#projects"
                rightIcon={<ArrowDown className="w-4 h-4" />}
              >
                View Projects
              </Button>

              {hasResume && (
                <Button
                  variant="secondary"
                  size="lg"
                  href="/resume/Jay_Chavda_Resume.pdf"
                  external
                  leftIcon={<FileText className="w-4 h-4 text-[#5B8CFF]" />}
                >
                  Download Resume
                </Button>
              )}

              <Button
                variant="outline"
                size="lg"
                href="#contact"
              >
                Contact Me
              </Button>
            </div>
          </Reveal>

          {/* Social Links Bar */}
          <Reveal delay={0.6}>
            <div className="mt-8 flex items-center justify-center gap-4 text-[#8C97B5]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A0AEC0]">
                Connect
              </span>
              <div className="w-4 h-[1px] bg-[#1E2A4A]" />
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jay Chavda on GitHub"
                className="p-2.5 rounded-xl bg-[#0A1020]/90 border border-[#1E2A4A] text-[#8C97B5] hover:text-[#5B8CFF] hover:border-[#2F6BFF]/50 transition-all hover:-translate-y-0.5"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jay Chavda on LinkedIn"
                className="p-2.5 rounded-xl bg-[#0A1020]/90 border border-[#1E2A4A] text-[#8C97B5] hover:text-[#5B8CFF] hover:border-[#2F6BFF]/50 transition-all hover:-translate-y-0.5"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={profileData.socials.email}
                aria-label="Email Jay Chavda"
                className="p-2.5 rounded-xl bg-[#0A1020]/90 border border-[#1E2A4A] text-[#8C97B5] hover:text-[#5B8CFF] hover:border-[#2F6BFF]/50 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
