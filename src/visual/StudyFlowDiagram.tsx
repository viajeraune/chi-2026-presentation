import { Fragment, type ReactNode } from "react";
import { DeckCard } from "./DeckCard";

function FlowArrow() {
  return (
    <div
      className="hidden shrink-0 items-center self-center text-ink-faint lg:flex"
      aria-hidden
    >
      <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
        <path
          d="M0 6h22m0 0l-4-4m4 4l-4 4"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.45"
        />
      </svg>
    </div>
  );
}

function StepIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-surface-muted/90 text-ink">
      {children}
    </div>
  );
}

function IconGame() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16v10H4V7z"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.85"
      />
      <path d="M8 11h8M12 9v4" stroke="currentColor" strokeWidth="1.25" opacity="0.5" />
    </svg>
  );
}

function IconPrediction() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 18c0-4 3-7 6-10 3 3 6 6 6 10"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="12" cy="17" r="1.5" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function IconFraming() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden>
      <text
        x="12"
        y="17"
        textAnchor="middle"
        fill="currentColor"
        fontSize="15"
        fontFamily="Instrument Serif, Georgia, serif"
        letterSpacing="0.01em"
        opacity="0.9"
      >
        ±
      </text>
    </svg>
  );
}

function IconRatings() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 8h12M6 12h9M6 16h11"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M18 8l1 1 2-3"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

const steps = [
  {
    title: "Investment game",
    detail: "Simulated task",
    icon: <IconGame />,
  },
  {
    title: "Prediction",
    detail: "About your future investing",
    icon: <IconPrediction />,
  },
  {
    title: "Framing",
    detail: "Positive vs negative",
    icon: <IconFraming />,
  },
  {
    title: "Ratings",
    detail: "Four outcome measures",
    icon: <IconRatings />,
  },
];

const ratingLabels = ["Validity", "Personalization", "Reliability", "Usefulness"];

/** Horizontal study flow — strongest native visual in the deck. */
export function StudyFlowDiagram() {
  return (
    <div className="w-full space-y-8">
      <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-1">
        {steps.map((s, i) => (
          <Fragment key={s.title}>
            <DeckCard className="flex min-h-[200px] flex-1 flex-col items-center justify-center px-4 py-6 text-center md:px-5">
              <StepIcon>{s.icon}</StepIcon>
              <p className="mt-4 text-lg font-semibold tracking-tight text-ink">
                {s.title}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{s.detail}</p>
            </DeckCard>
            {i < steps.length - 1 ? (
              <>
                <div
                  className="flex justify-center py-1 text-lg text-ink-faint lg:hidden"
                  aria-hidden
                >
                  ↓
                </div>
                <FlowArrow />
              </>
            ) : null}
          </Fragment>
        ))}
      </div>
      <DeckCard className="px-5 py-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
          Outcome ratings
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2 md:gap-3">
          {ratingLabels.map((lab) => (
            <span
              key={lab}
              className="rounded-full border border-white/[0.08] bg-surface-muted/90 px-4 py-2 text-sm font-medium text-ink"
            >
              {lab}
            </span>
          ))}
        </div>
      </DeckCard>
    </div>
  );
}
