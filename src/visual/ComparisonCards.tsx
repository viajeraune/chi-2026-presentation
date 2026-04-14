import { DeckCard } from "./DeckCard";

type CardSide = {
  tone: "positive" | "negative";
  label: string;
  quote: string;
  /** Illustrative perceived strength 0–100 */
  reaction: number;
};

type Props = {
  left: CardSide;
  right: CardSide;
};

function ReactionMeter({ value }: { value: number }) {
  return (
    <div className="mt-6 space-y-2">
      <div className="flex justify-between text-sm text-ink-muted">
        <span>Perceived credibility</span>
        <span className="tabular-nums text-ink">{value}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-surface-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent/75"
          style={{ width: `${value}%` }}
        />
      </div>
      <p className="text-xs text-ink-faint">Illustrative — not reported effect sizes</p>
    </div>
  );
}

/**
 * Side-by-side prediction framing — same structure, different valence.
 * Spec: left negative, right positive; stronger reaction on positive side.
 */
export function ComparisonCards({ left, right }: Props) {
  const render = (side: CardSide) => (
    <DeckCard
      variant={side.tone === "positive" ? "positive" : "negative"}
      className="flex flex-col p-6 md:p-7"
    >
      <p
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          side.tone === "positive" ? "text-pos" : "text-neg"
        }`}
      >
        {side.label}
      </p>
      <blockquote className="mt-4 text-base leading-snug text-ink md:text-lg">
        “{side.quote}”
      </blockquote>
      <ReactionMeter value={side.reaction} />
    </DeckCard>
  );
  return (
    <div className="grid gap-5 md:grid-cols-2 md:gap-8">
      {render(left)}
      {render(right)}
    </div>
  );
}
