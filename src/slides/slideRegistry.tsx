import type { ReactElement } from "react";
import {
  ClosingSlide,
  DesignImplicationsSlide,
  HookSlide,
  ImplicationsDomainsSlide,
  IndividualDifferencesSlide,
  ManipulationSlide,
  ProblemSlide,
  PsychologySlide,
  PunchlineSlide,
  ResearchQuestionSlide,
  ResultsSlide,
  NuanceSlide,
  StudySetupSlide,
  TitleSlide,
} from "./SlideContent";

export type SlideDefinition = {
  id: string;
  title: string;
  element: ReactElement;
};

/**
 * Edit slide order or swap components here — single registry for the deck.
 */
export const SLIDES: SlideDefinition[] = [
  { id: "title", title: "Title", element: <TitleSlide /> },
  { id: "hook", title: "Hook", element: <HookSlide revealStep={0} /> },
  { id: "problem", title: "Problem", element: <ProblemSlide /> },
  { id: "psychology", title: "Psychology", element: <PsychologySlide /> },
  {
    id: "rq",
    title: "Research question",
    element: <ResearchQuestionSlide />,
  },
  { id: "setup", title: "Study setup", element: <StudySetupSlide /> },
  {
    id: "manipulation",
    title: "Manipulation",
    element: <ManipulationSlide />,
  },
  { id: "results", title: "Results", element: <ResultsSlide /> },
  { id: "punchline", title: "Punchline", element: <PunchlineSlide /> },
  { id: "nuance", title: "Nuance", element: <NuanceSlide /> },
  {
    id: "design",
    title: "Design implications",
    element: <DesignImplicationsSlide />,
  },
  {
    id: "domains",
    title: "Why it matters",
    element: <ImplicationsDomainsSlide />,
  },
  {
    id: "individual-differences",
    title: "Individual differences",
    element: <IndividualDifferencesSlide />,
  },
  { id: "closing", title: "Closing", element: <ClosingSlide /> },
];

export const SLIDE_TITLES = SLIDES.map((s) => s.title);

/** Index of the Hook slide in `SLIDES` (for sub-step navigation in App). */
export const HOOK_SLIDE_INDEX = SLIDES.findIndex((s) => s.id === "hook");

/**
 * Renders the slide at `index`; Hook uses live `hookStep` from presentation state.
 */
export function getSlideContent(
  index: number,
  hookStep: 0 | 1 | 2
): ReactElement | null {
  const def = SLIDES[index];
  if (!def) return null;
  if (def.id === "hook") {
    return <HookSlide revealStep={hookStep} />;
  }
  return def.element;
}
