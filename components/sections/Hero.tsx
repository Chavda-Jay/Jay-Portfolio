"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Database } from "lucide-react";
import { GithubIcon, LinkedinIcon, GmailIcon } from "@/ui/Icons";
import { Container } from "@/layout/Container";
import { Reveal } from "@/ui/Reveal";
import { profileData } from "@/data/profile";

interface HeroProps {
  hasResume?: boolean;
}

export function Hero({ hasResume = false }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background warm amber glow directly behind the portrait area */}
      <div
        className="absolute top-1/2 right-[8%] -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[180px] opacity-25 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, #FF9900 0%, #D97706 40%, #8B5CF6 70%, transparent 85%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content & Positioning (Mockup 1:1) */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left pr-0 lg:pr-6">
            
            {/* Status Pill Badge */}
            <Reveal delay={0.08}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111319] border border-white/10 text-xs text-[#94A3B8] mb-5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="font-sans font-medium">Available for opportunities</span>
              </div>
            </Reveal>

            {/* Main Headline (Exact Mockup Match) */}
            <Reveal delay={0.15}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white tracking-tight leading-[1.12]">
                Building <span className="text-[#FF9900]">AI</span> That
                <br />
                Works in the <span className="text-[#FF9900]">Real World</span>.
              </h1>
            </Reveal>

            {/* Name */}
            <Reveal delay={0.22}>
              <h2 className="mt-5 text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                Jay Chavda
              </h2>
            </Reveal>

            {/* Subtitle / Role with Orange Vertical Bar */}
            <Reveal delay={0.28}>
              <div className="mt-2 flex items-center gap-2.5 text-base sm:text-lg font-sans">
                <span className="text-[#FF9900] font-black text-xl">|</span>
                <span className="text-[#E2E8F0] font-semibold tracking-wide">
                  AI/ML Engineer | Generative AI Developer
                </span>
              </div>
            </Reveal>

            {/* Description Paragraph */}
            <Reveal delay={0.34}>
              <p className="mt-4 text-base sm:text-lg text-[#CBD5E1] max-w-xl leading-relaxed font-sans font-normal">
                Passionate developer with expertise in Machine Learning, Generative AI and modern web technologies.
              </p>
            </Reveal>

            {/* Tech Pills Row (Sleek & Professional) */}
            <Reveal delay={0.4}>
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono bg-[#111319] text-[#E2E8F0] border border-white/[0.14] flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#3776AB]" />
                  Python
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono bg-[#111319] text-[#E2E8F0] border border-white/[0.14] flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#FF9900]" />
                  TensorFlow
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono bg-[#111319] text-[#E2E8F0] border border-white/[0.14] flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                  React
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono bg-[#111319] text-[#E2E8F0] border border-white/[0.14] flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#009688]" />
                  FastAPI
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono bg-[#111319] text-[#E2E8F0] border border-white/[0.14] flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                  LLMs &amp; RAG
                </span>

                {/* Direct Link to Technical Skills Section */}
                <Link
                  href="/#skills"
                  className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono bg-[#111319] hover:bg-[#FF9900]/15 text-[#94A3B8] hover:text-[#FF9900] border border-white/[0.14] hover:border-[#FF9900]/50 transition-all flex items-center gap-1.5 shadow-sm active:scale-95 group font-medium"
                  title="Explore all technical skills in detail"
                >
                  <span>+ 30 more</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF9900] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </Reveal>

            {/* Action Buttons (Mockup 1:1) */}
            <Reveal delay={0.46}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/#projects"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full gradient-amber-btn text-base font-heading font-bold text-[#08090C] transition-all hover:scale-105 active:scale-[0.98] shadow-lg shadow-[#FF9900]/25 cursor-pointer"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {hasResume && (
                  <a
                    href="/resume/Jay_Chavda_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#111319] hover:bg-[#161822] text-white border border-white/[0.18] hover:border-[#FF9900]/60 transition-all text-base font-heading font-semibold shadow-md hover:scale-105 active:scale-[0.98] group cursor-pointer"
                    aria-label="View Jay Chavda Resume"
                  >
                    <span>Resume</span>
                    <ArrowRight className="w-4 h-4 text-[#FF9900] -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </Reveal>

            {/* Social Icons Row (Authentic Brand Logos with Direct Account Redirection) */}
            <Reveal delay={0.52}>
              <div className="mt-8 flex items-center gap-3.5">
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jay Chavda LinkedIn Profile"
                  title="Connect with Jay Chavda on LinkedIn"
                  className="w-10 h-10 rounded-xl bg-[#111319] hover:bg-[#0A66C2]/15 border border-white/[0.12] hover:border-[#0A66C2] text-[#94A3B8] hover:text-[#0A66C2] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md group"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>

                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Jay Chavda GitHub Profile"
                  title="View Jay Chavda on GitHub"
                  className="w-10 h-10 rounded-xl bg-[#111319] hover:bg-white/10 border border-white/[0.12] hover:border-white text-[#94A3B8] hover:text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md group"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Email Jay Chavda directly"
                  title={`Email Jay Chavda: ${profileData.email}`}
                  className="w-10 h-10 rounded-xl bg-[#111319] hover:bg-[#EA4335]/15 border border-white/[0.12] hover:border-[#EA4335] text-[#94A3B8] hover:text-[#EA4335] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-md group"
                >
                  <GmailIcon className="w-5 h-5" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Portrait Composition (Mockup 1:1) */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <Reveal delay={0.25} className="relative w-full max-w-[540px] xl:max-w-[620px] flex items-center justify-center">
              
              {/* Secondary AI Backdrop Visuals (Subtle wireframe + elliptical rings from mockup) */}
              <div className="absolute inset-0 -m-6 sm:-m-10 flex items-center justify-center pointer-events-none">
                
                {/* Slanted Glass Backdrop Panel from Mockup */}
                <div className="absolute w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] rounded-3xl border border-white/[0.08] bg-white/[0.015] -rotate-6 transform -translate-x-4 -translate-y-4 pointer-events-none" />

                {/* Concentric Ambient Amber Orbit Ring */}
                <div className="absolute w-[440px] h-[440px] sm:w-[520px] sm:h-[520px] rounded-full border border-[#FF9900]/25 border-dashed animate-orbit-spin" />
                
                {/* Inner Counter-Rotating Node Ring */}
                <div className="absolute w-[360px] h-[360px] sm:w-[430px] sm:h-[430px] rounded-full border border-[#FF9900]/20 animate-orbit-reverse">
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF9900] shadow-[0_0_8px_#FF9900]" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FF9900] shadow-[0_0_8px_#FF9900]" />
                  <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF9900] shadow-[0_0_8px_#FF9900]" />
                  <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF9900] shadow-[0_0_8px_#FF9900]" />
                </div>

                {/* Radar Sweep Arc */}
                <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full [background:conic-gradient(from_0deg,transparent_0_310deg,rgba(255,153,0,0.3)_360deg)] animate-radar-sweep opacity-55" />

                {/* Warm Amber Halo Bloom */}
                <div className="absolute w-[290px] h-[290px] sm:w-[360px] sm:h-[360px] rounded-full bg-gradient-radial from-[#FF9900]/25 via-[#8B5CF6]/10 to-transparent blur-3xl animate-pulse-glow" />
              </div>

              {/* Main Cutout Portrait: Completely transparent background, natural editorial integration */}
              <div className="relative z-10 w-full max-w-[500px] sm:max-w-[560px] xl:max-w-[620px] aspect-[637/576] flex items-end justify-center select-none">
                <Image
                  src="/images/jay-chavda-seamless.png"
                  alt="Jay Chavda - AI/ML Engineer & Generative AI Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                  className="object-contain object-bottom filter contrast-[1.04] brightness-[1.02] drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
                />

                {/* Natural bottom edge fade to merge table cleanly into background */}
                <div className="absolute -bottom-0.5 inset-x-0 h-6 bg-gradient-to-t from-[#08090C] to-transparent pointer-events-none" />
              </div>

              {/* Floating Technical Badge 1: Top Right - FastAPI */}
              <div className="absolute top-4 -right-1 sm:-right-4 lg:-right-6 z-20 animate-float-1 group">
                <div className="relative px-3.5 py-1.5 rounded-xl bg-[#111319]/90 border border-white/[0.14] group-hover:border-[#009688]/60 backdrop-blur-md text-xs font-mono text-white flex items-center gap-2 shadow-xl shadow-black/70 transition-all">
                  <span className="w-2 h-2 rounded-full bg-[#009688] shadow-[0_0_6px_#009688]" />
                  <span className="font-semibold">FastAPI</span>
                </div>
              </div>

              {/* Floating Technical Badge 2: Top Left - Python */}
              <div className="absolute top-16 -left-1 sm:-left-5 lg:-left-6 z-20 animate-float-2 group">
                <div className="relative px-3.5 py-1.5 rounded-xl bg-[#111319]/90 border border-white/[0.14] group-hover:border-[#3776AB]/60 backdrop-blur-md text-xs font-mono text-white flex items-center gap-2 shadow-xl shadow-black/70 transition-all">
                  <span className="w-2 h-2 rounded-full bg-[#3776AB] shadow-[0_0_6px_#3776AB]" />
                  <span className="font-semibold">Python</span>
                </div>
              </div>

              {/* Floating Technical Badge 3: Bottom Left - Groq LLaMA 70B */}
              <div className="absolute bottom-10 -left-2 sm:-left-5 lg:-left-6 z-20 animate-float-1 group">
                <div className="relative px-3.5 py-1.5 rounded-xl bg-[#111319]/90 border border-white/[0.14] group-hover:border-[#FF9900]/60 backdrop-blur-md text-xs font-mono text-white flex items-center gap-2 shadow-xl shadow-black/70 transition-all">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF9900]" />
                  <span className="font-semibold">LLaMA 3.3 70B</span>
                </div>
              </div>

              {/* Floating Technical Badge 4: Bottom Right - PostgreSQL */}
              <div className="absolute bottom-16 -right-1 sm:-right-4 lg:-right-4 z-20 animate-float-2 group">
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
