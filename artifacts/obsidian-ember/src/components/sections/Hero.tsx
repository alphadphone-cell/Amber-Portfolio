import React, { useState, useEffect } from "react";
import { ArrowRight, Terminal, Github, Twitter, Linkedin, Code2, Zap, Star } from "lucide-react";
import { motion } from "framer-motion";

const TITLES = [
  "Full-Stack Engineer",
  "System Architect",
  "Open Source Creator",
  "UI/UX Designer"
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      
      if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        return;
      }
      
      setDisplayText(prev => 
        isDeleting 
          ? prev.slice(0, -1) 
          : currentTitle.slice(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 order-2 lg:order-1"
        >
          <div className="flex items-center gap-2 text-primary font-mono text-sm">
            <Terminal className="w-4 h-4" />
            <span>Hello, World. I am</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-secondary">
              Alex Chen
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl text-foreground/80 font-display h-10 flex items-center">
            <span>{displayText}</span>
            <span className="w-[3px] h-[1em] bg-primary ml-1 animate-blink shadow-[0_0_8px_var(--color-primary)]"></span>
          </div>
          
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mt-2 font-sans">
            Forging scalable systems and beautiful interfaces in the midnight hours. 
            I build resilient architectures that handle millions of requests without breaking a sweat.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a href="#projects" className="px-6 py-3 rounded-md bg-gradient-to-r from-primary to-orange-500 text-background font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-0.5">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-md ember-glass text-foreground hover:bg-primary/10 transition-all border border-primary/30 font-medium">
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10"><Linkedin className="w-5 h-5" /></a>
          </div>
        </motion.div>

        {/* Right Column: Avatar Art */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative group perspective-1000"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-2xl overflow-hidden ember-glass shadow-[0_0_40px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_60px_rgba(245,158,11,0.25)] transition-all duration-500 transform group-hover:-rotate-y-6 group-hover:rotate-x-6">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent z-10 mix-blend-overlay"></div>
            <img 
              src={`${import.meta.env.BASE_URL}avatar-ember.png`} 
              alt="Alex Chen" 
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            {/* Glowing corners */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary shadow-[0_0_15px_var(--color-primary)] opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-secondary shadow-[0_0_15px_var(--color-secondary)] opacity-70"></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bento Stat Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
      >
        {[
          { label: "Experience", value: "5+ Yrs", icon: Zap },
          { label: "Projects", value: "42", icon: Code2 },
          { label: "Contributions", value: "1.2k", icon: Github },
          { label: "Client Rating", value: "5.0", icon: Star }
        ].map((stat, i) => (
          <div key={i} className="ember-glass p-5 md:p-6 rounded-xl flex flex-col gap-3 group hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground font-mono text-xs uppercase tracking-wider">{stat.label}</span>
              <stat.icon className="w-4 h-4 text-primary/50 group-hover:text-primary transition-colors" />
            </div>
            <div className="text-3xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-br from-foreground to-primary">
              {stat.value}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
