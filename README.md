# Jay Chavda — AI/ML Engineer & Generative AI Developer Portfolio

A personal portfolio website engineered with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Motion, and GSAP ScrollTrigger. Designed with a dark navy / electric blue aesthetic, bento grids, accessible semantic markup, dynamic case studies, and server-side contact dispatching.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Server Components)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens & `@theme`
- **Animation**: [Motion](https://motion.dev/) (reveals, micro-interactions) & [GSAP ScrollTrigger](https://gsap.com/) (interactive timeline)
- **Validation**: [Zod](https://zod.dev/) (client & server-side contact schema)
- **Email Service**: [Resend](https://resend.com/) with graceful client-side `mailto:` fallback
- **Icons**: [Lucide React](https://lucide.react.dev/)
- **SEO & Social**: Next.js Metadata API, dynamic OG Image generator, JSON-LD Schema (`Person`), `sitemap.xml`, and `robots.txt`

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+ LTS (Tested on Node v24.16.0)
- **Package Manager**: `npm` (v10+ / v11+)

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Chavda-Jay/jay-portfolio.git
cd jay-portfolio
npm install
```

### 3. Environment Configuration
Copy the example environment file:
```bash
cp .env.example .env.local
```
Configure your environment variables in `.env.local`:
```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECEIVER_EMAIL=chavdajay510@gmail.com
CONTACT_SENDER_EMAIL="Portfolio Contact <onboarding@resend.dev>"
NEXT_PUBLIC_SITE_URL=https://jaychavda.dev
```
*(Note: If `RESEND_API_KEY` is not provided, the contact form automatically provides an intelligent `mailto:` client fallback.)*

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Verification Commands
```bash
# Type check TypeScript without emitting files
npx tsc --noEmit

# Run ESLint linter
npm run lint

# Production build test
npm run build
```

---

## 📁 How to Add or Update a Project

All project content is statically typed and centralized in `data/projects.ts`. Adding a project requires editing only that file (plus placing screenshots in `public/projects/<slug>/` if available).

```ts
// data/projects.ts
{
  slug: "your-project-slug",
  name: "Your Project Name",
  shortDescription: "A concise 1-2 sentence overview of the project.",
  category: "Generative AI", // "Generative AI" | "Full-Stack" | "Machine Learning" | "Automation"
  status: "Completed", // "Completed" | "In Progress" | "Prototype"
  featured: true, // true to display in homepage highlights
  problem: "The specific problem or bottleneck addressed.",
  solution: "The architecture, models, or system designed.",
  contribution: "Your specific technical responsibilities.",
  features: [
    "Key capability 1",
    "Key capability 2"
  ],
  stack: ["Python", "FastAPI", "React", "PostgreSQL"],
  screenshots: [], // e.g. ["/projects/slug/preview-1.png"] or leave [] for auto-schematic placeholder
  github: "https://github.com/Chavda-Jay/your-repo", // Optional: leave undefined to hide button
  liveDemo: "https://your-demo-url.com", // Optional: leave undefined to hide button
  order: 1
}
```

The system automatically updates:
1. Homepage **Featured Projects** grid
2. **All Projects** filterable page (`/projects`)
3. Dedicated **Case Study Route** (`/projects/[slug]`)
4. **Dynamic Metadata & OG tags** for social sharing
5. **Search Engine Sitemap** (`/sitemap.xml`)

---

## 📄 Adding Your Resume PDF

Place your resume PDF file at:
```
public/resume/Jay_Chavda_Resume.pdf
```
When present, the "Download Resume" buttons in the Hero section, Navbar, and Mobile Drawer will automatically become visible and functional. When absent, the buttons are gracefully hidden.

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio implementation"
   git remote add origin https://github.com/Chavda-Jay/jay-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `jay-portfolio` repository.
4. Set the environment variables in Vercel Project Settings:
   - `RESEND_API_KEY`
   - `CONTACT_RECEIVER_EMAIL`
   - `NEXT_PUBLIC_SITE_URL`
5. Click **"Deploy"**. Vercel will build and assign your production domain.

---

## 🔒 Privacy & Data Policy
This portfolio strictly displays only verified professional credentials and project summaries from Jay Chavda's profile. No personal phone numbers or unverified URLs are published.
