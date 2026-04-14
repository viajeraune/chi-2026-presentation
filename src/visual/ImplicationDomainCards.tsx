import { DeckCard } from "./DeckCard";

type Domain = { label: string };

type Props = {
  /** Short header line — e.g. central warning */
  banner: string;
  domains: Domain[];
};

/** 4–6 domain tiles around a concise banner statement. */
export function ImplicationDomainCards({ banner, domains }: Props) {
  return (
    <div className="space-y-10">
      <DeckCard variant="emphasis" className="mx-auto max-w-3xl px-8 py-8 text-center">
        <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
          {banner}
        </p>
      </DeckCard>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {domains.map((d) => (
          <div
            key={d.label}
            className="rounded-2xl border border-white/[0.08] bg-surface-raised/90 px-4 py-6 text-center text-base font-medium tracking-tight text-ink shadow-card md:text-lg"
          >
            {d.label}
          </div>
        ))}
      </div>
    </div>
  );
}
