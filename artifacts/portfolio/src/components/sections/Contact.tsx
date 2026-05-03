import { motion } from "framer-motion";
import { Mail, Send, ArrowRight } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import { MagneticButton } from "../MagneticButton";
import { activeSocials } from "../../config/socials";
import { SocialIcon } from "../SocialIcon";

const EMAIL = "hello@alphadphone.dev";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 bg-background relative z-10" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-xl font-normal">04.</span> Get in Touch
            <div className="h-[1px] bg-border flex-1 max-w-xs ml-4" aria-hidden="true" />
          </h2>
          <p className="text-muted-foreground text-lg ml-12 max-w-xl">
            Whether you have an opportunity, a project, or just want to say hi — I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono">Reach me directly at</p>
                <a href={`mailto:${EMAIL}`} className="text-lg font-semibold text-foreground hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary">
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
              <p>
                I'm currently open to new opportunities. My inbox is always open — whether for a project
                collaboration, job opportunity, or just to say hi. I'll do my best to reply promptly.
              </p>
              <p>
                I'm particularly interested in roles involving distributed systems, developer tooling,
                or working on products that have real impact.
              </p>
            </div>

            {activeSocials.length > 0 && (
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">Or find me on</p>
                <ul className="flex flex-wrap gap-3 m-0 p-0 list-none">
                  {activeSocials.map((s) => (
                    <li key={s.platform}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${s.platform}: ${s.handle}`}
                        className="flex items-center gap-2.5 px-4 py-2.5 glass rounded-xl text-sm text-muted-foreground hover:text-foreground transition-colors group focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <SocialIcon icon={s.icon} className="w-4 h-4 transition-transform group-hover:scale-110" />
                        {s.handle || s.platform}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSocials.length === 0 && (
              <div className="flex flex-col gap-3">
                <MagneticButton
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold text-sm rounded-xl hover:bg-primary/90 transition-colors w-fit"
                >
                  Say Hello <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6"
              aria-label="Contact form"
            >
              <div>
                <label htmlFor="contact-name" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder="Your name"
                  className="w-full bg-card border border-card-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="w-full bg-card border border-card-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="What's on your mind?"
                  rows={6}
                  className="w-full bg-card border border-card-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold text-sm rounded-xl hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all w-full justify-center group"
                aria-live="polite"
              >
                {status === "sending" && <><span className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent" aria-hidden="true" />Sending…</>}
                {status === "sent" && <>Message Sent!</>}
                {status === "error" && <>Try Again</>}
                {status === "idle" && <>Send Message <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></>}
              </button>

              {status === "sent" && (
                <p className="text-center text-sm text-green-400 font-mono" role="status">
                  Thanks! I'll get back to you soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
