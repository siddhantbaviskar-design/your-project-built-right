import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FinalCta, PageHero } from "@/components/blocks";
import { Reveal, useInView } from "@/components/Reveal";
import { LineIcon, type LineIconName } from "@/components/LineIcon";
import { processSteps } from "@/content/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | GOAL Pediatrics" },
      {
        name: "description",
        content:
          "The GOAL Pediatrics family journey: intake, evaluation, measurement, fabrication, fitting and ongoing follow-up.",
      },
      { property: "og:title", content: "How It Works | GOAL Pediatrics" },
      {
        property: "og:description",
        content: "From first question to the right fit — the full pediatric orthotics process.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorks,
});

const stepIcons: LineIconName[] = ["intake", "family", "scan", "growth", "fitting", "followUp"];

const expectations = [
  {
    q: "How long will the first appointment take?",
    a: "Plan for an unhurried visit. Evaluation, questions and measurement all happen in one appointment where possible.",
  },
  {
    q: "Should my child come along?",
    a: "Yes. Devices are fit to your child, and having them present makes adjustments far more accurate.",
  },
  {
    q: "What should we bring?",
    a: "Any prescription or referral paperwork, insurance information, and the shoes your child wears most.",
  },
  {
    q: "What happens after the fitting?",
    a: "You leave with a wear schedule, care instructions and a follow-up plan. Questions between visits are expected.",
  },
];

function HowItWorks() {
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <SiteLayout>
      <PageHero
        eyebrow="How it works"
        title="From first question to the right fit."
        lead="Six steps, start to finish. At every stage you know what is happening and what comes next."
      />

      <section className="container-page py-16 lg:py-24">
        <div ref={ref} className="relative">
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-2 h-full w-px bg-border md:left-1/2"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 2 1000"
            preserveAspectRatio="none"
            className="absolute left-[7px] top-2 h-full w-px md:left-1/2"
          >
            <path
              d="M1 0 V1000"
              stroke="var(--color-accent)"
              strokeWidth="2"
              className="draw-line"
              data-visible={visible}
            />
          </svg>

          <ol className="space-y-12 md:space-y-20">
            {processSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 60}
                className="relative pl-10 md:grid md:grid-cols-2 md:gap-16 md:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-background md:left-1/2 md:-translate-x-1/2"
                />
                <div className={i % 2 === 0 ? "md:pr-4 md:text-right" : "md:col-start-2 md:pl-4"}>
                  <p className="label-mono">Step {step.n}</p>
                  <LineIcon
                    name={stepIcons[i] ?? "followUp"}
                    className={`mt-4 h-9 w-9 text-primary ${i % 2 === 0 ? "md:ml-auto" : ""}`}
                  />
                  <h2 className="mt-4 font-display text-xl font-semibold text-ink sm:text-2xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground md:max-w-sm md:inline-block">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-sand py-16 lg:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
              What should I expect?
            </h2>
          </Reveal>
          <dl className="divide-y divide-border border-y border-border">
            {expectations.map((item, i) => (
              <Reveal key={item.q} delay={i * 70} className="py-6">
                <dt className="font-display text-base font-semibold text-ink">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
