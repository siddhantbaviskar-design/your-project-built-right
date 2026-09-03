import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { FinalCta, PageHero } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { LineIcon, type LineIconName } from "@/components/LineIcon";
import { articles } from "@/content/site";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Parent Resources | GOAL Pediatrics" },
      {
        name: "description",
        content:
          "Guides, forms and brace-friendly footwear help for families navigating pediatric orthotic care.",
      },
      { property: "og:title", content: "Parent Resources | GOAL Pediatrics" },
      {
        property: "og:description",
        content: "Everything you need to feel prepared for your child's orthotic care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResourcesPage,
});

const groups: { label: string; title: string; body: string; to: string; icon: LineIconName }[] = [
  {
    label: "Learn",
    title: "Blog",
    body: "Plain-language guides on visits, wear schedules and everyday life with a device.",
    to: "/blog",
    icon: "growth",
  },
  {
    label: "Prepare",
    title: "Forms & Documents",
    body: "Intake, insurance, consent and follow-up paperwork in one place.",
    to: "/forms",
    icon: "document",
  },
  {
    label: "Choose",
    title: "Brace-friendly shoes",
    body: "What to look for in footwear that fits over AFOs and SMOs.",
    to: "/shoes",
    icon: "foot",
  },
  {
    label: "Understand",
    title: "How care works",
    body: "The full family journey from intake to long-term follow-up.",
    to: "/how-it-works",
    icon: "followUp",
  },
];

function ResourcesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Resources"
        title="Everything you need to feel prepared."
        lead="Written for parents, organized by what you are trying to do."
      />

      <section className="container-page py-16 lg:py-24">
        <ul className="grid gap-5 sm:grid-cols-2">
          {groups.map((group, i) => (
            <Reveal as="li" key={group.to} delay={i * 70}>
              <Link
                to={group.to}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-0.5 hover:shadow-soft"
              >
                <LineIcon name={group.icon} className="h-9 w-9 text-primary" />
                <p className="label-mono mt-6">{group.label}</p>
                <h2 className="mt-2 font-display text-xl font-semibold text-ink">{group.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.body}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary">
                  Open
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Latest articles</h2>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: article.slug }}
                  className="group flex flex-wrap items-baseline justify-between gap-3 py-5"
                >
                  <span>
                    <span className="label-mono">{article.category}</span>
                    <span className="mt-1 block font-display text-base font-semibold text-ink transition-colors group-hover:text-primary">
                      {article.title}
                    </span>
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readingTime}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
