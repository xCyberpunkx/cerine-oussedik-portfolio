import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/components/sections/Experience";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Experience — Cerine Oussedik" },
      { name: "description", content: "Backend Developer & Project Lead at Univer Delivery — REST APIs, RBAC, PostgreSQL/Prisma, and hardened security." },
      { property: "og:title", content: "Experience — Cerine Oussedik" },
      { property: "og:description", content: "Real systems, real teams." },
    ],
  }),
});

function ExperiencePage() {
  return (
    <main className="pt-24">
      <Experience />
    </main>
  );
}