"use client";

import React, { useState, useMemo } from "react";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter, FilterCategory } from "./ProjectFilter";
import { Reveal } from "@/ui/Reveal";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("All");

  const counts = useMemo(() => {
    const map: Record<FilterCategory, number> = {
      All: projects.length,
      "Generative AI": 0,
      "Full-Stack": 0,
      "Machine Learning": 0,
      Automation: 0,
    };
    projects.forEach((p) => {
      if (map[p.category] !== undefined) {
        map[p.category]++;
      }
    });
    return map;
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  return (
    <div className="space-y-10">
      <ProjectFilter
        activeCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        counts={counts}
      />

      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-2xl bg-[#111827] border border-[#1E2A4A]">
          <p className="text-[#94A3B8] text-sm">
            No projects found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.slug} direction="up" delay={idx * 0.08}>
              <ProjectCard project={project} featured={project.featured} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
