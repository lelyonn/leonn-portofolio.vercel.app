import { ArrowUpRight } from "lucide-react";
import type { Page } from "../../types";

export function Nav({ page, navigate }: { page: Page; navigate: (to: Page) => void }) {
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
