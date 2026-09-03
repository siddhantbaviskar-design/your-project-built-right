import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { brand } from "@/content/site";

const columns = [
  {
    heading: "Care",
    links: [
      { label: "Services", to: "/services" },
      { label: "Start Intake", to: "/intake" },
      { label: "How It Works", to: "/how-it-works" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "Shoes", to: "/shoes" },
      { label: "Forms & Documents", to: "/forms" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Team", to: "/team" },
      { label: "Locations", to: "/locations" },
      { label: "For Providers", to: "/providers" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-sand">
      <div className="container-page grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:py-20">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{brand.description}</p>
          <dl className="mt-6 space-y-1 text-sm">
            <div className="flex gap-2">
              <dt className="label-mono pt-0.5">Tel</dt>
              <dd>
                <a href={`tel:${brand.phone.replace(/\D/g, "")}`} className="hover:text-primary">
                  {brand.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="label-mono pt-0.5">Email</dt>
              <dd>
                <a href={`mailto:${brand.email}`} className="hover:text-primary">
                  {brand.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {columns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h2 className="label-mono">{col.heading}</h2>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border/70">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li>
              <Link to="/privacy" className="hover:text-primary">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary">
                Terms
              </Link>
            </li>
            <li>
              <Link to="/accessibility" className="hover:text-primary">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
