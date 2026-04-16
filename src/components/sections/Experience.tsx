import { Briefcase, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const highlights = [
  "Led the development team — coordinated tasks, tracked progress, managed members across the project lifecycle.",
  "Sole owner of the complete backend architecture for the UniverDelivery platform.",
  "Designed a modular REST API: Auth (JWT + OTP), Shops, Products, Orders (21-status workflow), Landing Pages, Notifications.",
  "Built an RBAC system with role / permission management for multi-shop vendors and staff.",
  "Integrated Cloudinary, Firebase Cloud Messaging, and Nodemailer (HTML email templates).",
  "Hardened security: Helmet, CORS, Rate Limiting (anti-DDoS), bcrypt password hashing.",
  "Managed PostgreSQL via Prisma ORM — schema design, migrations, and seeding.",
];

export const Experience = () => (
  <section id="experience" className="px-6 py-28">
    <div className="max-w-5xl mx-auto">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4 text-center">Experience</p>
        <h2 className="text-4xl md:text-5xl text-center mb-14">
          Real systems, <em className="text-gradient not-italic">real teams</em>
        </h2>
      </Reveal>

      <Reveal>
        <article className="glass rounded-3xl p-8 md:p-10 hover-lift relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-hero opacity-10 blur-3xl" />

          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow shrink-0">
              <Briefcase className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-2xl md:text-3xl">Backend Developer & Project Lead</h3>
                <span className="text-xs uppercase tracking-wider text-primary">2026 · Internship</span>
              </div>
              <p className="text-muted-foreground mt-1">
                <span className="text-foreground">Univer Delivery</span> · Algiers, Algeria
              </p>
            </div>
          </div>

          <p className="text-foreground/90 leading-relaxed mb-6 italic">
            AI-powered e-commerce SaaS platform enabling vendors to create and manage online stores, with smart order
            tracking, automated notifications, and a full multi-shop ecosystem.
          </p>

          <ul className="space-y-3 mb-6">
            {highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {["JavaScript", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "Cloudinary", "Firebase"].map((t) => (
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
    </div>
  </section>
);
