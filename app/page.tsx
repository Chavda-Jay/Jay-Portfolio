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
  const resumePath = path.join(
    process.cwd(),
    "public",
    "resume",
    "Jay_Chavda_Resume.pdf"
  );
  const hasResume = fs.existsSync(resumePath);

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
