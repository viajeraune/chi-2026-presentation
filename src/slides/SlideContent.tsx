import { SlideFrame } from "../components/SlideFrame";
import { PaperScreenshotFrame, ScreenshotWithMetricsSlide } from "../presentation";
import {
  ClosingStatement,
  CrossSourceEffectVisual,
  DeckCard,
  EvaluationInfluencesDiagram,
  HookFlipCards,
  ImplicationDomainCards,
  PersonalValidationDiagram,
  SectionHeadline,
} from "../visual";

/* ——— Slide 1 ——— */

export function TitleSlide() {
  return (
    <SlideFrame className="relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 h-[50vh] w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,156,255,0.14),transparent_55%)]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(110,231,183,0.06),transparent_65%)]" />
      </div>
      <div className="relative max-w-4xl space-y-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-faint md:text-sm">
          
        </p>
        <h1 className="font-display text-[clamp(1.85rem,4.2vw,2.85rem)] font-normal leading-[1.12] text-ink">
          Personal Validation Effect in LLMs: Positive AI Responses Bias
          Perceptions of Validity, Reliability, Personalization, and Usefulness
          of Fictitious Predictions
        </h1>
        <p className="text-nowrap text-xl leading-relaxed text-ink-muted md:text-2xl">
          When AI tells people something positive about themselves, they trust it more.
        </p>
        <div className="h-px w-28 bg-gradient-to-r from-accent/50 to-transparent" />
        <p className="text-lg text-ink-muted">
          <span className="text-ink">Pat Pataranutaporn*, Eunhae Lee*, Judith Amores, Pattie Maes</span>
        </p>
      </div>
    </SlideFrame>
  );
}

/* ——— Slide 2 — Hook (3 steps: use next to flip each card) ——— */

export function HookSlide({ revealStep = 0 }: { revealStep?: 0 | 1 | 2 }) {
  return (
    <SlideFrame>
      {/* <div className="mb-8 flex flex-col gap-3 text-center md:flex-row md:justify-center md:gap-10 md:text-left">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink-faint">
          Same setup.
        </p>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">
          Different framing.
        </p>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink">
          Different perception.
        </p>
      </div> */}
      <HookFlipCards revealStep={revealStep} />
    </SlideFrame>
  );
}

/* ——— Slide 3 — Problem ——— */

export function ProblemSlide() {
  return (
    <SlideFrame>
      <SectionHeadline
        title="What shapes trust in AI?"
        subtitle="We often focus on correctness and capability, but evaluation is also shaped by framing and how self-relevant a message feels."
      />
      <div className="mt-12">
        <EvaluationInfluencesDiagram />
      </div>
    </SlideFrame>
  );
}

/* ——— Slide 4 — Psychology ——— */

export function PsychologySlide() {
  return (
    <SlideFrame>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="space-y-5">
          <SectionHeadline
            title="Personal validation effect"
            subtitle={
              <>
                <p>
                  People are more likely to accept statements that are{" "}
                  <span className="text-ink">positive</span> and{" "}
                  <span className="text-ink">about themselves</span>.
                </p>
                {/* <p className="mt-4 text-base text-ink-faint md:text-lg">
                  A known effect in psychology — we are not claiming a new bias.
                </p> */}
              </>
            }
          />
          {/* <p className="text-lg text-ink-muted md:text-xl">
            Positive + personal → more believable.
          </p> */}
        </div>
        <PersonalValidationDiagram />
      </div>
    </SlideFrame>
  );
}

/* ——— Slide 5 — RQ ——— */

export function ResearchQuestionSlide() {
  return (
    <SlideFrame className="justify-center text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-ink-faint md:text-sm">
        Research question
      </p>
      <h2 className="mx-auto mt-10 max-w-4xl font-display text-[clamp(1.85rem,4vw,2.65rem)] font-normal leading-[1.2] text-ink">
        Does personal validation effect extend to AI-generated predictions, even when those predictions are fictitious?
      </h2>
      {/* <p className="mx-auto mt-10 max-w-3xl font-display text-2xl italic leading-snug text-accent md:text-3xl">
        Even when those predictions are fictitious?
      </p> */}
      <div className="mx-auto mt-14 h-px w-40 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </SlideFrame>
  );
}

/* ——— Slide 6 — Study setup ——— */

export function StudySetupSlide() {
  return (
    <SlideFrame>
      <SectionHeadline
        title="Study Procedure"
        subtitle="We measured perceived validity, personalization, reliability, and usefulness of AI-generated predictions."
      />
      <div className="mt-8">
        <PaperScreenshotFrame assetId="paperFigureStudyDesign" />
      </div>
      {/* <p className="mt-6 text-center text-sm text-ink-faint">
        Predictions were scripted; the comparison is valence, not individualized
        accuracy
      </p> */}
    </SlideFrame>
  );
}

/* ——— Slide 7 — Manipulation ——— */

export function ManipulationSlide() {
  return (
    <SlideFrame>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionHeadline
          className="!max-w-2xl"
          title="What we manipulated"
          subtitle="Same structure, different valence, randomly assigned to participants"
        />
        <p className="max-w-md text-sm leading-relaxed text-ink-faint md:text-right">
          Predictions were fictitious and pre-scripted.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <DeckCard variant="positive" className="p-7 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pos">
            Positive framing
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink md:text-xl">
            “You are more likely to make rational investment decisions when
            outcomes are uncertain.”
          </p>
          {/* <p className="mt-4 text-xs text-ink-faint">
            Self-relevant · future-oriented · evaluative
          </p> */}
        </DeckCard>
        <DeckCard variant="negative" className="p-7 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neg">
            Negative framing
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink md:text-xl">
            “Your investment decisions are often impulsive when outcomes are
            uncertain.”
          </p>
          {/* <p className="mt-4 text-xs text-ink-faint">
            Same topic · opposite valence
          </p> */}
        </DeckCard>
      </div>
    </SlideFrame>
  );
}

/* ——— Slide 8 — Results ——— */

const RESULT_METRICS = [
  { label: "Validity", value: "+36%" },
  { label: "Personalization", value: "+42%" },
  { label: "Reliability", value: "+27%" },
  { label: "Usefulness", value: "+22%" },
] as const;

export function ResultsSlide() {
  return (
    <ScreenshotWithMetricsSlide
      assetId="resultsMainChart"
      title="Main results"
      subtitle="Positive AI predictions are rated as more valid, more personalized, more reliable, and more useful."
      metrics={[...RESULT_METRICS]}
    />
  );
}

/* ——— Slide 9 — Punchline ——— */

function PositiveTrendArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`shrink-0 text-pos ${className}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 19V5M5 12l7-7 7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PunchlineSlide() {
  return (
    <SlideFrame className="items-center justify-center">
      <ClosingStatement
        align="center"
        // eyebrow="Takeaway"
        statement="Even when predictions were fictitious, positive framing shifted how people evaluated them."
        supportingLines={[
          // "Positive framing meaningfully increased perceived validity, personalization, reliability, and usefulness, even though the content was not diagnostic.",
          // "This extends prior psychological insight into AI-generated predictions and highlights implications for AI design and evaluation.",
        ]}
        footer={
          <div
            className="mx-auto flex w-full max-w-6xl flex-nowrap justify-center gap-2 overflow-x-auto pb-1 md:gap-3"
            aria-label="Outcome dimensions that shifted"
          >
            {RESULT_METRICS.map((m) => (
              <div
                key={m.label}
                className="flex shrink-0 items-center gap-2 rounded-2xl border border-white/[0.08] bg-surface-raised/90 px-3 py-3 shadow-card md:gap-2.5 md:px-4 md:py-4"
              >
                <p className="whitespace-nowrap text-xs font-medium uppercase tracking-[0.18em] text-ink-faint">
                  {m.label}
                </p>
                <PositiveTrendArrow className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            ))}
          </div>
        }
      />
    </SlideFrame>
  );
}

/* ——— Slide 10 — Not AI-specific ——— */

export function NuanceSlide() {
  return (
    <SlideFrame>
      <SectionHeadline
        title="We compared across AI, astrology, and personality-based predictions."
        subtitle="And the effect holds across all of them."
      />
      <div className="mt-10">
        <CrossSourceEffectVisual />
      </div>
      {/* <p className="mt-8 max-w-3xl text-xs leading-relaxed text-ink-faint md:text-sm">
        For a deeper dive into comparison across prediction sources, see our
        other paper:{" "}
        <span className="text-ink-muted">
          “Super-intelligence or Superstition? Exploring Psychological Factors
          Influencing Belief in AI Predictions about Personal Behavior”
        </span>
      </p> */}
    </SlideFrame>
  );
}

/* ——— Slide 11 — Design implications ——— */

export function DesignImplicationsSlide() {
  const pillars = [
    {
      title: "Framing matters",
      body: "Positive tone changes perceived credibility.",
    },
    {
      title: "Personalization can amplify bias",
      body: "Self-relevance may increase acceptance.",
    },
    {
      title: "Trust should not be earned through flattery",
      body: "Systems should not rely on positive affirmation to feel helpful.",
    },
  ];
  return (
    <SlideFrame>
      <SectionHeadline title="Design implications" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <DeckCard key={p.title} variant="emphasis" className="flex flex-col p-7 md:p-8">
            <p className="font-display text-xl text-ink md:text-2xl">{p.title}</p>
            <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
              {p.body}
            </p>
          </DeckCard>
        ))}
      </div>
      {/* <div className="mt-12 border-t border-white/[0.06] pt-10">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
          Optional supplementary figure
        </p>
        <PaperScreenshotFrame assetId="paperFigureBackup" />
      </div> */}
    </SlideFrame>
  );
}

/* ——— Slide 12 — Why it matters ——— */

export function ImplicationsDomainsSlide() {
  return (
    <SlideFrame>
      <SectionHeadline
        title="Why this matters in real systems"
        subtitle="Where AI touches consequential choices, perceived credibility can diverge from ground truth."
        className="!max-w-3xl"
      />
      <div className="mt-12">
        <ImplicationDomainCards
          banner="Positive personal AI feedback can bias judgment."
          domains={[
            { label: "Finance" },
            { label: "Health" },
            { label: "Education" },
            { label: "Coaching" },
            { label: "Recommender systems" },
            { label: "Decision support" },
          ]}
        />
      </div>
    </SlideFrame>
  );
}

/* ——— Slide 13 — Individual differences ——— */

const INDIVIDUAL_DIFFERENCE_FACTORS = [
  "Cognitive style",
  "Attitudes toward AI",
  "Paranormal beliefs",
  "Gullibility",
  "Age",
] as const;

export function IndividualDifferencesSlide() {
  return (
    <SlideFrame>
      <SectionHeadline
        title="Effects vary across individuals"
        subtitle="Psychological factors matter"
      />
      <p className="mt-10 text-lg leading-relaxed text-ink-muted md:text-xl">
        Moderating factors that were significant include:
      </p>
      <ul className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-ink md:text-xl">
        {INDIVIDUAL_DIFFERENCE_FACTORS.map((label) => (
          <li key={label} className="flex gap-3">
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              aria-hidden
            />
            <span>{label}</span>
          </li>
        ))}
      </ul>
      <p className="mt-12 border-t border-white/[0.06] pt-8 text-center text-sm text-ink-faint md:text-base">
        See paper for detailed findings
      </p>
    </SlideFrame>
  );
}

/* ——— Slide 14 — Closing ——— */

export function ClosingSlide() {
  return (
    <SlideFrame className="justify-center text-center">
      <ClosingStatement
        eyebrow="Closing takeaway"
        statement="People may trust AI not just when it is correct,
        but when it tells them something positive about themselves."
        supportingLines={[
          // "We are not discovering a new bias.",
          // "We show that a known psychological effect transfers meaningfully to AI-generated predictions — with implications for AI evaluation and design.",
        ]}
        // footer={
        //   <p className="pt-6 font-display text-xl italic text-ink-faint md:text-2xl">
        //     Thank you
        //   </p>
        // }
      />
    </SlideFrame>
  );
}
