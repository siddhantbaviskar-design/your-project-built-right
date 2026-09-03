import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FinalCta, PageHero, PlaceholderNote } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { LineIcon } from "@/components/LineIcon";
import { Button } from "@/components/ui/button";
import { affiliateDisclosure, contentNotice, shoes } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shoes")({
  head: () => ({
    meta: [
      { title: "Brace-Friendly Shoes for Kids | GOAL Pediatrics" },
      {
        name: "description",
        content:
          "A curated guide to footwear that fits over AFOs and SMOs — what to look for in depth, width and fastening.",
      },
      { property: "og:title", content: "Brace-Friendly Shoes | GOAL Pediatrics" },
      {
        property: "og:description",
        content: "Shoes that actually fit over your child's braces, and how to choose them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShoesPage,
});

function ShoesPage() {
  const tags = ["All", ...Array.from(new Set(shoes.flatMap((s) => s.tags)))];
  const [tag, setTag] = useState("All");
  const filtered = useMemo(
    () => shoes.filter((s) => tag === "All" || s.tags.includes(tag)),
    [tag],
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Shoes"
        title="Footwear that fits over braces."
        lead="Depth, width and a full-length opening matter more than length. Here is what we look for."
      />

      <section className="container-page py-16 lg:py-24">
        <div role="group" aria-label="Filter shoes" className="flex flex-wrap gap-2">
          {tags.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTag(item)}
              aria-pressed={tag === item}
              className={cn(
                "h-10 rounded-full border px-4 font-display text-sm font-medium transition-colors",
                tag === item
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border hover:border-primary",
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((shoe, i) => (
            <Reveal as="li" key={shoe.id} delay={i * 60}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
                <div className="flex h-40 items-center justify-center bg-secondary">
                  <LineIcon name="foot" className="h-12 w-12 text-primary" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="label-mono">{shoe.sizes}</p>
                  <h2 className="mt-2 font-display text-base font-semibold text-ink">
                    {shoe.name}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">{shoe.brandNote}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {shoe.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {shoe.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full bg-primary-soft px-2.5 py-1 text-[11px] text-primary"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-display text-sm font-semibold text-ink">{shoe.price}</p>
                  <Button variant="outline" size="sm" className="mt-4 self-start">
                    View details
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          {affiliateDisclosure}
        </p>
        <PlaceholderNote>{contentNotice}</PlaceholderNote>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
