import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="GOAL Pediatrics — home"
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
        className={cn("h-7 w-7", onDark ? "text-primary-foreground" : "text-primary")}
      >
        <circle cx="16" cy="16" r="12.5" />
        <path d="M22 11.5a7.5 7.5 0 1 0 1.2 6.6H16" />
      </svg>
      <span
        className={cn(
          "font-display text-[1.0625rem] font-extrabold tracking-tight",
          onDark ? "text-primary-foreground" : "text-ink",
        )}
      >
        GOAL<span className="font-medium opacity-70"> Pediatrics</span>
      </span>
    </Link>
  );
}
