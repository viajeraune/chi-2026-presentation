import { DeckCard } from "./DeckCard";

const sources = [
  { name: "AI", hint: "scalable, embedded" },
  { name: "Astrology", hint: "traditional personalized claims" },
  { name: "Personality", hint: "self-profile feedback" },
];

/** Conceptual: same psychological response pattern across sources — not AI-unique. */
export function SharedEffectDiagram() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        {sources.map((s) => (
          <DeckCard key={s.name} className="p-6 text-center">
            <p className="font-display text-2xl text-ink">{s.name}</p>
            <p className="mt-2 text-sm text-ink-muted">{s.hint}</p>
          </DeckCard>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-muted/60 px-6 py-5 text-center">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(124,156,255,0.06),transparent)]"
          aria-hidden
        />
        <p className="relative text-sm font-medium uppercase tracking-[0.2em] text-ink-faint">
          Shared pattern
        </p>
        <p className="relative mt-2 text-lg text-ink md:text-xl">
          Positive, self-relevant predictions → higher perceived credibility
        </p>
        <p className="relative mt-3 text-sm text-ink-muted">
          The effect is not uniquely “an AI bias” — but AI can scale and systematize it
        </p>
      </div>
    </div>
  );
}
