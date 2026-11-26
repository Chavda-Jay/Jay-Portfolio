import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "ai-interview-prep-bot",
    name: "AI Interview Prep Bot",
    shortDescription:
      "An intelligent mock interview platform that generates real-time technical questions across 6 tech stacks and automatically grades answers with personalized improvement feedback.",
    category: "Generative AI",
    status: "Completed",
    featured: true,
    problem:
      "Job seekers and software developers preparing for technical interviews often lack access to real-time mock interviews with objective, instant evaluation and actionable feedback.",
    solution:
      "Created an AI-powered interview practice platform powered by Groq LLaMA 3.3 70B. It dynamically generates relevant multiple-choice and conceptual questions, analyzes user answers using Natural Language Processing (NLP), and gives clear, constructive score reports.",
    contribution:
      "Built the full-stack web application using React.js and FastAPI; integrated Groq LLaMA 3.3 70B for fast AI question generation; designed NLP algorithms to grade descriptive answers; implemented secure JWT login and automated email reports via SMTP.",
    features: [
      "Dynamic interview practice across 6 popular technology stacks",
      "Instant question generation (MCQ and descriptive) using Groq LLaMA 3.3 70B",
      "Smart NLP evaluation engine providing scores and constructive suggestions",
      "Secure user authentication with JWT tokens",
      "Automated interview scorecards and reports sent via email",
      "Organized MongoDB database tracking user progress over time",
    ],
    stack: [
      "React.js",
      "FastAPI",
      "MongoDB",
      "Groq LLM",
      "Python",
      "JWT",
      "NLP",
    ],
    screenshots: [],
    github: "https://github.com/Chavda-Jay/interview-prep-bot",
    liveDemo: "https://interview-prep-bot-lilac.vercel.app",
    order: 1,
  },
  {
    slug: "b2c-ai-sales-agent",
    name: "AI Sales & Marketing Agent",
    shortDescription:
      "A 24/7 multilingual sales chatbot that converses with customers in Hindi, Gujarati, Hinglish, and English, answers product queries, and automatically scores high-intent buyers.",
    category: "Generative AI",
    status: "Completed",
    featured: true,
    problem:
      "Modern businesses lose valuable leads when customer support isn't available 24/7 or when international tools can't understand regional Indian languages like Gujarati, Hindi, and Hinglish.",
    solution:
      "Engineered an asynchronous, multilingual AI sales assistant that strictly follows company policies and product catalogs. It engages customers in their preferred regional language and uses an intelligent 7-factor scoring system to highlight top buying leads.",
    contribution:
      "Developed the asynchronous FastAPI backend with PostgreSQL database; designed prompt engineering guardrails so the AI always provides accurate catalog details; created the 7-factor customer lead scoring model and automated follow-up workflows.",
    features: [
      "Natural conversations in 4 languages: Hindi, Gujarati, Hinglish, and English",
      "Accurate answers grounded strictly in official product catalogs and pricing",
      "Smart 7-factor lead scoring (0–100) helping sales teams prioritize ready buyers",
      "High-speed asynchronous backend using FastAPI and PostgreSQL",
      "Secure session handling with JWT authentication",
      "Automated follow-up triggers and daily sales summary reports",
    ],
    stack: [
      "React/Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Supabase",
      "Groq LLM",
    ],
    screenshots: [],
    github: "https://github.com/Chavda-Jay/AI-Sales-Agent",
    liveDemo: "https://ai-sales-agent-self.vercel.app",
    order: 2,
  },
  {
    slug: "carscout",
    name: "CarScout",
    shortDescription:
      "A complete online automotive marketplace where buyers and sellers can browse verified car listings, negotiate, and complete payments securely with role-based dashboards.",
    category: "Full-Stack",
    status: "Completed",
    featured: true,
    problem:
      "Buying or selling pre-owned vehicles online is often risky and chaotic without verified vehicle information, transparent pricing, secure digital payments, and proper admin moderation.",
    solution:
      "Developed CarScout, a full-stack automotive platform with dedicated web portals for car buyers, sellers, and platform administrators. Built with verified car specifications, search filters, and integrated digital checkout.",
    contribution:
      "Built the clean, mobile-responsive user interface with React.js and Tailwind CSS; developed secure RESTful backend APIs with Node.js and Express; modeled the MongoDB vehicle and user schemas; integrated Razorpay for smooth online payments and JWT for role-based security.",
    features: [
      "Dedicated, user-friendly portals for car buyers, private sellers, and platform admins",
      "Search, filter, and compare vehicles by brand, year, price range, and specs",
      "Secure online payment gateway integration powered by Razorpay",
      "Role-based login and account security using JWT authentication",
      "Fast REST API architecture with real-time inventory updates",
      "Clean, modern responsive design that works seamlessly on desktop and mobile",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Razorpay",
    ],
    screenshots: [],
    github: "https://github.com/Chavda-Jay/CarScout",
    liveDemo: "https://car-scout-ten.vercel.app",
    order: 3,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((project) => project.featured).sort((a, b) => a.order - b.order);
}

export function getAllProjects(): Project[] {
  return [...projectsData].sort((a, b) => a.order - b.order);
}
