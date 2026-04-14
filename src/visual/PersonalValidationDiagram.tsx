import { DeckCard } from "./DeckCard";

/** Polished “positive + personal → believable” concept. */
export function PersonalValidationDiagram() {
  return (
    <DeckCard className="relative overflow-hidden p-8 md:p-10">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div className="relative flex flex-col items-center gap-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="rounded-full border border-pos/35 bg-pos/10 px-6 py-2.5 text-base font-medium text-pos">
            Positive
          </span>
          <span className="text-xl text-ink-faint">+</span>
          <span className="rounded-full border border-accent/35 bg-accent-soft px-6 py-2.5 text-base font-medium text-accent">
            Personally relevant
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 text-ink-faint">
          <span className="text-2xl leading-none">↓</span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em]">
            personal validation
          </span>
        </div>
        <p className="text-center font-display text-3xl text-ink md:text-4xl">
          More believable
        </p>
      </div>
    </DeckCard>
  );
}
