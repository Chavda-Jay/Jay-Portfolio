import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { profileData } from "@/data/profile";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jaychavda.dev";

export const viewport: Viewport = {
  themeColor: "#05070F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Jay Chavda | AI/ML Engineer & Generative AI Developer",
    template: "%s | Jay Chavda",
  },
  description:
    "Portfolio of Jay Chavda, AI/ML Engineer & Generative AI Developer specializing in LLM applications, FastAPI architectures, prompt engineering, and full-stack development.",
  keywords: [
    "Jay Chavda",
    "AI/ML Engineer",
    "Generative AI Developer",
    "LLM Applications",
    "FastAPI",
    "Python Developer",
    "Prompt Engineering",
    "Machine Learning Portfolio",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Jay Chavda", url: baseUrl }],
  creator: "Jay Chavda",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Jay Chavda | AI/ML Engineer & Generative AI Developer",
    description:
      "Portfolio of Jay Chavda, AI/ML Engineer & Generative AI Developer specializing in LLM applications, FastAPI, prompt engineering, and full-stack development.",
    siteName: "Jay Chavda Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Chavda | AI/ML Engineer & Generative AI Developer",
    description:
      "Building practical LLM applications, FastAPI services, and full-stack systems.",
    creator: "@jaychavda",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profileData.name,
  jobTitle: profileData.title,
  url: baseUrl,
  sameAs: [profileData.socials.github, profileData.socials.linkedin],
  email: profileData.socials.email,
  alumniOf: [
    {
      "@type": "EducationalOrganization",
      name: "Sardar Vallabhbhai Global University",
    },
    {
      "@type": "EducationalOrganization",
      name: "Shri Chimanbhai Patel Institute of Computer Applications",
    },
  ],
  knowsAbout: [
    "Generative AI",
    "Large Language Models",
    "Machine Learning",
    "FastAPI",
    "Python",
    "Prompt Engineering",
    "React.js",
    "Full-Stack Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#05070F] text-[#E8ECF8] font-sans antialiased selection:bg-[#2F6BFF] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#2F6BFF] text-white rounded-md font-medium outline-none ring-2 ring-[#5B8CFF]"
        >
          Skip to content
        </a>
        <div
          id="root-container"
          className="relative flex flex-col min-h-screen overflow-x-hidden"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
