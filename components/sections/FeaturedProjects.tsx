import React from "react";
import { Container } from "@/layout/Container";
import { SectionHeading } from "@/ui/SectionHeading";
import { ProjectCard } from "@/projects/ProjectCard";
import { Button } from "@/ui/Button";
import { Reveal } from "@/ui/Reveal";
import { getFeaturedProjects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 md:py-28 relative scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Engineered Systems"
          title="Featured"
          highlight="Projects"
          description="Production-tested LLM workflows, multilingual conversational agents, and full-stack software systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((project, idx) => (
            <Reveal
              key={project.slug}
              direction="up"
              delay={idx * 0.1}
            >
              <ProjectCard project={project} featured={true} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="secondary"
            size="lg"
            href="/projects"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Explore All Projects & Architecture
          </Button>
        </div>
      </Container>
    </section>
  );
}
