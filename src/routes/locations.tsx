import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FinalCta, PageHero, PlaceholderNote } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { contentNotice, locations } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations & Service Areas | GOAL Pediatrics" },
      {
        name: "description",
        content:
          "Where GOAL Pediatrics provides pediatric orthotic care, with contact and fax details for each service area.",
      },
      { property: "og:title", content: "Locations | GOAL Pediatrics" },
      {
        property: "og:description",
        content: "Find the GOAL Pediatrics service area closest to your family.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LocationsPage,
});

const mapShapes: Record<string, { d: string; cx: number; cy: number }> = {
  AZ: { d: "M52 96 L110 96 L118 176 L74 190 L52 168 Z", cx: 84, cy: 140 },
  UT: { d: "M56 20 L112 20 L112 60 L132 60 L132 92 L58 92 Z", cx: 94, cy: 56 },
  TX: { d: "M168 104 L228 100 L246 132 L232 176 L200 196 L186 166 L162 152 Z", cx: 204, cy: 145 },
};

function LocationsPage() {
  const [active, setActive] = useState(locations[0]!.abbr);
  const location = locations.find((l) => l.abbr === active)!;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Locations"
        title="Care where your family already is."
        lead="Select a state to see contact details and how care is delivered in that service area."
      />

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <svg viewBox="0 0 300 220" className="w-full" role="img" aria-label="Map of GOAL Pediatrics service areas">
              {locations.map((loc) => {
                const shape = mapShapes[loc.abbr];
                if (!shape) return null;
                const isActive = loc.abbr === active;
                return (
                  <g key={loc.abbr}>
                    <path
                      d={shape.d}
                      fill={isActive ? "var(--color-primary)" : "var(--color-secondary)"}
                      stroke="var(--color-border)"
                      strokeWidth="1.5"
                      className="cursor-pointer transition-colors"
                      onClick={() => setActive(loc.abbr)}
                    />
                    <text
                      x={shape.cx}
                      y={shape.cy}
                      textAnchor="middle"
                      className={cn(
                        "pointer-events-none text-[12px] font-semibold",
                        isActive ? "fill-[var(--color-primary-foreground)]" : "fill-[var(--color-muted-foreground)]",
                      )}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {loc.abbr}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="mt-6 flex flex-wrap gap-2">
              {locations.map((loc) => (
                <button
                  key={loc.abbr}
                  type="button"
                  onClick={() => setActive(loc.abbr)}
                  aria-pressed={loc.abbr === active}
                  className={cn(
                    "h-11 rounded-full border px-5 font-display text-sm font-medium transition-colors",
                    loc.abbr === active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary",
                  )}
                >
                  {loc.state}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <p className="label-mono">Service area</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-ink">{location.state}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{location.note}</p>

              <dl className="mt-8 space-y-5 text-sm">
                <div>
                  <dt className="label-mono">Areas served</dt>
                  <dd className="mt-1">{location.cities.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="label-mono">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${location.phone.replace(/\D/g, "")}`} className="hover:text-primary">
                      {location.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label-mono">Fax</dt>
                  <dd className="mt-1">{location.fax}</dd>
                </div>
                <div>
                  <dt className="label-mono">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${location.email}`} className="hover:text-primary">
                      {location.email}
                    </a>
                  </dd>
                </div>
              </dl>

              {location.placeholder ? (
                <PlaceholderNote>{contentNotice}</PlaceholderNote>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
