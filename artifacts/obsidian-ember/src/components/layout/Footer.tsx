import { activeSocials } from "../../config/socials";
import { SocialIcon } from "../SocialIcon";
import { BackgroundMusic } from "../BackgroundMusic";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[rgba(245,158,11,0.12)] bg-background/95 py-14">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(245,158,11,0.35), transparent)" }}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at top, rgba(245,158,11,0.10), transparent 42%), radial-gradient(circle at bottom right, rgba(220,38,38,0.08), transparent 30%)",
        }}
      />

      <div className="container relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-[1.1fr_0.9fr_1.1fr] md:items-start">
        <div className="flex flex-col items-start gap-3">
          <a href="#hero" className="group flex items-center gap-1.5" aria-label="AlphaD — back to top">
            <span
              className="text-3xl font-black transition-transform duration-300 group-hover:-translate-y-0.5"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "linear-gradient(135deg, #fef3c7 0%, #f59e0b 55%, #dc2626 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              α
            </span>
            <span
              className="text-2xl font-bold transition-transform duration-300 group-hover:-translate-y-0.5"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "linear-gradient(135deg, #fde68a 0%, #f59e0b 70%, #b45309 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              D
            </span>
          </a>
          <p className="text-xs font-mono tracking-[0.22em]" style={{ color: "rgba(245,158,11,0.55)" }}>
            ANH DUY · ALPHAD
          </p>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            Forging scalable systems and beautiful interfaces with a warm ember glow.
          </p>
        </div>

        <nav
          className="flex flex-wrap justify-start gap-x-8 gap-y-3 rounded-3xl border border-[rgba(245,158,11,0.10)] bg-[rgba(6,4,2,0.45)] p-5 md:justify-center"
          aria-label="Footer navigation"
        >
          <a href="#about" className="rounded-sm text-sm font-mono text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">01. About</a>
          <a href="#projects" className="rounded-sm text-sm font-mono text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">02. Projects</a>
          <a href="#experience" className="rounded-sm text-sm font-mono text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">03. Experience</a>
          <a href="#blog" className="rounded-sm text-sm font-mono text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">04. Blog</a>
          <a href="#contact" className="rounded-sm text-sm font-mono text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">05. Contact</a>
        </nav>

        <div className="flex flex-col items-stretch gap-4 md:items-end">
          <div className="rounded-[28px] border border-[rgba(245,158,11,0.12)] bg-[rgba(6,4,2,0.52)] p-3 shadow-[0_0_40px_rgba(245,158,11,0.05)] backdrop-blur-sm">
            <BackgroundMusic />
          </div>

          {activeSocials.length > 0 && (
            <ul className="flex flex-wrap justify-start gap-3 md:justify-end">
              {activeSocials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(245,158,11,0.10)] bg-[rgba(245,158,11,0.04)] text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(245,158,11,0.28)] hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <SocialIcon icon={s.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p className="font-mono text-xs text-muted-foreground md:text-right">
            Designed & Built by <span style={{ color: "#f59e0b" }}>Anh Duy</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
