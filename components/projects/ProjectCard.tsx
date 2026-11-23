import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { GlassCard } from "@/ui/GlassCard";
import { Badge } from "@/ui/Badge";
import { Button } from "@/ui/Button";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers,
  Cpu,
  Workflow,
  Code2,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/ui/Icons";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const CATEGORY_ICONS = {
  "Generative AI": Sparkles,
  "Full-Stack": Layers,
  "Machine Learning": Cpu,
  Automation: Workflow,
};

const CATEGORY_BADGE_VARIANTS: Record<
  Project["category"],
  "primary" | "accent" | "cyan" | "default"
> = {
  "Generative AI": "primary",
  "Full-Stack": "accent",
  "Machine Learning": "cyan",
  Automation: "default",
};

/**
 * Bespoke Architectural Schematic for each project card
 */
function ProjectVisualSchematic({ project }: { project: Project }) {
  if (project.slug === "b2c-ai-sales-agent") {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[11px] select-none">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between text-[#94A3B8] border-b border-[rgba(148,163,184,0.12)] pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span className="text-[#F8FAFC] font-semibold">LLM Sales Engine</span>
          </div>
          <span className="text-[10px] text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded border border-[#22D3EE]/25">
            FastAPI Async
          </span>
        </div>

        {/* Pipeline Flow Visualization */}
        <div className="my-auto space-y-2 py-1">
          <div className="flex items-center justify-between gap-1 text-[10px]">
            <span className="px-2 py-1 rounded bg-[#0B1120] border border-[rgba(148,163,184,0.12)] text-[#94A3B8]">
              Hindi / Guj / Eng
            </span>
            <span className="text-[#8B5CF6] font-sans font-bold">→</span>
            <span className="px-2 py-1 rounded bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#A78BFA] font-medium">
              Groq Prompt Engine
            </span>
            <span className="text-[#22D3EE] font-sans font-bold">→</span>
            <span className="px-2 py-1 rounded bg-[#22D3EE]/15 border border-[#22D3EE]/30 text-[#22D3EE] font-medium">
              Lead Score: 0–100
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#0B1120]/80 border border-[rgba(148,163,184,0.1)] flex items-center justify-between text-[10px]">
            <span className="text-[#94A3B8]">7-Factor Lead Scoring Matrix</span>
            <span className="text-[#34D399] flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3 h-3" /> Active
            </span>
          </div>
        </div>

        {/* Bottom tags */}
        <div className="flex items-center justify-between text-[10px] text-[#64748B] pt-2 border-t border-[rgba(148,163,184,0.08)]">
          <span>Catalog &amp; Policy Constrained</span>
          <span className="text-[#8B5CF6]">PostgreSQL + JWT</span>
        </div>
      </div>
    );
  }

  if (project.slug === "ai-interview-prep-bot") {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[11px] select-none">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between text-[#94A3B8] border-b border-[rgba(148,163,184,0.12)] pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
            <span className="text-[#F8FAFC] font-semibold">Groq LLaMA 3.3 70B</span>
          </div>
          <span className="text-[10px] text-[#8B5CF6] bg-[#8B5CF6]/10 px-2 py-0.5 rounded border border-[#8B5CF6]/25">
            6 Tech Stacks
          </span>
        </div>

        {/* Evaluation Flow */}
        <div className="my-auto space-y-2 py-1">
          <div className="flex items-center justify-between gap-1 text-[10px]">
            <span className="px-2 py-1 rounded bg-[#0B1120] border border-[rgba(148,163,184,0.12)] text-[#94A3B8]">
              Role Selection
            </span>
            <span className="text-[#22D3EE] font-sans font-bold">→</span>
            <span className="px-2 py-1 rounded bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#A78BFA] font-medium">
              Dynamic MCQ / Descr
            </span>
            <span className="text-[#34D399] font-sans font-bold">→</span>
            <span className="px-2 py-1 rounded bg-[#34D399]/15 border border-[#34D399]/30 text-[#34D399] font-medium">
              NLP Evaluation
            </span>
          </div>

          <div className="p-2.5 rounded-lg bg-[#0B1120]/80 border border-[rgba(148,163,184,0.1)] flex items-center justify-between text-[10px]">
            <span className="text-[#94A3B8]">Granular Technical Feedback</span>
            <span className="text-[#22D3EE] flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3 h-3" /> Automated
            </span>
          </div>
        </div>

        {/* Bottom tags */}
        <div className="flex items-center justify-between text-[10px] text-[#64748B] pt-2 border-t border-[rgba(148,163,184,0.08)]">
          <span>FastAPI + React.js</span>
          <span className="text-[#22D3EE]">MongoDB Atlas</span>
        </div>
      </div>
    );
  }

  if (project.slug === "carscout") {
    return (
      <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[11px] select-none">
        {/* Top telemetry bar */}
        <div className="flex items-center justify-between text-[#94A3B8] border-b border-[rgba(148,163,184,0.12)] pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#5B8CFF] animate-pulse" />
            <span className="text-[#F8FAFC] font-semibold">MERN Architecture</span>
          </div>
          <span className="text-[10px] text-[#34D399] bg-[#34D399]/10 px-2 py-0.5 rounded border border-[#34D399]/25">
            Razorpay Live
          </span>
        </div>

        {/* Roles Flow */}
        <div className="my-auto space-y-2 py-1">
          <div className="grid grid-cols-3 gap-1.5 text-center text-[10px]">
            <div className="px-2 py-1 rounded bg-[#0B1120] border border-[rgba(148,163,184,0.12)] text-[#94A3B8]">
              Buyer Hub
            </div>
            <div className="px-2 py-1 rounded bg-[#0B1120] border border-[rgba(148,163,184,0.12)] text-[#94A3B8]">
              Seller Portal
            </div>
            <div className="px-2 py-1 rounded bg-[#0B1120] border border-[rgba(148,163,184,0.12)] text-[#94A3B8]">
              Admin Panel
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#0B1120]/80 border border-[rgba(148,163,184,0.1)] flex items-center justify-between text-[10px]">
            <span className="text-[#94A3B8]">RBAC JWT Authentication</span>
            <span className="text-[#8B5CF6] font-semibold">RESTful APIs</span>
          </div>
        </div>

        {/* Bottom tags */}
        <div className="flex items-center justify-between text-[10px] text-[#64748B] pt-2 border-t border-[rgba(148,163,184,0.08)]">
          <span>Node.js / Express</span>
          <span className="text-[#34D399]">MongoDB Grid</span>
        </div>
      </div>
    );
  }

  // Fallback schematic for other projects
  const CategoryIcon = CATEGORY_ICONS[project.category] || Code2;
  return (
    <div className="w-full h-full p-4 flex flex-col justify-between font-mono text-[11px] select-none">
      <div className="flex items-center justify-between text-[#94A3B8] border-b border-[rgba(148,163,184,0.12)] pb-2">
        <div className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span className="text-[#F8FAFC] font-semibold">{project.name}</span>
        </div>
        <span className="text-[10px] text-[#94A3B8]">{project.category}</span>
      </div>

      <div className="my-auto flex flex-col items-center justify-center py-2 text-center">
        <div className="w-10 h-10 rounded-xl bg-[#0B1120] border border-[rgba(148,163,184,0.12)] flex items-center justify-center text-[#8B5CF6] mb-2 group-hover:scale-105 transition-transform">
          <CategoryIcon className="w-5 h-5" />
        </div>
        <span className="text-xs text-[#94A3B8] font-sans">
          Technical Architecture &amp; Workflow
        </span>
      </div>

      <div className="flex items-center justify-between text-[10px] text-[#64748B] pt-2 border-t border-[rgba(148,163,184,0.08)]">
        <span>Status</span>
        <span className="text-[#8B5CF6]">{project.status}</span>
      </div>
    </div>
  );
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const badgeVariant = CATEGORY_BADGE_VARIANTS[project.category] || "default";

  return (
    <GlassCard
      as="article"
      elevated={featured}
      className={`h-full flex flex-col justify-between group transition-all duration-300 ${
        featured ? "border-[#FF9900]/30 bg-[#111319]" : ""
      }`}
      interactive
    >
      <div>
        {/* Project Visual Banner: High-Tech Bespoke Architectural Preview */}
        <div className="relative w-full h-52 bg-[#08090C] border-b border-[rgba(255,255,255,0.08)] overflow-hidden">
          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#FF9900 1px, transparent 1px), radial-gradient(#22D3EE 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 10px",
            }}
          />

          {/* Project Architectural Preview */}
          <div className="relative z-10 w-full h-full">
            <ProjectVisualSchematic project={project} />
          </div>

          {/* Status badge in top right corner */}
          <div className="absolute top-2.5 right-2.5 z-20">
            <Badge
              variant={project.status === "Completed" ? "success" : "default"}
              dot
              size="sm"
            >
              {project.status}
            </Badge>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2.5">
            <Badge variant={badgeVariant} size="sm">
              {project.category}
            </Badge>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="block group-hover:text-[#FF9900] transition-colors"
          >
            <h3 className="font-heading font-bold text-xl text-[#F8FAFC] group-hover:text-[#FF9900] transition-colors flex items-center justify-between gap-2">
              <span>{project.name}</span>
              <ArrowRight className="w-4 h-4 text-[#94A3B8] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
          </Link>

          <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed line-clamp-3 font-sans">
            {project.shortDescription}
          </p>

          {/* Stack Chips in JetBrains Mono */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#08090C] text-[#94A3B8] border border-[rgba(255,255,255,0.08)] group-hover:border-[#FF9900]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-mono text-[#FF9900] bg-[#FF9900]/10 border border-[#FF9900]/20">
                +{project.stack.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 mt-4 border-t border-[rgba(148,163,184,0.1)] flex items-center justify-between gap-3 pt-4">
        <Button
          variant={featured ? "primary" : "secondary"}
          size="sm"
          href={`/projects/${project.slug}`}
          rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          Case Study
        </Button>

        {/* External Links ONLY if present; strictly hidden if undefined */}
        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${project.name}`}
              className="p-2 rounded-lg bg-[#08090C] border border-[rgba(255,255,255,0.1)] text-[#94A3B8] hover:text-[#FF9900] hover:border-[#FF9900]/50 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo for ${project.name}`}
              className="p-2 rounded-lg bg-[#08090C] border border-[rgba(255,255,255,0.1)] text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
