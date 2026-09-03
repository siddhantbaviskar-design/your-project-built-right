import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { FinalCta, PageHero } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { articles } from "@/content/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog for Parents | GOAL Pediatrics" },
      {
        name: "description",
        content:
          "Guides for families on visits, wear schedules, footwear and insurance questions in pediatric orthotic care.",
      },
      { property: "og:title", content: "Blog for Parents | GOAL Pediatrics" },
      {
        property: "og:description",
        content: "Practical, plain-language articles for families navigating pediatric orthotics.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter(
      (a) =>
        (category === "All" || a.category === category) &&
        (!q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)),
    );
  }, [category, query]);

  const [featured, ...rest] = filtered;

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Blog"
        title="Answers to the questions parents actually ask."
        lead="Short, practical reading — no medical jargon, no filler."
      />

      <section className="container-page py-16 lg:py-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                aria-pressed={category === cat}
                className={cn(
                  "h-10 rounded-full border px-4 font-display text-sm font-medium transition-colors",
                  category === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <Input
              id="blog-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="h-11 rounded-full pl-10"
            />
          </div>
        </div>

        {featured ? (
          <Reveal className="group mt-12 border-b border-border pb-12">
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="block">
              <p className="label-mono">
                Featured · {featured.category} · {featured.readingTime}
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ) : (
          <p className="mt-12 text-sm text-muted-foreground">No articles match that search.</p>
        )}

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article, i) => (
            <Reveal as="li" key={article.slug} delay={i * 70}>
              <Link to="/blog/$slug" params={{ slug: article.slug }} className="group block">
                <p className="label-mono">{article.category}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  · {article.readingTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
