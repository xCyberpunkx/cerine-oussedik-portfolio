import { createFileRoute } from "@tanstack/react-router";
import { Community } from "@/components/sections/Community";

export const Route = createFileRoute("/community")({
  component: CommunityPage,
  head: () => ({
    meta: [
      { title: "Community — Cerine Oussedik" },
      { name: "description", content: "Community involvement and journey — GDG Algiers, English Speakers Club, Open Minds, Crypto Club, and more." },
      { property: "og:title", content: "Community — Cerine Oussedik" },
      { property: "og:description", content: "Built with people, not alone." },
    ],
  }),
});

function CommunityPage() {
  return (
    <main className="pt-24">
      <Community />
    </main>
  );
}