import type { ReactNode } from "react";
import { ProgressBar } from "./ProgressBar";
import { NavControls } from "./NavControls";

type Props = {
  children: ReactNode;
  slideIndex: number;
  slideCount: number;
  titles: string[];
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
};

export function PresentationShell({
  children,
  slideIndex,
  slideCount,
  titles,
  onPrev,
  onNext,
  onGoTo,
}: Props) {
  return (
    <div className="relative flex h-full min-h-[100dvh] flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124, 156, 255, 0.25), transparent),
            radial-gradient(ellipse 60% 40% at 100% 0%, rgba(110, 231, 183, 0.08), transparent)
          `,
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(12,13,16,0.2),rgba(12,13,16,0.92))]" />

      <header className="relative z-10 flex shrink-0 flex-col gap-2 border-b border-white/5 px-4 pb-3 pt-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-ink-faint">
            CHI 2026 · paper presentation
          </p>
          <p className="hidden text-right text-xs text-ink-muted sm:block">
            Personal Validation Effect in LLM Use
          </p>
        </div>
        <ProgressBar current={slideIndex} total={slideCount} />
      </header>

      <main className="relative z-10 min-h-0 flex-1 overflow-hidden">
        <div
          key={slideIndex}
          className="slide-enter flex h-full min-h-0 flex-col overflow-y-auto overflow-x-hidden"
        >
          {children}
        </div>
      </main>

      <footer className="relative z-10 flex shrink-0 flex-col gap-3 bg-surface/80 px-4 py-4 backdrop-blur-md md:flex-row md:items-end md:justify-between md:px-8">
        <ThumbnailStrip
          count={slideCount}
          active={slideIndex}
          titles={titles}
          onSelect={onGoTo}
        />
        <NavControls
          onPrev={onPrev}
          onNext={onNext}
          canPrev={slideIndex > 0}
          canNext={slideIndex < slideCount - 1}
          current={slideIndex}
          total={slideCount}
        />
      </footer>
    </div>
  );
}

type StripProps = {
  count: number;
  active: number;
  titles: string[];
  onSelect: (i: number) => void;
};

function ThumbnailStrip({ count, active, titles, onSelect }: StripProps) {
  return (
    <div className="flex max-w-full gap-1.5 overflow-x-auto pb-1 md:max-w-[70%]">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          title={titles[i] ?? `Slide ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`h-2.5 min-w-[2rem] shrink-0 rounded-full transition ${
            i === active
              ? "bg-accent w-10"
              : "bg-white/10 hover:bg-white/20"
          }`}
          aria-label={`Go to slide ${i + 1}: ${titles[i] ?? ""}`}
        />
      ))}
    </div>
  );
}
