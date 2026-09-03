import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/blocks";
import { brand } from "@/content/site";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement | GOAL Pediatrics" },
      {
        name: "description",
        content:
          "GOAL Pediatrics is committed to an accessible website: keyboard navigation, contrast, semantic structure and reduced-motion support.",
      },
      { property: "og:title", content: "Accessibility | GOAL Pediatrics" },
      { property: "og:description", content: "Our commitment to an accessible experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <PageHero
        eyebrow="Accessibility"
        title="Built to be usable by every family."
        lead="We follow WCAG principles across this site and keep improving as we learn."
      />
      <section className="container-page py-16 lg:py-24">
        <ul className="max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
          <li>Semantic structure with a single clear heading hierarchy on each page.</li>
          <li>Keyboard navigation with visible focus states throughout.</li>
          <li>Colour is never the only way information is communicated.</li>
          <li>Motion respects the reduced-motion setting on your device.</li>
          <li>Large touch targets and readable type on small screens.</li>
        </ul>
        <p className="mt-8 max-w-2xl leading-relaxed text-muted-foreground">
          If something on this site is hard to use, tell us at{" "}
          <a href={`mailto:${brand.email}`} className="text-primary hover:underline">
            {brand.email}
          </a>{" "}
          and we will fix it.
        </p>
      </section>
    </SiteLayout>
  ),
});
