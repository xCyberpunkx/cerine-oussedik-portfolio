import { Server, Layout, Database, Cloud, Wrench, Shield, Brain, Cpu } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const skills: {
  category: string;
  icon: typeof Layout;
  blurb: string;
  items: string[];
}[] = [
  {
    category: "Backend",
    icon: Server,
    blurb: "Where the real logic lives.",
    items: ["TypeScript", "JavaScript", "Node.js", "Express.js", "PHP", "REST API", "OTP", "RBAC", "Webhooks"],
  },
  {
    category: "Frontend",
    icon: Layout,
    blurb: "Crafting interfaces with care.",
    items: ["React.js", "TypeScript", "Tailwind CSS", "HTML / CSS", "Responsive Design", "UX / UI"],
  },
  {
    category: "Databases",
    icon: Database,
    blurb: "Structured, queried, optimized.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Oracle XE", "Redis"],
  },
  {
    category: "Cloud & Integrations",
    icon: Cloud,
    blurb: "Connecting services that scale.",
    items: ["Cloudinary", "Firebase FCM", "Nodemailer", "Redis"],
  },
  {
    category: "DevOps & Tooling",
    icon: Wrench,
    blurb: "The everyday workshop.",
    items: ["Linux", "VPS", "Docker", "Nginx", "Apache", "Git / GitHub", "Postman", "npm"],
  },
  {
    category: "Security",
    icon: Shield,
    blurb: "Defense in every layer.",
    items: ["Helmet", "CORS", "Rate Limiting", "bcrypt", "HMAC verification", "Replay protection"],
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    blurb: "Teaching machines to read.",
    items: ["Python", "NLTK", "scikit-learn", "TF-IDF", "Supervised Learning", "K-Means", "Expert Systems"],
  },
  {
    category: "Low-Level & Systems",
    icon: Cpu,
    blurb: "From bare metal upward.",
    items: ["x86 Assembly", "MASM", "CPU & Memory ops", "Processor Flags", "C", "SDL2"],
  },
];

export const Skills = () => (
  <section id="skills" className="px-6 py-28">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 text-center">Toolkit</p>
        <h2 className="text-4xl md:text-5xl text-center mb-4">
          Things I love to <em className="text-gradient not-italic">build with</em>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          A curated set of languages, frameworks, and tools I reach for when turning ideas into real systems.
        </p>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="glass rounded-3xl p-6 hover-lift h-full group relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-hero opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
              <div className="flex items-center gap-3 mb-4 relative">
                <div className="w-11 h-11 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow shrink-0">
                  <group.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-gradient leading-tight">{group.category}</h3>
                  <p className="text-[11px] text-muted-foreground italic">{group.blurb}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-foreground/85 border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
