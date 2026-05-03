import { activeSocials } from "../../config/socials";
import { SocialIcon } from "../SocialIcon";

export function Footer() {
  return (
    <footer className="relative py-12 bg-background mt-20">
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(to right, transparent, rgba(245,158,11,0.3), transparent)" }}
      />
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        <div className="flex flex-col items-start gap-2">
          <a
            href="#hero"
            className="flex items-center gap-1 group"
            aria-label="AlphaD — back to top"
          >
            <span
              className="text-2xl font-black"
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
              className="text-xl font-bold"
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
          <p className="text-xs font-mono mt-0.5" style={{ color: "rgba(245,158,11,0.5)" }}>Anh Duy · AlphaD</p>
          <p className="text-sm text-muted-foreground">Forging scalable systems and beautiful interfaces.</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
          <a href="#about"      className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">01. About</a>
          <a href="#projects"   className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">02. Projects</a>
          <a href="#experience" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">03. Experience</a>
          <a href="#blog"       className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">04. Blog</a>
          <a href="#contact"    className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-sm">05. Contact</a>
        </nav>

        <div className="flex flex-col items-end gap-4">
          {activeSocials.length > 0 && (
            <ul className="flex gap-4 m-0 p-0 list-none">
              {activeSocials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.platform}
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <SocialIcon icon={s.icon} className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p className="font-mono text-xs text-muted-foreground">Designed & Built by <span style={{ color: "#f59e0b" }}>Anh Duy</span></p>
        </div>

      </div>
    </footer>
  );
}
