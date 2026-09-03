import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, PlaceholderNote } from "@/components/blocks";
import { contentNotice } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | GOAL Pediatrics" },
      {
        name: "description",
        content: "Terms governing use of the GOAL Pediatrics website and its resources.",
      },
      { property: "og:title", content: "Terms of Use | GOAL Pediatrics" },
      { property: "og:description", content: "Terms of use for this website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        lead="Information on this website is educational and does not replace clinical advice."
      />
      <section className="container-page py-16 lg:py-24">
        <div className="max-w-2xl space-y-5 leading-relaxed text-muted-foreground">
          <p>
            Content published here is general education for families. It is not a diagnosis, a
            treatment plan, or a substitute for care from your child's clinicians.
          </p>
          <p>Always follow the wear schedule and instructions provided by your care team.</p>
          <PlaceholderNote>{contentNotice}</PlaceholderNote>
        </div>
      </section>
    </SiteLayout>
  ),
});
