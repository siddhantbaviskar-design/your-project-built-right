import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Download, PenLine, Search } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { FinalCta, PageHero, PlaceholderNote } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contentNotice, documents } from "@/content/site";

export const Route = createFileRoute("/forms")({
  head: () => ({
    meta: [
      { title: "Forms & Documents | GOAL Pediatrics" },
      {
        name: "description",
        content:
          "Intake, insurance, consent and follow-up paperwork for GOAL Pediatrics families, grouped by stage of care.",
      },
      { property: "og:title", content: "Forms & Documents | GOAL Pediatrics" },
      {
        property: "og:description",
        content: "All the paperwork families need, in one organized place.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FormsPage,
});

const order = ["Before Your Visit", "During Treatment", "Feedback & Administration"] as const;

function FormsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return documents.filter(
      (doc) => !q || doc.name.toLowerCase().includes(q) || doc.description.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Forms & documents"
        title="Paperwork, grouped by when you need it."
        lead="Complete what you can before your visit — the rest we can walk through together."
      />

      <section className="container-page py-16 lg:py-24">
        <div className="relative max-w-md">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <label htmlFor="doc-search" className="sr-only">
            Search documents
          </label>
          <Input
            id="doc-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documents"
            className="h-12 rounded-full pl-10"
          />
        </div>

        <div className="mt-12 space-y-14">
          {order.map((group) => {
            const items = filtered.filter((doc) => doc.group === group);
            if (items.length === 0) return null;
            return (
              <div key={group}>
                <h2 className="font-display text-xl font-semibold text-ink">{group}</h2>
                <ul className="mt-5 grid gap-4 md:grid-cols-2">
                  {items.map((doc, i) => (
                    <Reveal as="li" key={doc.id} delay={i * 50}>
                      <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6">
                        <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                          {doc.action === "Download" ? (
                            <Download className="h-4.5 w-4.5" />
                          ) : (
                            <PenLine className="h-4.5 w-4.5" />
                          )}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-display text-base font-semibold text-ink">
                            {doc.name}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {doc.description}
                          </p>
                          <Button variant="outline" size="sm" className="mt-4">
                            {doc.action}
                          </Button>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            );
          })}
          {filtered.length === 0 ? (
            <p className="text-sm text-muted-foreground">No documents match that search.</p>
          ) : null}
        </div>

        <PlaceholderNote>{contentNotice} Document links are wired once files are supplied.</PlaceholderNote>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
