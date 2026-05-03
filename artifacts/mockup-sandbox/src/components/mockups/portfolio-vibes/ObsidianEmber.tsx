import React, { useState, useEffect } from "react";
import { ArrowRight, Github, Twitter, Code2, Terminal, Zap, Star } from "lucide-react";
import "./_vibes.css";

const TITLES = [
  "Full-Stack Engineer",
  "UI/UX Designer",
  "System Architect",
  "Open Source Creator"
];

export function ObsidianEmber() {
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
    <div className="w-full min-h-screen bg-[#060402] text-[#fef3c7] font-sans overflow-hidden noise-bg relative flex items-center justify-center p-6 sm:p-12">
      {/* Ambient Orbs */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f59e0b] rounded-full blur-[150px] opacity-10 pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#dc2626] rounded-full blur-[120px] opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col gap-16">
        
        {/* Navigation / Header */}
        <nav className="flex items-center justify-between w-full">
          <div className="text-[#f59e0b] font-mono text-sm tracking-widest uppercase">
            <span className="text-[#dc2626]">01.</span> Hero
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-[#fef3c7]/60 hover:text-[#f59e0b] transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-[#fef3c7]/60 hover:text-[#f59e0b] transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </nav>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-2 text-[#f59e0b] font-mono text-sm">
              <Terminal className="w-4 h-4" />
              <span>Hello, World. I am</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold font-['Space_Grotesk'] leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fef3c7] via-[#f59e0b] to-[#dc2626]">
                Alex Chen
              </span>
            </h1>
            
            <div className="text-2xl sm:text-3xl text-[#fef3c7]/80 font-['Space_Grotesk'] h-10 flex items-center">
              <span>{displayText}</span>
              <span className="w-[3px] h-[1em] bg-[#f59e0b] ml-1 animate-blink shadow-[0_0_8px_#f59e0b]"></span>
            </div>
            
            <p className="text-[#fef3c7]/60 text-lg max-w-xl leading-relaxed mt-2">
              Forging scalable systems and beautiful interfaces in the midnight hours. 
              I specialize in React, Node, and forging resilient architectures.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button className="px-6 py-3 rounded-md bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-[#060402] font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-0.5">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-md ember-glass text-[#fef3c7] hover:bg-[#f59e0b]/10 transition-all border border-[#f59e0b]/30">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column: Avatar Art */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative group perspective-1000">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden ember-glass shadow-[0_0_40px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_60px_rgba(245,158,11,0.25)] transition-all duration-500 transform group-hover:rotate-y-12">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#dc2626]/20 to-transparent z-10 mix-blend-overlay"></div>
              <img 
                src="/__mockup/images/avatar-ember.png" 
                alt="Illustrated Avatar" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              {/* Glowing corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#f59e0b] shadow-[0_0_10px_#f59e0b]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#dc2626] shadow-[0_0_10px_#dc2626]"></div>
            </div>
          </div>
        </div>

        {/* Bottom Bento Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "Experience", value: "5+ Yrs", icon: Zap },
            { label: "Projects", value: "42", icon: Code2 },
            { label: "Contributions", value: "1.2k", icon: Github },
            { label: "Client Rating", value: "5.0", icon: Star }
          ].map((stat, i) => (
            <div key={i} className="ember-glass p-5 rounded-xl flex flex-col gap-3 group hover:border-[#f59e0b]/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[#fef3c7]/50 font-mono text-xs uppercase tracking-wider">{stat.label}</span>
                <stat.icon className="w-4 h-4 text-[#f59e0b]/50 group-hover:text-[#f59e0b] transition-colors" />
              </div>
              <div className="text-2xl font-bold font-['Space_Grotesk'] bg-clip-text text-transparent bg-gradient-to-br from-[#fef3c7] to-[#f59e0b]">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
