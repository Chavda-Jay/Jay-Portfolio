export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  actions?: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
}

export const INITIAL_SUGGESTIONS = [
  "🔥 What are Jay's top AI projects?",
  "⚡ What is Jay's tech stack?",
  "💼 Is Jay available for hire?",
  "📄 Can I see his resume?",
  "🤖 Tell me about his RAG experience",
];

export const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    sender: "ai",
    text: "Hi there! 👋 I am **Jay Chavda's AI Assistant**.\n\nI can tell you all about Jay's **AI/ML & Generative AI** engineering experience, production projects (like *Jamin24 AI Video Editor*, *AI Interview Prep Bot*, and *RAG Chatbots*), technical skills, or his availability for immediate hiring!\n\nWhat would you like to know?",
    timestamp: "Just now",
    actions: [
      { label: "View Projects", href: "#projects" },
      { label: "Technical Skills", href: "#skills" },
      { label: "View Resume ↗", href: "/resume/Jay_Chavda_Resume.pdf", isExternal: true },
    ],
  },
];

export async function getAIResponse(
  userQuery: string
): Promise<{ text: string; actions?: { label: string; href: string; isExternal?: boolean }[] }> {
  // Simulate natural AI thinking delay for authentic conversational feel
  await new Promise((resolve) => setTimeout(resolve, 600));

  const query = userQuery.toLowerCase().trim();

  // 1. GREETINGS
  if (
    /^(hi|hello|hey|greetings|hola|namaste|kem cho|good morning|good evening|good afternoon|sup)\b/i.test(
      query
    )
  ) {
    return {
      text: "Hello! Welcome to Jay Chavda's portfolio! 👋\n\nJay is an **AI/ML Engineer & Generative AI Developer** specializing in building real-world LLM pipelines, RAG systems, and high-performance FastAPI backends.\n\nAre you looking to hire Jay, explore his projects, or check out his tech stack?",
      actions: [
        { label: "Explore Projects", href: "#projects" },
        { label: "View Resume ↗", href: "/resume/Jay_Chavda_Resume.pdf", isExternal: true },
        { label: "Get in Touch", href: "#contact" },
      ],
    };
  }

  // 2. RESUME / CV
  if (/resume|cv|biodata|download/i.test(query)) {
    return {
      text: "📄 You can preview and download **Jay Chavda's official updated resume** right away.\n\nIt covers his **MCA degree (8.30 CGPA)**, AI/ML experience at **Saubhagyam Web**, key Generative AI projects, and comprehensive technical skill set.",
      actions: [
        {
          label: "Open Resume (PDF) ↗",
          href: "/resume/Jay_Chavda_Resume.pdf",
          isExternal: true,
        },
        { label: "Contact Jay", href: "#contact" },
      ],
    };
  }

  // 3. AVAILABILITY / HIRING / RECRUITER QUESTIONS
  if (
    /hire|hiring|available|job|opportunity|recruit|notice period|joining|immediate|full-?time|remote|salary|ctc|role|open to/i.test(
      query
    )
  ) {
    return {
      text: "🎯 **Yes! Jay is actively open to new full-time opportunities!**\n\n• **Target Roles:** AI/ML Engineer, Generative AI Developer, Full-Stack AI Engineer, Python/FastAPI Backend Developer.\n• **Notice Period:** **Immediate Joiner** (can start immediately).\n• **Work Mode:** Open to **Remote**, **Hybrid**, or **On-site** opportunities.\n• **Location:** Ahmedabad, Gujarat, India (Open to relocation for top roles).\n\nYou can reach out directly via the contact form or email him at **chavdajay510@gmail.com**.",
      actions: [
        { label: "Send Message to Jay", href: "#contact" },
        { label: "Email Directly", href: "mailto:chavdajay510@gmail.com", isExternal: true },
        {
          label: "LinkedIn Profile ↗",
          href: "https://www.linkedin.com/in/jay-chavda-13809b275",
          isExternal: true,
        },
      ],
    };
  }

  // 4. WHY HIRE JAY / STRENGTHS / IMPRESS ME
  if (/why hire|why should|strength|superpower|value|impress|about jay|who is jay|bio/i.test(query)) {
    return {
      text: "💡 **Why Jay Chavda stands out as an AI Engineer:**\n\n1. **Production-First Mindset:** He doesn't just train toy Jupyter models—he engineers full-stack, low-latency AI microservices using **FastAPI, Docker, and streaming APIs**.\n2. **RAG & Generative AI Expertise:** Hands-on experience with vector databases (**ChromaDB**), embeddings, and open-source models (**LLaMA 3.3 70B via Groq**).\n3. **Full-Stack Proficiency:** Combines modern **React.js/Next.js & Tailwind CSS** with scalable Python and Node.js backends for complete end-to-end delivery.\n4. **Proven Industry Experience:** Successfully built video rendering automation at *Saubhagyam Web* and high-traffic web apps at *Grownited*.",
      actions: [
        { label: "Check Top Projects", href: "#projects" },
        { label: "View Experience", href: "#experience" },
        { label: "Hire Jay", href: "#contact" },
      ],
    };
  }

  // 5. SPECIFIC PROJECTS
  // 5a. Jamin24 AI Video Editor
  if (/jamin24|video|timeline|ffmpeg|opencv|gujarati/i.test(query)) {
    return {
      text: "🎬 **Jamin24 AI Video Editor** *(Production Project)*\n\n• **Overview:** An AI-powered automated video generation platform with a responsive drag-and-drop timeline editor.\n• **Tech Stack:** React.js, TypeScript, Tailwind CSS, FastAPI, Python, FFmpeg, OpenCV, MinIO.\n• **Key Highlights:**\n  - Backend video rendering workflows using **FastAPI, FFmpeg & OpenCV**.\n  - Real-time Gujarati typography rendering using **Headless Chrome**.\n  - High-throughput video storage and streaming powered by **MinIO**.",
      actions: [
        { label: "Launch Live App ↗", href: "https://reel.jamin24.com/", isExternal: true },
        { label: "View All Projects", href: "/projects" },
      ],
    };
  }

  // 5b. AI Interview Prep Bot
  if (/interview|mock|prep bot|exam|grading/i.test(query)) {
    return {
      text: "🤖 **AI Interview Prep Bot** *(Deployed)*\n\n• **Overview:** An intelligent mock interview platform that simulates real technical interviews across 6 popular tech stacks.\n• **Tech Stack:** React.js, FastAPI, Python, MongoDB Atlas, Groq API (LLaMA 3.3 70B).\n• **Key Highlights:**\n  - Generates context-aware technical interview questions dynamically.\n  - Evaluates user answers using NLP with granular scoring (0-100) and personalized improvement suggestions.\n  - Ultra-fast token generation powered by **Groq LLaMA 3.3**.",
      actions: [
        {
          label: "Live Demo ↗",
          href: "https://interview-prep-bot-lilac.vercel.app",
          isExternal: true,
        },
        { label: "Case Study", href: "/projects/ai-interview-prep-bot" },
      ],
    };
  }

  // 5c. AI Sales & Marketing Agent
  if (/sales|marketing|lead|scoring/i.test(query)) {
    return {
      text: "📈 **AI Sales & Marketing Agent** *(Deployed)*\n\n• **Overview:** A 24/7 multilingual sales chatbot that converses with customers, answers product queries, and automatically qualifies ready leads.\n• **Tech Stack:** React/Next.js, FastAPI, Python, PostgreSQL, Supabase, Groq API.\n• **Key Highlights:**\n  - Supports multi-turn conversations in **Hindi, Gujarati, Hinglish, and English**.\n  - Computes dynamic **7-factor lead qualification scores** (0-100).\n  - Catalog & policy constrained prompt engineering to prevent hallucinations.",
      actions: [
        {
          label: "Live Demo ↗",
          href: "https://ai-sales-agent-self.vercel.app",
          isExternal: true,
        },
        { label: "Case Study", href: "/projects/ai-sales-agent" },
      ],
    };
  }

  // 5d. Context-Aware RAG AI Chatbot
  if (/rag|retrieval|chromadb|vector|embeddings/i.test(query)) {
    return {
      text: "🧠 **Context-Aware RAG AI Chatbot** *(Deployed)*\n\n• **Overview:** An enterprise-ready intelligent assistant utilizing Retrieval-Augmented Generation (RAG) for hallucination-free answers.\n• **Tech Stack:** React.js, FastAPI, Python, OpenAI API, ChromaDB.\n• **Key Highlights:**\n  - Document chunking, vector embeddings, and semantic similarity search via **ChromaDB**.\n  - Real-time token streaming using **FastAPI StreamingResponse**.\n  - Session memory management for natural multi-turn context retention.",
      actions: [
        {
          label: "Live Demo ↗",
          href: "https://saubhagyam-chatbot.onrender.com",
          isExternal: true,
        },
        { label: "Explore Architecture", href: "/projects/ai-chatbot-application" },
      ],
    };
  }

  // 5e. CarScout
  if (/carscout|car scout|automotive|car|vehicle|razorpay/i.test(query)) {
    return {
      text: "🚗 **CarScout Automotive Marketplace** *(Deployed)*\n\n• **Overview:** A full-stack online car marketplace connecting buyers and sellers with verified vehicle listings.\n• **Tech Stack:** React.js, Node.js, Express.js, MongoDB, Tailwind CSS.\n• **Key Highlights:**\n  - Role-based JWT authentication for Buyers, Sellers, and Admins.\n  - Secure vehicle deposit checkout integrated with **Razorpay**.\n  - Dynamic vehicle filtering, image uploads, and inquiry dashboards.",
      actions: [
        {
          label: "Live Demo ↗",
          href: "https://car-scout-ten.vercel.app",
          isExternal: true,
        },
        { label: "Case Study", href: "/projects/car-scout" },
      ],
    };
  }

  // 5f. SmartCivic
  if (/smartcivic|smart civic|civic|citizen|complaint/i.test(query)) {
    return {
      text: "🏛️ **SmartCivic** *(MCA Academic Project)*\n\n• **Overview:** A responsive civic issue reporting platform enabling citizens to report municipal problems (potholes, garbage, water leaks) to authorities.\n• **Tech Stack:** React.js, Tailwind CSS, Django (Python), PostgreSQL.\n• **Key Highlights:**\n  - Image upload, geolocation capture, and dynamic issue status tracking.\n  - Django REST Framework backend with relational data integrity.",
      actions: [{ label: "View Case Study", href: "/projects/smartcivic" }],
    };
  }

  // 6. ALL PROJECTS SUMMARY
  if (/project|portfolio|work|built|apps|systems/i.test(query)) {
    return {
      text: "🚀 **Jay has built 6 major production and academic projects:**\n\n1. **AI Interview Prep Bot:** Real-time LLaMA 3.3 mock interview & grading platform.\n2. **AI Sales & Marketing Agent:** Multilingual lead generation chatbot (Hindi/Gujarati/English).\n3. **Jamin24 AI Video Editor:** Drag-and-drop video timeline with FastAPI + FFmpeg + OpenCV.\n4. **Context-Aware RAG Chatbot:** ChromaDB vector embeddings with real-time streaming.\n5. **CarScout:** Full-stack automotive marketplace with Razorpay payments.\n6. **SmartCivic:** Citizen civic issue reporting platform with Django & React.",
      actions: [
        { label: "Featured Projects", href: "#projects" },
        { label: "Explore All 6 Projects Archive ↗", href: "/projects" },
      ],
    };
  }

  // 7. TECH STACK & SKILLS
  if (/skill|tech stack|technologies|tools|languages|python|react|fastapi|docker/i.test(query)) {
    return {
      text: "⚡ **Jay Chavda's Core Technical Arsenal:**\n\n• **AI & Machine Learning:** Python, NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, OpenCV, NLP\n• **Generative AI & LLMs:** RAG Pipelines, Prompt Engineering, ChromaDB, Vector Embeddings, LangChain, Groq API, OpenAI API\n• **Backend & APIs:** FastAPI, Python, Node.js, Express.js, Django, RESTful Microservices, JWT Auth\n• **Frontend:** React.js, Next.js, TypeScript, Tailwind CSS, Responsive UI\n• **Databases & DevOps:** MongoDB, PostgreSQL, Supabase, MinIO, Docker, Git, GitHub, Postman, Vercel",
      actions: [
        { label: "Interactive Skills Grid", href: "#skills" },
        { label: "View Projects", href: "#projects" },
      ],
    };
  }

  // 8. EXPERIENCE / WORK HISTORY
  if (/experience|intern|company|saubhagyam|grownited|career|work history/i.test(query)) {
    return {
      text: "💼 **Jay's Professional Experience:**\n\n1. **AI/ML Intern — Saubhagyam Web Pvt. Ltd.** *(June 2024 – Present)*\n   • Engineering AI/ML solutions, LLM workflows, and intelligent microservices.\n   • Integrated RAG with ChromaDB and built video generation pipelines with FastAPI, FFmpeg, and MinIO.\n\n2. **MERN Full Stack Developer — Grownited Private Limited** *(Jan 2024 – Apr 2024)*\n   • Developed responsive full-stack applications using React.js, Node.js, Express, and MongoDB.\n   • Designed secure RESTful APIs with JWT authentication.",
      actions: [
        { label: "Experience Timeline", href: "#experience" },
        { label: "Download Resume ↗", href: "/resume/Jay_Chavda_Resume.pdf", isExternal: true },
      ],
    };
  }

  // 9. EDUCATION & CERTIFICATIONS
  if (/education|degree|college|university|mca|bca|gpa|cgpa|certif/i.test(query)) {
    return {
      text: "🎓 **Education & Certifications:**\n\n• **Master of Computer Applications (MCA):** Parul University (SVGU) *(2024–2026)* • **8.30 CGPA**\n• **Bachelor of Computer Applications (BCA):** SVGU *(2021–2024)* • **68.30%**\n\n📜 **Industry Certifications:**\n• **Prompt Engineering for ChatGPT** — Vanderbilt University\n• **Machine Learning with Python** — IBM Cognitive Class\n• **Full-Stack Web Development**",
      actions: [
        { label: "View Education Section", href: "#education" },
        { label: "View Certifications", href: "#certifications" },
      ],
    };
  }

  // 10. CONTACT / EMAIL / SOCIALS
  if (/contact|email|phone|message|reach|touch|connect|social|github|linkedin/i.test(query)) {
    return {
      text: "📬 **How to Connect with Jay Chavda:**\n\n• **Email:** chavdajay510@gmail.com\n• **LinkedIn:** linkedin.com/in/jay-chavda-13809b275\n• **GitHub:** github.com/Chavda-Jay\n• **Location:** Ahmedabad, Gujarat, India\n\nYou can also submit a message directly on the portfolio contact form!",
      actions: [
        { label: "Open Contact Form", href: "#contact" },
        { label: "Send Email ↗", href: "mailto:chavdajay510@gmail.com", isExternal: true },
        {
          label: "LinkedIn ↗",
          href: "https://www.linkedin.com/in/jay-chavda-13809b275",
          isExternal: true,
        },
      ],
    };
  }

  // 11. DEFAULT FALLBACK (Helpful & Contextual)
  return {
    text: `I'm happy to help you with that! 😊\n\nJay is an **AI/ML Engineer** with hands-on experience in **Generative AI, RAG, FastAPI, and Full-Stack Development**.\n\nYou can ask me specific questions like:\n• *"What are Jay's top projects?"*\n• *"Explain his experience with RAG and ChromaDB"*\n• *"Is Jay available for immediate joining?"*\n• *"How can I contact or hire him?"*\n\nOr feel free to explore his resume directly!`,
    actions: [
      { label: "Explore Projects", href: "#projects" },
      { label: "Check Skills", href: "#skills" },
      { label: "View Resume ↗", href: "/resume/Jay_Chavda_Resume.pdf", isExternal: true },
      { label: "Contact Jay", href: "#contact" },
    ],
  };
}
