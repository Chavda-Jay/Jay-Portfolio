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

  const resumePath = path.join(process.cwd(), "public", "resume", "Jay_Chavda_Resume.pdf");
  const hasResume = fs.existsSync(resumePath);

  return (
    <>
      <ParallaxGlow />
      <Navbar hasResume={hasResume} />

      <main id="main-content" className="flex-1 py-12 md:py-20">
        <Container>
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#8C97B5] mb-8">
            <Link href="/" className="hover:text-[#5B8CFF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E8ECF8]">Projects</span>
          </div>

          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#101935] border border-[#1E2A4A] text-xs font-mono text-[#5B8CFF] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]" />
              Work Archive
            </div>
            <h1 className="text-fluid-h1 font-heading font-extrabold text-[#E8ECF8] tracking-tight">
              All Projects &{" "}
              <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-[#8C97B5] leading-relaxed">
              Explore hands-on LLM workflows, multilingual conversational
              systems, and full-stack software built with Python, FastAPI, React,
              and modern database technologies.
            </p>
          </div>

          {/* Interactive Filter and Grid */}
          <ProjectGrid projects={projects} />

          {/* Back Home Link */}
          <div className="mt-16 pt-8 border-t border-[#1E2A4A]/60">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#5B8CFF] hover:underline"
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
