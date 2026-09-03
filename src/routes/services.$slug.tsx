import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs, Eyebrow, FinalCta } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { LineIcon, type LineIconName } from "@/components/LineIcon";
import { services } from "@/content/site";
import deviceImg from "@/assets/device-afo.jpg";

const icons: Record<string, LineIconName> = {
  afos: "foot",
  smos: "foot",
  "cranial-helmets": "helmet",
  "scoliosis-bracing": "spine",
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — ${loaderData.fullName} | GOAL Pediatrics` },
          { name: "description", content: loaderData.short },
          { property: "og:title", content: `${loaderData.name} | GOAL Pediatrics` },
          { property: "og:description", content: loaderData.short },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();

  return (
    <SiteLayout>
      <section className="border-b border-border bg-sand">
        <div className="container-page grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_1fr] lg:py-20">
          <Reveal>
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: service.name },
              ]}
            />
            <Eyebrow>{service.code} · {service.fullName}</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link to="/intake">
                  Start Your Child's Intake <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Ask About This Service</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={deviceImg}
              alt={`Custom pediatric ${service.fullName.toLowerCase()}`}
              loading="lazy"
              width={1200}
              height={1200}
              className="h-[280px] w-full rounded-2xl object-cover shadow-soft sm:h-[420px]"
            />
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Device details</Eyebrow>
            <div className="mt-6 rounded-2xl border border-border bg-card p-8">
              <LineIcon name={icons[service.slug] ?? "foot"} className="h-16 w-16 text-primary" strokeWidth={1.1} />
              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="label-mono">Device</dt>
                  <dd className="mt-1 font-display font-semibold text-ink">{service.fullName}</dd>
                </div>
                <div>
                  <dt className="label-mono">Fabrication</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Custom, from casting or digital scan
                  </dd>
                </div>
                <div>
                  <dt className="label-mono">Follow-up</dt>
                  <dd className="mt-1 text-muted-foreground">Reviewed as your child grows</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">
                What parents should know
              </h2>
              <ul className="mt-6 space-y-4">
                {service.parentsShouldKnow.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-12 rounded-2xl bg-secondary p-7">
              <h2 className="font-display text-lg font-semibold text-ink">Insurance</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Coverage depends on your plan and your child's prescription. Our care coordinator
                reviews benefits and prior-authorization requirements with you during intake before
                treatment begins.
              </p>
            </Reveal>

            <Reveal className="mt-12">
              <h2 className="text-2xl font-bold text-ink sm:text-3xl">Common questions</h2>
              <Accordion type="single" collapsible className="mt-4">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={faq.q} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left font-display text-base">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCta title={`Not sure if ${service.name} are right for your child?`} />
    </SiteLayout>
  );
}
