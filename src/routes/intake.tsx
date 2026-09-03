import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Eyebrow } from "@/components/blocks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LineIcon } from "@/components/LineIcon";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/intake")({
  head: () => ({
    meta: [
      { title: "Start Your Child's Intake | GOAL Pediatrics" },
      {
        name: "description",
        content:
          "Begin pediatric orthotic care in four short steps: child information, insurance, caregiver contact and confirmation.",
      },
      { property: "og:title", content: "Start Your Child's Intake | GOAL Pediatrics" },
      {
        property: "og:description",
        content: "A calm, four-step start to your child's orthotic care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Intake,
});

const steps = ["Child Information", "Insurance", "Parent/Caregiver Contact", "Confirmation"];

type Form = {
  childName: string;
  childDob: string;
  concern: string;
  insurer: string;
  memberId: string;
  caregiverName: string;
  email: string;
  phone: string;
};

const empty: Form = {
  childName: "",
  childDob: "",
  concern: "",
  insurer: "",
  memberId: "",
  caregiverName: "",
  email: "",
  phone: "",
};

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  optional = false,
  textarea = false,
}: {
  id: keyof Form;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  optional?: boolean;
  textarea?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id}>
        {label}
        {optional ? <span className="ml-1 text-muted-foreground">(optional)</span> : null}
      </Label>
      {textarea ? (
        <Textarea
          id={id}
          value={value}
          rows={4}
          onChange={(e) => onChange(e.target.value)}
          className="mt-2"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-2 h-12"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Intake() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Form, string>>>({});

  const set = (key: keyof Form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  function validate(current: number) {
    const next: Partial<Record<keyof Form, string>> = {};
    if (current === 0) {
      if (!form.childName.trim()) next.childName = "Please enter your child's name.";
      if (!form.childDob) next.childDob = "Please enter a date of birth.";
    }
    if (current === 1) {
      if (!form.insurer.trim()) next.insurer = "Enter the insurer, or type “Self-pay”.";
    }
    if (current === 2) {
      if (!form.caregiverName.trim()) next.caregiverName = "Please enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        next.email = "Please enter a valid email address.";
      if (form.phone.replace(/\D/g, "").length < 10)
        next.phone = "Please enter a phone number we can reach you on.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function next() {
    if (validate(step)) setStep((s) => Math.min(s + 1, steps.length - 1));
  }

  return (
    <SiteLayout>
      <section className="border-b border-border bg-sand">
        <div className="container-page py-12 lg:py-16">
          <Eyebrow>Start intake</Eyebrow>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">
            Let's start with a few basics.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Four short steps. You do not need a diagnosis or a device name to begin.
          </p>
        </div>
      </section>

      <section className="container-page py-12 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <ol className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Intake progress">
            {steps.map((label, i) => (
              <li key={label} className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold",
                    i < step
                      ? "bg-primary text-primary-foreground"
                      : i === step
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-muted-foreground",
                  )}
                >
                  {i < step ? <Check className="h-3.5 w-3.5" /> : i + 1}
                </span>
                <span
                  className={cn(
                    "font-display text-sm",
                    i === step ? "font-semibold text-ink" : "text-muted-foreground",
                  )}
                  aria-current={i === step ? "step" : undefined}
                >
                  {label}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-accent transition-all duration-500"
              style={{ width: `${((step + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-7 sm:p-9">
            {step === 0 ? (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold text-ink">Child information</h2>
                <Field id="childName" label="Child's full name" value={form.childName} onChange={set("childName")} error={errors.childName} />
                <Field id="childDob" label="Date of birth" type="date" value={form.childDob} onChange={set("childDob")} error={errors.childDob} />
                <Field
                  id="concern"
                  label="What are you noticing, or what has been recommended?"
                  textarea
                  optional
                  value={form.concern}
                  onChange={set("concern")}
                />
              </div>
            ) : null}

            {step === 1 ? (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold text-ink">Insurance</h2>
                <p className="text-sm text-muted-foreground">
                  Coverage varies by plan. Our care coordinator reviews benefits with you before
                  treatment begins.
                </p>
                <Field id="insurer" label="Insurance provider" value={form.insurer} onChange={set("insurer")} error={errors.insurer} />
                <Field id="memberId" label="Member ID" optional value={form.memberId} onChange={set("memberId")} />
              </div>
            ) : null}

            {step === 2 ? (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold text-ink">
                  Parent / caregiver contact
                </h2>
                <Field id="caregiverName" label="Your full name" value={form.caregiverName} onChange={set("caregiverName")} error={errors.caregiverName} />
                <Field id="email" label="Email" type="email" value={form.email} onChange={set("email")} error={errors.email} />
                <Field id="phone" label="Phone" type="tel" value={form.phone} onChange={set("phone")} error={errors.phone} />
              </div>
            ) : null}

            {step === 3 ? (
              <div className="text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <LineIcon name="followUp" className="h-8 w-8" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
                  Intake received
                </h2>
                <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted-foreground">
                  Thank you. Our care coordinator will reach out to confirm details, review
                  insurance and schedule your child's evaluation. If you have a prescription or
                  referral, bring it to the first visit.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link to="/how-it-works">See what happens next</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/forms">Download forms</Link>
                  </Button>
                </div>
              </div>
            ) : null}

            {step < 3 ? (
              <div className="mt-9 flex items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                >
                  <ArrowLeft /> Back
                </Button>
                <Button type="button" size="lg" onClick={next}>
                  {step === 2 ? "Submit intake" : "Continue"} <ArrowRight />
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
