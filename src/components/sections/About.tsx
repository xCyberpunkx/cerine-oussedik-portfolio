import { Brain, Code2, Heart, GraduationCap, Globe, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const About = () => (
  <section id="about" className="px-6 py-28">
    <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 items-center">
      <Reveal className="md:col-span-3">
        <p className="text-sm uppercase tracking-[0.25em] text-primary mb-4">About me</p>
        <h2 className="text-4xl md:text-5xl mb-6">
          A quiet kind of <em className="text-gradient not-italic">ambitious</em>.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          Final-year <span className="text-foreground">Computer Science</span> student at{" "}
          <span className="text-foreground">USTHB</span>, with full-stack experience through academic projects and
          internships. I build backend APIs with <span className="text-foreground">Node.js / Express</span> and{" "}
          <span className="text-foreground">PHP</span>, manage SQL & NoSQL databases, and craft frontend interfaces
          with <span className="text-foreground">React</span>.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          I learn fast, collaborate openly, and communicate clearly in three languages. Looking to grow in a team
          building real, impactful products.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="glass rounded-full px-4 py-1.5 text-xs inline-flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-primary" /> USTHB · 2023 – Present
          </span>
          <span className="glass rounded-full px-4 py-1.5 text-xs inline-flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-primary" /> EN · FR · AR
          </span>
          <span className="glass rounded-full px-4 py-1.5 text-xs inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Open to opportunities
          </span>
        </div>
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
);
