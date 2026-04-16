import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "@/components/sections/Skills";

export const Route = createFileRoute("/skills")({
  component: SkillsPage,
  head: () => ({
    meta: [
      { title: "Skills — Cerine Oussedik" },
      { name: "description", content: "Languages, frameworks, and tools Cerine Oussedik uses to build real systems — from Node.js and React to PostgreSQL, NLP, and low-level systems." },
      { property: "og:title", content: "Skills — Cerine Oussedik" },
      { property: "og:description", content: "Backend, frontend, databases, DevOps, security, AI/ML, and low-level systems." },
    ],
  }),
});

function SkillsPage() {
  return (
    <main className="pt-24">
      <Skills />
    </main>
  );
}