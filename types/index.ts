export type ProjectCategory = "Generative AI" | "Full-Stack" | "Machine Learning" | "Automation";
export type ProjectStatus = "Completed" | "In Progress" | "Prototype";

export type Project = {
  slug: string;
  name: string;
  shortDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  problem?: string;
  solution?: string;
  features: string[];
  contribution?: string;
  stack: string[];
  screenshots: string[];
  github?: string;
  liveDemo?: string;
  order: number;
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  email: string;
};

export type Profile = {
  name: string;
  title: string;
  email: string;
  location: string;
  socials: SocialLinks;
  summary: string;
  languages: string[];
  interests: string[];
  currentlyWorkingOn: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  highlights: string[];
  technologies: string[];
};

export type Education = {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  scoreDetails?: string;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
};

export type SkillCategory = {
  title: string;
  iconName: string;
  skills: string[];
};
