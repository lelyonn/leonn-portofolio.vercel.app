import { Github, Instagram, Linkedin } from "lucide-react";
import { footerLinks } from "../../data/portfolio";

export function SharedFooter() {
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
