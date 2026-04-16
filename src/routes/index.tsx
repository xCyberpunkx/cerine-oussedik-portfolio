import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Github, Linkedin, Sparkles, Code2, Brain, Heart, Users, Trophy, Rocket, Layout, Server, Database, Binary, Wrench } from "lucide-react";
import { Butterflies, Butterfly, Sparkle } from "@/components/Butterflies";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cerine Oussedik — Full Stack Developer & CS Student" },
      {
        name: "description",
        content:
          "Portfolio of Cerine Oussedik — Full Stack Web Developer, Software Engineer, and CS student passionate about backend, NLP, and building real systems.",
      },
      { property: "og:title", content: "Cerine Oussedik — Full Stack Developer" },
      { property: "og:description", content: "Started with curiosity, now building real systems." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
});

const skills: {
  category: string;
  icon: typeof Layout;
  blurb: string;
  items: { name: string; level: number }[];
}[] = [
  {
    category: "Frontend",
    icon: Layout,
    blurb: "Crafting interfaces with care.",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    blurb: "Where the real logic lives.",
    items: [
      { name: "Node.js", level: 75 },
      { name: "PHP", level: 70 },
    ],
  },
  {
    category: "Database",
    icon: Database,
    blurb: "Structured, queried, optimized.",
    items: [{ name: "PostgreSQL", level: 75 }],
  },
  {
    category: "Languages",
    icon: Binary,
    blurb: "From high-level to bare metal.",
    items: [
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
      { name: "Assembly x86", level: 65 },
      { name: "SDL2", level: 70 },
    ],
  },
  {
    category: "Tools",
    icon: Wrench,
    blurb: "The everyday workshop.",
    items: [
      { name: "Git", level: 80 },
      { name: "Linux", level: 75 },
    ],
  },
];

const projects = [
  { title: "Library Management System", desc: "A full-featured library system with elegant UI and robust data handling.", tech: ["JavaFX", "OOP"] },
  { title: "BIMO Calculator", desc: "Low-level calculator built directly in x86 Assembly — bare metal precision.", tech: ["Assembly", "x86"] },
  { title: "2048 Game", desc: "The classic puzzle reimagined with smooth web animations.", tech: ["JavaScript", "HTML", "CSS"] },
  { title: "2048 Game — SDL", desc: "Native C version using SDL2 for graphics and event handling.", tech: ["C", "SDL2"] },
  { title: "Profile Card", desc: "A pure CSS exploration of layout, gradients, and micro-interactions.", tech: ["CSS", "HTML"] },
  { title: "Show Your Work Platform", desc: "A space for builders to share their projects and grow together.", tech: ["Full Stack", "Community"] },
];

const journey = [
  { org: "GDG Algiers", role: "Communication Team Leader · Content Creator", icon: Users },
  { org: "Open Minds Club", role: "IT Team · B2B Team", icon: Rocket },
  { org: "Hackathons & Events", role: "GEDx · Webscale · Experia", icon: Trophy },
];

const quotes = [
  "Ideas don’t belong on a stage — they’re built behind the scenes.",
  "You don’t need permission to start building.",
];

function Index() {
  return (
    <div id="top" className="relative min-h-screen">
      <Butterflies />
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-4xl text-center relative">
          <Butterfly className="absolute -top-12 -left-8 w-20 h-20 animate-flutter opacity-80" />
          <Sparkle className="absolute top-0 right-0 w-5 h-5 text-accent animate-glow-pulse" />

          <Reveal>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary mb-8">
              <Sparkles className="w-3 h-3" /> Software Engineer · Builder · Dreamer
            </span>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="font-serif text-6xl md:text-8xl font-bold leading-[1.05] mb-6">
              <span className="text-gradient">Cerine</span>
              <br />
              <span className="italic font-medium">Oussedik</span>
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-base md:text-lg text-muted-foreground mb-3">
              Full Stack Web Developer · Software Engineer · CS Student
            </p>
          </Reveal>

          <Reveal delay={450}>
            <p className="font-serif italic text-xl md:text-2xl text-foreground/90 mb-10">
              “Started with curiosity, now building real systems.”
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground rounded-full px-7 py-3.5 font-medium shadow-glow hover:scale-105 transition-transform"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="glass rounded-full px-7 py-3.5 font-medium hover:text-primary hover-lift transition-colors"
              >
                Contact Me
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
          <Reveal className="md:col-span-3">
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">About me</p>
            <h2 className="text-4xl md:text-5xl mb-6">A quiet kind of <em className="text-gradient not-italic">ambitious</em>.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CS student at <span className="text-foreground">USTHB</span>, passionate about backend engineering, NLP,
              and building real-world applications. I enjoy turning ideas into working systems — and collaborating
              with driven teams who care about what they build.
            </p>
          </Reveal>

          <Reveal delay={200} className="md:col-span-2 grid gap-4">
            {[
              { icon: Brain, title: "Problem solver", desc: "Curious by default, methodical by choice." },
              { icon: Code2, title: "Builder mindset", desc: "Ship real things. Learn out loud." },
              { icon: Heart, title: "Clean architecture", desc: "Beautiful systems make beautiful products." },
            ].map((t) => (
              <div key={t.title} className="glass rounded-2xl p-5 hover-lift">
                <t.icon className="w-5 h-5 text-primary mb-2" />
                <h3 className="font-serif text-lg mb-1">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 text-center">Toolkit</p>
            <h2 className="text-4xl md:text-5xl text-center mb-14">
              Things I love to <em className="text-gradient not-italic">build with</em>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(skills).map(([cat, items], i) => (
              <Reveal key={cat} delay={i * 100}>
                <div className="glass rounded-3xl p-6 hover-lift h-full">
                  <h3 className="font-serif text-xl mb-4 text-gradient">{cat}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="text-sm px-3 py-1.5 rounded-full bg-secondary/60 border border-primary/20 text-secondary-foreground hover:bg-primary/20 hover:border-primary/50 transition-colors"
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

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 text-center">Selected work</p>
            <h2 className="text-4xl md:text-5xl text-center mb-14">
              Projects with a little <em className="text-gradient not-italic">soul</em>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="glass rounded-3xl p-6 h-full hover-lift group relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-hero opacity-0 group-hover:opacity-30 blur-2xl transition-opacity" />
                  <Sparkle className="absolute top-4 right-4 w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="font-serif text-xl mb-2 group-hover:text-gradient">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="experience" className="px-6 py-28">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 text-center">Community & journey</p>
            <h2 className="text-4xl md:text-5xl text-center mb-14">
              Built with <em className="text-gradient not-italic">people</em>, not alone
            </h2>
          </Reveal>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute left-2 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-blue-soft" />
            {journey.map((j, i) => (
              <Reveal key={j.org} delay={i * 150}>
                <div className="relative mb-10 last:mb-0">
                  <div className="absolute -left-8 md:-left-12 top-1 w-5 h-5 rounded-full bg-gradient-hero shadow-glow flex items-center justify-center">
                    <j.icon className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <div className="glass rounded-2xl p-6 hover-lift">
                    <h3 className="font-serif text-2xl mb-1">{j.org}</h3>
                    <p className="text-muted-foreground">{j.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="px-6 py-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <Reveal key={q} delay={i * 150}>
              <blockquote className="glass rounded-3xl p-8 md:p-10 relative h-full">
                <span className="font-serif text-7xl text-primary/30 absolute top-2 left-5 leading-none">“</span>
                <p className="font-serif italic text-xl md:text-2xl leading-relaxed relative z-10">{q}</p>
                <Butterfly className="absolute bottom-4 right-4 w-10 h-10 opacity-60 animate-flutter" />
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-28">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">Say hi</p>
            <h2 className="text-4xl md:text-6xl mb-6">
              Let’s build something <em className="text-gradient not-italic">meaningful</em> together 💜
            </h2>
            <p className="text-muted-foreground mb-10">
              Open to collaborations, opportunities, and a good conversation about software, ideas, or community.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:cerineoussedik01@gmail.com"
                className="group inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground rounded-full px-6 py-3.5 font-medium shadow-glow hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4" /> cerineoussedik01@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/cerine-oussedik"
                target="_blank"
                rel="noreferrer"
                className="glass rounded-full p-3.5 hover:text-primary hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="glass rounded-full p-3.5 hover:text-primary hover-lift"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="px-6 py-10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Cerine Oussedik · Crafted with 💜, butterflies & late-night curiosity</p>
      </footer>
    </div>
  );
}
