import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "01. About", href: "#about" },
    { name: "02. Skills", href: "#skills" },
    { name: "03. Experience", href: "#experience" },
    { name: "04. Projects", href: "#projects" },
    { name: "05. Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "ember-glass py-4" : "py-6 bg-transparent"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary transform origin-left"
        style={{ scaleX: scrollYProgress, width: "100%" }}
      />
      
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-display font-bold tracking-tighter text-foreground flex items-center gap-2 group"
        >
          <span className="text-primary group-hover:text-secondary transition-colors">/</span>
          A.CHEN
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-secondary opacity-70 mr-1">{link.name.split(" ")[0]}</span>
              {link.name.split(" ")[1]}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 border border-primary/50 text-primary font-mono text-sm rounded hover:bg-primary/10 transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle (Simplified) */}
        <button className="md:hidden text-primary p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
