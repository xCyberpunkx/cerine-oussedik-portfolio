import { createFileRoute } from "@tanstack/react-router";
import { Butterflies } from "@/components/Butterflies";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Community } from "@/components/sections/Community";
import { Languages } from "@/components/sections/Languages";
import { Quotes } from "@/components/sections/Quotes";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Cerine Oussedik — Full Stack Developer & CS Student" },
      {
        name: "description",
        content:
          "Portfolio of Cerine Oussedik — Full Stack Developer, Backend Engineer, and CS student at USTHB. Node.js, React, PostgreSQL, NLP, and real systems built with care.",
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

function Index() {
  return (
    <div id="top" className="relative min-h-screen">
      <Butterflies />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Community />
      <Languages />
      <Quotes />
      <Contact />
      <footer className="px-6 py-10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Cerine Oussedik · Crafted with 💜, butterflies & late-night curiosity</p>
      </footer>
    </div>
  );
}
