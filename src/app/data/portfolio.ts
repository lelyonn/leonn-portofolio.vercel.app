import {
  Bug,
  Clapperboard,
  Code2,
  Flag,
  Globe,
  Mic2,
  Music2,
  Shield,
  Terminal,
} from "lucide-react";
import pentestReportPdf from "@/imports/Pentest_Report_PTVulnapp_LeonardJonathanSaputra.pdf";
import type { Skill } from "../types";

export const techSkills: Skill[] = [
  {
    label: "Cyber Security",
    icon: Shield,
    role: "Security Analyst — in training",
    summary:
      "Mapping how systems fail so I can help them fail less. I focus on threat modeling, hardening web stacks, and writing readable incident notes.",
    highlights: [
      "Hands-on with OWASP Top 10 in lab + classroom settings",
      "Active CTF participant across web, forensics, and reversing categories",
      "Wrote a campus-wide phishing awareness workshop",
    ],
    subAreas: [
      { label: "Penetration Testing", icon: Terminal },
      { label: "Capture the Flag", icon: Flag },
      { label: "Bug Bounty", icon: Bug },
    ],
    tools: ["Burp Suite", "Wireshark", "Nmap", "ParrotOS", "TryHackMe", "HTB"],
    links: [
      {
        label: "See full project breakdowns & writeups",
        href: "/#/projects",
        note: "CTF writeups, bug bounty reports, and lab notes",
      },
    ],
  },
  {
    label: "Full-Stack Dev",
    icon: Code2,
    role: "Full-Stack Engineer",
    summary:
      "I build small, considered web products end-to-end — from schema to pixel. Comfortable owning a feature from RFC to deploy.",
    highlights: [
      "TypeScript-first across React, Node, and Bun runtimes",
      "Comfortable shipping with Postgres, Redis, and SQLite",
      "Care a lot about loading states, empty states, and error states",
    ],
    tools: ["React", "Next.js", "Node.js", "Tailwind"],
  },
  {
    label: "Web Development",
    icon: Globe,
    role: "Frontend & Web Engineer",
    summary:
      "Marketing sites, internal tools, learning platforms. I enjoy the part where performance, accessibility, and taste have to agree.",
    highlights: [
      "Built sites with Astro, Next.js, and vanilla Vite + React",
      "Lighthouse-conscious — perf budgets aren't decoration",
      "Care about keyboard nav, focus states, and reduced motion",
    ],
    tools: ["Next.js", "Tailwind", "Cloudflare"],
  },
];

export const otherSkills: Skill[] = [
  {
    label: "Public Speaking",
    icon: Mic2,
    role: "Speaker, MC, and Community Communicator",
    summary:
      "I have experience speaking in front of diverse audiences through campus organization programs and church services. These experiences helped me build confidence in public communication, audience engagement, structured delivery, and clear message presentation.",
    highlights: [
      "Served as MC for several student association programs, including general meetings, department anniversary events, and first meetings for new committee members.",
      "Delivered sermons in church settings, focusing on clear message structure, audience connection, and confident public delivery.",
      "Experienced in guiding event flow, maintaining audience attention, and creating a professional atmosphere.",
      "Comfortable speaking in formal, semi-formal, and community-based environments.",
    ],
    tools: [
      "Public Speaking", "Event Hosting", "Audience Engagement",
      "Storytelling", "Message Structuring", "Leadership Communication",
    ],
  },
  {
    label: "Music Performance",
    icon: Music2,
    role: "Guitarist & Live Music Performer",
    summary:
      "Music has been part of how I build discipline, focus, and collaboration. I have experience performing as a guitarist in church services and campus events, especially in live music settings that require teamwork, timing, and stage awareness.",
    highlights: [
      "Served as a guitarist in church worship services.",
      "Performed as a guitarist for campus department events with live music sessions.",
      "Experienced in playing within a team, following song arrangements, and maintaining performance flow.",
      "Able to adapt to different event atmospheres, from worship settings to campus entertainment programs.",
      "Have basic skills in piano and cajon as supporting instruments.",
    ],
    tools: [
      "Acoustic Guitar", "Electric Guitar", "Basic Piano", "Basic Cajon",
      "Live Performance", "Team Collaboration", "Worship Music", "Event Music",
    ],
  },
  {
    label: "Video Editing",
    icon: Clapperboard,
    role: "PDD Coordinator, Editor & Concept Maker",
    summary:
      "I have experience as PDD (Publikasi, Dokumentasi, Dekorasi) for various campus events — leading the visual side from concept to final cut. I enjoy the part where pacing, typography, and sound design start to feel like one decision.",
    highlights: [
      "Coordinator of the PDD division for the campus Christmas event — produced teasers, edited short films, and built animated lyric/text sequences.",
      "Editor and concept maker for the PDD division of the campus Easter event.",
      "Comfortable owning a video from rough concept and storyboard through to color, motion text, and final delivery.",
    ],
    tools: ["After Effects", "Adobe Premiere", "CapCut"],
    links: [
      {
        label: "Add a link to a teaser or short film",
        href: "#",
        note: "Replace this href with a YouTube / Drive / Vimeo link",
      },
    ],
  },
];

export const projects = [
  {
    n: "01",
    title: "Sentinel Watch",
    blurb: "A lightweight network anomaly dashboard built around Suricata logs, written for a campus CTF post-mortem.",
    tags: ["Next.js", "Python", "Blue Team"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    credit: "Photo · Luke Chesser / Unsplash",
    github: null,
    live: null,
  },
  {
    n: "02",
    title: "Kelas Cair",
    blurb: "Real-time classroom collaboration tool with shared whiteboards and async voice notes for vocational schools.",
    tags: ["React", "WebRTC", "Supabase"],
    year: "2025",
    image: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    credit: "Photo · Kaleidico / Unsplash",
    github: null,
    live: null,
  },
  {
    n: "03",
    title: "Phish or Pass",
    blurb: "An educational micro-game that trains students to recognize phishing patterns through 60-second rounds.",
    tags: ["TypeScript", "Education", "Security"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    credit: "Photo · Stephen Phillips / Unsplash",
    github: null,
    live: null,
  },
  {
    n: "04",
    title: "Nada — Music Portfolio",
    blurb: "A minimalist site for showcasing my acoustic covers and original compositions with built-in waveform player.",
    tags: ["Astro", "WaveSurfer", "Design"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1647265194908-6815badcc397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    credit: "Photo · Harshveen Kalsi / Unsplash",
    github: null,
    live: null,
  },
];

export const footerLinks = [
  { label: "about me", href: "#/about" },
  { label: "projects", href: "#/projects" },
  { label: "blog", href: "#/blog" },
  { label: "contact me", href: "mailto:leonardjhth091@gmail.com" },
];

export const competitions = [
  {
    index: "01",
    name: "Cyber Academy — Penetration Testing Challenge",
    batch: "Batch 2",
    year: "2026",
    category: "Penetration Testing",
    organizer: "Cyber Academy",
    description:
      "Completed a structured penetration testing challenge against a target web application (PT Vulnapp). Delivered a full professional report covering vulnerability discovery, exploitation, risk rating, and remediation recommendations.",
    highlights: [
      "Performed black-box web application penetration test on PT Vulnapp",
      "Identified and documented vulnerabilities with CVSS scoring",
      "Produced a professional pentest report with proof-of-concept and mitigations",
    ],
    tags: ["Web AppSec", "Pentest", "Report Writing"],
    proofHref: pentestReportPdf,
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: "CTF Writeup" | "Bug Bounty" | "Research" | "General";
  excerpt: string;
  readingTime: string;
  tags: string[];
  content?: string;
};

export const blogPosts: BlogPost[] = [
  // Add your posts here. Example:
  // {
  //   slug: "my-first-ctf",
  //   title: "My First CTF: What I Learned from Finishing Last",
  //   date: "2026-04-01",
  //   category: "CTF Writeup",
  //   excerpt: "A breakdown of my first CTF experience...",
  //   readingTime: "5 min",
  //   tags: ["CTF", "Web", "Forensics"],
  // },
];

export const categoryColors: Record<BlogPost["category"], string> = {
  "CTF Writeup": "#c8a96a",
  "Bug Bounty": "#7fa67a",
  "Research": "#8a9fc8",
  "General": "#8a8a87",
};
