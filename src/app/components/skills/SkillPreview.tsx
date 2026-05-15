import type { Skill } from "../../types";

export function SkillPreview({ skill }: { skill: Skill | null }) {
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
