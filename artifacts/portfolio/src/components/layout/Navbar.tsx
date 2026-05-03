import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const links = [
    { name: "About",      href: "#about" },
    { name: "Projects",   href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact",    href: "#contact" },
    { name: "Blog",       href: "#blog" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id)),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4 border-b border-white/[0.06]" : "py-6"
        }`}
        style={isScrolled ? {
          background: "rgba(5,5,5,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        } : {}}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="#hero"
            className="text-2xl tracking-tighter transition-colors bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-400 focus-visible:outline-2 focus-visible:outline-primary"
            style={{ fontFamily: "var(--app-font-display)", fontWeight: 800 }}
          >
            AlphaD
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
            <ul className="flex items-center gap-8 m-0 p-0 list-none">
              {links.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    className={`font-mono text-sm transition-colors flex items-center gap-1.5 rounded px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 ${
                      activeSection === link.href.slice(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="text-primary/60 text-[10px]">0{i + 1}.</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: links.length * 0.08 }}
            >
              <a
                href="#"
                className="relative overflow-hidden group px-4 py-2 font-mono text-sm text-primary rounded-lg focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                style={{
                  background: "rgba(139,92,246,0.08)",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
                aria-label="Download resume"
              >
                <span className="relative z-10">Resume</span>
              </a>
            </motion.div>
          </nav>

          <button
            className="md:hidden w-11 h-11 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors rounded-lg focus-visible:outline-2 focus-visible:outline-primary"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="absolute top-full left-0 right-0 border-b border-white/[0.06] py-4 md:hidden"
            style={{
              background: "rgba(5,5,5,0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <nav className="flex flex-col items-center gap-2 py-6" aria-label="Mobile navigation">
              {links.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center font-mono text-lg text-muted-foreground hover:text-primary transition-colors py-3 focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span className="text-primary/60 text-sm mr-2">0{i + 1}.</span>
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="mt-4 px-8 py-3 font-mono text-primary rounded-xl focus-visible:outline-2 focus-visible:outline-primary"
                style={{
                  background: "rgba(139,92,246,0.08)",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </header>
    </>
  );
}
