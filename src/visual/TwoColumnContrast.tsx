import type { ReactNode } from "react";
import { DeckCard } from "./DeckCard";

type Column = {
  title: string;
  variant?: "default" | "emphasis";
  items: ReactNode[];
};

type Props = {
  left: Column;
  right: Column;
  className?: string;
};

/** Polished intellectual comparison — two columns, equal weight. */
export function TwoColumnContrast({ left, right, className = "" }: Props) {
  return (
    <div
      className={`grid gap-4 md:grid-cols-2 md:gap-6 ${className}`}
    >
      <ContrastColumn {...left} />
      <ContrastColumn {...right} />
    </div>
  );
}

function ContrastColumn({ title, variant = "default", items }: Column) {
  const v = variant === "emphasis" ? "emphasis" : "default";
  return (
    <DeckCard variant={v} className="p-6 md:p-8">
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          variant === "emphasis" ? "text-accent" : "text-ink-faint"
        }`}
      >
        {title}
      </p>
      <ul className="mt-5 space-y-4 text-lg leading-snug text-ink-muted">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span
              className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                variant === "emphasis" ? "bg-accent" : "bg-ink-faint"
              }`}
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </DeckCard>
  );
}
