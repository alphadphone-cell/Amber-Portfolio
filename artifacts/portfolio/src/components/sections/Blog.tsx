import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { getAllPosts, formatDate } from "@/lib/blog";

const posts = getAllPosts();

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
            <div className="h-[1px] bg-border flex-1 max-w-xs ml-4" aria-hidden="true" />
          </h2>
          <p className="text-muted-foreground text-lg ml-12">
            Thoughts on engineering, architecture, and building things at scale.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-border">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col md:flex-row gap-6 md:gap-12 py-10 border-b border-border hover:bg-primary/5 transition-colors px-4 -mx-4 rounded-sm items-start md:items-center"
              >
                <div className="md:w-1/4 shrink-0 flex flex-row md:flex-col gap-3 md:gap-2 items-center md:items-start text-sm">
                  <span className="font-mono text-primary bg-primary/10 px-2 py-1 rounded-sm text-xs border border-primary/20">
                    {post.tag}
                  </span>
                  <time
                    dateTime={post.date}
                    className="text-muted-foreground font-mono"
                  >
                    {formatDate(post.date)}
                  </time>
                  <span className="text-muted-foreground/60 hidden md:inline">
                    {post.readTime}
                  </span>
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
              </Link>
            </motion.div>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-center text-muted-foreground py-16 font-mono">
            No posts yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
