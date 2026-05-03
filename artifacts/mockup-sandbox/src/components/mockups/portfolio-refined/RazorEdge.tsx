import "./_refined.css";

const VIOLET = "#8b5cf6";
const CYAN   = "#22d3ee";

function Nav() {
  const links = ["01. About", "02. Projects", "03. Experience", "04. Blog", "05. Contact"];
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: "linear-gradient(180deg, rgba(5,4,14,0.90) 0%, rgba(5,4,14,0.82) 100%)",
        backdropFilter: "blur(28px) saturate(200%)",
        borderBottom: "1px solid rgba(139,92,246,0.18)",
        boxShadow: "0 1px 0 rgba(139,92,246,0.06), 0 8px 32px rgba(0,0,0,0.44)",
      }}
    >
      {/* Razor-thin top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1.5px",
        background: "linear-gradient(to right, transparent 0%, #7c3aed 30%, #8b5cf6 50%, #22d3ee 70%, transparent 100%)",
        opacity: 0.8,
      }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 18, letterSpacing: "-0.04em",
          background: "linear-gradient(135deg, #e2d4ff 0%, #c4b5fd 30%, #8b5cf6 65%, #22d3ee 100%)",
          WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
        }}>AD</span>
        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {links.map(l => (
            <span key={l} style={{
              fontFamily: "'Fira Code', monospace", fontSize: 11.5, letterSpacing: "0.06em",
              color: "rgba(240,240,245,0.46)", cursor: "pointer",
              transition: "color 0.2s",
            }}>{l}</span>
          ))}
        </div>
        <div style={{
          fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: "0.12em",
          color: VIOLET, padding: "6px 14px",
          border: "1px solid rgba(139,92,246,0.30)",
          borderRadius: 8, cursor: "pointer",
          background: "rgba(139,92,246,0.06)",
        }}>Resume ↗</div>
      </div>
      {/* Progress bar */}
      <div style={{
        position: "absolute", bottom: -1, left: 0, width: "38%", height: "1.5px",
        background: "linear-gradient(to right, #7c3aed, #8b5cf6, #22d3ee)",
      }} />
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", background: "#050505" }}>
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.10) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      {/* Ambient orbs */}
      <div style={{
        position: "absolute", width: "58vw", height: "58vw", left: "-12vw", bottom: "-8vw", zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse, rgba(139,92,246,0.20) 0%, rgba(109,40,217,0.09) 38%, transparent 68%)",
        filter: "blur(64px)",
      }} />
      <div style={{
        position: "absolute", width: "36vw", height: "36vw", right: "8vw", top: "8vw", zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse, rgba(6,182,212,0.14) 0%, transparent 62%)",
        filter: "blur(72px)",
      }} />
      {/* Avatar column — right half */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "52%", zIndex: 2, pointerEvents: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #050505 0%, #050505 4%, rgba(5,5,5,0.72) 26%, rgba(5,5,5,0.12) 52%, transparent 100%)",
        }} />
        {/* Avatar placeholder */}
        <div style={{
          width: 340, height: 420, borderRadius: 24,
          background: "linear-gradient(160deg, rgba(139,92,246,0.10) 0%, rgba(14,14,22,0.60) 60%, rgba(6,182,212,0.06) 100%)",
          border: "1px solid rgba(139,92,246,0.14)",
          boxShadow: "0 0 80px rgba(139,92,246,0.14), 0 0 0 1px rgba(139,92,246,0.06)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: 12,
          position: "relative",
        }}>
          <div style={{
            width: 96, height: 96, borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(139,92,246,0.4) 0%, rgba(6,182,212,0.2) 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 38, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, color: "rgba(240,240,245,0.9)",
          }}>AD</div>
          <div style={{ width: 60, height: 1.5, background: "linear-gradient(to right, transparent, rgba(139,92,246,0.5), transparent)" }} />
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(240,240,245,0.25)", letterSpacing: "0.2em" }}>PORTFOLIO 2025</div>
        </div>
      </div>

      {/* Text */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", paddingTop: 80, position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 560 }}>
          {/* Eyebrow — tighter, more precise */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}>
            <div style={{ width: 20, height: 1.5, background: VIOLET, borderRadius: 2 }} />
            <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10.5, letterSpacing: "0.45em", color: VIOLET, textTransform: "uppercase" }}>
              Hi, my name is
            </span>
          </div>

          {/* Name — refined scale + tighter leading */}
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
            fontSize: "clamp(3.8rem, 9.5vw, 7.2rem)", lineHeight: 0.88,
            letterSpacing: "-0.05em", margin: "0 0 22px",
            background: "linear-gradient(135deg, #f0ebff 0%, #d8cafe 18%, #c4b5fd 32%, #a78bfa 50%, #8b5cf6 68%, #22d3ee 100%)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
          }}>Anh Duy.</h1>

          {/* Subtitle — separate weight/size, clearer hierarchy */}
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
            fontSize: "clamp(1.35rem, 3.8vw, 2.8rem)", lineHeight: 1.18,
            letterSpacing: "-0.025em", margin: "0 0 28px",
            color: "rgba(240,240,245,0.42)",
          }}>
            Full Stack Engineer<span style={{ color: VIOLET, opacity: 0.7 }}>_</span>
          </h2>

          {/* Body — tighter max-width, cleaner line-height */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.78,
            color: "rgba(240,240,245,0.48)", maxWidth: 420, margin: "0 0 52px",
          }}>
            Building exceptional digital experiences — fast, accessible, and visually compelling.
            Focused on distributed systems and developer tooling.
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <a href="#" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #6d28d9 100%)",
              color: "#fff", padding: "14px 28px",
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13.5, letterSpacing: "0.02em",
              borderRadius: 12, textDecoration: "none",
              boxShadow: "0 0 32px rgba(139,92,246,0.40), 0 4px 20px rgba(0,0,0,0.40)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}>
              View My Work <span style={{ fontSize: 15, opacity: 0.85 }}>→</span>
            </a>
            <a href="#" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              color: "rgba(240,240,245,0.50)",
              padding: "13px 24px",
              fontFamily: "'Fira Code', monospace", fontSize: 12.5, letterSpacing: "0.03em",
              borderRadius: 12, textDecoration: "none",
              background: "linear-gradient(160deg, rgba(18,14,34,0.72) 0%, rgba(10,8,24,0.88) 100%)",
              border: "1px solid rgba(139,92,246,0.22)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.36), inset 0 1px 0 rgba(139,92,246,0.08)",
            }}>
              Get in touch
            </a>
          </div>

          {/* Status chips — precise detail */}
          <div style={{ display: "flex", gap: 10, marginTop: 44, alignItems: "center" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "5px 12px", borderRadius: 100,
              background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.20)",
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px rgba(34,197,94,0.8)" }} />
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(34,197,94,0.8)", letterSpacing: "0.1em" }}>OPEN TO WORK</span>
            </div>
            <div style={{
              padding: "5px 12px", borderRadius: 100,
              background: "rgba(139,92,246,0.07)", border: "1px solid rgba(139,92,246,0.18)",
              fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(139,92,246,0.75)", letterSpacing: "0.08em",
            }}>Ho Chi Minh City, VN</div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 10,
      }}>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 9.5, color: "rgba(240,240,245,0.22)", letterSpacing: "0.45em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1.5, height: 28, background: "linear-gradient(to bottom, rgba(139,92,246,0.5), transparent)", borderRadius: 2 }} />
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "4+",   label: "Years experience" },
    { value: "30+",  label: "Projects shipped" },
    { value: "12+",  label: "Open-source libs" },
    { value: "99%",  label: "Client satisfaction" },
  ];
  return (
    <section style={{ background: "#080812", borderTop: "1px solid rgba(139,92,246,0.10)", borderBottom: "1px solid rgba(139,92,246,0.10)", padding: "0 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{
            padding: "36px 32px",
            borderRight: i < 3 ? "1px solid rgba(139,92,246,0.08)" : "none",
            display: "flex", flexDirection: "column", gap: 6,
          }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
              fontSize: 38, lineHeight: 1, letterSpacing: "-0.04em",
              background: "linear-gradient(135deg, #e2d4ff 0%, #c4b5fd 40%, #8b5cf6 80%, #22d3ee 100%)",
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            }}>{s.value}</div>
            <div style={{
              fontFamily: "'Fira Code', monospace", fontSize: 10.5, letterSpacing: "0.12em",
              color: "rgba(240,240,245,0.32)", textTransform: "uppercase",
            }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BentoPreview() {
  const tiles = [
    {
      title: "Full-Stack", sub: "React · Node · Postgres · Redis",
      accent: VIOLET, bg: "rgba(139,92,246,0.06)", border: "rgba(139,92,246,0.18)",
      top: "linear-gradient(to right, rgba(139,92,246,0.45), transparent)", span: "col-span-2",
    },
    {
      title: "Open Source", sub: "12+ libraries · 2.4k GitHub stars",
      accent: CYAN, bg: "rgba(6,182,212,0.05)", border: "rgba(6,182,212,0.16)",
      top: "linear-gradient(to right, rgba(6,182,212,0.45), transparent)", span: "",
    },
    {
      title: "Performance", sub: "Core Web Vitals green · <80ms TTFB",
      accent: "#22c55e", bg: "rgba(34,197,94,0.05)", border: "rgba(34,197,94,0.15)",
      top: "linear-gradient(to right, rgba(34,197,94,0.4), transparent)", span: "",
    },
    {
      title: "Design Systems", sub: "Figma tokens · Tailwind · shadcn/ui",
      accent: "#f59e0b", bg: "rgba(245,158,11,0.05)", border: "rgba(245,158,11,0.15)",
      top: "linear-gradient(to right, rgba(245,158,11,0.4), transparent)", span: "col-span-2",
    },
  ];

  return (
    <section style={{ background: "#050505", padding: "96px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 56 }}>
          <span style={{
            fontFamily: "'Fira Code', monospace", fontSize: 13, letterSpacing: "0.04em",
            background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
          }}>00.</span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: 28, letterSpacing: "-0.03em", color: "rgba(240,240,245,0.92)", margin: 0,
          }}>What I do</h2>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: "linear-gradient(to right, rgba(139,92,246,0.40), transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {tiles.map((t) => (
            <div
              key={t.title}
              style={{
                gridColumn: t.span || "span 1",
                background: `linear-gradient(135deg, ${t.bg} 0%, rgba(14,14,22,0.80) 100%)`,
                border: `1px solid ${t.border}`,
                borderRadius: 16,
                padding: 28,
                position: "relative",
                overflow: "hidden",
                boxShadow: `0 8px 32px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.04)`,
              }}
            >
              {/* Top accent line */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: t.top,
              }} />
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: 17, letterSpacing: "-0.02em", color: "rgba(240,240,245,0.90)",
                marginBottom: 8,
              }}>{t.title}</div>
              <div style={{
                fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: "0.04em",
                color: "rgba(240,240,245,0.36)",
              }}>{t.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RazorEdge() {
  return (
    <div style={{ background: "#050505", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&family=Fira+Code:wght@400;500&display=swap" />
      <Nav />
      <Hero />
      <StatsBar />
      <BentoPreview />
    </div>
  );
}
