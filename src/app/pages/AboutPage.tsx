import { ArrowLeft, ArrowUpRight, Calendar, ExternalLink, Github, GraduationCap, Instagram, Linkedin, MapPin } from "lucide-react";
import portraitPhoto from "@/imports/IMG_20260319_010547_345.jpg";
import { competitions, otherSkills, techSkills } from "../data/portfolio";
import { SharedFooter } from "../components/layout/SharedFooter";
import { SkillMarquee } from "../components/skills/SkillMarquee";
import { SkillPreview } from "../components/skills/SkillPreview";
import type { Page, Skill } from "../types";

export function AboutPage({
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
