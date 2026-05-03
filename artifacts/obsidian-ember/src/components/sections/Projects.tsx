import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "Forge Queue",
    description:
      "A highly resilient, distributed task queue built with Go and Redis Streams. Designed for high-throughput environments, capable of processing millions of background jobs with guaranteed at-least-once delivery, automatic retries, and comprehensive telemetry.",
    image: `${import.meta.env.BASE_URL}project-forge.png`,
    tech: ["Go", "Redis", "Docker", "Prometheus"],
    github: "#",
    demo: "#",
  },
  {
    title: "Ember CLI",
    description:
      "A lightning-fast, extensible command-line tool for scaffolding and managing complex microservice architectures. Written in Rust for minimal footprint and maximum execution speed, featuring a plugin system and interactive terminal UI.",
    image: `${import.meta.env.BASE_URL}project-cli.png`,
    tech: ["Rust", "Clap", "Tokio", "WebAssembly"],
    github: "#",
    demo: "#",
  },
  {
    title: "HoverKit 3D",
    description:
      "A GPU-accelerated 3D hover-effects library delivering buttery-smooth perspective tilts, magnetic interactions, and depth-of-field glows. Zero runtime dependencies, tree-shakeable, and used by 500+ projects on npm with a one-line init API.",
    image: `${import.meta.env.BASE_URL}project-3dhover.svg`,
    tech: ["TypeScript", "WebGL", "GSAP", "CSS Houdini"],
    github: "#",
    demo: "#",
  },
  {
    title: "RedLine DB",
    description:
      "An experimental, embeddable time-series database optimized for IoT workloads. Implements a custom storage engine leveraging memory-mapped files and a bespoke query language for rapid aggregations over massive datasets.",
    image: `${import.meta.env.BASE_URL}project-db.png`,
    tech: ["C++", "gRPC", "RocksDB", "React"],
    github: "#",
    demo: "#",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 30 });
  const glowX = useTransform(springY, [-12, 12], ["20%", "80%"]);
  const glowY = useTransform(springX, [-12, 12], ["20%", "80%"]);
  const scale = useSpring(1, { stiffness: 220, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateY.set(((e.clientX - cx) / (rect.width / 2)) * 10);
    rotateX.set((-(e.clientY - cy) / (rect.height / 2)) * 8);
    scale.set(1.02);
  };
  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  const isReversed = index % 2 === 1;

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-14 items-center`}
    >
      {/* Project image with 3D tilt */}
      <div className="w-full lg:w-3/5 relative group" style={{ perspective: 900 }}>
        <motion.div
          ref={cardRef}
          className="relative rounded-xl overflow-hidden ember-glass aspect-[16/9] cursor-none"
          style={{
            rotateX: springX,
            rotateY: springY,
            scale,
            transformStyle: "preserve-3d",
            boxShadow: "0 0 30px rgba(0,0,0,0.8)",
          }}
          whileHover={{ boxShadow: "0 0 50px rgba(245,158,11,0.22), 0 24px 60px rgba(0,0,0,0.8)" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          transition={{ duration: 0.35 }}
        >
          {/* Dynamic glow overlay */}
          <motion.div
            className="absolute inset-0 z-10 pointer-events-none rounded-xl"
            style={{
              background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(245,158,11,0.18) 0%, rgba(220,38,38,0.08) 40%, transparent 65%)`,
            }}
          />
          <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay pointer-events-none" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
            draggable={false}
          />
          {/* Scanline sheen on hover */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] z-20 pointer-events-none opacity-0 group-hover:opacity-100"
            style={{ background: "linear-gradient(to right, transparent, rgba(245,158,11,0.6), transparent)" }}
            animate={{ top: ["-2%", "105%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Decorative border ghost */}
        <motion.div
          className={`absolute top-4 ${isReversed ? "-left-4" : "-right-4"} w-full h-full border rounded-xl z-0`}
          style={{ borderColor: "rgba(245,158,11,0.18)" }}
          whileHover={{ x: isReversed ? -6 : 6, y: 6, borderColor: "rgba(245,158,11,0.35)" }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Info panel */}
      <div className={`w-full lg:w-2/5 flex flex-col ${isReversed ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"} z-20`}>
        <div className="flex items-center gap-2 font-mono text-sm mb-2" style={{ color: "#f59e0b" }}>
          <Code className="w-4 h-4" aria-hidden="true" />
          <span>Featured Project</span>
        </div>

        <h3 className="text-3xl font-bold text-foreground mb-6 group" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <motion.a
            href={project.demo}
            style={{ color: "inherit" }}
            whileHover={{ color: "#f59e0b" }}
            transition={{ duration: 0.18 }}
          >
            {project.title}
          </motion.a>
        </h3>

        <motion.div
          className="ember-glass p-6 rounded-xl mb-6 shadow-xl relative"
          whileHover={{
            borderColor: "rgba(245,158,11,0.35)",
            boxShadow: "0 0 24px rgba(245,158,11,0.08), 0 12px 40px rgba(0,0,0,0.5)",
          }}
          transition={{ duration: 0.25 }}
        >
          <p className="text-muted-foreground leading-relaxed text-left">{project.description}</p>
        </motion.div>

        <ul className={`flex flex-wrap gap-3 font-mono text-sm mb-8 ${isReversed ? "justify-start" : "lg:justify-end"}`}>
          {project.tech.map((tech) => (
            <motion.li
              key={tech}
              className="px-2.5 py-1 rounded-sm font-mono text-xs"
              style={{
                background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.18)",
                color: "rgba(254,243,199,0.7)",
              }}
              whileHover={{
                background: "rgba(245,158,11,0.18)",
                borderColor: "rgba(245,158,11,0.45)",
                color: "#f59e0b",
                scale: 1.06,
                boxShadow: "0 0 10px rgba(245,158,11,0.2)",
              }}
              transition={{ duration: 0.15 }}
            >
              {tech}
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.a
            href={project.github}
            aria-label={`${project.title} GitHub`}
            className="w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground"
            style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)" }}
            whileHover={{
              color: "#f59e0b",
              backgroundColor: "rgba(245,158,11,0.14)",
              borderColor: "rgba(245,158,11,0.5)",
              scale: 1.14,
              boxShadow: "0 0 16px rgba(245,158,11,0.3)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.18 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href={project.demo}
            aria-label={`${project.title} live demo`}
            className="w-10 h-10 flex items-center justify-center rounded-full text-muted-foreground"
            style={{ background: "rgba(245,158,11,0.05)", border: "1px solid rgba(245,158,11,0.15)" }}
            whileHover={{
              color: "#f59e0b",
              backgroundColor: "rgba(245,158,11,0.14)",
              borderColor: "rgba(245,158,11,0.5)",
              scale: 1.14,
              boxShadow: "0 0 16px rgba(245,158,11,0.3)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.18 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-secondary font-mono text-xl font-normal">04.</span>
          Featured Work
        </h2>
        <div className="w-20 h-1 bg-primary shadow-[0_0_10px_var(--color-primary)]" />
      </motion.div>

      <div className="flex flex-col gap-28">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
