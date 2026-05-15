import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight, Sparkle, Plus, Asterisk,
  Instagram, Linkedin, Github,
  Shield, Code2, Mic2, Music2, Terminal, Globe, Clapperboard, Flag, Bug,
  ExternalLink, X, ArrowLeft, MapPin, GraduationCap, Calendar,
} from "lucide-react";
import portraitPhoto from "@/imports/IMG_20260319_010547_345.jpg";
import pentestReportPdf from "@/imports/Pentest_Report_PTVulnapp_LeonardJonathanSaputra.pdf";

// ─── Types ───────────────────────────────────────────────────────────────────

type SkillLink = { label: string; href: string; note?: string };
type SubArea = {
  label: string;
  icon: LucideIcon;
  description?: string;
};
type Skill = {
  label: string;
  icon: LucideIcon;
  role: string;
  summary: string;
  highlights: string[];
  tools: string[];
  subAreas?: SubArea[];
  links?: SkillLink[];
};

// ─── Data ────────────────────────────────────────────────────────────────────

const techSkills: Skill[] = [
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
    tools: ["Burp Suite", "Wireshark", "Nmap", "Ghidra", "Kali", "TryHackMe", "HTB"],
    links: [
      {
        label: "See full project breakdowns & writeups",
        href: "#",
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
    tools: ["React", "Next.js", "Node.js", "Postgres", "Tailwind"],
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
    tools: ["Astro", "Next.js", "Vite", "Tailwind", "Cloudflare"],
  },
];

const otherSkills: Skill[] = [
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

const separators = [Sparkle, Plus, Asterisk];

const projects = [
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

const footerLinks = [
  { label: "about me", href: "#/about" },
  { label: "projects", href: "#/projects" },
  { label: "blog", href: "#/blog" },
  { label: "contact me", href: "mailto:leonardjhth091@gmail.com" },
];

// ─── Simple hash router ───────────────────────────────────────────────────────

type Page = "home" | "about" | "projects" | "blog";


function getHash(): string {
  try { return window.location.hash; } catch { return ""; }
}

function hashToPage(hash: string): Page {
  if (hash === "#/about") return "about";
  if (hash === "#/projects") return "projects";
  if (hash === "#/blog") return "blog";
  return "home";
}

function useRoute() {
  const [page, setPage] = useState<Page>(() => hashToPage(getHash()));

  const navigate = (to: Page) => {
    try {
      window.location.hash = to === "home" ? "#/" : `#/${to}`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {}
    setPage(to);
  };

  useEffect(() => {
    const onHash = () => setPage(hashToPage(getHash()));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return { page, navigate };
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [active, setActive] = useState<Skill | null>(null);
  const [hovered, setHovered] = useState<Skill | null>(null);
  const { page, navigate } = useRoute();
  return (
    <div className="min-h-screen w-full bg-background text-foreground" style={{ fontFamily: "var(--font-sans)" }}>
      <Nav page={page} navigate={navigate} />

      {page === "about"
        ? <AboutPage onSkillSelect={setActive} onSkillHover={setHovered} hoveredSkill={hovered} navigate={navigate} />
        : page === "projects"
        ? <ProjectsPage navigate={navigate} />
        : page === "blog"
        ? <BlogPage navigate={navigate} />
        : <HomePage onSkillSelect={setActive} onSkillHover={setHovered} hoveredSkill={hovered} navigate={navigate} />
      }

      <SkillDialog skill={active} onClose={() => setActive(null)} />

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-paused { animation-play-state: paused !important; }
        @keyframes dialog-in {
          from { opacity: 0; transform: translate(-50%, -48%) scale(0.97); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes preview-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .spin-slow { animation: spin-slow 12s linear infinite; }
      `}</style>
    </div>
  );
}

// ─── Shared Nav ───────────────────────────────────────────────────────────────

function Nav({ page, navigate }: { page: Page; navigate: (to: Page) => void }) {
  const goToConnect = () => {
    if (page === "about") {
      document.getElementById("lets-connect")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("about");
      setTimeout(() => {
        document.getElementById("lets-connect")?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <button
          onClick={() => navigate("home")}
          className="flex items-baseline gap-1 transition-opacity hover:opacity-80"
        >
          <span className="text-xl tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Yon
          </span>
          <span className="text-xl leading-none" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#c8a96a" }}>.</span>
        </button>

        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <button
            onClick={() => navigate("about")}
            className={"transition-colors hover:text-foreground " + (page === "about" ? "text-foreground" : "")}
          >
            about
          </button>
          <button
            onClick={() => navigate("projects")}
            className={"transition-colors hover:text-foreground " + (page === "projects" ? "text-foreground" : "")}
          >
            projects
          </button>
          <button
            onClick={() => navigate("blog")}
            className={"transition-colors hover:text-foreground " + (page === "blog" ? "text-foreground" : "")}
          >
            blog
          </button>
        </div>

        <button
          onClick={goToConnect}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm transition-colors hover:bg-foreground hover:text-background"
        >
          Let&apos;s talk
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
      </div>
    </header>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────

function HomePage({
  onSkillSelect, onSkillHover, hoveredSkill, navigate,
}: {
  onSkillSelect: (s: Skill) => void;
  onSkillHover: (s: Skill | null) => void;
  hoveredSkill: Skill | null;
  navigate: (to: Page) => void;
}) {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-120px] h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(200,169,106,0.18), transparent)" }}
        />

        <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-12 md:px-12 md:pt-28 md:pb-20">
          <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c8a96a]" />
            Portfolio — 2026 / Surakarta, ID
          </div>

          <h1
            className="max-w-5xl text-balance text-[44px] leading-[1.02] tracking-[-0.03em] md:text-[88px] lg:text-[104px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Leonard Jonathan{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontStyle: "italic", color: "#c8a96a" }}>
              Saputra
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            An informatics engineering student with a strong foundation in cyber security and full-stack development —
            building things that are equal parts curious and careful.
          </p>

          <div id="about" className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-[180px_1fr] md:gap-16">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">(01) About</div>
            <div className="max-w-3xl space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg">
              <p>
                I&apos;m a vocational informatics student based in Indonesia, currently sharpening my craft at the intersection
                of <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>offensive security</span> and
                modern web engineering. I like understanding how systems break — and then designing the ones that hold.
              </p>
              <p>
                Away from the terminal you&apos;ll find me on a stage rather than behind one: I speak in front of student
                communities, play guitar in small ensembles, and occasionally write about the strange edges of the web.
                I&apos;m looking for collaborators who care about details and ship anyway.
              </p>
              <p className="flex flex-wrap items-center gap-3 pt-2 text-sm">
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-muted-foreground">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c8a96a]" />
                  Tap any skill below to read more about that role
                </span>
                <button
                  onClick={() => navigate("about")}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  Full story
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </p>
            </div>
          </div>
        </div>

        <SkillMarquee
          eyebrow="Engineering & Security"
          skills={techSkills}
          direction="left"
          emphasis
          speed={40}
          onSelect={onSkillSelect}
          onHover={onSkillHover}
        />
        <SkillPreview skill={hoveredSkill} />
        <SkillMarquee
          eyebrow="Off the Keyboard"
          skills={otherSkills}
          direction="right"
          speed={48}
          muted
          onSelect={onSkillSelect}
        />
      </section>

      {/* PROJECTS */}
      <section id="work" className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">(02) Selected work</div>
              <h2
                className="text-balance text-3xl tracking-[-0.02em] md:text-5xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Things I&apos;ve been{" "}
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>tinkering</span>{" "}
                with.
              </h2>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.n} className="group relative flex flex-col bg-background transition-colors hover:bg-card">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground/90 backdrop-blur">
                    {p.n} — {p.year}
                  </span>
                  <span className="absolute bottom-3 right-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80">
                    {p.credit}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-6 p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="text-2xl tracking-tight md:text-3xl"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      {p.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80">{t}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {p.github && (
                      <a
                        href={p.github} target="_blank" rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      >
                        <Github className="h-3.5 w-3.5" strokeWidth={1.75} /> GitHub
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live} target="_blank" rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      >
                        <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} /> Live preview
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={() => navigate("projects")}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <span className="h-px w-10 bg-border transition-all group-hover:w-16 group-hover:bg-foreground" />
              check out more projects at{" "}
              <span className="text-foreground" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>/projects</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">(03) Writing</div>
              <h2
                className="text-balance text-3xl tracking-[-0.02em] md:text-5xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                From the{" "}
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>notebook.</span>
              </h2>
            </div>
            <button
              onClick={() => navigate("blog")}
              className="group hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground md:inline-flex"
            >
              <span className="h-px w-8 bg-border transition-all group-hover:w-12 group-hover:bg-foreground" />
              all posts
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-dashed border-border">
            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
              <div
                className="text-4xl tracking-tight text-foreground/15"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                &ldquo;&rdquo;
              </div>
              <p
                className="text-lg text-muted-foreground"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                First post loading&hellip;
              </p>
              <button
                onClick={() => navigate("blog")}
                className="group mt-2 inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                Go to the blog
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────

const competitions = [
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



function AboutPage({
  onSkillSelect, onSkillHover, hoveredSkill, navigate,
}: {
  onSkillSelect: (s: Skill) => void;
  onSkillHover: (s: Skill | null) => void;
  hoveredSkill: Skill | null;
  navigate: (to: Page) => void;
}) {
  return (
    <>
      {/* Hero ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[60%] top-[-80px] h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(200,169,106,0.22), transparent)" }}
        />

        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20 md:px-12 md:pt-24 md:pb-28">
          <button
            onClick={() => navigate("home")}
            className="group mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </button>

          <div className="grid gap-16 md:grid-cols-[1fr_360px] md:gap-24 lg:grid-cols-[1fr_420px]">
            <div>
              <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c8a96a]" />
                About me
              </div>

              <h1
                className="text-balance text-[42px] leading-[1.05] tracking-[-0.03em] md:text-[64px] lg:text-[76px]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                I make things{" "}
                <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontStyle: "italic", color: "#c8a96a" }}>
                  careful
                </span>
                <br />and curious.
              </h1>

              <div className="mt-10 space-y-5 text-base leading-[1.75] text-foreground/80 md:text-lg">
                <p>
                  My name is Leonard Jonathan Saputra — most people call me{" "}
                  <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>Yon</span>. I&apos;m a vocational
                  informatics student from Surakarta, Indonesia, studying at the intersection of offensive security
                  and modern web engineering.
                </p>
                <p>
                  I got into security the way most people do: I broke something I wasn&apos;t supposed to, and instead of
                  panicking I got curious. Since then I&apos;ve been methodically learning how systems fail — so I can help
                  them fail less, or help the right people understand when they&apos;ve been failed.
                </p>
                <p>
                  Outside of a screen I&apos;m a guitarist, an MC, a church speaker, and occasional video editor. These
                  aren&apos;t side interests — they&apos;re the same practice of showing up prepared, reading a room, and
                  making something feel considered.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  { Icon: MapPin, text: "Surakarta, Indonesia" },
                  { Icon: GraduationCap, text: "Informatics Engineering" },
                  { Icon: Calendar, text: "Open to opportunities" },
                ].map(({ Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#c8a96a]" strokeWidth={1.75} />
                    {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Portrait card */}
            <div className="relative">
              <div className="sticky top-28">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card aspect-[3/4]">
                  <img
                    src={portraitPhoto}
                    alt="Leonard Jonathan Saputra"
                    className="h-full w-full object-cover object-top"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-background/10 to-transparent"
                  />
                  {/* Gold accent ring */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#c8a96a]/20 spin-slow"
                  />
                </div>

                {/* Stat chips below portrait */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    { value: "4+", label: "Projects shipped" },
                    { value: "3", label: "Skill domains" },
                    { value: "CTF", label: "Active competitor" },
                    { value: "UTC+7", label: "Surakarta, ID" },
                  ].map(({ value, label }) => (
                    <div key={label} className="rounded-xl border border-border bg-card p-4 text-center">
                      <div
                        className="text-2xl tracking-tight"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#c8a96a" }}
                      >
                        {value}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote ---------------------------------------------------------- */}
      <section className="border-b border-border bg-card/20">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <p
            className="mx-auto max-w-4xl text-center text-2xl leading-[1.4] tracking-[-0.01em] text-foreground/90 md:text-4xl"
            style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}
          >
            &ldquo;I like systems the same way I like music — the theory is there so you know exactly when
            to break it, and the discipline is what makes the break feel intentional.&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="h-px w-10 bg-border" />
            Leonard Jonathan Saputra
            <span className="h-px w-10 bg-border" />
          </div>
        </div>
      </section>

      {/* Competitions -------------------------------------------------------- */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="mb-14 grid gap-6 md:grid-cols-[180px_1fr] md:gap-16">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">(02) Competitions</div>
            <div>
              <h2
                className="text-2xl tracking-[-0.02em] md:text-4xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Challenges I&apos;ve{" "}
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>taken on.</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-16">
            <div />
            <div className="space-y-6">
              {competitions.map((c) => (
                <div
                  key={c.index}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:bg-card"
                >
                  {/* Gold accent top bar */}
                  <div className="h-px w-full bg-gradient-to-r from-[#c8a96a]/60 via-[#c8a96a]/20 to-transparent" />

                  <div className="p-8 md:p-10">
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                          <span
                            className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]"
                            style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                          >
                            {c.organizer}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-border" />
                          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{c.batch}</span>
                          <span className="h-1 w-1 rounded-full bg-border" />
                          <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{c.year}</span>
                        </div>

                        <h3
                          className="text-xl tracking-tight md:text-2xl"
                          style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                        >
                          {c.name}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                          {c.description}
                        </p>

                        <ul className="mt-5 space-y-2">
                          {c.highlights.map((h) => (
                            <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                              <span className="mt-2 inline-block h-1 w-3 flex-shrink-0 bg-[#c8a96a]" />
                              {h}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap items-center gap-3">
                          <div className="flex flex-wrap gap-2">
                            {c.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <a
                            href={c.proofHref}
                            target="_blank"
                            rel="noreferrer"
                            className="group/btn ml-auto inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                          >
                            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
                            View report
                          </a>
                        </div>
                      </div>

                      {/* Index badge */}
                      <div
                        className="flex-shrink-0 text-5xl tracking-tight text-border transition-colors group-hover:text-[#c8a96a]/20 md:text-6xl"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                      >
                        {c.index}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* GitHub Stats -------------------------------------------------------- */}
      <section className="border-b border-border bg-card/20">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 md:py-28">
          <div className="mb-14 grid gap-6 md:grid-cols-[180px_1fr] md:gap-16">
            <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">(03) GitHub</div>
            <div className="flex items-end justify-between gap-4">
              <h2
                className="text-2xl tracking-[-0.02em] md:text-4xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
              >
                Live{" "}
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}>contributions.</span>
              </h2>
              <a
                href="https://github.com/lelyonn"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex flex-shrink-0 items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
                @lelyonn
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-16">
            <div />
            <div className="space-y-4">
              {/* Stats + Languages row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="https://github.com/lelyonn"
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-foreground/20"
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=lelyonn&show_icons=true&hide_border=true&bg_color=0a0a0b&title_color=c8a96a&text_color=8a8a87&icon_color=c8a96a&ring_color=c8a96a&include_all_commits=true&count_private=true"
                    alt="GitHub stats for lelyonn"
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://github.com/lelyonn"
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-foreground/20"
                >
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=lelyonn&layout=compact&hide_border=true&bg_color=0a0a0b&title_color=c8a96a&text_color=8a8a87&langs_count=6"
                    alt="Top languages for lelyonn"
                    className="h-auto w-full"
                    loading="lazy"
                  />
                </a>
              </div>

              {/* Streak */}
              <a
                href="https://github.com/lelyonn"
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-foreground/20"
              >
                <img
                  src="https://streak-stats.demolab.com/?user=lelyonn&hide_border=true&background=0a0a0b&stroke=ffffff14&ring=c8a96a&fire=c8a96a&currStreakLabel=c8a96a&sideLabels=8a8a87&dates=8a8a87&sideNums=f5f5f4&currStreakNum=f5f5f4"
                  alt="GitHub streak for lelyonn"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </a>

              {/* Contribution graph */}
              <a
                href="https://github.com/lelyonn"
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-foreground/20"
              >
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=lelyonn&bg_color=0a0a0b&color=8a8a87&line=c8a96a&point=c8a96a&area=true&area_color=c8a96a&hide_border=true&custom_title=Contribution+Activity"
                  alt="GitHub contribution graph for lelyonn"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA ----------------------------------------------------------------- */}
      <section id="lets-connect" className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              (03) Let&apos;s connect
            </div>
            <h2
              className="mb-12 text-balance text-4xl tracking-[-0.03em] md:text-5xl"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              Wanna talk? or just{" "}
              <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontStyle: "italic", color: "#c8a96a" }}>
                finding me around?
              </span>
            </h2>

            <div className="divide-y divide-dashed divide-border overflow-hidden rounded-2xl border border-dashed border-border">
              {/* Email */}
              <a
                href="mailto:leonardjhth091@gmail.com"
                className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-card"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </span>
                  <span className="text-sm text-foreground/80" style={{ fontFamily: "var(--font-display)" }}>email</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#c8a96a] transition-colors group-hover:text-[#d4b97a]">
                    leonardjhth091@gmail.com
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8a96a]" strokeWidth={1.75} />
                </div>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/users/437897372610330625"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-card"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </span>
                  <span className="text-sm text-foreground/80" style={{ fontFamily: "var(--font-display)" }}>discord</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#c8a96a] transition-colors group-hover:text-[#d4b97a]">
                    @velkyy.
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8a96a]" strokeWidth={1.75} />
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/leonardjhthh"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-card"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground">
                    <Instagram className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm text-foreground/80" style={{ fontFamily: "var(--font-display)" }}>instagram</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#c8a96a] transition-colors group-hover:text-[#d4b97a]">@leonardjhthh</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8a96a]" strokeWidth={1.75} />
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/leonard-jonathan-s-a7a113324/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-card"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground">
                    <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm text-foreground/80" style={{ fontFamily: "var(--font-display)" }}>linkedin</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#c8a96a] transition-colors group-hover:text-[#d4b97a]">leonard-jonathan-s</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8a96a]" strokeWidth={1.75} />
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/lelyonn"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-card"
              >
                <div className="flex items-center gap-4">
                  <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-foreground/30 group-hover:text-foreground">
                    <Github className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <span className="text-sm text-foreground/80" style={{ fontFamily: "var(--font-display)" }}>github</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#c8a96a] transition-colors group-hover:text-[#d4b97a]">@lelyonn</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#c8a96a]" strokeWidth={1.75} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}

// ─── Blog data ────────────────────────────────────────────────────────────────

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: "CTF Writeup" | "Bug Bounty" | "Research" | "General";
  excerpt: string;
  readingTime: string;
  tags: string[];
  content?: string;
};

const blogPosts: BlogPost[] = [
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

const categoryColors: Record<BlogPost["category"], string> = {
  "CTF Writeup": "#c8a96a",
  "Bug Bounty": "#7fa67a",
  "Research": "#8a9fc8",
  "General": "#8a8a87",
};

// ─── Blog Page ────────────────────────────────────────────────────────────────

function BlogPage({ navigate }: { navigate: (to: Page) => void }) {
  const [selected, setSelected] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "CTF Writeup", "Bug Bounty", "Research", "General"];
  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  if (selected) {
    return <BlogPostView post={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-[-60px] h-[400px] w-[600px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(200,169,106,0.2), transparent)" }}
        />

        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20 md:px-12 md:pt-24 md:pb-28">
          <button
            onClick={() => navigate("home")}
            className="group mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </button>

          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">Writing</div>
          <h1
            className="max-w-3xl text-balance text-[42px] leading-[1.05] tracking-[-0.03em] md:text-[64px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Writeups &amp;{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontStyle: "italic", color: "#c8a96a" }}>
              thoughts.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            CTF walkthroughs, bug bounty notes, security research, and the occasional opinion piece.
          </p>

          {/* Category filter */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={
                  "rounded-full border px-4 py-1.5 text-sm transition-colors " +
                  (activeCategory === cat
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground")
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
          {filtered.length === 0 ? (
            <div className="overflow-hidden rounded-2xl border border-dashed border-border">
              <div className="flex flex-col items-center justify-center gap-5 py-28 text-center">
                <div
                  className="text-6xl tracking-tight text-foreground/10"
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  &ldquo;&rdquo;
                </div>
                <p
                  className="text-xl text-muted-foreground"
                  style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                >
                  Nothing here yet.
                </p>
                <p className="max-w-xs text-sm text-muted-foreground/70">
                  Posts will appear here once added to the <code className="font-mono text-xs">blogPosts</code> array in App.tsx.
                </p>
                <div className="mt-2 overflow-hidden rounded-xl border border-border bg-card px-5 py-4 text-left">
                  <div className="text-xs text-muted-foreground/60 mb-2 uppercase tracking-[0.18em]">Quick start</div>
                  <pre className="text-xs text-foreground/70 leading-relaxed">{`{
  slug: "my-first-post",
  title: "Post title here",
  date: "2026-05-15",
  category: "CTF Writeup",
  excerpt: "A short summary...",
  readingTime: "4 min",
  tags: ["CTF", "Web"],
  content: "Full markdown here...",
}`}</pre>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-px overflow-hidden rounded-2xl border border-border">
              {filtered.map((post) => (
                <button
                  key={post.slug}
                  onClick={() => setSelected(post)}
                  className="group w-full border-b border-border bg-background p-6 text-left transition-colors last:border-0 hover:bg-card md:p-8"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className="rounded-full px-2.5 py-0.5 text-xs"
                          style={{
                            background: categoryColors[post.category] + "18",
                            color: categoryColors[post.category],
                          }}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="text-xs text-muted-foreground">{post.readingTime} read</span>
                      </div>
                      <h3
                        className="text-xl tracking-tight md:text-2xl"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {post.tags.map((t) => (
                          <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-foreground/70">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <SharedFooter />
    </>
  );
}

function BlogPostView({ post, onBack }: { post: BlogPost; onBack: () => void }) {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[860px] px-6 pt-16 pb-12 md:px-12 md:pt-24">
          <button
            onClick={onBack}
            className="group mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            All posts
          </button>

          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-xs"
              style={{
                background: categoryColors[post.category] + "18",
                color: categoryColors[post.category],
              }}
            >
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
            <span className="text-xs text-muted-foreground">{post.readingTime} read</span>
          </div>

          <h1
            className="text-balance text-[36px] leading-[1.1] tracking-[-0.025em] md:text-[52px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[860px] px-6 py-12 md:px-12 md:py-16">
          {post.content ? (
            <div
              className="prose prose-invert max-w-none text-foreground/85"
              style={{ fontFamily: "var(--font-sans)", lineHeight: 1.8 }}
            >
              <pre className="whitespace-pre-wrap text-base leading-relaxed text-foreground/85">{post.content}</pre>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <p
                className="text-xl text-muted-foreground"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                Content coming soon.
              </p>
              <p className="text-sm text-muted-foreground/60">
                Add a <code className="font-mono text-xs">content</code> field to this post in <code className="font-mono text-xs">blogPosts</code>.
              </p>
            </div>
          )}
        </div>
      </section>

      <SharedFooter />
    </>
  );
}

// ─── Projects Page ────────────────────────────────────────────────────────────

function ProjectsPage({ navigate }: { navigate: (to: Page) => void }) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-80px] h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(200,169,106,0.2), transparent)" }}
        />

        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20 md:px-12 md:pt-24 md:pb-28">
          <button
            onClick={() => navigate("home")}
            className="group mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </button>

          <div className="mb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">All projects</div>
          <h1
            className="max-w-3xl text-balance text-[42px] leading-[1.05] tracking-[-0.03em] md:text-[64px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
          >
            Things I&apos;ve{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontStyle: "italic", color: "#c8a96a" }}>
              built
            </span>{" "}
            &amp; broken.
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            A running list of projects — personal, academic, and everything in between. Each one taught me something.
          </p>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.n} className="group relative flex flex-col bg-background transition-colors hover:bg-card">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"
                  />
                  <span className="absolute left-4 top-4 rounded-full border border-border/70 bg-background/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground/90 backdrop-blur">
                    {p.n} — {p.year}
                  </span>
                  <span className="absolute bottom-3 right-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80">
                    {p.credit}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-6 p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      className="text-2xl tracking-tight md:text-3xl"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}
                    >
                      {p.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80">{t}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {p.github && (
                      <a
                        href={p.github} target="_blank" rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      >
                        <Github className="h-3.5 w-3.5" strokeWidth={1.75} /> GitHub
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live} target="_blank" rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
                      >
                        <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} /> Live preview
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty slot — add more projects here */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-dashed border-border">
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <div
                className="text-3xl tracking-tight text-foreground/20"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                +
              </div>
              <p
                className="text-base text-muted-foreground"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                More projects coming soon
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground/60">
                Add entries to the <code className="font-mono text-[10px]">projects</code> array in App.tsx
              </p>
            </div>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}

// ─── Shared Footer ────────────────────────────────────────────────────────────

function SharedFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl tracking-tight md:text-6xl" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                Yon
              </span>
              <span className="text-5xl leading-none md:text-6xl" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#c8a96a" }}>.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Currently open to internships, collaborations, and a good conversation about security or the web.
            </p>
          </div>

          <div>
            <div className="mb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">Navigate</div>
            <ul className="space-y-3">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-base text-foreground/85 hover:text-foreground"
                  >
                    <span className="text-muted-foreground transition-colors group-hover:text-[#c8a96a]">→</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">Elsewhere</div>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/leonardjhthh", label: "Instagram" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/leonard-jonathan-s-a7a113324/", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/lelyonn", label: "GitHub" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© 2026 Leonard Jonathan Saputra. Built quietly in Surakarta.</span>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
            &ldquo;break things kindly, build things carefully.&rdquo;
          </span>
        </div>
      </div>
    </footer>
  );
}

// ─── Shared components ────────────────────────────────────────────────────────

function SkillMarquee({
  eyebrow, skills, direction = "left", speed = 40, emphasis = false, muted = false, onSelect, onHover,
}: {
  eyebrow: string;
  skills: Skill[];
  direction?: "left" | "right";
  speed?: number;
  emphasis?: boolean;
  muted?: boolean;
  onSelect: (s: Skill) => void;
  onHover?: (s: Skill | null) => void;
}) {
  const loop = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className={"relative border-t border-border " + (muted ? "bg-background" : "bg-card/30")}>
      <div className="mx-auto flex max-w-[1400px] items-center gap-3 px-6 pt-5 text-xs uppercase tracking-[0.22em] text-muted-foreground md:px-12">
        <span className={"inline-block h-1.5 w-1.5 rounded-full " + (emphasis ? "bg-[#c8a96a]" : "bg-muted-foreground/60")} />
        {eyebrow}
        <span className="ml-auto hidden text-[10px] tracking-[0.18em] text-muted-foreground/70 md:inline">
          hover a skill to highlight · click to read
        </span>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      <div className="overflow-hidden py-6">
        <div
          className="flex w-max items-center gap-10 whitespace-nowrap"
          style={{ animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${speed}s linear infinite` }}
        >
          {loop.map((s, i) => {
            const Sep = separators[i % separators.length];
            return (
              <div key={i} className="flex items-center gap-10">
                <button
                  type="button"
                  onClick={() => onSelect(s)}
                  onMouseEnter={() => onHover?.(s)}
                  onMouseLeave={() => onHover?.(null)}
                  onFocus={() => onHover?.(s)}
                  onBlur={() => onHover?.(null)}
                  aria-label={`Read about ${s.label}`}
                  className={
                    "group/chip flex items-center gap-3 rounded-md px-3 py-1.5 transition-colors duration-200 cursor-pointer " +
                    "hover:bg-foreground hover:text-background " +
                    (muted ? "text-foreground/60" : "text-foreground/90")
                  }
                >
                  <s.icon className="h-5 w-5 transition-transform group-hover/chip:-rotate-6" strokeWidth={1.5} />
                  <span
                    className={(muted ? "text-lg md:text-xl" : "text-xl md:text-2xl") + " tracking-tight"}
                    style={{
                      fontFamily: muted ? "var(--font-serif)" : "var(--font-display)",
                      fontWeight: muted ? 400 : 500,
                      fontStyle: muted ? "italic" : "normal",
                    }}
                  >
                    {s.label}
                  </span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover/chip:opacity-100 group-hover/chip:-translate-y-0.5 group-hover/chip:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </button>
                <Sep className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SkillPreview({ skill }: { skill: Skill | null }) {
  const Icon = skill?.icon;
  return (
    <div className="relative border-t border-border bg-card/20">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-12 md:py-14">
        <div
          key={skill?.label ?? "empty"}
          className="min-h-[180px]"
          style={{ animation: "preview-in 320ms cubic-bezier(0.2, 0.9, 0.2, 1)" }}
        >
          {skill && Icon ? (
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex items-center justify-center gap-2.5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <Icon className="h-4 w-4" strokeWidth={1.5} />
                {skill.role}
              </div>
              <h3
                className="text-balance text-4xl tracking-[-0.02em] md:text-6xl"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                {skill.label}
              </h3>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {skill.summary}
              </p>
              <div className="mt-7 flex flex-wrap items-start justify-center gap-x-8 gap-y-5">
                {skill.tools.map((t) => (
                  <div key={t} className="flex flex-col items-center gap-2">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background">
                      <span className="text-sm tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                        {t.slice(0, 2)}
                      </span>
                    </span>
                    <span className="text-xs text-muted-foreground">{t}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">
                Click the chip to read the full breakdown
              </div>
            </div>
          ) : (
            <div className="mx-auto max-w-xl text-center text-sm text-muted-foreground">
              <span
                className="block text-2xl tracking-tight text-foreground/40 md:text-3xl"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400 }}
              >
                hover a skill above
              </span>
              <span className="mt-2 inline-block text-xs uppercase tracking-[0.22em] text-muted-foreground/60">
                to preview the role
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SkillDialog({ skill, onClose }: { skill: Skill | null; onClose: () => void }) {
  const open = skill !== null;
  const Icon = skill?.icon;

  return (
    <Dialog.Root open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm"
          style={{ animation: "overlay-in 200ms ease-out" }}
        />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl focus:outline-none"
          style={{ animation: "dialog-in 220ms cubic-bezier(0.2, 0.9, 0.2, 1)" }}
        >
          {skill && Icon && (
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-50 blur-3xl"
                style={{ background: "radial-gradient(closest-side, rgba(200,169,106,0.22), transparent)" }}
              />
              <div className="relative flex items-start justify-between gap-4 border-b border-border px-7 py-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background">
                    <Icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                  </span>
                  <div>
                    <Dialog.Title
                      className="text-2xl tracking-tight"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                    >
                      {skill.label}
                    </Dialog.Title>
                    <div className="text-sm text-[#c8a96a]" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                      {skill.role}
                    </div>
                  </div>
                </div>
                <Dialog.Close
                  aria-label="Close"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </Dialog.Close>
              </div>

              <div className="relative max-h-[70vh] overflow-y-auto px-7 py-6">
                <Dialog.Description className="text-base leading-relaxed text-foreground/85">
                  {skill.summary}
                </Dialog.Description>

                <div className="mt-6">
                  <div className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Highlights</div>
                  <ul className="space-y-2.5">
                    {skill.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                        <span className="mt-2 inline-block h-1 w-3 flex-shrink-0 bg-[#c8a96a]" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {skill.subAreas && skill.subAreas.length > 0 && (
                  <div className="mt-6 border-t border-border pt-5">
                    <div className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Focus areas</div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {skill.subAreas.map((sa) => {
                        const SAIcon = sa.icon;
                        return (
                          <div key={sa.label} className="rounded-xl border border-border bg-background p-4 transition-colors hover:border-foreground/40">
                            <div className="mb-2 flex items-center gap-2.5">
                              <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-card">
                                <SAIcon className="h-4 w-4 text-foreground" strokeWidth={1.5} />
                              </span>
                              <span className="text-base tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                                {sa.label}
                              </span>
                            </div>
                            {sa.description && <p className="text-xs leading-relaxed text-muted-foreground">{sa.description}</p>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="mt-6 border-t border-border pt-5">
                  <div className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Tools & stack</div>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((t) => (
                      <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/80">{t}</span>
                    ))}
                  </div>
                </div>

                {skill.links && skill.links.length > 0 && (
                  <div className="mt-6 border-t border-border pt-5">
                    <div className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Selected work & proof</div>
                    <ul className="space-y-2">
                      {skill.links.map((l) => (
                        <li key={l.label}>
                          <a
                            href={l.href} target="_blank" rel="noreferrer"
                            className="group/link flex items-start justify-between gap-3 rounded-lg border border-border bg-background px-4 py-3 transition-colors hover:border-foreground"
                          >
                            <div className="min-w-0">
                              <div className="text-sm tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
                                {l.label}
                              </div>
                              {l.note && <div className="mt-0.5 truncate text-xs text-muted-foreground">{l.note}</div>}
                            </div>
                            <ArrowUpRight
                              className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-all group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-foreground"
                              strokeWidth={1.75}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
