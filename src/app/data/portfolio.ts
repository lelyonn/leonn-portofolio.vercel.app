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
        label: "See my full project here",
        href: "/#/projects",
        note: "Project i create about cyber security",
      },
      {
        label: "Read my security-focused blog posts",
        href: "/#/blog",
        note: "CTF writeups, bug bounty reports, and lab notes",
      }
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
        label: "Watch Event Documentation",
        href: "https://drive.google.com/file/d/1yyPnyfp4ONpqAeJDky0uCTrrfn1_mG4X/view?usp=sharing",
        note: "Campus Easter event video documentation.",
      },
    ],
  },
];

type Project = {
  n: string;
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  image: string;
  credit: string;
  github: string | null;
  live: string | null;
};

export const projects: Project[] = [
 // {
  //  n: "01",
  //  title: "COMING SOON!",
  //  blurb: "sABAR YAH",
  //  tags: ["BRB",],
   // year: "2025",
  //  image: "",
   // credit: "Photo ",
   // github: null,
   // live: null,
  //},
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
  proofHref?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "cyber-academy-penetration-testing-challenge",
    title: "Web Vulnerability Writeup: Cyber Academy's PT Vulnapp Challenge",
    date: "17-04-2026",
    category: "CTF Writeup",
    excerpt:
      "A penetration testing writeup based on Cyber Academy's PT Vulnapp Challenge, covering vulnerability discovery, exploitation, risk rating, and remediation.",
    readingTime: "4 min",
    tags: ["CTF", "Web", "Pentest"],
    content: `
# Web Vulnerability Writeup: Cyber Academy's PT Vulnapp Challenge

## Overview

This writeup summarizes my penetration testing report for PT Vulnapp, a vulnerable job portal web application used in the Cyber Academy Penetration Testing Challenge.

The assessment was conducted on 17 April 2026 - 18 April 2026 using a grey-box testing approach. The main objective was to identify, validate, and document security weaknesses that could affect the confidentiality, integrity, and availability of the application.

Target application:

\`\`\`txt
https://jobportal.vulnapp.id
\`\`\`

## Scope

The assessment focused on the main web application and several critical security areas, including:

- Authentication bypass
- Account takeover risk
- SQL Injection
- Sensitive data exposure
- File upload security
- Access control
- Session management
- Security header configuration
- Information disclosure

## Methodology

The test followed a structured penetration testing workflow:

1. Reconnaissance and application mapping
2. Parameter analysis and request interception
3. Fuzzing and exploitation
4. Risk assessment using CVSS
5. Documentation and remediation planning

## Summary of Findings

The assessment identified 10 vulnerabilities in total.

| Severity | Total |
|---|---:|
| Critical | 4 |
| High | 2 |
| Medium | 3 |
| Low | 1 |

The most critical issues were SQL Injection, sensitive data exposure, and unrestricted file upload.

## Vulnerability List

| No | Finding | Severity | Status |
|---:|---|---|---|
| 1 | SQL Injection - Login Bypass | Critical | Open |
| 2 | SQL Injection - Error Based | Critical | Open |
| 3 | Time-Based Blind SQL Injection - Search Job | Critical | Open |
| 4 | Sensitive Data Exposure | Critical | Open |
| 5 | Unrestricted File Upload - Stored Arbitrary File | High | Open |
| 6 | Insecure Direct Object Reference - Job Enumeration | High | Open |
| 7 | Insecure Session Termination | Medium | Open |
| 8 | Weak Password Policy | Medium | Open |
| 9 | Missing Security Headers | Medium | Open |
| 10 | Information Disclosure - Nginx Version | Low | Open |

## Key Findings

### SQL Injection - Login Bypass

The login form was vulnerable to SQL Injection. This allowed authentication logic to be bypassed and could let an attacker access the system without valid credentials.

Impact:

- Unauthorized administrator access
- Sensitive user data exposure
- Potential data manipulation
- Business and reputation risk

Recommendation:

Use parameterized queries or prepared statements for all database interactions.

### SQL Injection - Error Based

The application returned detailed database error messages when invalid input was submitted.

Impact:

- Database error disclosure
- Easier reconnaissance
- Higher risk of chained attacks

Recommendation:

Disable detailed database errors in public responses and use custom error handling.

### Time-Based Blind SQL Injection

The job search feature was vulnerable to time-based blind SQL Injection. Attackers could infer database behavior by measuring response delay.

Impact:

- Potential database extraction
- Sensitive data leakage
- Critical confidentiality risk

Recommendation:

Use prepared statements, strict input validation, and safe query handling.

### Sensitive Data Exposure

The application exposed sensitive profile data through response body and cookie-related behavior.

Impact:

- User credential exposure
- Account takeover risk
- Severe confidentiality failure

Recommendation:

Never return password values to the client. Remove sensitive fields from responses and store passwords using secure hashing.

### Unrestricted File Upload

The profile image upload feature allowed arbitrary file uploads without strict server-side validation.

Impact:

- Potential remote code execution
- Server compromise risk
- Infrastructure takeover risk

Recommendation:

Allow only safe image types, validate file content, rename uploaded files, and store uploads in a non-executable directory.

### Insecure Direct Object Reference

The job detail endpoint used predictable numeric IDs, allowing enumeration of job records.

Impact:

- Unauthorized access to job data
- Data scraping risk
- Possible exposure of private or unpublished records

Recommendation:

Use UUIDs or non-predictable identifiers and enforce server-side authorization checks.

### Insecure Session Termination

The logout process did not properly invalidate the session on the server side.

Impact:

- Session hijacking risk
- Persistent access after logout
- Weak session lifecycle management

Recommendation:

Invalidate sessions on logout, apply session timeout, and expire cookies properly.

### Weak Password Policy

The registration feature allowed weak passwords.

Impact:

- Brute force risk
- Dictionary attack risk
- Higher account takeover possibility

Recommendation:

Enforce strong password rules on the server side and block common passwords.

### Missing Security Headers

The application did not configure important browser security headers such as Content-Security-Policy and X-Frame-Options.

Impact:

- Clickjacking risk
- Weaker browser-side protection
- Higher exposure to client-side attacks

Recommendation:

Configure security headers such as:

\`\`\`txt
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none';
\`\`\`

### Information Disclosure - Nginx Version

The server exposed version information through response headers.

Impact:

- Easier reconnaissance
- More accurate exploit targeting
- Avoidable information disclosure

Recommendation:

Disable server version disclosure using:

\`\`\`txt
server_tokens off;
\`\`\`

## Lessons Learned

This challenge helped me understand that penetration testing is not only about finding vulnerabilities. A useful security assessment must also explain impact, prioritize risk, and provide remediation steps that developers can apply.

The most valuable lessons from this assessment were:

- How to validate vulnerabilities with structured evidence
- How to classify findings based on technical and business impact
- How to write professional remediation advice
- How to communicate security risk clearly

## Skills Practiced

Through this challenge, I practiced:

- Web application penetration testing
- SQL Injection testing
- Access control analysis
- Session security review
- File upload security testing
- Security header review
- CVSS-based risk assessment
- Technical report writing

## Final Note

This is a public summary of the assessment. The full technical report is available in PDF format through the attached writeup link.
`,
    proofHref: pentestReportPdf,
  },
];

export const categoryColors: Record<BlogPost["category"], string> = {
  "CTF Writeup": "#c8a96a",
  "Bug Bounty": "#7fa67a",
  "Research": "#8a9fc8",
  "General": "#8a8a87",
};
