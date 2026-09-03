import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Eyebrow, PageHero } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { brand, locations } from "@/content/site";

export const Route = createFileRoute("/providers")({
  head: () => ({
    meta: [
      { title: "For Providers | Refer to GOAL Pediatrics" },
      {
        name: "description",
        content:
          "Referral workflow, provider resources and contact details for physicians and therapists partnering with GOAL Pediatrics.",
      },
      { property: "og:title", content: "For Providers | GOAL Pediatrics" },
      {
        property: "og:description",
        content: "Partner with GOAL Pediatrics on pediatric orthotic care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Providers,
});

const workflow = [
  {
    n: "01",
    title: "Send the referral",
    body: "Fax or submit the prescription with relevant clinical notes and diagnosis codes.",
  },
  {
    n: "02",
    title: "We contact the family",
    body: "Our coordinator reaches the caregiver, verifies benefits and schedules the evaluation.",
  },
  {
    n: "03",
    title: "Evaluation and fabrication",
    body: "The clinician evaluates, captures measurements or a scan, and fabricates to prescription.",
  },
  {
    n: "04",
    title: "Documentation back to you",
    body: "Fitting notes and follow-up outcomes are returned to the referring provider.",
  },
];

function Providers() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="For providers"
        title="Partner with GOAL Pediatrics."
        lead="A pediatric orthotics partner that keeps referring providers informed from referral through follow-up."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/contact">
              Submit a Referral <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/forms">Provider Forms</Link>
          </Button>
        </div>
      </PageHero>

      <section className="container-page py-16 lg:py-24">
        <Eyebrow>Referral workflow</Eyebrow>
        <ol className="mt-8 divide-y divide-border border-y border-border">
          {workflow.map((step, i) => (
            <Reveal as="li" key={step.n} delay={i * 70} className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr] sm:gap-8">
              <p className="label-mono pt-1">{step.n}</p>
              <div>
                <h2 className="font-display text-lg font-semibold text-ink">{step.title}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-lg font-semibold text-ink">Referral contact</h2>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="label-mono">Phone</dt>
                <dd className="mt-1">{brand.phone}</dd>
              </div>
              <div>
                <dt className="label-mono">Fax</dt>
                <dd className="mt-1">{brand.fax}</dd>
              </div>
              <div>
                <dt className="label-mono">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${brand.email}`} className="hover:text-primary">
                    {brand.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl bg-secondary p-8">
            <h2 className="font-display text-lg font-semibold text-ink">Service areas</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {locations.map((loc) => (
                <li key={loc.abbr}>
                  <span className="font-display font-semibold text-ink">{loc.state}</span> ·{" "}
                  {loc.cities.join(", ")}
                </li>
              ))}
            </ul>
            <Link
              to="/locations"
              className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary"
            >
              View locations <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
