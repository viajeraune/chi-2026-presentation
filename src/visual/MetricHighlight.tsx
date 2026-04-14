type Props = {
  label: string;
  value: string;
  className?: string;
};

/** Large headline statistic for results slides — readable from a distance. */
export function MetricHighlight({ label, value, className = "" }: Props) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.08] bg-surface-raised/90 px-5 py-5 shadow-card ${className}`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
        {label}
      </p>
      <p className="mt-2 font-display text-[clamp(2rem,4.5vw,2.75rem)] tabular-nums text-pos">
        {value}
      </p>
    </div>
  );
}
