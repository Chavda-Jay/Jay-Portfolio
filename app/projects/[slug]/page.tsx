import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { Container } from "@/layout/Container";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { ParallaxGlow } from "@/effects/ParallaxGlow";
import { GlassCard } from "@/ui/GlassCard";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import {
  projectsData,
  getProjectBySlug,
  getAllProjects,
} from "@/data/projects";
import {
  ArrowLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Workflow,
  Code2,
} from "lucide-react";
import { GithubIcon } from "@/ui/Icons";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Jay Chavda",
    };
  }

  return {
    title: `${project.name} | Jay Chavda Case Study`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} - Jay Chavda Portfolio`,
      description: project.shortDescription,
    },
  };
}

const CATEGORY_ICONS = {
  "Generative AI": Sparkles,
  "Full-Stack": Layers,
  "Machine Learning": Cpu,
  Automation: Workflow,
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const resumePath = path.join(
    process.cwd(),
    "public",
    "resume",
    "Jay_Chavda_Resume.pdf"
  );
  const hasResume = fs.existsSync(resumePath);

  const CategoryIcon = CATEGORY_ICONS[project.category] || Code2;

  // Next and previous projects for navigation
  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  return (
    <>
      <ParallaxGlow />
      <Navbar hasResume={hasResume} />

      <main id="main-content" className="flex-1 py-12 md:py-20">
        <Container>
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-mono text-[#8C97B5] mb-8"
          >
            <Link href="/" className="hover:text-[#5B8CFF] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/projects"
              className="hover:text-[#5B8CFF] transition-colors"
            >
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#E8ECF8] truncate max-w-[200px] sm:max-w-none">
              {project.name}
            </span>
          </nav>

          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#5B8CFF] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="max-w-4xl mb-12">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <Badge variant="accent" size="sm">
                {project.category}
              </Badge>
              <Badge
                variant={project.status === "Completed" ? "success" : "default"}
                dot
                size="sm"
              >
                {project.status}
              </Badge>
              {project.featured && (
                <Badge variant="primary" size="sm">
                  Featured Case Study
                </Badge>
              )}
            </div>

            <h1 className="text-fluid-h1 font-heading font-extrabold text-[#E8ECF8] tracking-tight">
              {project.name}
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#8C97B5] leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Action buttons (only show if links exist) */}
            {(project.github || project.liveDemo) && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {project.github && (
                  <Button
                    variant="outline"
                    size="md"
                    href={project.github}
                    external
                    leftIcon={<GithubIcon className="w-4 h-4 text-[#5B8CFF]" />}
                  >
                    View Source Code
                  </Button>
                )}
                {project.liveDemo && (
                  <Button
                    variant="primary"
                    size="md"
                    href={project.liveDemo}
                    external
                    rightIcon={<ExternalLink className="w-4 h-4" />}
                  >
                    Launch Live Demo
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Media Showcase Banner */}
          <div className="mb-16">
            <div className="relative w-full min-h-[260px] md:min-h-[360px] rounded-2xl bg-gradient-to-br from-[#101935] via-[#0A1020] to-[#05070F] border border-[#1E2A4A] p-8 md:p-12 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(#2F6BFF 1px, transparent 1px), radial-gradient(#8B5CF6 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 12px 12px",
                }}
              />

              <div className="relative z-10 max-w-lg">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-tr from-[#2F6BFF]/20 to-[#8B5CF6]/20 border border-[#2F6BFF]/40 flex items-center justify-center text-[#5B8CFF] mx-auto mb-4 shadow-xl shadow-[#2F6BFF]/10">
                  <CategoryIcon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#E8ECF8]">
                  {project.name} Architecture
                </h3>
                <p className="text-xs md:text-sm text-[#8C97B5] mt-1.5">
                  System Architecture & Data Flow Overview
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101935] border border-[#1E2A4A] text-[11px] font-mono text-[#8C97B5]">
                  <span>Visual Preview Placeholder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Case Study Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Left 2 Cols: Deep Dive */}
            <div className="lg:col-span-2 space-y-10">
              {/* Problem Statement */}
              {project.problem && (
                <GlassCard className="p-6 md:p-8">
                  <div className="flex items-center gap-2.5 text-[#5B8CFF] mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#5B8CFF]" />
                    <h2 className="font-heading font-bold text-lg md:text-xl text-[#E8ECF8]">
                      The Problem & Challenge
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-[#8C97B5] leading-relaxed">
                    {project.problem}
                  </p>
                </GlassCard>
              )}

              {/* Solution Overview */}
              {project.solution && (
                <GlassCard elevated className="p-6 md:p-8 border-[#2F6BFF]/30">
                  <div className="flex items-center gap-2.5 text-[#8B5CF6] mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                    <h2 className="font-heading font-bold text-lg md:text-xl text-[#E8ECF8]">
                      Solution Architecture
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-[#8C97B5] leading-relaxed">
                    {project.solution}
                  </p>
                </GlassCard>
              )}

              {/* Engineering Contributions */}
              {project.contribution && (
                <GlassCard className="p-6 md:p-8">
                  <div className="flex items-center gap-2.5 text-[#22D3EE] mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                    <h2 className="font-heading font-bold text-lg md:text-xl text-[#E8ECF8]">
                      Engineering Contributions
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-[#8C97B5] leading-relaxed">
                    {project.contribution}
                  </p>
                </GlassCard>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <GlassCard className="p-6 md:p-8">
                  <h2 className="font-heading font-bold text-lg md:text-xl text-[#E8ECF8] mb-6">
                    Key Features & Technical Capabilities
                  </h2>
                  <ul className="space-y-3.5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#8C97B5]">
                        <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              )}
            </div>

            {/* Right 1 Col: Tech Stack & Specs */}
            <div className="space-y-6">
              {/* Stack Card */}
              <GlassCard className="p-6">
                <h3 className="font-heading font-semibold text-base text-[#E8ECF8] mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#101935] text-[#E8ECF8] border border-[#1E2A4A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>

              {/* Project Meta Card */}
              <GlassCard className="p-6 space-y-4">
                <h3 className="font-heading font-semibold text-base text-[#E8ECF8]">
                  Project Metadata
                </h3>

                <div className="space-y-3 text-xs font-mono">
                  <div className="flex items-center justify-between pb-2 border-b border-[#1E2A4A]">
                    <span className="text-[#8C97B5]">Category</span>
                    <span className="text-[#E8ECF8]">{project.category}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#1E2A4A]">
                    <span className="text-[#8C97B5]">Status</span>
                    <span className="text-[#34D399]">{project.status}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8C97B5]">Role</span>
                    <span className="text-[#5B8CFF]">AI/ML & Full-Stack</span>
                  </div>
                </div>
              </GlassCard>

              {/* Next/Prev Navigation */}
              <div className="pt-2 flex flex-col gap-3">
                {nextProject && (
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="p-4 rounded-xl bg-[#0A1020] border border-[#1E2A4A] hover:border-[#5B8CFF]/50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C97B5] block">
                        Next Project
                      </span>
                      <span className="text-xs font-medium text-[#E8ECF8] group-hover:text-[#5B8CFF] transition-colors">
                        {nextProject.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8C97B5] group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}

                {prevProject && (
                  <Link
                    href={`/projects/${prevProject.slug}`}
                    className="p-4 rounded-xl bg-[#0A1020] border border-[#1E2A4A] hover:border-[#5B8CFF]/50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C97B5] block">
                        Previous Project
                      </span>
                      <span className="text-xs font-medium text-[#E8ECF8] group-hover:text-[#5B8CFF] transition-colors">
                        {prevProject.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8C97B5] rotate-180 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
