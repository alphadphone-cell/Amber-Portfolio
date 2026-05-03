import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import gsap from "gsap";

const TITLES = [
  "Full Stack Engineer.",
  "Open Source Contributor.",
  "Problem Solver.",
  "Builder of Things.",
];

function MagneticCTA({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    const strength = 0.35;
    const innerStrength = 0.55;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      gsap.to(el, { x: dx * strength, y: dy * strength, duration: 0.4, ease: "power2.out" });
      gsap.to(inner, { x: dx * innerStrength, y: dy * innerStrength, duration: 0.4, ease: "power2.out" });
    };

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
      gsap.to(inner, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
    };

    const area = el.parentElement!;
    area.addEventListener("mousemove", onMove);
    area.addEventListener("mouseleave", onLeave);
    return () => {
      area.removeEventListener("mousemove", onMove);
      area.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="p-12 -m-12 inline-block">
      <a ref={ref} href={href} className={className}>
        <span ref={innerRef} className="relative z-10 flex items-center gap-3">
          {children}
        </span>
      </a>
    </div>
  );
}

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReduced = typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) {
      setDisplayText(TITLES[0]);
      return;
    }
    let timeout: ReturnType<typeof setTimeout>;
    const current = TITLES[titleIndex];
    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 36);
      } else {
        setIsDeleting(false);
        setTitleIndex((p) => (p + 1) % TITLES.length);
      }
    } else {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 65);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2400);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex, prefersReduced]);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const orbX = useSpring(useTransform(mx, [0, 1], [-20, 20]), { damping: 30, stiffness: 80 });
  const orbY = useSpring(useTransform(my, [0, 1], [-14, 14]), { damping: 30, stiffness: 80 });
  const orbRX = useSpring(useTransform(my, [0, 1], [5, -5]), { damping: 30, stiffness: 80 });
  const orbRY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { damping: 30, stiffness: 80 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      onMouseMove={handleMove}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_60%_-5%,rgba(139,92,246,0.18),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle,rgba(139,92,246,1) 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <motion.div
        className="absolute right-[-4%] top-1/2 -translate-y-1/2 w-[580px] h-[580px] pointer-events-none z-0 hidden lg:block"
        style={{ x: orbX, y: orbY, rotateX: orbRX, rotateY: orbRY, perspective: 900 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent z-10" />
        <motion.div
          className="w-full h-full relative"
          animate={prefersReduced ? {} : { rotateZ: [0, 360] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {[0, 45, 90, 135].map((a, i) => (
            <div key={i} className="absolute inset-0 rounded-full border border-primary/15"
              style={{ transform: `rotateX(${a}deg) rotateY(${a * 0.7}deg)` }} />
          ))}
          {[22, 67, 112, 157].map((a, i) => (
            <div key={i} className="absolute inset-[15%] rounded-full border border-primary/10"
              style={{ transform: `rotateX(${a}deg) rotateY(${a * 0.5}deg)` }} />
          ))}
          <div className="absolute inset-[32%] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-[40%] rounded-full bg-primary/12 blur-xl" />
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle,rgba(139,92,246,0.7) 1px,transparent 1px)",
              backgroundSize: "28px 28px",
              maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)",
            }}
          />
        </motion.div>
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 flex flex-col items-start pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <motion.p
            className="font-mono text-[11px] tracking-[0.4em] text-primary uppercase mb-6"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, my name is
          </motion.p>

          <h1
            className="leading-[0.92] mb-5 text-foreground"
            style={{
              fontFamily: "var(--app-font-display)",
              fontWeight: 800,
              fontSize: "clamp(3.5rem, 11vw, 7.5rem)",
              letterSpacing: "-0.04em",
            }}
          >
            Anh Duy.
          </h1>

          <h2
            className="text-muted-foreground leading-tight mb-8 min-h-[1.2em]"
            style={{
              fontFamily: "var(--app-font-display)",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 5.5vw, 4rem)",
              letterSpacing: "-0.025em",
            }}
          >
            <span>{displayText}</span>
            <span
              aria-hidden="true"
              className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 align-middle rounded-full"
              style={{ animation: prefersReduced ? "none" : "blink 1s step-end infinite" }}
            />
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-14 leading-[1.75]">
            I build exceptional digital experiences — fast, accessible, and visually
            compelling. Currently focused on distributed systems and developer tooling.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <MagneticCTA
              href="#projects"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold text-sm tracking-wide rounded-xl hover:bg-primary/90 transition-colors"
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </MagneticCTA>

            <MagneticCTA
              href="#contact"
              className="glass neon-violet inline-flex items-center gap-2 text-muted-foreground px-7 py-4 font-mono text-sm rounded-xl hover:text-foreground transition-colors"
            >
              Get in touch
            </MagneticCTA>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] text-muted-foreground tracking-[0.4em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-3.5 h-3.5 text-muted-foreground rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
}
