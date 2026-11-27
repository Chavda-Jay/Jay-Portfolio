import React from "react";
import fs from "fs";
import path from "path";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import { ParallaxGlow } from "@/effects/ParallaxGlow";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { Education } from "@/sections/Education";
import { Certifications } from "@/sections/Certifications";
import { ContactSection } from "@/sections/ContactSection";

export default function Home() {
  const resumeDir = path.join(process.cwd(), "public", "resume");
  const hasResume =
    fs.existsSync(path.join(resumeDir, "Jay_Chavda_Resume.pdf")) ||
    fs.existsSync(path.join(resumeDir, "Jay_Chavda.pdf"));

  return (
    <>
      <ParallaxGlow />
      <Navbar hasResume={hasResume} />

      <main id="main-content" className="flex-1">
        <Hero hasResume={hasResume} />
        <About />
        <Skills />
        <Experience />
        <FeaturedProjects />
        <Education />
        <Certifications />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
