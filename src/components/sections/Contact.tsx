import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Contact = () => (
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

      <Reveal delay={150}>
        <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
          <div className="glass rounded-2xl p-5 hover-lift">
            <Mail className="w-5 h-5 text-primary mb-2" />
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Email</div>
            <a href="mailto:cerineoussedik01@gmail.com" className="text-sm hover:text-primary break-all">
              cerineoussedik01@gmail.com
            </a>
          </div>
          {/*
          <div className="glass rounded-2xl p-5 hover-lift">
            <Phone className="w-5 h-5 text-primary mb-2" />
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Phone</div>
            <a href="tel:+2130000000000" className="text-sm hover:text-primary">
              +213 XX XX XX XX XX
            </a>
          </div>
          */}
          <div className="glass rounded-2xl p-5 hover-lift">
            <MapPin className="w-5 h-5 text-primary mb-2" />
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Location</div>
            <span className="text-sm">Algiers, Algeria</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:cerineoussedik01@gmail.com"
            className="group inline-flex items-center gap-2 bg-gradient-hero text-primary-foreground rounded-full px-6 py-3.5 font-medium shadow-glow hover:scale-105 transition-transform"
          >
            <Mail className="w-4 h-4" /> Send me an email
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
            href="https://github.com/Cerine-IT"
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
);
