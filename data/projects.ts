import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    slug: "b2c-ai-sales-agent",
    name: "B2C AI Sales Agent",
    shortDescription:
      "Multilingual LLM sales assistant with catalog- and policy-based responses in Hindi, Hinglish, Gujarati, and English, featuring 7-factor lead scoring and automated follow-ups.",
    category: "Generative AI",
    status: "Completed",
    featured: true,
    // NEEDS JAY'S REVIEW: Derived strictly from project profile data
    problem:
      "Businesses require continuous, accurate sales assistance across multiple regional languages that strictly follows catalog specifications and company policies, while systematically identifying and prioritizing high-intent customer leads.",
    // NEEDS JAY'S REVIEW: Derived strictly from project profile data
    solution:
      "Developed an asynchronous, multilingual LLM-powered sales assistant supporting Hindi, Hinglish, Gujarati, and English. Integrated a 7-factor lead-scoring engine (0–100) for segmentation and automated follow-up workflows.",
    // NEEDS JAY'S REVIEW: Derived strictly from project profile data
    contribution:
      "Engineered the asynchronous FastAPI backend with PostgreSQL database and JWT authentication; created prompt engineering pipelines for catalog- and policy-aligned responses; implemented the seven-factor lead scoring algorithm, customer retention automations, and daily report generation.",
    features: [
      "Multilingual conversation support across Hindi, Hinglish, Gujarati, and English",
      "Catalog- and policy-constrained response generation via prompt engineering",
      "Seven-factor lead-scoring system (scores 0–100) for intelligent lead prioritization",
      "Asynchronous backend architecture using FastAPI and PostgreSQL",
      "Secure JWT-based authentication and session handling",
      "Automated follow-up workflows, customer retention triggers, and daily reporting",
    ],
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Next.js",
      "Groq LLM API",
      "Prompt Engineering",
      "JWT",
    ],
    screenshots: [],
    github: undefined,
    liveDemo: undefined,
    order: 1,
  },
  {
    slug: "ai-interview-prep-bot",
    name: "AI Interview Prep Bot",
    shortDescription:
      "Full-stack interview preparation platform across 6 technology stacks powered by Groq LLaMA 3.3 70B for dynamic question generation and NLP-based answer evaluation.",
    category: "Generative AI",
    status: "Completed",
    featured: true,
    // NEEDS JAY'S REVIEW: Derived strictly from project profile data
    problem:
      "Aspirants preparing for software engineering roles across diverse technology stacks lack accessible, real-time mock interviews with objective evaluation and granular feedback on technical concepts.",
    // NEEDS JAY'S REVIEW: Derived strictly from project profile data
    solution:
      "Built an AI-driven interview preparation platform supporting six distinct technology stacks, utilizing Groq LLaMA 3.3 70B to generate tailored MCQ and descriptive questions with NLP-based response grading and personalized improvement insights.",
    // NEEDS JAY'S REVIEW: Derived strictly from project profile data
    contribution:
      "Architected the full-stack system with React.js and FastAPI; configured MongoDB Atlas for persistence and SMTP for notifications; built prompt workflows with Groq LLaMA 3.3 70B for structured test generation; implemented NLP evaluation algorithms for descriptive assessment.",
    features: [
      "Comprehensive interview modules across six major technology stacks",
      "Dynamic MCQ and in-depth descriptive question generation via Groq LLaMA 3.3 70B",
      "NLP-based answer evaluation engine providing personalized feedback",
      "FastAPI backend with secure JWT authentication",
      "Automated email notifications and reporting via SMTP",
      "MongoDB Atlas database schema design for assessment tracking",
    ],
    stack: [
      "React.js",
      "FastAPI",
      "MongoDB Atlas",
      "Groq LLM (LLaMA 3.3 70B)",
      "JWT",
      "SMTP",
      "NLP",
    ],
    screenshots: [],
    github: undefined,
    liveDemo: undefined,
    order: 2,
  },
  {
    slug: "carscout",
    name: "CarScout",
    shortDescription:
      "Comprehensive MERN-stack automotive marketplace platform featuring dedicated buyer, seller, and admin modules with role-based JWT auth and Razorpay payments.",
    category: "Full-Stack",
    status: "Completed",
    featured: true,
    // NEEDS JAY'S REVIEW: Derived strictly from project profile data
    problem:
      "Vehicle buyers and sellers need a reliable, transparent marketplace platform with dedicated interfaces for vehicle discovery, listing management, payment processing, and administrative moderation.",
    // NEEDS JAY'S REVIEW: Derived strictly from project profile data
    solution:
      "Constructed a multi-role web platform featuring specialized modules for buyers, sellers, and administrators, backed by robust REST APIs, MongoDB data structures, and verified online transaction workflows.",
    // NEEDS JAY'S REVIEW: Derived strictly from project profile data
    contribution:
      "Built modular, responsive React.js interfaces styled with Tailwind CSS; engineered RESTful backend services with Node.js and Express.js; designed MongoDB collections; implemented role-based access control with JWT; integrated Razorpay payment gateway; resolved critical bugs across frontend and backend.",
    features: [
      "Dedicated interfaces and workflows for buyers, sellers, and administrators",
      "Secure role-based access control and session management using JWT",
      "Complete payment checkout integration via Razorpay",
      "Modular, responsive UI architecture built with React.js and Tailwind CSS",
      "RESTful API endpoints for catalog operations, listing updates, and user management",
      "MongoDB database modeling for vehicle inventories and transaction records",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "Razorpay",
    ],
    screenshots: [],
    github: undefined,
    liveDemo: undefined,
    order: 3,
  },
  // --- Demonstration Placeholders (Trivially removable; marked In Progress) ---
  {
    slug: "ml-customer-churn-prediction",
    name: "Predictive Churn Model",
    shortDescription:
      "Details coming soon — Machine learning classification pipeline for customer retention analysis.",
    category: "Machine Learning",
    status: "In Progress",
    featured: false,
    problem: "Details coming soon.",
    solution: "Details coming soon.",
    features: ["Supervised classification pipeline", "Feature engineering & evaluation"],
    stack: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    screenshots: [],
    order: 4,
  },
  {
    slug: "automated-lead-orchestrator",
    name: "Automated Lead Orchestrator",
    shortDescription:
      "Details coming soon — Event-driven lead dispatch and notification automation workflow.",
    category: "Automation",
    status: "In Progress",
    featured: false,
    problem: "Details coming soon.",
    solution: "Details coming soon.",
    features: ["Automated webhook triggers", "Task queue management"],
    stack: ["Python", "FastAPI", "PostgreSQL"],
    screenshots: [],
    order: 5,
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
