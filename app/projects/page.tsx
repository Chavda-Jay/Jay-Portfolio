import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { Container } from "@/layout/Container";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { ParallaxGlow } from "@/effects/ParallaxGlow";
import { ProjectGrid } from "@/projects/ProjectGrid";
import { getAllProjects } from "@/data/projects";
import { ChevronRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Jay Chavda - AI/ML Engineer",
  description:
    "Explore AI/ML and full-stack projects by Jay Chavda, including multilingual AI sales assistants, interview preparation bots, and scalable web platforms.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  const resumeDir = path.join(process.cwd(), "public", "resume");
  const hasResume =
    fs.existsSync(path.join(resumeDir, "Jay_Chavda_Resume.pdf")) ||
    fs.existsSync(path.join(resumeDir, "Jay_Chavda.pdf"));

  return (
    <>
      <ParallaxGlow />
      <Navbar hasResume={hasResume} />

      <main id="main-content" className="flex-1 py-12 md:py-20">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] mb-8">
            <Link href="/" className="hover:text-[#F8FAFC] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
            <span className="text-[#F8FAFC]">Projects</span>
          </div>

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#111319] border border-white/[0.1] text-xs font-mono text-[#FF9900] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
              Work Archive
            </div>
            <h1 className="text-fluid-h1 font-heading font-bold text-[#F8FAFC] tracking-tight">
              All Projects &amp;{" "}
              <span className="text-[#FF9900]">Case Studies</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-[#94A3B8] leading-relaxed font-sans">
              Explore hands-on LLM workflows, multilingual conversational
              systems, and full-stack software built with Python, FastAPI, React,
              and modern database technologies.
            </p>
          </div>

          {/* Interactive Filter and Grid */}
          <ProjectGrid projects={projects} />

          {/* Back Home Link */}
          <div className="mt-16 pt-8 border-t border-white/[0.08]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#FF9900] hover:underline font-heading"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to home</span>
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
