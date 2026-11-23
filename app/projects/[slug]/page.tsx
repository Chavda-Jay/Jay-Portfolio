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
            className="flex items-center gap-2 text-xs font-mono text-[#94A3B8] mb-8"
          >
            <Link href="/" className="hover:text-[#F8FAFC] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
            <Link
              href="/projects"
              className="hover:text-[#F8FAFC] transition-colors"
            >
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
            <span className="text-[#F8FAFC] truncate max-w-[200px] sm:max-w-none">
              {project.name}
            </span>
          </nav>

          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#8B5CF6] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Header Section */}
          <div className="max-w-4xl mb-12">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <Badge variant="primary" size="sm">
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
                <Badge variant="accent" size="sm">
                  Featured Case Study
                </Badge>
              )}
            </div>

            <h1 className="text-fluid-h1 font-heading font-extrabold text-[#F8FAFC] tracking-tight">
              {project.name}
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#94A3B8] leading-relaxed font-sans">
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
                    leftIcon={<GithubIcon className="w-4 h-4 text-[#8B5CF6]" />}
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
            <div className="relative w-full min-h-[260px] md:min-h-[340px] rounded-2xl bg-[#151C2C] border border-[rgba(148,163,184,0.12)] p-8 md:p-12 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "radial-gradient(#8B5CF6 1px, transparent 1px), radial-gradient(#22D3EE 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "0 0, 12px 12px",
                }}
              />

              <div className="relative z-10 max-w-lg">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/40 flex items-center justify-center text-[#8B5CF6] mx-auto mb-4 shadow-xl shadow-[#8B5CF6]/15">
                  <CategoryIcon className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[#F8FAFC]">
                  {project.name} Architecture
                </h3>
                <p className="text-xs md:text-sm text-[#94A3B8] mt-1.5 font-sans">
                  System Architecture &amp; Data Flow Overview
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1120] border border-[rgba(148,163,184,0.12)] text-[11px] font-mono text-[#94A3B8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  <span>Production Schema Verified</span>
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
                  <div className="flex items-center gap-2.5 text-[#8B5CF6] mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                    <h2 className="font-heading font-bold text-lg md:text-xl text-[#F8FAFC]">
                      The Problem &amp; Challenge
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed font-sans">
                    {project.problem}
                  </p>
                </GlassCard>
              )}

              {/* Solution Overview */}
              {project.solution && (
                <GlassCard elevated className="p-6 md:p-8 border-[rgba(139,92,246,0.3)]">
                  <div className="flex items-center gap-2.5 text-[#22D3EE] mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#22D3EE]" />
                    <h2 className="font-heading font-bold text-lg md:text-xl text-[#F8FAFC]">
                      Solution Architecture
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed font-sans">
                    {project.solution}
                  </p>
                </GlassCard>
              )}

              {/* Engineering Contributions */}
              {project.contribution && (
                <GlassCard className="p-6 md:p-8">
                  <div className="flex items-center gap-2.5 text-[#34D399] mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                    <h2 className="font-heading font-bold text-lg md:text-xl text-[#F8FAFC]">
                      Engineering Contributions
                    </h2>
                  </div>
                  <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed font-sans">
                    {project.contribution}
                  </p>
                </GlassCard>
              )}

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <GlassCard className="p-6 md:p-8">
                  <h2 className="font-heading font-bold text-lg md:text-xl text-[#F8FAFC] mb-6">
                    Key Features &amp; Technical Capabilities
                  </h2>
                  <ul className="space-y-3.5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#94A3B8]">
                        <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-sans">{feature}</span>
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
                <h3 className="font-heading font-semibold text-base text-[#F8FAFC] mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0B1120] text-[#F8FAFC] border border-[rgba(148,163,184,0.12)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>

              {/* Project Meta Card */}
              <GlassCard className="p-6 space-y-4">
                <h3 className="font-heading font-semibold text-base text-[#F8FAFC]">
                  Project Metadata
                </h3>

                <div className="space-y-3 text-xs font-mono">
                  <div className="flex items-center justify-between pb-2 border-b border-[rgba(148,163,184,0.12)]">
                    <span className="text-[#94A3B8]">Category</span>
                    <span className="text-[#F8FAFC]">{project.category}</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[rgba(148,163,184,0.12)]">
                    <span className="text-[#94A3B8]">Status</span>
                    <span className="text-[#34D399]">{project.status}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#94A3B8]">Role</span>
                    <span className="text-[#8B5CF6]">AI/ML &amp; Full-Stack</span>
                  </div>
                </div>
              </GlassCard>

              {/* Next/Prev Navigation */}
              <div className="pt-2 flex flex-col gap-3">
                {nextProject && (
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="p-4 rounded-xl bg-[#151C2C] border border-[rgba(148,163,184,0.12)] hover:border-[#8B5CF6]/50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block">
                        Next Project
                      </span>
                      <span className="text-xs font-medium text-[#F8FAFC] group-hover:text-[#8B5CF6] transition-colors font-heading">
                        {nextProject.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}

                {prevProject && (
                  <Link
                    href={`/projects/${prevProject.slug}`}
                    className="p-4 rounded-xl bg-[#151C2C] border border-[rgba(148,163,184,0.12)] hover:border-[#8B5CF6]/50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#94A3B8] block">
                        Previous Project
                      </span>
                      <span className="text-xs font-medium text-[#F8FAFC] group-hover:text-[#8B5CF6] transition-colors font-heading">
                        {prevProject.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#94A3B8] rotate-180 group-hover:-translate-x-1 transition-transform" />
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
