import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Download, MapPin, FileText } from "lucide-react";
import { Butterfly, Sparkle } from "@/components/Butterflies";
import { Reveal } from "@/components/Reveal";
import { CVModal } from "@/components/CVModal";

export const Hero = () => {
  const [cvOpen, setCvOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-4xl text-center relative">
        <Butterfly className="absolute -top-12 -left-8 w-20 h-20 animate-flutter opacity-80" />
        <Sparkle className="absolute top-0 right-0 w-5 h-5 text-accent animate-glow-pulse" />

        <Reveal>
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary mb-8">
            <Sparkles className="w-3 h-3" /> Full Stack Developer · CS Student · Builder
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
          <p className="text-base md:text-lg text-muted-foreground mb-3 inline-flex items-center gap-2 justify-center flex-wrap">
            Full Stack Developer · Backend Engineer · CS Student
            <span className="inline-flex items-center gap-1 text-xs text-primary/80">
              <MapPin className="w-3 h-3" /> Algiers, Algeria
            </span>
          </p>
        </Reveal>

        <Reveal delay={450}>
          <p className="font-serif italic text-xl md:text-2xl text-foreground/90 mb-10 max-w-2xl mx-auto">
            “Started with curiosity, now building real systems.”
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground rounded-full px-7 py-3.5 font-medium shadow-glow hover:scale-105 transition-transform"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="glass rounded-full px-7 py-3.5 font-medium hover:text-primary hover-lift transition-colors"
            >
              Contact Me
            </Link>
            <button
              type="button"
              onClick={() => setCvOpen(true)}
              className="glass rounded-full px-7 py-3.5 font-medium hover:text-primary hover-lift transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> View CV
            </button>
            <a
              href="/cerine-oussedik-resume.pdf"
              download="Cerine-Oussedik-Resume.pdf"
              className="glass rounded-full px-7 py-3.5 font-medium hover:text-primary hover-lift transition-colors inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download
            </a>
          </div>
        </Reveal>

        <Reveal delay={800}>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {[
              { v: "3+", l: "Years coding" },
              { v: "15+", l: "Projects built" },
              { v: "5", l: "Communities" },
              { v: "3", l: "Languages spoken" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4">
                <div className="text-2xl font-serif text-gradient">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
};
