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
  "Generative AI": "accent",
  "Full-Stack": "primary",
  "Machine Learning": "cyan",
  Automation: "default",
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const CategoryIcon = CATEGORY_ICONS[project.category] || Code2;
  const badgeVariant = CATEGORY_BADGE_VARIANTS[project.category] || "default";

  return (
    <GlassCard
      as="article"
      elevated={featured}
      className={`h-full flex flex-col justify-between group transition-all duration-300 ${
        featured ? "border-[#2F6BFF]/35 bg-[#0D152D]/85" : ""
      }`}
      interactive
    >
      <div>
        {/* Project Visual Banner / Placeholder */}
        <div className="relative w-full h-48 md:h-52 bg-gradient-to-br from-[#101935] via-[#0A1020] to-[#05070F] border-b border-[#1E2A4A] flex items-center justify-center overflow-hidden">
          {/* Subtle grid pattern background */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "radial-gradient(#2F6BFF 1px, transparent 1px), radial-gradient(#8B5CF6 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 10px",
            }}
          />

          {/* Central Designed Placeholder Graphic */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#2F6BFF]/20 to-[#8B5CF6]/20 border border-[#2F6BFF]/30 flex items-center justify-center text-[#5B8CFF] shadow-inner group-hover:scale-110 transition-transform duration-300">
              <CategoryIcon className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono text-[#8C97B5] uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          {/* Top Status & Category Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-20">
            <Badge variant={badgeVariant} size="sm">
              {project.category}
            </Badge>
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
          <Link href={`/projects/${project.slug}`} className="block group-hover:text-[#5B8CFF] transition-colors">
            <h3 className="font-heading font-bold text-xl text-[#E8ECF8] group-hover:text-[#5B8CFF] transition-colors flex items-center justify-between gap-2">
              <span>{project.name}</span>
              <ArrowRight className="w-4 h-4 text-[#8C97B5] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
          </Link>

          <p className="mt-3 text-sm text-[#8C97B5] leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Stack Chips */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#101935] text-[#8C97B5] border border-[#1E2A4A]"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-mono text-[#5B8CFF] bg-[#2F6BFF]/10">
                +{project.stack.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 mt-4 border-t border-[#1E2A4A]/60 flex items-center justify-between gap-3 pt-4">
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
              aria-label={`GitHub repo for ${project.name}`}
              className="p-2 rounded-lg bg-[#101935] border border-[#1E2A4A] text-[#8C97B5] hover:text-[#5B8CFF] hover:border-[#2F6BFF]/40 transition-colors"
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
              className="p-2 rounded-lg bg-[#101935] border border-[#1E2A4A] text-[#8C97B5] hover:text-[#5B8CFF] hover:border-[#2F6BFF]/40 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}
