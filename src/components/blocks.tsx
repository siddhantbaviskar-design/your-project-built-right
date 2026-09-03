import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("label-mono", className)}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl font-bold leading-[1.1] text-ink sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>
      ) : null}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-sand">
      <div className="container-page py-14 sm:py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.to ? (
              <Link to={item.to} className="hover:text-primary">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
            {i < items.length - 1 ? <ChevronRight className="h-3 w-3" aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ArrowLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

export function FinalCta({
  title = "Let's find the right next step for your child.",
  body = "You do not need to know which device or service your child needs. Tell us what you're seeing, and we'll take it from there.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <svg
        aria-hidden="true"
        viewBox="0 0 800 300"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-20 240 C 140 240, 180 140, 320 140 S 520 60, 700 60 820 40 900 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M-20 280 C 160 280, 220 190, 380 190 S 600 110, 900 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="320" cy="140" r="4" fill="currentColor" />
        <circle cx="700" cy="60" r="4" fill="currentColor" />
        <circle cx="380" cy="190" r="3" fill="currentColor" />
      </svg>

      <div className="container-page relative py-20 lg:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow className="text-primary-foreground/60">Next step</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {body}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="onDark" size="lg">
              <Link to="/intake">
                Start Your Child's Intake <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="onDarkOutline" size="lg">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 rounded-lg border border-dashed border-border bg-secondary/60 px-4 py-3 text-xs text-muted-foreground">
      {children}
    </p>
  );
}
