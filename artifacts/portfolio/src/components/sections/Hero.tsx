import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
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
      gsap.to(el,    { x: dx * strength,      y: dy * strength,      duration: 0.4, ease: "power2.out" });
      gsap.to(inner, { x: dx * innerStrength, y: dy * innerStrength, duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(el,    { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
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
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (prefersReduced) { setDisplayText(TITLES[0]); return; }
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

  /* Mouse-parallax springs */
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const imgX  = useSpring(useTransform(mx, [0,1], [-14, 14]), { damping: 30, stiffness: 70 });
  const imgY  = useSpring(useTransform(my, [0,1], [-10, 10]), { damping: 30, stiffness: 70 });
  const imgRX = useSpring(useTransform(my, [0,1], [4, -4]),   { damping: 30, stiffness: 70 });
  const imgRY = useSpring(useTransform(mx, [0,1], [-6,  6]),  { damping: 30, stiffness: 70 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top)  / r.height);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      onMouseMove={handleMove}
    >
      {/* ── Illustrated avatar — right half (desktop) ───────── */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none z-0 hidden lg:block"
        style={{ x: imgX, y: imgY, rotateX: imgRX, rotateY: imgRY, perspective: 1000 }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        {/* Left-edge gradient — blends art into the text column */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: "linear-gradient(to right, #050505 0%, #050505 5%, rgba(5,5,5,0.7) 28%, rgba(5,5,5,0.15) 55%, transparent 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(to top, #050505 0%, transparent 22%)" }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(to bottom, #050505 0%, transparent 16%)" }}
        />

        {/* The illustrated avatar — fills the right panel */}
        <img
          src="/avatar-illustrated.png"
          alt="Anh Duy — illustrated developer avatar"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ mixBlendMode: "luminosity", opacity: 0.92 }}
          draggable={false}
        />
        {/* Same image with color overlay so it keeps purple tones */}
        <img
          src="/avatar-illustrated.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 0.55 }}
          draggable={false}
        />

        {/* Subtle ambient glow dot */}
        <div
          className="absolute bottom-[15%] right-[20%] w-48 h-48 rounded-full z-0"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
          aria-hidden="true"
        />
      </motion.div>

      {/* ── Text content ──────────────────────────────────────── */}
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-start pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[52%] lg:max-w-xl"
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
              fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
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
              fontSize: "clamp(1.5rem, 4.5vw, 3.5rem)",
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

          <p className="text-base md:text-lg text-muted-foreground max-w-md mb-14 leading-[1.75]">
            I build exceptional digital experiences — fast, accessible, and visually
            compelling. Currently focused on distributed systems and developer tooling.
          </p>

          {/* Mobile avatar */}
          <motion.div
            className="lg:hidden flex justify-center mb-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full border-2 border-primary/40" />
              <div className="absolute -inset-1 rounded-full border border-primary/15" />
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />
              <img
                src="/avatar-illustrated.png"
                alt="Anh Duy"
                className="relative w-full h-full object-cover object-top rounded-full z-10"
                style={{ filter: "drop-shadow(0 0 20px rgba(139,92,246,0.5))" }}
                draggable={false}
              />
            </div>
          </motion.div>

          <div className="flex flex-wrap gap-4 items-center">
            <MagneticCTA
              href="#projects"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold text-sm tracking-wide rounded-xl hover:bg-primary/90 transition-colors"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
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

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] text-muted-foreground tracking-[0.4em] uppercase">Scroll</span>
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
