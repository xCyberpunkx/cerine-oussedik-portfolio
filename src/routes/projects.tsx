import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/sections/Projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Cerine Oussedik" },
      { name: "description", content: "Selected work by Cerine Oussedik — EventFlow webhook/ETL platform, registration systems, NLP pipelines, and more." },
      { property: "og:title", content: "Projects — Cerine Oussedik" },
      { property: "og:description", content: "Projects with a little soul." },
    ],
  }),
});

function ProjectsPage() {
  return (
    <main className="pt-24">
      <Projects />
    </main>
  );
}