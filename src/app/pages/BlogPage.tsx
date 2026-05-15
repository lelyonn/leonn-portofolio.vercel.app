import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";
import { blogPosts, categoryColors, type BlogPost } from "../data/portfolio";
import { SharedFooter } from "../components/layout/SharedFooter";
import type { Page } from "../types";

export function BlogPage({ navigate }: { navigate: (to: Page) => void }) {
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
                  Posts will appear here once added to the <code className="font-mono text-xs">blogPosts</code> array in data/portfolio.ts.
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
