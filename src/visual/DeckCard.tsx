import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "emphasis" | "positive" | "negative";
};

const variantClass: Record<NonNullable<Props["variant"]>, string> = {
  default: "border-white/[0.08] bg-surface-raised/95",
  emphasis: "border-accent/25 bg-accent/[0.07]",
  positive: "border-pos/30 bg-pos/[0.06]",
  negative: "border-neg/30 bg-neg/[0.06]",
};

/** Base surface for diagrams, comparisons, and callouts — consistent radius, shadow, border. */
export function DeckCard({ children, className = "", variant = "default" }: Props) {
  return (
    <div
      className={`rounded-2xl border shadow-card backdrop-blur-sm ${variantClass[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
