import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

export function GitHubStatImage({
  src,
  alt,
  fallbackTitle,
  compact = false,
}: {
  src: string;
  alt: string;
  fallbackTitle: string;
  compact?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={"flex w-full flex-col justify-center gap-3 p-6 " + (compact ? "min-h-[160px]" : "min-h-[220px]")}>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <Github className="h-4 w-4" strokeWidth={1.5} />
          GitHub
        </div>
        <div
          className="text-2xl tracking-tight text-foreground md:text-3xl"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
        >
          {fallbackTitle}
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          The live stats image could not load right now. Open the GitHub profile to view the latest activity.
        </p>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs text-foreground/85 transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
          View on GitHub
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-auto w-full"
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
