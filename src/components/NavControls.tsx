type Props = {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  current: number;
  total: number;
};

export function NavControls({
  onPrev,
  onNext,
  canPrev,
  canNext,
  current,
  total,
}: Props) {
  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label="Previous slide"
        className="rounded-md p-2 text-ink-muted transition hover:text-ink disabled:cursor-not-allowed disabled:opacity-35"
      >
        <ChevronLeftIcon />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        aria-label="Next slide"
        className="rounded-md p-2 text-ink-muted transition hover:text-ink disabled:cursor-not-allowed disabled:opacity-35"
      >
        <ChevronRightIcon />
      </button>
      <span className="ml-2 tabular-nums text-sm text-ink-muted">
        {current + 1} / {total}
      </span>
    </div>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
