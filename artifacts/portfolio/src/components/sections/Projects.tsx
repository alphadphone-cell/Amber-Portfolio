import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Nexus",
    description: "A distributed task queue built in Go with Redis. Handles millions of background jobs with high availability and exactly-once processing guarantees. Features a web dashboard for monitoring.",
    tech: ["Go", "Redis", "Docker"],
    github: "#",
    external: "#"
  },
  {
    title: "Vaultify",
    description: "An open-source secrets manager with zero-knowledge encryption. Securely store, manage, and distribute API keys, passwords, and certificates across your infrastructure.",
    tech: ["TypeScript", "Node.js", "PostgreSQL"],
    github: "#",
    external: "#"
  },
  {
    title: "FlowGraph",
    description: "A visual workflow builder with real-time collaboration. Allows teams to design complex logic flows using a drag-and-drop canvas with multiplayer cursors and history.",
    tech: ["React", "WebSockets", "Go"],
    github: "#",
    external: "#"
  },
  {
    title: "Spectra",
    description: "A Kubernetes observability platform with custom metrics. Collects, aggregates, and visualizes cluster performance data with minimal overhead and intelligent alerting.",
    tech: ["Go", "Kubernetes", "Prometheus"],
    github: "#",
    external: "#"
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full"
    >
      <div className="h-full bg-card border border-card-border p-8 rounded-xl flex flex-col transition-all duration-300 hover:border-primary/50 relative z-10 group overflow-hidden">
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
          style={{ boxShadow: "0 0 0 1px hsl(var(--primary)/0.5), 0 0 30px hsl(var(--primary)/0.1) inset" }} />

        <div className="absolute top-4 right-6 text-8xl font-black text-muted-foreground opacity-5 pointer-events-none select-none z-0">
          0{index + 1}
        </div>

        <div className="flex justify-between items-center mb-8 relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="text-primary flex items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10" aria-hidden="true">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            {index === 0 && (
              <span className="text-xs font-mono px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-sm">Featured</span>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <a href={project.github} className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors rounded-lg" aria-label={`${project.title} on GitHub`}>
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href={project.external} className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors rounded-lg" aria-label={`${project.title} live demo`}>
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors relative z-10" style={{ transform: "translateZ(40px)" }}>
          {project.title}
        </h3>
        <div className="text-muted-foreground mb-8 flex-1 leading-relaxed relative z-10" style={{ transform: "translateZ(20px)" }}>
          {project.description}
        </div>

        <ul className="flex flex-wrap gap-2 relative z-10" style={{ transform: "translateZ(10px)" }}>
          {project.tech.map((tech) => (
            <li key={tech} className="border border-primary/30 bg-primary/5 text-foreground hover:bg-primary/15 hover:border-primary hover:text-primary transition-colors text-xs font-mono px-2 py-1 rounded-sm cursor-default">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-xl font-normal">02.</span> Some Things I've Built
            <div className="h-[1px] bg-border flex-1 max-w-xs ml-4" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ perspective: "1000px" }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
