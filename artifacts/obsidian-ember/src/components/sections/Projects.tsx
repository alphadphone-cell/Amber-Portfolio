import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Forge Queue",
      description: "A highly resilient, distributed task queue built with Go and Redis Streams. Designed for high-throughput environments, capable of processing millions of background jobs with guaranteed at-least-once delivery, automatic retries, and comprehensive telemetry.",
      image: "/project-forge.png",
      tech: ["Go", "Redis", "Docker", "Prometheus"],
      github: "#",
      demo: "#"
    },
    {
      title: "Ember CLI",
      description: "A lightning-fast, extensible command-line tool for scaffolding and managing complex microservice architectures. Written in Rust for minimal footprint and maximum execution speed, featuring a plugin system and interactive terminal UI.",
      image: "/project-cli.png",
      tech: ["Rust", "Clap", "Tokio", "WebAssembly"],
      github: "#",
      demo: "#"
    },
    {
      title: "RedLine DB",
      description: "An experimental, embeddable time-series database optimized for IoT workloads. Implements a custom storage engine leveraging memory-mapped files and a bespoke query language for rapid aggregations over massive datasets.",
      image: "/project-db.png",
      tech: ["C++", "gRPC", "RocksDB", "React"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 flex items-center gap-3">
          <span className="text-secondary font-mono text-xl font-normal">04.</span> 
          Featured Work
        </h2>
        <div className="w-20 h-1 bg-primary shadow-[0_0_10px_var(--color-primary)]"></div>
      </motion.div>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-3/5 relative group perspective-1000">
              <div className="relative rounded-xl overflow-hidden ember-glass aspect-[16/9] shadow-[0_0_30px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_40px_rgba(245,158,11,0.2)] transition-all duration-500 z-10">
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              {/* Decorative background accent */}
              <div className={`absolute top-4 ${index % 2 === 1 ? '-left-4' : '-right-4'} w-full h-full border border-primary/20 rounded-xl z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}></div>
            </div>

            {/* Project Info */}
            <div className={`w-full lg:w-2/5 flex flex-col ${index % 2 === 1 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} z-20`}>
              <div className="flex items-center gap-2 text-primary font-mono text-sm mb-2">
                <Code className="w-4 h-4" />
                <span>Featured Project</span>
              </div>
              
              <h3 className="text-3xl font-display font-bold text-foreground mb-6 hover:text-primary transition-colors">
                <a href={project.demo}>{project.title}</a>
              </h3>
              
              <div className="ember-glass p-6 rounded-xl mb-6 shadow-xl relative backdrop-blur-md">
                <p className="text-muted-foreground font-sans leading-relaxed text-left">
                  {project.description}
                </p>
              </div>
              
              <ul className={`flex flex-wrap gap-4 font-mono text-sm text-foreground/70 mb-8 ${index % 2 === 1 ? 'justify-start' : 'lg:justify-end'}`}>
                {project.tech.map(tech => (
                  <li key={tech} className="hover:text-primary transition-colors">{tech}</li>
                ))}
              </ul>
              
              <div className="flex items-center gap-6">
                <a href={project.github} className="text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10 group" aria-label="GitHub Repository">
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href={project.demo} className="text-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10 group" aria-label="Live Demo">
                  <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
