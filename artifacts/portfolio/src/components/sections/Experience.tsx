import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: "stripe",
    role: "Senior Software Engineer",
    company: "Stripe",
    initial: "S",
    color: "text-[#635BFF] border-[#635BFF]",
    bg: "bg-[#635BFF]/10",
    date: "2022 - Present",
    description: "Leading the core payments team. Architected a distributed ledger system reducing latency by 40%. Mentored 5 mid-level engineers.",
  },
  {
    id: "cloudflare",
    role: "Software Engineer",
    company: "Cloudflare",
    initial: "C",
    color: "text-[#F38020] border-[#F38020]",
    bg: "bg-[#F38020]/10",
    date: "2019 - 2022",
    description: "Developed features for the Edge Computing platform. Built Rust services handling millions of requests per second.",
  },
  {
    id: "twilio",
    role: "Junior Engineer",
    company: "Twilio",
    initial: "T",
    color: "text-[#F22F46] border-[#F22F46]",
    bg: "bg-[#F22F46]/10",
    date: "2017 - 2019",
    description: "Contributed to the Voice API. Improved test coverage by 30% and participated in the on-call rotation.",
  },
  {
    id: "github",
    role: "Intern",
    company: "GitHub",
    initial: "G",
    color: "text-foreground border-foreground",
    bg: "bg-foreground/10",
    date: "Summer 2016",
    description: "Worked on GitHub Actions prototype. Implemented internal tooling for CI/CD pipelines.",
  },
];

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-xl font-normal">03.</span> Where I've Worked
            <div className="h-[1px] bg-border flex-1 max-w-xs ml-4" />
          </h2>
        </motion.div>

        <div className="relative pl-8 md:pl-0" ref={containerRef}>
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />
          <motion.div
            className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary md:-translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="relative md:flex items-center justify-between group"
                >
                  <div
                    className={`absolute left-[-45px] md:left-1/2 w-10 h-10 -ml-[4px] md:-ml-0 rounded-full bg-background border-2 ${exp.color} md:-translate-x-1/2 z-10 flex items-center justify-center font-bold transition-all duration-300 group-hover:scale-110 shadow-lg`}
                    aria-label={exp.company}
                  >
                    <span aria-hidden="true" className="text-sm">{exp.initial}</span>
                  </div>

                  <div className={`md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    <div className="bg-card border border-card-border rounded-xl p-6 shadow-md transition-colors duration-300 hover:border-primary/50 relative overflow-hidden group/card">
                      <div className={`absolute top-0 left-0 w-full h-1 ${exp.bg}`} />
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.role} <span className="text-primary">@ {exp.company}</span>
                      </h3>
                      <div className="font-mono text-sm text-muted-foreground mt-1 mb-4">
                        {exp.date}
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-left md:text-inherit">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  <div className={`hidden md:block md:w-5/12 ${isEven ? 'md:order-2' : ''}`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
