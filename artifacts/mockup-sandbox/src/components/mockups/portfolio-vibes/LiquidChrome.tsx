import React, { useState, useEffect } from 'react';
import './_vibes.css';

export function LiquidChrome() {
  const [titleText, setTitleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Software Engineer",
    "Systems Architect",
    "Interface Designer"
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setTitleText(isDeleting ? fullText.substring(0, titleText.length - 1) : fullText.substring(0, titleText.length + 1));

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && titleText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && titleText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [titleText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="relative min-h-screen font-['Inter'] text-slate-300 overflow-hidden" style={{ backgroundColor: '#020308' }}>
      {/* Ambient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20 pointer-events-none blur-[120px]" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}></div>
      
      {/* Scan Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-scanline pointer-events-none z-50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col justify-center min-h-screen">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['JetBrains_Mono'] text-sm tracking-widest text-[#94a3b8]">01</span>
          <div className="h-px bg-[#94a3b8]/30 w-12"></div>
          <span className="font-['JetBrains_Mono'] text-xs tracking-widest uppercase text-[#3b82f6]">Initialization</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Left Column: Text */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight text-[#f8fafc]">
              <span className="block mb-2" style={{ backgroundImage: 'linear-gradient(to right, #f8fafc, #94a3b8, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                ALEXANDER
              </span>
              <span className="block" style={{ backgroundImage: 'linear-gradient(to right, #f8fafc, #94a3b8, #3b82f6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                WONG
              </span>
            </h1>
            
            <div className="h-8 flex items-center">
              <span className="font-['JetBrains_Mono'] text-xl md:text-2xl text-[#e0f2fe]">
                &gt; {titleText}<span className="animate-blink inline-block w-3 h-6 ml-1 bg-[#3b82f6] align-middle"></span>
              </span>
            </div>

            <p className="max-w-md text-[#94a3b8] leading-relaxed font-['Inter'] font-light">
              Designing hyper-optimized interfaces and distributed systems. 
              Bridging the gap between high-performance architecture and flawless user experience.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-[#3b82f6] text-[#f8fafc] font-['JetBrains_Mono'] text-sm tracking-wider hover:bg-[#2563eb] transition-colors border border-[#3b82f6] shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                VIEW_SYSTEM
              </button>
              <button className="px-8 py-4 bg-transparent text-[#94a3b8] border border-[#94a3b8]/40 font-['JetBrains_Mono'] text-sm tracking-wider hover:text-[#f8fafc] hover:border-[#f8fafc]/60 transition-colors">
                ESTABLISH_LINK
              </button>
            </div>
          </div>

          {/* Right Column: Art */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-[#94a3b8]/30 p-4 shadow-[0_0_50px_rgba(59,130,246,0.1)] before:absolute before:inset-0 before:rounded-full before:border before:border-[#3b82f6]/20 before:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden border border-[#94a3b8]/50 relative group grayscale hover:grayscale-0 transition-all duration-700 sepia-[.2] hue-rotate-[180deg]">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" 
                  alt="Avatar" 
                  className="w-full h-full object-cover mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-[#3b82f6]/10 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bento Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'COMMITS', value: '14,293' },
            { label: 'SYSTEMS_LIVE', value: '42' },
            { label: 'LATENCY_MS', value: '<15' },
            { label: 'STATUS', value: 'ONLINE' },
          ].map((stat, i) => (
            <div key={i} className="bg-[rgba(8,12,24,0.80)] backdrop-blur-md border border-[#94a3b8]/20 border-t-[#94a3b8]/60 p-6 flex flex-col justify-between hover:bg-[rgba(15,20,35,0.85)] transition-colors relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-['JetBrains_Mono'] text-xs text-[#94a3b8] mb-4 tracking-widest">{stat.label}</span>
              <span className="font-['JetBrains_Mono'] text-2xl font-bold text-[#f8fafc]">{stat.value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
