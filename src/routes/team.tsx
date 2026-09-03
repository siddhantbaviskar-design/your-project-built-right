import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FinalCta, PageHero, PlaceholderNote } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { LineIcon } from "@/components/LineIcon";
import { contentNotice, locations, team } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team | GOAL Pediatrics" },
      {
        name: "description",
        content:
          "Meet the pediatric orthotists, fitters and care coordinators behind your child's care at GOAL Pediatrics.",
      },
      { property: "og:title", content: "Our Team | GOAL Pediatrics" },
      {
        property: "og:description",
        content: "The clinicians and coordinators who work with children and families every day.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  const filters = ["All locations", ...locations.map((l) => l.state)];
  const [active, setActive] = useState("All locations");
  const visible = team.filter((m) => active === "All locations" || m.location === active);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our experts"
        title="Meet the people behind your child's care."
        lead="Pediatric orthotists, fitters and coordinators working together on one plan for your child."
      />

      <section className="container-page py-16 lg:py-24">
        <div role="group" aria-label="Filter team by location" className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={cn(
                "h-10 rounded-full border px-4 font-display text-sm font-medium transition-colors",
                active === filter
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/80 hover:border-primary",
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((member, i) => (
            <Reveal as="li" key={member.id} delay={i * 70}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card">
                <div className="flex h-48 items-center justify-center bg-primary-soft/60">
                  <LineIcon
                    name="team"
                    className="h-14 w-14 text-primary transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="label-mono">{member.location}</p>
                  <h2 className="mt-2 font-display text-lg font-semibold text-ink">
                    {member.role}
                  </h2>
                  <p className="mt-1.5 text-sm text-muted-foreground">{member.credentials}</p>
                  {member.bio ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  ) : (
                    <p className="mt-3 text-sm italic text-muted-foreground">
                      Full profile coming soon.
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <PlaceholderNote>
          {contentNotice} Portraits, names, credentials and biographies are added here once
          supplied by the practice.
        </PlaceholderNote>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
