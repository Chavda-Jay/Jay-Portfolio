"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles, Database } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/ui/Icons";
import { Mail } from "lucide-react";
import { Container } from "@/layout/Container";
import { Reveal } from "@/ui/Reveal";
import { profileData } from "@/data/profile";

interface HeroProps {
  hasResume?: boolean;
}

export function Hero({ hasResume = false }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background warm amber glow directly behind the portrait area */}
      <div
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-25 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, #FF9900 0%, #D97706 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content & Positioning */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left pr-0 lg:pr-6">
            {/* Eyebrow matching DEVFUSION reference */}
            <Reveal delay={0.1}>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#FF9900] mb-3">
                <span className="w-5 h-[2px] bg-[#FF9900]" />
                <span>HELLO, I&apos;M</span>
              </div>
            </Reveal>

            {/* Static Name: Jay (white) Chavda (amber) */}
            <Reveal delay={0.2}>
              <h1 className="text-fluid-hero font-heading font-extrabold text-white tracking-tight">
                Jay <span className="text-[#FF9900]">Chavda</span>
              </h1>
            </Reveal>

            {/* Subtitle / Role with amber accent bar */}
            <Reveal delay={0.3}>
              <p className="mt-3 text-lg sm:text-xl md:text-2xl font-heading font-semibold text-white tracking-tight flex items-center gap-2">
                <span>AI/ML Engineer | Generative AI Developer</span>
                <span className="text-[#FF9900] font-normal animate-pulse">|</span>
              </p>
            </Reveal>

            {/* Value Proposition Description */}
            <Reveal delay={0.4}>
              <p className="mt-5 text-sm sm:text-base text-[#94A3B8] max-w-xl leading-relaxed font-sans font-normal">
                I build practical, production-ready LLM applications, prompt engineering pipelines, and asynchronous FastAPI architectures, backed by solid hands-on full-stack development experience in Python, React, and modern databases.
              </p>
            </Reveal>

            {/* Primary Action Buttons */}
            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-amber-btn text-sm font-heading font-bold transition-transform active:scale-[0.98]"
                >
                  <span>VIEW MY WORK</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {hasResume && (
                  <a
                    href="/resume/Jay_Chavda_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#111319] hover:bg-[#161822] text-white border border-white/[0.14] hover:border-[#FF9900]/60 transition-colors text-sm font-heading font-medium"
                  >
                    <span>VIEW RESUME</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8]" />
                  </a>
                )}
              </div>
            </Reveal>

            {/* Availability Indicator */}
            <Reveal delay={0.55}>
              <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>AVAILABLE FOR ROLES &amp; FREELANCE</span>
              </div>
            </Reveal>

            {/* Social Icons Dock (matching reference design) */}
            <Reveal delay={0.6}>
              <div className="mt-7 flex items-center gap-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  title="Jay Chavda on GitHub"
                  className="w-10 h-10 rounded-xl bg-[#111319] border border-white/[0.1] flex items-center justify-center text-[#94A3B8] hover:text-[#FF9900] hover:border-[#FF9900]/50 transition-all hover:-translate-y-0.5"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  title="Jay Chavda on LinkedIn"
                  className="w-10 h-10 rounded-xl bg-[#111319] border border-white/[0.1] flex items-center justify-center text-[#94A3B8] hover:text-[#FF9900] hover:border-[#FF9900]/50 transition-all hover:-translate-y-0.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Email Jay Chavda"
                  title="Send Email"
                  className="w-10 h-10 rounded-xl bg-[#111319] border border-white/[0.1] flex items-center justify-center text-[#94A3B8] hover:text-[#FF9900] hover:border-[#FF9900]/50 transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Portrait with Concentric Orbital Rings & Floating Tech Badges (Seamless blend, zero card border) */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <Reveal delay={0.3} className="relative w-full max-w-[480px] xl:max-w-[540px] flex items-center justify-center">
              
              {/* Concentric Orbital Rings & AI Radar System (matching DEVFUSION aesthetic) */}
              <div className="absolute inset-0 -m-8 sm:-m-12 flex items-center justify-center pointer-events-none">
                {/* Outer Dashed Orbit Ring */}
                <div className="w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] xl:w-[540px] xl:h-[540px] rounded-full border border-[#FF9900]/25 border-dashed animate-orbit-spin" />
                
                {/* Middle Solid Orbit Ring with Orbital Nodes */}
                <div className="absolute w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] xl:w-[460px] xl:h-[460px] rounded-full border border-[#FF9900]/20 animate-orbit-reverse">
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF9900] shadow-[0_0_8px_#FF9900]" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF9900] shadow-[0_0_8px_#FF9900]" />
                  <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF9900] shadow-[0_0_8px_#FF9900]" />
                  <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF9900] shadow-[0_0_8px_#FF9900]" />
                </div>

                {/* Inner Radar Sweep Beam */}
                <div className="absolute w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] xl:w-[390px] xl:h-[390px] rounded-full [background:conic-gradient(from_0deg,transparent_0_310deg,rgba(255,153,0,0.3)_360deg)] animate-radar-sweep opacity-55" />

                {/* Ambient Warm Amber Glow Bloom */}
                <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-radial from-[#FF9900]/30 via-[#FF9900]/10 to-transparent blur-3xl animate-pulse-glow" />
              </div>

              {/* Main Portrait: Seamlessly integrated into background (Zero border, zero card box) */}
              <div className="relative z-10 w-full max-w-[400px] sm:max-w-[450px] xl:max-w-[490px] aspect-[4/5] flex items-end justify-center select-none">
                <Image
                  src="/images/jay-chavda-hero.png"
                  alt="Jay Chavda - AI/ML Engineer & Generative AI Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 490px"
                  className="object-contain object-bottom filter contrast-[1.04] brightness-[1.02] drop-shadow-[0_20px_45px_rgba(0,0,0,0.95)]"
                />

                {/* Smooth bottom linear fade into #08090C */}
                <div className="absolute -bottom-1 inset-x-0 h-24 bg-gradient-to-t from-[#08090C] via-[#08090C]/80 to-transparent pointer-events-none" />
              </div>

              {/* Floating Technical Badge 1: Top Right - FastAPI */}
              <div className="absolute top-4 -right-1 sm:-right-4 lg:-right-6 xl:-right-8 z-20 animate-float-1 group">
                <div className="relative px-3.5 py-1.5 rounded-xl bg-[#111319]/90 border border-white/[0.14] group-hover:border-[#009688]/60 backdrop-blur-md text-xs font-mono text-white flex items-center gap-2 shadow-xl shadow-black/70 transition-all">
                  <span className="w-2 h-2 rounded-full bg-[#009688] shadow-[0_0_6px_#009688]" />
                  <span className="font-semibold">FastAPI</span>
                </div>
              </div>

              {/* Floating Technical Badge 2: Top Left - Python */}
              <div className="absolute top-16 -left-1 sm:-left-5 lg:-left-6 xl:-left-10 z-20 animate-float-2 group">
                <div className="relative px-3.5 py-1.5 rounded-xl bg-[#111319]/90 border border-white/[0.14] group-hover:border-[#3776AB]/60 backdrop-blur-md text-xs font-mono text-white flex items-center gap-2 shadow-xl shadow-black/70 transition-all">
                  <span className="w-2 h-2 rounded-full bg-[#3776AB] shadow-[0_0_6px_#3776AB]" />
                  <span className="font-semibold">Python</span>
                </div>
              </div>

              {/* Floating Technical Badge 3: Bottom Left - Groq LLaMA 70B */}
              <div className="absolute bottom-24 -left-1 sm:-left-4 lg:-left-4 xl:-left-8 z-20 animate-float-1 group">
                <div className="relative px-3.5 py-1.5 rounded-xl bg-[#111319]/90 border border-white/[0.14] group-hover:border-[#FF9900]/60 backdrop-blur-md text-xs font-mono text-white flex items-center gap-2 shadow-xl shadow-black/70 transition-all">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
                  <span className="font-semibold">LLaMA 3.3 70B</span>
                </div>
              </div>

              {/* Floating Technical Badge 4: Bottom Right - PostgreSQL */}
              <div className="absolute bottom-16 -right-1 sm:-right-4 lg:-right-4 xl:-right-6 z-20 animate-float-2 group">
                <div className="relative px-3.5 py-1.5 rounded-xl bg-[#111319]/90 border border-white/[0.14] group-hover:border-[#336791]/60 backdrop-blur-md text-xs font-mono text-white flex items-center gap-2 shadow-xl shadow-black/70 transition-all">
                  <Database className="w-3.5 h-3.5 text-[#336791]" />
                  <span className="font-semibold">PostgreSQL</span>
                </div>
              </div>

            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
}
