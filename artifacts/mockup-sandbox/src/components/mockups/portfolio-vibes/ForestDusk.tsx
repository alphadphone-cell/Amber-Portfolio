import React, { useState, useEffect } from 'react';
import './_vibes.css';

const titles = [
  "Full-stack Developer",
  "UI/UX Enthusiast",
  "System Architect",
  "Open Source Contributor"
];

export function ForestDusk() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <div 
      className="min-h-screen relative overflow-hidden font-['Inter'] selection:bg-[#0d9488]/30 selection:text-[#f0fdf4]"
      style={{ backgroundColor: '#040c06', color: '#d1fae5' }}
    >
      {/* Ambient Orbs */}
      <div 
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none animate-orb-drift"
        style={{ background: 'radial-gradient(circle, #16a34a 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 pointer-events-none animate-orb-drift-slow"
        style={{ background: 'radial-gradient(circle, #fef9c3 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full blur-[80px] opacity-15 pointer-events-none translate-x-[-50%] translate-y-[-50%]"
        style={{ background: 'radial-gradient(circle, #0d9488 0%, transparent 70%)' }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 lg:pt-32">
        
        {/* Top subtle rule/chapter */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-sm text-[#0d9488]">01</span>
          <div className="h-[1px] w-12 bg-[#0d9488]/30" />
          <span className="text-sm tracking-widest uppercase text-[#d1fae5]/70">Introduction</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-24">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-[#0d9488] font-mono text-sm tracking-wide flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16a34a] inline-block shadow-[0_0_8px_#16a34a]" />
                AVAILABLE FOR NEW OPPORTUNITIES
              </h2>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-['Playfair_Display'] italic tracking-tight">
                <span className="text-[#f0fdf4]">Hi, I'm </span>
                <span 
                  className="bg-clip-text text-transparent inline-block"
                  style={{ backgroundImage: 'linear-gradient(to right, #f0fdf4, #86efac, #0d9488)' }}
                >
                  Alex.
                </span>
              </h1>
              
              <div className="h-12 flex items-center">
                <p className="text-2xl sm:text-3xl font-light text-[#fef9c3]">
                  {displayText}
                  <span className="inline-block w-[3px] h-[1em] bg-[#0d9488] ml-2 align-middle animate-cursor" />
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-[#d1fae5]/80 max-w-xl font-light">
              Crafting digital experiences with care and precision. I specialize in building scalable web applications that feel organic, robust, and thoughtful.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                className="px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(13,148,136,0.3)]"
                style={{ backgroundColor: '#0f766e', color: '#fef9c3' }}
              >
                View My Work
              </button>
              <button 
                className="px-8 py-4 rounded-xl font-medium transition-all duration-300 backdrop-blur-md hover:bg-[rgba(6,20,10,0.9)] group"
                style={{ 
                  backgroundColor: 'rgba(6, 20, 10, 0.6)', 
                  border: '1px solid rgba(209, 250, 229, 0.2)',
                  color: '#d1fae5'
                }}
              >
                <span className="group-hover:text-[#fef9c3] transition-colors">Get In Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: Art */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Organic Ring */}
              <div className="absolute inset-0 rounded-full border border-[#fef9c3]/20 shadow-[0_0_30px_rgba(254,249,195,0.05)] scale-[1.05]" />
              <div className="absolute inset-2 rounded-full border border-[#0d9488]/30 shadow-[0_0_40px_rgba(13,148,136,0.1)] scale-[1.1]" />
              
              {/* Avatar Container */}
              <div 
                className="w-full h-full rounded-full overflow-hidden relative backdrop-blur-xl border border-[#16a34a]/20 p-2"
                style={{ backgroundColor: 'rgba(6, 20, 10, 0.75)' }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-[#040c06]">
                  <img 
                    src="/__mockup/images/avatar-forest.png"
                    alt="Developer Avatar"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90 hover:mix-blend-normal transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0d9488]/10 mix-blend-overlay pointer-events-none" />
                </div>
              </div>
              
              {/* Floating tech badge */}
              <div 
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-lg backdrop-blur-md border border-[#0d9488]/30 flex items-center gap-2"
                style={{ backgroundColor: 'rgba(6, 20, 10, 0.8)' }}
              >
                <div className="w-2 h-2 rounded-full bg-[#16a34a] shadow-[0_0_5px_#16a34a]" />
                <span className="text-xs font-mono text-[#f0fdf4]">React / Next.js</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bento Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Years Exp", value: "05+" },
            { label: "Projects", value: "40+" },
            { label: "Commits", value: "2.5k" },
            { label: "Coffee", value: "∞" }
          ].map((stat, i) => (
            <div 
              key={i}
              className="relative rounded-3xl p-6 backdrop-blur-lg border border-[#0d9488]/20 overflow-hidden group hover:border-[#16a34a]/40 transition-colors duration-500"
              style={{ backgroundColor: 'rgba(6, 20, 10, 0.75)' }}
            >
              {/* Organic Top Accent */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0d9488] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-2 relative z-10">
                <p className="text-sm font-mono text-[#0d9488]">{stat.label}</p>
                <p 
                  className="text-4xl font-semibold bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(to bottom right, #fef9c3, #d1fae5)' }}
                >
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
