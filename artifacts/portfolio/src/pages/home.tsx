import { Hero } from "@/components/sections/Hero";
import { Bento } from "@/components/sections/Bento";
import { About } from "@/components/sections/About";
import { Marquee } from "@/components/sections/Marquee";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShaderBackground } from "@/components/ShaderBackground";

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <div
        className="relative min-h-screen text-foreground selection:bg-primary/30 selection:text-primary"
        style={{ zIndex: 2 }}
      >
        <Navbar />
        <main id="main-content">
          <Hero />
          <Bento />
          <Marquee />
          <About />
          <Projects />
          <Experience />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
