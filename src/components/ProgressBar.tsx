type Props = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: Props) {
  const pct = total > 0 ? ((current + 1) / total) * 100 : 0;
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-surface-muted">
      <div
        className="h-full rounded-full bg-accent transition-[width] duration-slide ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
