import { DeckCard } from "./DeckCard";

const SOURCES = [
  { id: "ai", label: "AI", hint: "predictions" },
  { id: "astro", label: "Astrology", hint: "predictions" },
  { id: "personality", label: "Personality-based", hint: "predictions" },
] as const;

/**
 * Native diagram: study compares across three prediction sources; effect is consistent across them.
 * No quantitative claims — conceptual only.
 */
export function CrossSourceEffectVisual() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-2">
      <div className="grid gap-4 sm:grid-cols-3">
        {SOURCES.map((s) => (
          <DeckCard
            key={s.id}
            className="flex flex-col items-center justify-center px-4 py-6 text-center md:py-8"
          >
            <p className="font-display text-2xl text-ink md:text-3xl">{s.label}</p>
            <p className="mt-2 text-sm text-ink-muted">{s.hint}</p>
          </DeckCard>
        ))}
      </div>

      {/* Connector: three inputs → one comparison band */}
      <div className="relative px-4 py-2" aria-hidden>
        <svg
          className="mx-auto h-14 w-full max-w-lg text-ink-faint/55 md:h-16 md:max-w-2xl"
          viewBox="0 0 400 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66 0v20M200 0v20M334 0v20M66 20h268M200 20v16"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="-mt-2 text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
          Compared within the same study
        </p>
      </div>

      <DeckCard variant="emphasis" className="px-6 py-6 text-center md:px-10 md:py-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Takeaway
        </p>
        <p className="mt-3 font-display text-xl leading-snug text-ink md:text-2xl">
          Same directional pattern for each prediction source
        </p>
        <p className="mt-3 text-sm text-ink-muted md:text-base">
          While this is not uniquely an “AI bias”, AI can scale and embed these dynamics
        </p>
      </DeckCard>
    </div>
  );
}
