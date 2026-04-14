import { useCallback, useEffect, useState } from "react";
import { PresentationShell } from "./components/PresentationShell";
import {
  getSlideContent,
  HOOK_SLIDE_INDEX,
  SLIDES,
  SLIDE_TITLES,
} from "./slides/slideRegistry";

export function App() {
  const [index, setIndex] = useState(0);
  const [hookStep, setHookStep] = useState<0 | 1 | 2>(0);
  const count = SLIDES.length;

  useEffect(() => {
    if (index !== HOOK_SLIDE_INDEX) {
      setHookStep(0);
    }
  }, [index]);

  const go = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(count - 1, next)));
    },
    [count]
  );

  const advance = useCallback(() => {
    if (index === HOOK_SLIDE_INDEX && hookStep < 2) {
      setHookStep((s) => (s + 1) as 0 | 1 | 2);
      return;
    }
    setIndex((i) => Math.min(count - 1, i + 1));
  }, [index, hookStep, count]);

  const retreat = useCallback(() => {
    if (index === HOOK_SLIDE_INDEX && hookStep > 0) {
      setHookStep((s) => (s - 1) as 0 | 1 | 2);
      return;
    }
    setIndex((i) => Math.max(0, i - 1));
  }, [index, hookStep]);

  const onPrev = retreat;
  const onNext = advance;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        retreat();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        advance();
      } else if (e.key === "Home") {
        e.preventDefault();
        setIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setIndex(count - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, retreat, count]);

  const slideContent = getSlideContent(index, hookStep);

  return (
    <PresentationShell
      slideIndex={index}
      slideCount={count}
      titles={SLIDE_TITLES}
      onPrev={onPrev}
      onNext={onNext}
      onGoTo={go}
    >
      {slideContent}
    </PresentationShell>
  );
}
