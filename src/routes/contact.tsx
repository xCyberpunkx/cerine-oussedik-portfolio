import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Cerine Oussedik" },
      { name: "description", content: "Get in touch with Cerine Oussedik — email, phone, LinkedIn, and GitHub. Open to collaborations and opportunities." },
      { property: "og:title", content: "Contact — Cerine Oussedik" },
      { property: "og:description", content: "Let's build something meaningful together." },
    ],
  }),
});

function ContactPage() {
  return (
    <main className="pt-24">
      <Contact />
    </main>
  );
}