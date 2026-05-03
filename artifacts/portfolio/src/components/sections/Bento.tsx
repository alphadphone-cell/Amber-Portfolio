import { motion } from "framer-motion";
import { Code2, Globe, Cpu, Rocket, Terminal } from "lucide-react";

const cards = [
  {
    id: "stack",
    className: "col-span-2 row-span-1",
    neon: "neon-violet",
    icon: <Code2 className="w-5 h-5" aria-hidden="true" />,
    label: "My Stack",
    content: (
      <div className="mt-4 flex flex-wrap gap-2">
        {["React", "TypeScript", "Go", "Node.js", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS", "GraphQL"].map((t) => (
          <span key={t} className="px-2 py-1 text-xs font-mono bg-primary/10 border border-primary/20 text-primary rounded-sm">
            {t}
          </span>
        ))}
      </div>
    ),
  },
  {
    id: "coffee",
    className: "col-span-1 row-span-1",
    neon: "neon-yellow",
    icon: <span aria-hidden="true" className="text-yellow-400 text-lg">☕</span>,
    label: "Coffee / Day",
    content: (
      <div className="mt-4">
        <p className="text-5xl font-black text-foreground">3.2</p>
        <p className="text-sm text-muted-foreground mt-1">Cups consumed</p>
      </div>
    ),
  },
  {
    id: "commits",
    className: "col-span-1 row-span-1",
    neon: "neon-green",
    icon: <Terminal className="w-5 h-5 text-green-400" aria-hidden="true" />,
    label: "Commits in 2025",
    content: (
      <div className="mt-4">
        <p className="text-5xl font-black text-foreground">1,842</p>
        <p className="text-sm text-muted-foreground mt-1">+23% vs last year</p>
      </div>
    ),
  },
  {
    id: "location",
    className: "col-span-2 row-span-1",
    neon: "neon-blue",
    icon: <Globe className="w-5 h-5 text-blue-400" aria-hidden="true" />,
    label: "Currently Based In",
    content: (
      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-foreground">Ho Chi Minh City</p>
          <p className="text-muted-foreground mt-1">Vietnam · UTC+7</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-sm text-muted-foreground">Open to remote ✓</p>
          <p className="font-mono text-xs text-muted-foreground/60 mt-1">worldwide</p>
        </div>
      </div>
    ),
  },
  {
    id: "experience",
    className: "col-span-1 row-span-1",
    neon: "neon-orange",
    icon: <Rocket className="w-5 h-5 text-orange-400" aria-hidden="true" />,
    label: "Years XP",
    content: (
      <div className="mt-4">
        <p className="text-5xl font-black text-foreground">8+</p>
        <p className="text-sm text-muted-foreground mt-1">Professional years</p>
      </div>
    ),
  },
  {
    id: "tools",
    className: "col-span-1 row-span-1",
    neon: "neon-cyan",
    icon: <Cpu className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
    label: "Favourite Tools",
    content: (
      <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
        {["Neovim", "Warp Terminal", "Raycast", "Figma", "Obsidian"].map((t) => (
          <li key={t} className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-primary inline-block" aria-hidden="true" />
            {t}
          </li>
        ))}
      </ul>
    ),
  },
];

export function Bento() {
  return (
    <section id="bento" aria-label="Quick facts about me" className="py-20 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`glass ${card.neon} rounded-2xl p-6 flex flex-col transition-all duration-300 hover:scale-[1.02] ${card.className}`}
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                {card.icon}
                <span className="font-mono text-xs uppercase tracking-widest">{card.label}</span>
              </div>
              {card.content}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
