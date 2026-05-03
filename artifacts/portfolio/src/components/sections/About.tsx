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
          {/* ── Text column ─────────────────────────────────────── */}
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
              what I wanted — and I&apos;ve been obsessed with building ever since.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Fast-forward to today, and I&apos;ve had the privilege of working at an advertising agency,
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
              <p className="mb-4">Here are a few technologies I&apos;ve been working with recently:</p>
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

          {/* ── Photo column ────────────────────────────────────── */}
          <motion.div
            className="lg:col-span-5 relative group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Offset decorative border frame */}
              <div
                className="absolute inset-0 border-2 border-primary translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500 rounded-sm z-0"
                aria-hidden="true"
              />

              {/* Ambient glow */}
              <div
                className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-0"
                aria-hidden="true"
              />

              {/* Photo card */}
              <div className="relative z-10 overflow-hidden rounded-sm bg-card border border-card-border">
                {/* Subtle color overlay on hover */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-color" />

                <img
                  src="/avatar.png"
                  alt="Anh Duy — profile photo"
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  style={{
                    filter: "grayscale(1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0) drop-shadow(0 0 20px rgba(139,92,246,0.4))";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.filter = "grayscale(1)";
                  }}
                  draggable={false}
                />

                {/* Bottom gradient overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 z-20"
                  style={{
                    background: "linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 100%)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Corner accent marks */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-primary z-20" aria-hidden="true" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-primary z-20" aria-hidden="true" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-primary z-20" aria-hidden="true" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-primary z-20" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
