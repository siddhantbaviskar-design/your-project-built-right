import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowLink, Eyebrow, FinalCta, PageHero, SectionHeading } from "@/components/blocks";
import { Reveal, useInView } from "@/components/Reveal";
import { brand } from "@/content/site";
import familyImg from "@/assets/family-porch.jpg";
import careImg from "@/assets/care-home.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GOAL Pediatrics | Our Approach to Pediatric Orthotics" },
      {
        name: "description",
        content:
          "How GOAL Pediatrics approaches pediatric orthotics: family-centered care, clinical precision and coordination with your child's wider care team.",
      },
      { property: "og:title", content: "About GOAL Pediatrics" },
      {
        property: "og:description",
        content: "Pediatric care designed around real families.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const pillars = [
  {
    title: "Our mission",
    body: "Make specialized pediatric orthotic care easier for families to reach, understand and stay with over time.",
  },
  {
    title: "Our approach",
    body: "Measure carefully, explain plainly, adjust often. A device only works if a child will actually wear it.",
  },
  {
    title: "Pediatric expertise",
    body: "We work with children exclusively, so growth, activity and comfort drive every design decision.",
  },
  {
    title: "Family-centered care",
    body: "Caregivers are part of the clinical conversation, not observers of it.",
  },
  {
    title: "Collaboration",
    body: "We coordinate with physicians and therapists so the plan holds together across providers.",
  },
  {
    title: "Convenience",
    body: "Visits are arranged around the realities of school, therapy and work schedules.",
  },
];

function Ecosystem() {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="mx-auto max-w-xl">
      <svg viewBox="0 0 400 300" className="w-full" role="img" aria-label="Diagram showing child, family, clinician and care team connected around shared care">
        <g
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1.2"
          className="draw-line"
          data-visible={visible}
        >
          <path d="M200 150 L90 70 M200 150 L310 70 M200 150 L90 230 M200 150 L310 230" />
        </g>
        <circle cx="200" cy="150" r="42" fill="var(--color-primary-soft)" />
        <text x="200" y="155" textAnchor="middle" className="fill-[var(--color-ink)] text-[13px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
          Child
        </text>
        {[
          { x: 90, y: 70, label: "Family" },
          { x: 310, y: 70, label: "Clinician" },
          { x: 90, y: 230, label: "Therapists" },
          { x: 310, y: 230, label: "Physicians" },
        ].map((node) => (
          <g key={node.label}>
            <circle
              cx={node.x}
              cy={node.y}
              r="34"
              fill="var(--color-background)"
              stroke="var(--color-border)"
              strokeWidth="1.2"
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              className="fill-[var(--color-muted-foreground)] text-[11px]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="Pediatric care designed around real families."
        lead={brand.description}
      />

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={familyImg}
              alt="A parent and child sitting together outdoors"
              loading="lazy"
              width={1408}
              height={1056}
              className="h-[280px] w-full rounded-2xl object-cover sm:h-[400px]"
            />
          </Reveal>
          <Reveal delay={100}>
            <img
              src={careImg}
              alt="A clinician measuring a child's ankle during a home visit"
              loading="lazy"
              width={1408}
              height={1056}
              className="h-[280px] w-full rounded-2xl object-cover sm:h-[400px] lg:mt-14"
            />
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 60}>
              <Eyebrow>{`0${i + 1}`}</Eyebrow>
              <h2 className="mt-3 font-display text-lg font-semibold text-ink">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-sand py-16 lg:py-24">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Care ecosystem"
            title="Everyone around your child, working from one plan."
          />
          <div className="mt-12">
            <Ecosystem />
          </div>
          <div className="mt-10 text-center">
            <ArrowLink to="/team">Meet our team</ArrowLink>
          </div>
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
