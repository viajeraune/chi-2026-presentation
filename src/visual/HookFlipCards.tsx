import { type ReactNode, useEffect, useState } from "react";

type RevealStep = 0 | 1 | 2;

type Props = {
  revealStep: RevealStep;
};

const NEGATIVE_BEFORE =
  "Your emotions play a significant role in your investment decisions. As a result, it's expected that your portfolio's performance will be ";
const NEGATIVE_HIGHLIGHT = "below the average";
const NEGATIVE_AFTER = " in the long run.";

const POSITIVE_BEFORE = "You have ";
const POSITIVE_HIGHLIGHT = "a good grasp of your emotions";
const POSITIVE_MID =
  " especially when it comes to decisions about money. Therefore, we predict that your portfolio will have ";
const POSITIVE_HIGHLIGHT_OUTCOME = "higher-than-average performance";
const POSITIVE_END = " in the long run.";

/** Simple smiley — valence cue for positive framing */
function ValenceSmile({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <circle
        cx={24}
        cy={24}
        r={17}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      />
      <circle cx={17} cy={19} r={2.5} fill="currentColor" />
      <circle cx={31} cy={19} r={2.5} fill="currentColor" />
      <path
        d="M15 27 Q24 34 33 27"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Simple frowny — valence cue for negative framing */
function ValenceFrown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden>
      <circle
        cx={24}
        cy={24}
        r={17}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
      />
      <circle cx={17} cy={19} r={2.5} fill="currentColor" />
      <circle cx={31} cy={19} r={2.5} fill="currentColor" />
      <path
        d="M15 29 Q24 22 33 29"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

function CardBack({ number }: { number: 1 | 2 }) {
  return (
    <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl border border-white/[0.08] bg-surface-raised/95 p-6 text-center shadow-card backdrop-blur-sm md:min-h-[300px]">
      <p className="font-display text-xl text-ink md:text-2xl">
        Prediction #{number}
      </p>
    </div>
  );
}

function NegativeFace() {
  return (
    <div className="flex h-full min-h-[280px] flex-col rounded-2xl border border-neg/30 bg-neg/[0.06] p-6 shadow-card backdrop-blur-sm md:min-h-[300px] md:p-7">
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neg/25 text-lg font-semibold text-neg"
          aria-hidden
        >
          −
        </span>
        <h3 className="font-display text-xl leading-tight text-ink md:text-2xl">
          Negative prediction
        </h3>
      </div>
      <p className="mt-5 text-base leading-relaxed text-ink md:text-lg">
        {NEGATIVE_BEFORE}
        <span className="font-semibold text-neg">{NEGATIVE_HIGHLIGHT}</span>
        {NEGATIVE_AFTER}
      </p>
      <div className="mt-6 flex justify-center text-neg">
        <ValenceFrown className="h-11 w-11 md:h-12 md:w-12" />
      </div>
    </div>
  );
}

function PositiveFace() {
  return (
    <div className="flex h-full min-h-[280px] flex-col rounded-2xl border border-pos/30 bg-pos/[0.06] p-6 shadow-card backdrop-blur-sm md:min-h-[300px] md:p-7">
      <div className="flex items-center gap-3">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pos/25 text-lg font-semibold text-pos"
          aria-hidden
        >
          +
        </span>
        <h3 className="font-display text-xl leading-tight text-ink md:text-2xl">
          Positive prediction
        </h3>
      </div>
      <p className="mt-5 text-base leading-relaxed text-ink md:text-lg">
        {POSITIVE_BEFORE}
        <span className="font-semibold text-pos">{POSITIVE_HIGHLIGHT}</span>
        {POSITIVE_MID}
        <span className="font-semibold text-pos">{POSITIVE_HIGHLIGHT_OUTCOME}</span>
        {POSITIVE_END}
      </p>
      <div className="mt-6 flex justify-center text-pos">
        <ValenceSmile className="h-11 w-11 md:h-12 md:w-12" />
      </div>
    </div>
  );
}

function FlipUnit({
  flipped,
  back,
  front,
}: {
  flipped: boolean;
  back: ReactNode;
  front: ReactNode;
}) {
  return (
    <div className="flip-card-scene w-full max-w-xl">
      <div className={`flip-card-inner ${flipped ? "flip-card-inner--flipped" : ""}`}>
        <div className="flip-card-face flip-card-face--back">{back}</div>
        <div className="flip-card-face flip-card-face--front">{front}</div>
      </div>
    </div>
  );
}

/**
 * Two prediction cards; flip state is driven by `revealStep` (advance with deck “next”).
 * Step 0: both backs · Step 1: positive revealed · Step 2: both revealed.
 */
export function HookFlipCards({ revealStep }: Props) {
  const [leftFlipped, setLeftFlipped] = useState(false);
  const [rightFlipped, setRightFlipped] = useState(false);

  useEffect(() => {
    if (revealStep === 0) {
      setLeftFlipped(false);
      setRightFlipped(false);
      return;
    }
    if (revealStep === 1) {
      setRightFlipped(false);
      setLeftFlipped(false);
      const t = window.setTimeout(() => setLeftFlipped(true), 70);
      return () => window.clearTimeout(t);
    }
    setLeftFlipped(true);
    setRightFlipped(false);
    const t = window.setTimeout(() => setRightFlipped(true), 70);
    return () => window.clearTimeout(t);
  }, [revealStep]);

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
      <FlipUnit
        flipped={leftFlipped}
        back={<CardBack number={1} />}
        front={<PositiveFace />}
      />
      <FlipUnit
        flipped={rightFlipped}
        back={<CardBack number={2} />}
        front={<NegativeFace />}
      />
    </div>
  );
}
