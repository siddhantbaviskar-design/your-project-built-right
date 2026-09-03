import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { primaryNav, resourceNav, serviceNav } from "@/content/site";
import { cn } from "@/lib/utils";

function DesktopDropdown({ label, to, items }: { label: string; to: string; items: typeof serviceNav }) {
  return (
    <div className="group relative">
      <Link
        to={to}
        className="inline-flex items-center gap-1 rounded-full px-3 py-2 font-display text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
        activeProps={{ className: "text-primary" }}
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-0 top-full w-72 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <ul className="rounded-xl border border-border bg-card p-2 shadow-lift">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-secondary"
              >
                <span className="block font-display text-sm font-semibold text-ink">
                  {item.label}
                </span>
                {item.description ? (
                  <span className="block text-xs text-muted-foreground">{item.description}</span>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {primaryNav.map((item) =>
            item.label === "Services" ? (
              <DesktopDropdown key={item.to} label="Services" to="/services" items={serviceNav} />
            ) : item.label === "Resources" ? (
              <DesktopDropdown key={item.to} label="Resources" to="/resources" items={resourceNav} />
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full px-3 py-2 font-display text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/providers"
            className="rounded-full px-3 py-2 font-display text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
          >
            For Providers
          </Link>
          <Link
            to="/contact"
            className="rounded-full px-3 py-2 font-display text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <Button asChild size="sm" className="h-10 px-5">
            <Link to="/intake">Start Intake</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="h-10">
            <Link to="/intake">Start Intake</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-ink"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-background lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-6">
            {primaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-xl px-3 py-4 font-display text-xl font-semibold text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-4">
              <p className="label-mono px-3 pb-2">Services</p>
              {serviceNav.map((item) => (
                <Link key={item.to} to={item.to} className="block rounded-xl px-3 py-3 text-base">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-2 border-t border-border pt-4">
              <p className="label-mono px-3 pb-2">Resources</p>
              {resourceNav.map((item) => (
                <Link key={item.to} to={item.to} className="block rounded-xl px-3 py-3 text-base">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-5">
              <Button asChild size="lg">
                <Link to="/intake">Start Your Child's Intake</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Link
                to="/providers"
                className="px-3 py-3 text-center font-display text-sm text-muted-foreground"
              >
                For Providers
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
