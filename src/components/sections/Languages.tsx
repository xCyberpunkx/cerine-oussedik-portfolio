import { Globe2, BookOpen, Camera, Sparkles, Compass, Users2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const langs = [
  { name: "Arabic", level: "Native", pct: 100 },
  { name: "French", level: "Fluent", pct: 92 },
  { name: "English", level: "Advanced (C1)", pct: 85 },
];

const interests = [
  { icon: BookOpen, label: "Reading" },
  { icon: Camera, label: "Photography" },
  { icon: Sparkles, label: "Writing" },
  { icon: Compass, label: "Personal growth" },
  { icon: Users2, label: "Project mgmt" },
  { icon: Globe2, label: "Continuous learning" },
];

export const Languages = () => (
  <section id="languages" className="px-6 py-28">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <Reveal>
        <div className="glass rounded-3xl p-8 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
              <Globe2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="font-serif text-3xl">Languages</h2>
          </div>
          <div className="space-y-5">
            {langs.map((l) => (
              <div key={l.name}>
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{l.level}</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary/50 overflow-hidden">
                  <div
                    className="h-full bg-gradient-hero rounded-full transition-all duration-1000"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="glass rounded-3xl p-8 h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-glow">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="font-serif text-3xl">Beyond code</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-5">
            A few of the things that keep me curious and balanced outside the terminal.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {interests.map((i) => (
              <div
                key={i.label}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 bg-primary/5 border border-primary/15 hover:bg-primary/10 transition-colors"
              >
                <i.icon className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm">{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
