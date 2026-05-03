import { motion } from "framer-motion";

const stats = [
  { value: "8+",   label: "Years Experience" },
  { value: "50+",  label: "Projects" },
  { value: "10K+", label: "GitHub Stars" },
  { value: "4",    label: "Companies" },
];

const skills = [
  "React", "TypeScript", "Node.js", "Go", "PostgreSQL",
  "Redis", "Docker", "Kubernetes", "GraphQL", "AWS",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-xl font-normal" aria-hidden="true">01.</span>
            About Me
            <div className="h-[1px] bg-border flex-1 max-w-xs ml-4" aria-hidden="true" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 pb-8 border-b border-border/50"
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <dt className="text-sm font-mono mt-1 text-muted-foreground">{label}</dt>
                  <dd className="text-2xl font-bold text-foreground">{value}</dd>
                </div>
              ))}
            </motion.dl>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Hello! My name is Anh Duy and I enjoy creating things that live on the internet. My interest
              in software engineering started when I first discovered I could make computers do exactly
              what I wanted — and I've been obsessed with building ever since.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Fast-forward to today, and I've had the privilege of working at an advertising agency,
              a start-up, a huge corporation, and a student-led design studio. My main focus these
              days is building accessible, inclusive products and digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8"
            >
              <p className="mb-4">Here are a few technologies I've been working with recently:</p>
              <ul className="flex flex-wrap gap-3" aria-label="Technologies">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="border border-primary/30 bg-primary/5 text-foreground hover:bg-primary/15 hover:border-primary hover:text-primary transition-colors text-sm font-mono px-3 py-1 rounded-sm cursor-default"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-5 relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="relative w-full max-w-md mx-auto aspect-square z-10"
              role="img"
              aria-label="Stylised initials AD representing Anh Duy"
            >
              <div className="absolute inset-0 bg-muted/30 grayscale filter transition-all duration-500 group-hover:grayscale-0 flex items-center justify-center rounded-sm">
                <span
                  className="text-8xl font-black text-muted-foreground/30 tracking-tighter group-hover:text-primary/30 transition-colors"
                  aria-hidden="true"
                >
                  AD
                </span>
              </div>
              <div
                className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500 -z-10 rounded-sm"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
