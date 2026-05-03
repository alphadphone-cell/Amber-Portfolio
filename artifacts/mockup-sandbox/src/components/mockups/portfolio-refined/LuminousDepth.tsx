import "./_refined.css";

const VIOLET = "#8b5cf6";
const CYAN   = "#22d3ee";
const LAVENDER = "#c4b5fd";

function Nav() {
  const links = ["01. About", "02. Projects", "03. Experience", "04. Blog", "05. Contact"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "rgba(5,4,16,0.75)",
      backdropFilter: "blur(32px) saturate(210%)",
      WebkitBackdropFilter: "blur(32px) saturate(210%)",
      borderBottom: "1px solid rgba(139,92,246,0.14)",
      boxShadow: "0 12px 48px rgba(0,0,0,0.5), inset 0 -1px 0 rgba(139,92,246,0.07)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 62, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo — luminous gradient */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "linear-gradient(135deg, rgba(139,92,246,0.4) 0%, rgba(6,182,212,0.25) 100%)",
            border: "1px solid rgba(139,92,246,0.30)",
            boxShadow: "0 0 16px rgba(139,92,246,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, fontSize: 13, letterSpacing: "-0.03em",
              background: "linear-gradient(135deg, #e2d4ff, #22d3ee)",
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            }}>AD</span>
          </div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15,
            letterSpacing: "-0.03em", color: "rgba(240,240,245,0.80)",
          }}>AnhDuy<span style={{ color: VIOLET }}>.dev</span></span>
        </div>
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {links.map((l, i) => (
            <span key={l} style={{
              fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: "0.04em",
              color: i === 1 ? LAVENDER : "rgba(240,240,245,0.38)",
              cursor: "pointer", position: "relative",
            }}>
              {l}
              {i === 1 && <span style={{
                position: "absolute", bottom: -4, left: 0, right: 0, height: 1.5,
                background: `linear-gradient(to right, ${VIOLET}, ${CYAN})`,
                borderRadius: 2,
              }} />}
            </span>
          ))}
        </div>
        <a href="#" style={{
          fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: "0.1em",
          color: LAVENDER, padding: "7px 16px",
          background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.06) 100%)",
          border: "1px solid rgba(139,92,246,0.28)",
          borderRadius: 8, textDecoration: "none",
          boxShadow: "0 0 16px rgba(139,92,246,0.12)",
        }}>Resume ↗</a>
      </div>
      {/* Gradient progress bar */}
      <div style={{
        position: "absolute", bottom: -1, left: 0, width: "44%", height: 2,
        background: "linear-gradient(to right, #7c3aed, #8b5cf6 50%, #22d3ee)",
        boxShadow: "0 0 8px rgba(139,92,246,0.6)",
      }} />
    </nav>
  );
}

function Hero() {
  return (
    <section style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", background: "#050508" }}>
      {/* Richer ambient layer — more depth */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.10) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      {/* Deep violet bloom — lower left */}
      <div style={{
        position: "absolute", width: "72vw", height: "72vw", left: "-22vw", bottom: "-22vw", zIndex: 0,
        background: "radial-gradient(ellipse, rgba(139,92,246,0.22) 0%, rgba(109,40,217,0.10) 36%, transparent 66%)",
        filter: "blur(80px)",
      }} />
      {/* Cyan halo — upper right */}
      <div style={{
        position: "absolute", width: "44vw", height: "44vw", right: "2vw", top: "2vw", zIndex: 0,
        background: "radial-gradient(ellipse, rgba(6,182,212,0.16) 0%, rgba(6,182,212,0.04) 50%, transparent 70%)",
        filter: "blur(70px)",
      }} />
      {/* Mid-lavender bloom */}
      <div style={{
        position: "absolute", width: "30vw", height: "30vw", left: "36%", top: "28%", zIndex: 0,
        background: "radial-gradient(ellipse, rgba(192,132,252,0.14) 0%, transparent 60%)",
        filter: "blur(55px)",
      }} />

      {/* Avatar side — with richer glow */}
      <div style={{
        position: "absolute", right: 0, top: 0, bottom: 0, width: "50%", zIndex: 2, pointerEvents: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, #050508 0%, #050508 6%, rgba(5,5,8,0.68) 28%, rgba(5,5,8,0.10) 54%, transparent 100%)",
        }} />
        {/* Glow ring */}
        <div style={{
          position: "absolute", width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.20) 0%, rgba(6,182,212,0.08) 50%, transparent 70%)",
          filter: "blur(30px)",
        }} />
        {/* Avatar card */}
        <div style={{
          width: 320, height: 400, borderRadius: 28,
          background: "linear-gradient(160deg, rgba(20,16,38,0.82) 0%, rgba(10,8,22,0.92) 60%, rgba(6,12,24,0.86) 100%)",
          border: "1px solid rgba(139,92,246,0.22)",
          boxShadow: "0 0 60px rgba(139,92,246,0.18), 0 0 120px rgba(6,182,212,0.07), 0 32px 80px rgba(0,0,0,0.64), inset 0 1px 0 rgba(255,255,255,0.07)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexDirection: "column", gap: 16, position: "relative", overflow: "hidden",
        }}>
          {/* Top shimmer */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2,
            background: "linear-gradient(to right, transparent, rgba(139,92,246,0.6) 40%, rgba(6,182,212,0.5) 60%, transparent)",
          }} />
          <div style={{
            width: 88, height: 88, borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(139,92,246,0.50) 0%, rgba(6,182,212,0.28) 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 34, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800, color: "rgba(240,240,245,0.92)",
            boxShadow: "0 0 30px rgba(139,92,246,0.40)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}>AD</div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: 15, letterSpacing: "-0.02em", color: "rgba(240,240,245,0.72)",
          }}>Anh Duy</div>
          <div style={{ display: "flex", gap: 6 }}>
            {["React", "Node", "Rust"].map(tag => (
              <span key={tag} style={{
                fontFamily: "'Fira Code', monospace", fontSize: 9.5, letterSpacing: "0.08em",
                padding: "3px 8px", borderRadius: 6,
                background: "rgba(139,92,246,0.10)", border: "1px solid rgba(139,92,246,0.22)",
                color: LAVENDER,
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Text */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", paddingTop: 80, position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 580 }}>
          {/* Eyebrow */}
          <p style={{
            fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: "0.40em",
            color: VIOLET, textTransform: "uppercase", marginBottom: 24, display: "flex", alignItems: "center", gap: 8,
          }}>
            <span style={{
              display: "inline-block", width: 16, height: 16, borderRadius: "50%",
              border: `1px solid ${VIOLET}`,
              background: "rgba(139,92,246,0.12)",
              boxShadow: `0 0 8px rgba(139,92,246,0.35)`,
            }} />
            Hi, my name is
          </p>

          {/* Name — vivid, glowing */}
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
            fontSize: "clamp(4rem, 10vw, 7.8rem)", lineHeight: 0.90,
            letterSpacing: "-0.045em", margin: "0 0 24px",
            background: "linear-gradient(135deg, #fff0ff 0%, #e2d4ff 12%, #c4b5fd 28%, #a78bfa 46%, #8b5cf6 64%, #5eead4 88%, #22d3ee 100%)",
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            filter: "drop-shadow(0 0 32px rgba(139,92,246,0.25))",
          }}>Anh Duy.</h1>

          {/* Subtitle — gradient accent on role word */}
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
            fontSize: "clamp(1.5rem, 4vw, 3rem)", lineHeight: 1.20,
            letterSpacing: "-0.025em", margin: "0 0 30px",
            color: "rgba(240,240,245,0.38)",
          }}>
            Full Stack{" "}
            <span style={{
              background: `linear-gradient(135deg, ${LAVENDER}, ${VIOLET})`,
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            }}>Engineer</span>
            <span style={{ color: CYAN, opacity: 0.6 }}>_</span>
          </h2>

          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: 16.5, lineHeight: 1.80,
            color: "rgba(240,240,245,0.44)", maxWidth: 440, margin: "0 0 52px",
          }}>
            Building exceptional digital experiences — fast, accessible, and visually
            compelling. Focused on distributed systems and developer tooling.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <a href="#" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 55%, #6d28d9 100%)",
              color: "#fff", padding: "14px 30px",
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13.5,
              borderRadius: 12, textDecoration: "none",
              boxShadow: "0 0 40px rgba(139,92,246,0.45), 0 0 80px rgba(139,92,246,0.12), 0 4px 20px rgba(0,0,0,0.44)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}>
              View My Work <span>→</span>
            </a>
            <a href="#" style={{
              display: "inline-flex", alignItems: "center",
              color: "rgba(196,181,253,0.70)",
              padding: "13px 26px",
              fontFamily: "'Fira Code', monospace", fontSize: 12, letterSpacing: "0.04em",
              borderRadius: 12, textDecoration: "none",
              background: "linear-gradient(160deg, rgba(20,14,40,0.78) 0%, rgba(10,8,26,0.90) 100%)",
              border: "1px solid rgba(139,92,246,0.26)",
              boxShadow: "0 0 20px rgba(139,92,246,0.10), 0 8px 32px rgba(0,0,0,0.36), inset 0 1px 0 rgba(139,92,246,0.10)",
            }}>
              Get in touch
            </a>
          </div>

          {/* Social row */}
          <div style={{ display: "flex", gap: 16, marginTop: 48, alignItems: "center" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "5px 14px", borderRadius: 100,
              background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.18)",
              boxShadow: "0 0 12px rgba(34,197,94,0.08)",
            }}>
              <div style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 8px rgba(34,197,94,0.9), 0 0 2px rgba(34,197,94,1)",
                animation: "ld-pulse 2s ease-in-out infinite",
              }} />
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(34,197,94,0.75)", letterSpacing: "0.1em" }}>OPEN TO WORK</span>
            </div>
            <div style={{
              display: "flex", gap: 3,
              padding: "5px 14px", borderRadius: 100,
              background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.16)",
            }}>
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(139,92,246,0.65)", letterSpacing: "0.08em" }}>Ho Chi Minh City, VN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{
        position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 10,
      }}>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(240,240,245,0.20)", letterSpacing: "0.45em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{
          width: 1, height: 32,
          background: `linear-gradient(to bottom, ${VIOLET}99, transparent)`,
          borderRadius: 2,
          boxShadow: `0 0 6px ${VIOLET}44`,
        }} />
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "4+", label: "Years Exp." },
    { value: "30+", label: "Projects" },
    { value: "12+", label: "OSS Libs" },
    { value: "99%", label: "Satisfaction" },
  ];
  return (
    <section style={{
      background: "linear-gradient(180deg, rgba(8,7,20,0.96) 0%, rgba(5,5,12,0.98) 100%)",
      borderTop: "1px solid rgba(139,92,246,0.12)",
      borderBottom: "1px solid rgba(6,182,212,0.07)",
      padding: "0 32px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ambient glow behind stats */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", position: "relative" }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{
            padding: "40px 36px",
            borderRight: i < 3 ? "1px solid rgba(139,92,246,0.07)" : "none",
            display: "flex", flexDirection: "column", gap: 8, position: "relative",
          }}>
            {/* Per-stat glow dot */}
            <div style={{
              position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 60, height: 1,
              background: `linear-gradient(to right, transparent, ${i % 2 === 0 ? VIOLET : CYAN}66, transparent)`,
            }} />
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 800,
              fontSize: 42, lineHeight: 1, letterSpacing: "-0.05em",
              background: i % 2 === 0
                ? `linear-gradient(135deg, ${LAVENDER} 0%, ${VIOLET} 100%)`
                : `linear-gradient(135deg, #a5f3fc 0%, ${CYAN} 100%)`,
              WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
              filter: "drop-shadow(0 0 12px rgba(139,92,246,0.20))",
            }}>{s.value}</div>
            <div style={{
              fontFamily: "'Fira Code', monospace", fontSize: 10, letterSpacing: "0.14em",
              color: "rgba(240,240,245,0.28)", textTransform: "uppercase",
            }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BentoPreview() {
  const tiles = [
    { title: "Full-Stack Engineering", sub: "React · Next.js · Node · Postgres · Redis", accentColor: VIOLET, accentBg: "rgba(139,92,246,0.08)", accentBorder: "rgba(139,92,246,0.20)", glow: "rgba(139,92,246,0.25)", span: "col-span-2" },
    { title: "Open Source", sub: "12+ libraries · 2.4k stars", accentColor: CYAN, accentBg: "rgba(6,182,212,0.07)", accentBorder: "rgba(6,182,212,0.18)", glow: "rgba(6,182,212,0.20)", span: "" },
    { title: "Performance", sub: "CWV green · <80ms TTFB", accentColor: "#22c55e", accentBg: "rgba(34,197,94,0.06)", accentBorder: "rgba(34,197,94,0.16)", glow: "rgba(34,197,94,0.18)", span: "" },
    { title: "Design Systems", sub: "Figma tokens · Tailwind · shadcn/ui", accentColor: "#f59e0b", accentBg: "rgba(245,158,11,0.06)", accentBorder: "rgba(245,158,11,0.16)", glow: "rgba(245,158,11,0.16)", span: "col-span-2" },
  ];

  return (
    <section style={{ background: "#050508", padding: "96px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 56 }}>
          <span style={{
            fontFamily: "'Fira Code', monospace", fontSize: 14,
            background: `linear-gradient(135deg, ${LAVENDER} 0%, ${VIOLET} 60%, ${CYAN} 100%)`,
            WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
            filter: "drop-shadow(0 0 8px rgba(139,92,246,0.40))",
          }}>00.</span>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
            fontSize: 30, letterSpacing: "-0.03em", color: "rgba(240,240,245,0.90)", margin: 0,
          }}>What I do</h2>
          <div style={{ flex: 1, maxWidth: 200, height: 1, background: `linear-gradient(to right, rgba(139,92,246,0.40), rgba(6,182,212,0.15), transparent)` }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {tiles.map(t => (
            <div key={t.title} style={{
              gridColumn: t.span || "span 1",
              background: `linear-gradient(145deg, ${t.accentBg} 0%, rgba(14,12,26,0.88) 55%, rgba(8,8,18,0.96) 100%)`,
              border: `1px solid ${t.accentBorder}`,
              borderRadius: 18, padding: "28px 28px 24px",
              position: "relative", overflow: "hidden",
              boxShadow: `0 0 0 0 transparent, 0 16px 48px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(0,0,0,0.20)`,
            }}>
              {/* Luminous top edge */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(to right, ${t.accentColor}88 0%, ${t.accentColor}cc 40%, transparent 100%)`,
                boxShadow: `0 0 8px ${t.glow}`,
              }} />
              {/* Corner glow */}
              <div style={{
                position: "absolute", top: -20, left: -20, width: 80, height: 80,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${t.glow} 0%, transparent 70%)`,
                filter: "blur(16px)",
              }} />
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                fontSize: 17, letterSpacing: "-0.02em",
                color: "rgba(240,240,245,0.88)", marginBottom: 10, position: "relative",
              }}>{t.title}</div>
              <div style={{
                fontFamily: "'Fira Code', monospace", fontSize: 11, letterSpacing: "0.04em",
                color: "rgba(240,240,245,0.32)", position: "relative",
              }}>{t.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LuminousDepth() {
  return (
    <div style={{ background: "#050508", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@keyframes ld-pulse { 0%,100%{box-shadow:0 0 8px rgba(34,197,94,0.9),0 0 2px rgba(34,197,94,1)}50%{box-shadow:0 0 14px rgba(34,197,94,1),0 0 6px rgba(34,197,94,0.8)}}`}</style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600&family=Fira+Code:wght@400;500&display=swap" />
      <Nav />
      <Hero />
      <Stats />
      <BentoPreview />
    </div>
  );
}
