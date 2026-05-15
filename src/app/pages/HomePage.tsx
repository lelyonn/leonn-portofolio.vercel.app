import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { otherSkills, projects, techSkills } from "../data/portfolio";
import { SharedFooter } from "../components/layout/SharedFooter";
import { SkillMarquee } from "../components/skills/SkillMarquee";
import { SkillPreview } from "../components/skills/SkillPreview";
import type { Page, Skill } from "../types";

export function HomePage({
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
