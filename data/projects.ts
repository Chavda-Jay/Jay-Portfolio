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
  {
    slug: "jamin24-ai-video-editor",
    name: "Jamin24 AI Video Editor",
    shortDescription:
      "An AI-powered video generation and editing platform with a drag-and-drop timeline, FFmpeg/OpenCV processing engines, and Gujarati typography.",
    category: "Generative AI",
    status: "Completed",
    featured: false,
    problem:
      "Content creators and regional publishers needed an automated, fast workflow to generate reels and edit videos with regional Gujarati text rendering and cloud streaming.",
    solution:
      "Built a full-stack automated video rendering platform with a web-based timeline editor, backend FFmpeg/OpenCV processing pipelines, and MinIO object storage for seamless asset delivery.",
    contribution:
      "Architected the drag-and-drop timeline editor in React.js and TypeScript; built high-throughput backend rendering workflows using FastAPI, FFmpeg, and OpenCV; implemented Gujarati Unicode rendering via Headless Chrome; integrated MinIO for video storage and streaming.",
    features: [
      "Interactive drag-and-drop video timeline and multi-track scene editor",
      "High-performance video processing and rendering using FFmpeg and OpenCV",
      "Accurate Gujarati regional typography rendering powered by Headless Chrome",
      "Scalable S3-compatible cloud object storage and streaming powered by MinIO",
      "Asynchronous rendering task queues with FastAPI for fast non-blocking reel creation",
      "Responsive, modern user interface built with React.js, TypeScript, and Tailwind CSS",
    ],
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "FFmpeg",
      "OpenCV",
      "MinIO",
    ],
    screenshots: [],
    github: "https://github.com/Chavda-Jay",
    liveDemo: "https://reel.jamin24.com/",
    order: 4,
  },
  {
    slug: "smartcivic",
    name: "SmartCivic",
    shortDescription:
      "A civic issue reporting platform empowering citizens to submit local municipal grievances with photo proofs, location data, and live status updates.",
    category: "Full-Stack",
    status: "Completed",
    featured: false,
    problem:
      "Municipal authorities and citizens lack a transparent, centralized web portal to lodge local civic issues, attach photo evidence, track resolution progress, and prevent duplicate complaints.",
    solution:
      "Engineered SmartCivic, a responsive web application where citizens submit civic complaints with photo verification and location data, backed by a Django REST backend and PostgreSQL.",
    contribution:
      "Designed and built the responsive React.js and Tailwind CSS frontend; implemented image upload and client-side validation; integrated location input mapping; developed Django REST APIs and relational database schemas in PostgreSQL.",
    features: [
      "Clean, intuitive citizen complaint submission portal for local civic issues",
      "Photo evidence upload with real-time preview and client-side optimization",
      "Location tagging for accurate municipal dispatch and routing",
      "Live issue tracking dashboard with dynamic status updates",
      "Robust relational data model powered by Django ORM and PostgreSQL",
      "Secure REST API endpoints ensuring data validation and citizen privacy",
    ],
    stack: [
      "React.js",
      "Tailwind CSS",
      "Django",
      "Python",
      "PostgreSQL",
      "REST APIs",
    ],
    screenshots: [],
    github: "https://github.com/Chavda-Jay",
    order: 5,
  },
  {
    slug: "ai-chatbot-application",
    name: "Context-Aware RAG AI Chatbot",
    shortDescription:
      "An intelligent conversational assistant featuring Retrieval-Augmented Generation (RAG), vector embeddings in ChromaDB, and real-time streaming answers.",
    category: "Generative AI",
    status: "Completed",
    featured: false,
    problem:
      "Standard conversational chatbots suffer from hallucination and lack context about private domain knowledge, documentation, or past multi-turn user conversations.",
    solution:
      "Constructed a Retrieval-Augmented Generation (RAG) pipeline that embeds knowledge documents into ChromaDB vector store, retrieves relevant context chunks, and streams answers with low latency.",
    contribution:
      "Built the full-stack architecture using React.js and FastAPI; implemented document chunking and vector search with ChromaDB; integrated OpenAI API with streaming tokens; engineered conversation memory and session state management.",
    features: [
      "Context-aware RAG pipeline ensuring accurate, grounded factual answers",
      "Fast vector similarity search using ChromaDB vector database",
      "Low-latency real-time response streaming with FastAPI and streaming APIs",
      "Multi-turn conversation memory management for cohesive dialogue",
      "Responsive modern chat UI with markdown code syntax highlighting",
      "Modular Python backend ready for custom enterprise document ingestion",
    ],
    stack: [
      "React.js",
      "FastAPI",
      "Python",
      "OpenAI API",
      "ChromaDB",
      "RAG",
      "Vector DB",
    ],
    screenshots: [],
    github: "https://github.com/Chavda-Jay",
    liveDemo: "https://saubhagyam-chatbot.onrender.com",
    order: 6,
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
