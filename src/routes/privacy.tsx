import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, PlaceholderNote } from "@/components/blocks";
import { contentNotice } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | GOAL Pediatrics" },
      {
        name: "description",
        content: "How GOAL Pediatrics handles family and patient information collected on this website.",
      },
      { property: "og:title", content: "Privacy Policy | GOAL Pediatrics" },
      { property: "og:description", content: "Our approach to privacy and patient information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How information submitted through this website is collected, used and protected."
      />
      <section className="container-page py-16 lg:py-24">
        <div className="max-w-2xl space-y-5 leading-relaxed text-muted-foreground">
          <p>
            Information you submit through intake and contact forms is used to respond to your
            request and coordinate your child's care.
          </p>
          <p>
            Protected health information is handled in line with applicable healthcare privacy
            regulations.
          </p>
          <PlaceholderNote>{contentNotice}</PlaceholderNote>
        </div>
      </section>
    </SiteLayout>
  ),
});
