import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

function App() {
  return (
    <TooltipProvider>
      <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-primary/30 selection:text-primary">
        {/* Global Noise Overlay */}
        <div className="noise-bg"></div>

        {/* Ambient Orbs */}
        <div className="fixed bottom-0 left-0 w-[60vw] h-[60vh] bg-primary rounded-full blur-[150px] opacity-10 pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="fixed top-0 right-0 w-[40vw] h-[40vh] bg-secondary rounded-full blur-[120px] opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>

        <Navbar />
        
        <main className="relative z-10 flex flex-col pt-24">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
