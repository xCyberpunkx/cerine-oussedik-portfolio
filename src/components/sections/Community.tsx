import { Users, Mic, Code2, UserPlus, Video } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const journey = [
  {
    org: "GDG Algiers",
    role: "Communication Team Lead",
    period: "2025 – Present",
    icon: Users,
    desc: "Leading content strategy, copywriting, social media, and multimedia production for the Google Developer Group community.",
  },
  {
    org: "English Speakers Club",
    role: "Discussion Group Host",
    period: "2025 – Present",
    icon: Mic,
    desc: "Facilitating weekly English discussion sessions — fostering communication skills and intercultural exchange.",
  },
  {
    org: "Open Minds Club",
    role: "IT Team Member",
    period: "2024 – Present",
    icon: Code2,
    desc: "Web workshops (HTML, CSS, JS, PHP) and collaborative frontend projects and hackathons.",
  },
  {
    org: "Crypto Club",
    role: "HR Manager",
    period: "2023 – 2024",
    icon: UserPlus,
    desc: "Organized recruitment and onboarding of 40+ new members. Reinforced team cohesion and internal management.",
  },
  {
    org: "Project Initiative Club",
    role: "Content Creator",
    period: "2024 – 2025",
    icon: Video,
    desc: "Video production, digital storytelling, scriptwriting, filming, and creative direction for social media.",
  },
];

export const Community = () => (
  <section id="community" className="px-6 py-28">
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
          <Reveal key={j.org} delay={i * 100}>
            <div className="relative mb-10 last:mb-0">
              <div className="absolute -left-8 md:-left-12 top-1 w-5 h-5 rounded-full bg-gradient-hero shadow-glow flex items-center justify-center">
                <j.icon className="w-3 h-3 text-primary-foreground" />
              </div>
              <div className="glass rounded-2xl p-6 hover-lift">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-serif text-2xl">{j.org}</h3>
                  <span className="text-xs uppercase tracking-wider text-primary">{j.period}</span>
                </div>
                <p className="text-foreground/90 mb-2">{j.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
