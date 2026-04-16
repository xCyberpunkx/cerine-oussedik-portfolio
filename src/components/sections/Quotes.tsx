import { Butterfly } from "@/components/Butterflies";
import { Reveal } from "@/components/Reveal";

const quotes = [
  "Ideas don’t belong on a stage — they’re built behind the scenes.",
  "You don’t need permission to start building.",
];

export const Quotes = () => (
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
);
