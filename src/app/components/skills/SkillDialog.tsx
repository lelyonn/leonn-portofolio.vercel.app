import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X } from "lucide-react";
import type { Skill } from "../../types";

export function SkillDialog({ skill, onClose }: { skill: Skill | null; onClose: () => void }) {
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
