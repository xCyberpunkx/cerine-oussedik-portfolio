import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Languages } from "@/components/sections/Languages";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Cerine Oussedik" },
      { name: "description", content: "About Cerine Oussedik — CS student at USTHB, full-stack developer, and trilingual builder based in Algiers." },
      { property: "og:title", content: "About — Cerine Oussedik" },
      { property: "og:description", content: "A quiet kind of ambitious — CS student, full-stack developer, trilingual builder." },
    ],
  }),
});

function AboutPage() {
  return (
    <main className="pt-24">
      <About />
      <Languages />
    </main>
  );
}