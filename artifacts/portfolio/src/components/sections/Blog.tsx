import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    id: "distributed-systems-redis",
    tag: "Engineering",
    date: "Apr 12, 2026",
    readTime: "8 min read",
    title: "Building a Fault-Tolerant Task Queue with Redis Streams",
    excerpt: "How we scaled our background job processing to handle 10M+ daily tasks with exactly-once semantics and zero data loss using Redis Streams and consumer groups.",
    href: "#"
  },
  {
    id: "go-concurrency",
    tag: "Go",
    date: "Mar 3, 2026",
    readTime: "6 min read",
    title: "Go Concurrency Patterns I Wish I Knew Earlier",
    excerpt: "A practical guide to goroutines, channels, and context cancellation patterns that have saved me hours of debugging in production systems.",
    href: "#"
  },
  {
    id: "zero-knowledge",
    tag: "Security",
    date: "Jan 20, 2026",
    readTime: "12 min read",
    title: "Zero-Knowledge Architecture: A Deep Dive",
    excerpt: "Exploring the cryptographic primitives and architecture patterns behind zero-knowledge systems, and how we implemented them in Vaultify.",
    href: "#"
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-xl font-normal">05.</span> Writing
            <div className="h-[1px] bg-border flex-1 max-w-xs ml-4" />
          </h2>
          <p className="text-muted-foreground text-lg ml-12">Thoughts on engineering, architecture, and building things at scale.</p>
        </motion.div>

        <div className="flex flex-col border-t border-border">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-border hover:bg-primary/5 transition-colors px-4 -mx-4 rounded-sm items-start md:items-center"
            >
              <div className="md:w-1/4 shrink-0 flex flex-row md:flex-col gap-3 md:gap-2 items-center md:items-start text-sm">
                <span className="font-mono text-primary bg-primary/10 px-2 py-1 rounded-sm text-xs border border-primary/20">{post.tag}</span>
                <span className="text-muted-foreground font-mono">{post.date}</span>
                <span className="text-muted-foreground/60 hidden md:inline">{post.readTime}</span>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="hidden md:flex shrink-0 w-12 h-12 rounded-full border border-border items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors">
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a href="#" className="inline-flex items-center gap-2 font-mono text-primary hover:text-primary/80 transition-colors group">
            Read all posts <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
