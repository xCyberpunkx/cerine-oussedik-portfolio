import { Sparkle } from "@/components/Butterflies";
import { Reveal } from "@/components/Reveal";
import { Star } from "lucide-react";

const featured = {
  title: "EventFlow — Webhook + ETL Platform",
  desc: "A SaaS-inspired platform for real-time webhook ingestion, queuing, and ETL transformation — a mini Zapier / Make built from scratch.",
  bullets: [
    "/webhook/{source} endpoint receiving and validating events from Stripe, GitHub, and more.",
    "HMAC signature verification (Stripe-style) and replay-attack protection.",
    "Async queue (MySQL-backed) with PHP CLI workers, retry logic, and dead-letter queue.",
    "ETL pipeline: normalization, batching, and multi-destination routing (DB, email, APIs).",
    "Admin dashboard for live event logs, retries, and transformation rules.",
  ],
  tech: ["PHP", "MySQL", "Redis", "Docker", "HTML/CSS/JS"],
};

const projects = [
  {
    title: "Registration Platform",
    desc: "Full-stack web app for managing national event registrations — dynamic form + admin dashboard, secure file uploads, HTTPOnly sessions.",
    tech: ["Node.js", "Express", "MongoDB", "MVC"],
    year: "2025",
  },
  {
    title: "Movies Explorer",
    desc: "Search and explore movies via TMDb API. Responsive UI, instant search, and graceful error handling.",
    tech: ["JavaScript", "API", "CSS"],
    year: "2025",
  },
  {
    title: "Show Your Work",
    desc: "Project showcase platform for club members — interactive gallery, responsive layout, smooth animations.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2025",
  },
  {
    title: "Text Classification — NLP",
    desc: "Multi-category English corpus pipeline with tokenization, stopword removal, stemming, TF-IDF features, and supervised classification.",
    tech: ["Python", "NLTK", "scikit-learn", "TF-IDF"],
    year: "2026",
  },
  {
    title: "ExtractPerson — NLP Utility",
    desc: "Python script extracting person names via dictionary-based pattern matching, multi-encoding I/O (UTF-16 LE → UTF-8 BOM).",
    tech: ["Python", "Text parsing"],
    year: "2025",
  },
  {
    title: "BIMO Calculator",
    desc: "Low-level calculator in x86 Assembly — binary, decimal, hex; arithmetic + bitwise ops; flags display (ZF, SF, CF, OF).",
    tech: ["x86 Assembly", "MASM", "DOS"],
    year: "2025",
  },
  {
    title: "Library Management System",
    desc: "Book CRUD with advanced search, student profiles with borrowing history and status tracking.",
    tech: ["JavaFX", "OOP"],
    year: "2025",
  },
  {
    title: "2048 Game — SDL2",
    desc: "Native C version with three modes (User, Machine, User vs Machine) and a graphical SDL2 interface.",
    tech: ["C", "SDL2"],
    year: "2024",
  },
];

export const Projects = () => (
  <section id="projects" className="px-6 py-28">
    <div className="max-w-6xl mx-auto">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 text-center">Selected work</p>
        <h2 className="text-4xl md:text-5xl text-center mb-14">
          Projects with a little <em className="text-gradient not-italic">soul</em>
        </h2>
      </Reveal>

      {/* Featured */}
      <Reveal>
        <article className="glass rounded-3xl p-8 md:p-10 mb-10 hover-lift relative overflow-hidden group">
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-hero opacity-15 group-hover:opacity-25 blur-3xl transition-opacity" />
          <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.25em] text-accent">
            <Star className="w-3.5 h-3.5" /> Featured
          </div>
          <h3 className="font-serif text-3xl md:text-4xl mb-3 group-hover:text-gradient transition-colors">
            {featured.title}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">{featured.desc}</p>

          <ul className="grid md:grid-cols-2 gap-2 mb-6">
            {featured.bullets.map((b) => (
              <li key={b} className="text-sm text-foreground/80 flex gap-2">
                <span className="text-primary mt-1.5">◆</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/25"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      </Reveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className="glass rounded-3xl p-6 h-full hover-lift group relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-hero opacity-0 group-hover:opacity-30 blur-2xl transition-opacity" />
              <Sparkle className="absolute top-4 right-4 w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">{p.year}</div>
              <h3 className="font-serif text-xl mb-2 group-hover:text-gradient">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary/90 border border-primary/20"
                  >
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
);
