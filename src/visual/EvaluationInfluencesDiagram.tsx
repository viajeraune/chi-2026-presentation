import { DeckCard } from "./DeckCard";

/** AI output → evaluation → trust; evaluation is shaped by accuracy, framing, personalization. */
export function EvaluationInfluencesDiagram() {
  const factors = [
    { label: "Accuracy" },
    { label: "Framing" },
    { label: "Perceived personalization" },
  ];
  return (
    <div className="mx-auto w-full max-w-3xl space-y-6">
      <div className="flex flex-col items-center gap-0 md:flex-row md:items-center md:justify-center md:gap-4">
        <DeckCard className="w-full max-w-xs px-6 py-4 text-center md:w-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            AI output
          </p>
        </DeckCard>
        <div className="py-2 text-ink-faint md:py-0" aria-hidden>
          <span className="md:hidden">↓</span>
          <span className="hidden md:inline">→</span>
        </div>
        <DeckCard variant="emphasis" className="relative w-full max-w-md px-6 py-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
            User evaluation
          </p>
          <p className="mt-2 text-xl font-medium text-ink md:text-2xl">
            How good does this seem?
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {factors.map((f) => (
              <span
                key={f.label}
                className="rounded-full border border-white/[0.1] bg-surface-muted/80 px-3 py-1.5 text-xs font-medium text-ink md:text-sm"
              >
                {f.label}
              </span>
            ))}
          </div>
        </DeckCard>
        <div className="py-2 text-ink-faint md:py-0" aria-hidden>
          <span className="md:hidden">↓</span>
          <span className="hidden md:inline">→</span>
        </div>
        <DeckCard className="w-full max-w-xs px-6 py-4 text-center md:w-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-warn/90">
            Trust &amp; ratings
          </p>
        </DeckCard>
      </div>
      <p className="text-center text-sm text-ink-faint">
        Framing and perceived personalization shape judgment, not only correctness.
      </p>
    </div>
  );
}
