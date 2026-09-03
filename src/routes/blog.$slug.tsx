import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Breadcrumbs, FinalCta } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { articles } from "@/content/site";
import familyImg from "@/assets/family-porch.jpg";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | GOAL Pediatrics` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  component: BlogDetail,
});

function BlogDetail() {
  const article = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <SiteLayout>
      <article>
        <header className="border-b border-border bg-sand">
          <div className="container-page py-12 lg:py-16">
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Blog", to: "/blog" },
                { label: article.title },
              ]}
            />
            <p className="label-mono">{article.category}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] text-ink sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-sm text-muted-foreground">
              GOAL Pediatrics Care Team ·{" "}
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              · {article.readingTime}
            </p>
          </div>
        </header>

        <div className="container-page py-12 lg:py-16">
          <img
            src={familyImg}
            alt=""
            loading="lazy"
            width={1408}
            height={1056}
            className="h-[240px] w-full rounded-2xl object-cover sm:h-[400px]"
          />

          <div className="mx-auto mt-12 max-w-2xl">
            {article.body.map((paragraph) => (
              <p key={paragraph} className="mb-6 text-lg leading-relaxed text-foreground/85">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <section className="border-t border-border py-14">
          <div className="container-page">
            <h2 className="font-display text-xl font-semibold text-ink">Related resources</h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((item, i) => (
                <Reveal as="li" key={item.slug} delay={i * 70}>
                  <Link to="/blog/$slug" params={{ slug: item.slug }} className="group block">
                    <p className="label-mono">{item.category}</p>
                    <h3 className="mt-2 font-display text-base font-semibold text-ink transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">{item.readingTime}</p>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      </article>

      <FinalCta />
    </SiteLayout>
  );
}
