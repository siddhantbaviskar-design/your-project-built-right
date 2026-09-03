import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { FinalCta, PageHero } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { LineIcon, type LineIconName } from "@/components/LineIcon";
import { services } from "@/content/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Pediatric Orthotic Services | GOAL Pediatrics" },
      {
        name: "description",
        content:
          "AFOs, SMOs, cranial remolding helmets and scoliosis bracing — custom pediatric orthotic services designed and fit for growing children.",
      },
      { property: "og:title", content: "Pediatric Orthotic Services | GOAL Pediatrics" },
      {
        property: "og:description",
        content: "Explore the custom orthotic services we provide for children and families.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const icons: Record<string, LineIconName> = {
  afos: "foot",
  smos: "foot",
  "cranial-helmets": "helmet",
  "scoliosis-bracing": "spine",
};

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Support for every stage of childhood."
        lead="Every device starts with your child's own measurements, and keeps being adjusted as they grow."
      />

      <section className="container-page py-16 lg:py-24">
        <ul className="divide-y divide-border border-y border-border">
          {services.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={i * 70}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group grid gap-5 py-9 sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-8"
              >
                <LineIcon
                  name={icons[service.slug] ?? "foot"}
                  className="h-10 w-10 text-primary"
                />
                <div>
                  <p className="label-mono">
                    {service.code} · {service.fullName}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-primary">
                    {service.name}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 self-center font-display text-sm font-semibold text-primary">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
