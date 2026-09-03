import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { brand, locations } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GOAL Pediatrics" },
      {
        name: "description",
        content:
          "Reach the GOAL Pediatrics care team by phone, email or message for questions about pediatric orthotic care.",
      },
      { property: "og:title", content: "Contact GOAL Pediatrics" },
      { property: "og:description", content: "We're here to help — reach our care team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (message.length < 10) next.message = "Please tell us a little more (10 characters minimum).";
    setErrors(next);

    if (Object.keys(next).length === 0) {
      event.currentTarget.reset();
      toast.success("Message sent", {
        description: "Our care team will get back to you shortly.",
      });
    }
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="We're here to help."
        lead="Questions about a device, a referral or getting started? Send a message and our care team will follow up."
      />

      <section className="container-page py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <form noValidate onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Your name</Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  className="mt-2 h-12"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name ? (
                  <p id="name-error" role="alert" className="mt-1.5 text-sm text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-2 h-12"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email ? (
                    <p id="email-error" role="alert" className="mt-1.5 text-sm text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="mt-2 h-12"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">How can we help?</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-2"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message ? (
                  <p id="message-error" role="alert" className="mt-1.5 text-sm text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <Button type="submit" size="lg">
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground">
                Please do not include sensitive medical information in this form.
              </p>
            </form>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-lg font-semibold text-ink">Reach us directly</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="label-mono">Phone</dt>
                  <dd className="mt-1">
                    <a href={`tel:${brand.phone.replace(/\D/g, "")}`} className="hover:text-primary">
                      {brand.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label-mono">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${brand.email}`} className="hover:text-primary">
                      {brand.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label-mono">Fax</dt>
                  <dd className="mt-1">{brand.fax}</dd>
                </div>
                <div>
                  <dt className="label-mono">Service areas</dt>
                  <dd className="mt-1">{locations.map((l) => l.state).join(" · ")}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
