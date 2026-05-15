import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolio";
import { SharedFooter } from "../components/layout/SharedFooter";
import type { Page } from "../types";

export function ProjectsPage({ navigate }: { navigate: (to: Page) => void }) {
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
                Add entries to the <code className="font-mono text-[10px]">projects</code> array in data/portfolio.ts
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
