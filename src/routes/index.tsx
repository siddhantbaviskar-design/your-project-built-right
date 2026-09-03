import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal, useInView } from "@/components/Reveal";
import { LineIcon } from "@/components/LineIcon";
import { ArrowLink, Eyebrow, FinalCta, SectionHeading } from "@/components/blocks";
import {
  articles,
  careSettings,
  expertiseBlocks,
  processSteps,
  services,
  trustPoints,
} from "@/content/site";
import heroImg from "@/assets/hero-child.jpg";
import careImg from "@/assets/care-home.jpg";
import deviceImg from "@/assets/device-afo.jpg";
import scanImg from "@/assets/expertise-scan.jpg";
import familyImg from "@/assets/family-porch.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GOAL Pediatrics | Custom Pediatric Orthotics for Growing Kids" },
      {
        name: "description",
        content:
          "Pediatric orthotics made around your child — AFOs, SMOs, cranial helmets and scoliosis bracing, fit by clinicians who work with children every day.",
      },
      { property: "og:title", content: "GOAL Pediatrics | Pediatric Orthotics for Growing Kids" },
      {
        property: "og:description",
        content:
          "Custom braces and supports for children, designed around your family's life. Start your child's intake today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

/* 01 — HERO */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand">
      <div className="container-page grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
        <Reveal>
          <Eyebrow>Pediatric Orthotics</Eyebrow>
          <h1 className="mt-4 text-[2.5rem] font-bold leading-[1.03] text-ink sm:text-5xl lg:text-[3.75rem]">
            Pediatric orthotics made around your child — and your family.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Custom braces and supports designed, fit and followed up by clinicians who work with
            children every day. You do not need to know what your child needs before you reach out.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/intake">
                Start Your Child's Intake <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/how-it-works">See How It Works</Link>
            </Button>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-7 sm:grid-cols-4">
            {[
              "Pediatric-focused practice",
              "Clinician-led fitting",
              "Insurance & Medicaid support",
              "Multiple care locations",
            ].map((item) => (
              <li key={item} className="text-sm leading-snug text-foreground/80">
                <span aria-hidden="true" className="mb-2 block h-px w-6 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="overflow-hidden rounded-2xl shadow-lift">
            <img
              src={heroImg}
              alt="A young child wearing leg braces walking and laughing while a parent watches"
              width={1600}
              height={1200}
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[540px]"
            />
          </div>
          <div className="absolute -bottom-5 left-4 hidden rounded-xl border border-border bg-card px-5 py-4 shadow-soft sm:block">
            <p className="label-mono">Care that travels</p>
            <p className="mt-1 font-display text-sm font-semibold text-ink">
              Home · School · Clinic
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 02 — TRUST */
function Trust() {
  return (
    <section className="container-page py-20 lg:py-28">
      <SectionHeading
        eyebrow="Why families choose us"
        title="Specialized care. Built around growing kids."
        lead="Pediatric orthotics is its own discipline. Everything we do accounts for growth, activity and the reality of family life."
      />
      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point, i) => (
          <Reveal key={point.id} delay={i * 80}>
            <LineIcon name={point.icon} className="h-9 w-9 text-primary" />
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{point.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* 03 — SERVICES */
function Services() {
  const [featured, ...rest] = services;
  return (
    <section className="border-y border-border bg-sand py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Services"
            title="Support for every stage of childhood."
            lead="From a first pair of SMOs to spinal bracing, each device is built for the child in front of us."
          />
          <Reveal delay={100}>
            <ArrowLink to="/services">View all services</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="group">
            <Link
              to="/services/$slug"
              params={{ slug: featured.slug }}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:shadow-lift"
            >
              <div className="overflow-hidden">
                <img
                  src={deviceImg}
                  alt="Custom pediatric ankle-foot orthosis"
                  loading="lazy"
                  width={1200}
                  height={1200}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-80 lg:h-[26rem]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="label-mono">{featured.code} · {featured.fullName}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                  {featured.name}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {featured.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary">
                  Explore {featured.name}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="grid gap-4">
            {rest.map((service, i) => (
              <Reveal key={service.slug} delay={i * 90} className="group h-full">
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft sm:p-7"
                >
                  <div className="flex items-start gap-5">
                    <LineIcon
                      name={service.slug === "cranial-helmets" ? "helmet" : service.slug === "scoliosis-bracing" ? "spine" : "foot"}
                      className="mt-0.5 h-9 w-9 shrink-0 text-primary"
                    />
                    <div>
                      <p className="label-mono">{service.code} · {service.fullName}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.short}
                      </p>
                    </div>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 self-start font-display text-sm font-semibold text-primary">
                    Explore {service.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 04 — CONVENIENT CARE */
function ConvenientCare() {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <section className="container-page py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <Eyebrow>Convenient care</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold leading-[1.1] text-ink sm:text-4xl lg:text-[2.75rem]">
            Care that fits into your family's life.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Appointments are arranged around your family's routine — in the settings where care
            makes the most sense for your child.
          </p>

          <div ref={ref} className="mt-10">
            <svg viewBox="0 0 520 60" className="h-14 w-full max-w-md" aria-hidden="true">
              <path
                d="M40 30 H480"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="1.5"
              />
              <path
                d="M40 30 H480"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                className="draw-line"
                data-visible={visible}
              />
              {[40, 260, 480].map((cx) => (
                <circle key={cx} cx={cx} cy="30" r="6" fill="var(--color-background)" stroke="var(--color-primary)" strokeWidth="1.5" />
              ))}
            </svg>
            <dl className="mt-4 grid grid-cols-3 gap-4">
              {careSettings.map((setting) => (
                <div key={setting.id}>
                  <LineIcon
                    name={setting.id as "home" | "school" | "clinic"}
                    className="h-7 w-7 text-primary"
                  />
                  <dt className="mt-3 font-display text-sm font-semibold text-ink">
                    {setting.label}
                  </dt>
                  <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {setting.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-9">
            <ArrowLink to="/how-it-works">Explore how it works</ArrowLink>
          </div>
        </Reveal>

        <Reveal delay={100} className="order-1 lg:order-2">
          <img
            src={careImg}
            alt="A clinician measuring a child's ankle at home while the parent watches"
            loading="lazy"
            width={1408}
            height={1056}
            className="h-[300px] w-full rounded-2xl object-cover shadow-soft sm:h-[420px] lg:h-[520px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* 05 — HOW IT WORKS */
function Process() {
  const steps = processSteps.slice(0, 4);
  const { ref, visible } = useInView<HTMLDivElement>();
  const icons = ["intake", "family", "scan", "followUp"] as const;

  return (
    <section className="border-y border-border bg-sand py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="From first question to the right fit."
          lead="Four steps, clearly explained. You always know what happens next."
        />

        <div ref={ref} className="relative mt-16">
          <svg
            className="absolute left-0 top-8 hidden h-px w-full lg:block"
            viewBox="0 0 1000 2"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 1 H1000" stroke="var(--color-border)" strokeWidth="2" />
            <path
              d="M0 1 H1000"
              stroke="var(--color-accent)"
              strokeWidth="2"
              className="draw-line"
              data-visible={visible}
            />
          </svg>

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 110} className="relative pl-8 lg:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-full w-px bg-border lg:hidden"
                />
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent lg:hidden"
                />
                <div className="hidden lg:block">
                  <span className="relative -top-[7px] inline-block h-3.5 w-3.5 rounded-full border-2 border-accent bg-background" />
                </div>
                <p className="label-mono mt-1">{step.n}</p>
                <LineIcon name={icons[i]} className="mt-4 h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="mt-12">
          <ArrowLink to="/how-it-works">See the full family journey</ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}

/* 06 — CLINICAL EXPERTISE */
function Expertise() {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <section className="container-page py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal ref-="" className="relative">
          <div ref={ref} className="relative overflow-hidden rounded-2xl">
            <img
              src={scanImg}
              alt="A clinician digitally scanning a child's lower leg to fabricate a custom device"
              loading="lazy"
              width={1408}
              height={1056}
              className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[560px]"
            />
            <svg
              viewBox="0 0 400 500"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full text-background/70"
            >
              <path
                d="M40 60 H360 M40 250 H360 M40 440 H360"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeDasharray="4 8"
              />
              <path
                d="M200 20 V480"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeDasharray="4 8"
              />
              <path
                d="M60 470 V330 H150"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                className="draw-line"
                data-visible={visible}
              />
              <circle cx="60" cy="330" r="4" fill="currentColor" />
              <circle cx="150" cy="330" r="4" fill="currentColor" />
            </svg>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Clinical expertise"
            title="Experience you can see in every fit."
            lead="Precision is not a slogan here — it is measurement, material choice and follow-up, repeated until the device works in real life."
          />
          <dl className="mt-12 divide-y divide-border border-y border-border">
            {expertiseBlocks.map((block, i) => (
              <Reveal key={block.n} delay={i * 90} className="grid gap-2 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <p className="label-mono pt-1">{block.n}</p>
                <div>
                  <dt className="font-display text-lg font-semibold text-ink">{block.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {block.body}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* 07 — FAMILY TRUST */
function FamilyStory() {
  return (
    <section className="border-y border-border bg-primary/[0.04] py-20 lg:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <img
            src={familyImg}
            alt="A parent and child sitting together on a porch, the child wearing braces under sneakers"
            loading="lazy"
            width={1408}
            height={1056}
            className="h-[300px] w-full rounded-2xl object-cover shadow-soft sm:h-[440px]"
          />
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Family experience"
            title="Care that fits into real family life."
            lead="Families tell us the hard part is rarely the device — it is the scheduling, the paperwork and knowing whether something is normal. We plan for all three."
          />
          <ul className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {[
              {
                title: "Straight answers",
                body: "Plain-language explanations of what the device does and why.",
              },
              {
                title: "Fewer trips",
                body: "Visits coordinated around school, therapy and work schedules.",
              },
              {
                title: "Comfort first",
                body: "Break-in schedules and skin checks reviewed with you at delivery.",
              },
              {
                title: "Reachable after",
                body: "Questions between appointments are expected, not an inconvenience.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70} as="li">
                <h3 className="font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* 08 — TEAM */
function TeamTeaser() {
  return (
    <section className="container-page py-20 lg:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Our experts"
          title="Meet the people behind your child's care."
          lead="Clinicians, fitters and coordinators who work with children and families every day."
        />
        <Reveal delay={80}>
          <ArrowLink to="/team">Meet our team</ArrowLink>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {["Pediatric Orthotists", "Orthotic Fitters", "Care Coordination", "Fabrication"].map(
          (role, i) => (
            <Reveal key={role} delay={i * 80}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6">
                <LineIcon name="team" className="h-8 w-8 text-primary" />
                <div className="mt-10">
                  <p className="label-mono">Role</p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">{role}</h3>
                </div>
              </div>
            </Reveal>
          ),
        )}
      </div>
    </section>
  );
}

/* 09 — RESOURCES */
function Resources() {
  const [lead, ...others] = articles;
  return (
    <section className="border-y border-border bg-sand py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Resources"
            title="Everything you need to feel prepared."
            lead="Guides, paperwork and product help — written for parents, not for charts."
          />
          <Reveal delay={80}>
            <ArrowLink to="/resources">Browse all resources</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <Reveal className="group">
            <Link to="/blog/$slug" params={{ slug: lead.slug }} className="block">
              <p className="label-mono">{lead.category} · {lead.readingTime}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">
                {lead.title}
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{lead.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>

          <ul className="divide-y divide-border border-t border-border">
            {others.map((article, i) => (
              <Reveal as="li" key={article.slug} delay={i * 70}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: article.slug }}
                  className="group block py-5"
                >
                  <p className="label-mono">{article.category}</p>
                  <h3 className="mt-1.5 font-display text-base font-semibold text-ink transition-colors group-hover:text-primary">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{article.readingTime}</p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Prepare", title: "Forms & Documents", to: "/forms", icon: "document" as const },
            { label: "Choose", title: "Brace-friendly shoes", to: "/shoes", icon: "foot" as const },
            { label: "Understand", title: "Treatment basics", to: "/blog", icon: "growth" as const },
          ].map((item, i) => (
            <Reveal key={item.to} delay={i * 80}>
              <Link
                to={item.to}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                <LineIcon name={item.icon} className="h-8 w-8 shrink-0 text-primary" />
                <span>
                  <span className="label-mono block">{item.label}</span>
                  <span className="mt-1 block font-display text-base font-semibold text-ink">
                    {item.title}
                  </span>
                </span>
                <ArrowRight className="ml-auto h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Trust />
      <Services />
      <ConvenientCare />
      <Process />
      <Expertise />
      <FamilyStory />
      <TeamTeaser />
      <Resources />
      <FinalCta />
    </SiteLayout>
  );
}
