import type { ReactElement } from "react";
import { cn } from "@/lib/utils";

export type LineIconName =
  | "child"
  | "family"
  | "home"
  | "school"
  | "clinic"
  | "team"
  | "foot"
  | "helmet"
  | "spine"
  | "scan"
  | "intake"
  | "fitting"
  | "followUp"
  | "growth"
  | "document";

const paths: Record<LineIconName, ReactElement> = {
  child: (
    <>
      <circle cx="16" cy="8" r="3.4" />
      <path d="M16 11.6v8.2M16 19.8 11.5 27M16 19.8 20.5 27M10.5 15h11" />
    </>
  ),
  family: (
    <>
      <circle cx="11" cy="8.5" r="3" />
      <circle cx="21.5" cy="12" r="2.3" />
      <path d="M11 11.5v7.5M11 19 7 26M11 19l4 7M21.5 14.3v5M21.5 19.3 19 26M21.5 19.3 24 26" />
    </>
  ),
  home: (
    <>
      <path d="M5 14.5 16 6l11 8.5" />
      <path d="M8 13.5V26h16V13.5" />
      <path d="M13.5 26v-6.5h5V26" />
    </>
  ),
  school: (
    <>
      <path d="M16 5 27 10 16 15 5 10z" />
      <path d="M9.5 12.5V20c0 2.5 3 4.5 6.5 4.5s6.5-2 6.5-4.5v-7.5" />
      <path d="M25 11v7" />
    </>
  ),
  clinic: (
    <>
      <rect x="6" y="9" width="20" height="17" rx="2.5" />
      <path d="M16 13.5v8M12 17.5h8M11 9V6h10v3" />
    </>
  ),
  team: (
    <>
      <circle cx="16" cy="9" r="3" />
      <circle cx="7.5" cy="17" r="2.6" />
      <circle cx="24.5" cy="17" r="2.6" />
      <path d="M16 12v4M13.5 16.5 9.8 18.3M18.5 16.5l3.7 1.8M11 26c0-2.8 2.2-5 5-5s5 2.2 5 5" />
    </>
  ),
  foot: (
    <>
      <path d="M11 6c3 0 4.5 2.5 4.5 6 0 4-1.5 6-1.5 9 0 3.5 2.5 5.5 6 5.5" />
      <path d="M20 26.5c3 0 4.5-1.8 4.5-4.2 0-3.4-3.5-4.6-3.5-8.3 0-2.6 1-4 1-6" />
      <path d="M13 15.5h8" />
    </>
  ),
  helmet: (
    <>
      <path d="M5.5 19a10.5 10.5 0 0 1 21 0" />
      <path d="M5.5 19v2.5a2 2 0 0 0 2 2H10V19M26.5 19v2.5a2 2 0 0 1-2 2H22V19" />
      <path d="M11 10.5c2.5 3 7.5 3 10 0" />
    </>
  ),
  spine: (
    <>
      <path d="M16 4c2.5 4 -2.5 7 0 11s-2.5 8 0 13" />
      <path d="M12.5 8.5h7M11.5 15h9M12.5 21.5h7" />
    </>
  ),
  scan: (
    <>
      <path d="M6 11V8a2 2 0 0 1 2-2h3M26 11V8a2 2 0 0 0-2-2h-3M6 21v3a2 2 0 0 0 2 2h3M26 21v3a2 2 0 0 1-2 2h-3" />
      <path d="M9 16h14" />
      <path d="M12 12.5h8M12 19.5h8" />
    </>
  ),
  intake: (
    <>
      <rect x="7" y="5" width="18" height="22" rx="2.5" />
      <path d="M11.5 11h9M11.5 16h9M11.5 21h5" />
    </>
  ),
  fitting: (
    <>
      <path d="M8 22c0-5 3.6-9 8-9s8 4 8 9" />
      <path d="M12 22v4h8v-4" />
      <path d="M16 13V6M12.5 8.5 16 6l3.5 2.5" />
    </>
  ),
  followUp: (
    <>
      <circle cx="16" cy="16" r="10.5" />
      <path d="M16 10v6.5l4.5 2.5" />
    </>
  ),
  growth: (
    <>
      <path d="M6 26h20" />
      <path d="M10 26v-6M16 26V13.5M22 26V7" />
      <path d="M18.5 10.5 22 7l3.5 3.5" />
    </>
  ),
  document: (
    <>
      <path d="M9 5h10l5 5v17a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 8 27V6.5A1.5 1.5 0 0 1 9.5 5z" />
      <path d="M18.5 5v6h5.5M12 17h8M12 21.5h8" />
    </>
  ),
};

export function LineIcon({
  name,
  className,
  strokeWidth = 1.4,
}: {
  name: LineIconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      {paths[name]}
    </svg>
  );
}
