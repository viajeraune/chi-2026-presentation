import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Consistent caption line under screenshot frames. */
export function ScreenshotCaption({ children, className = "" }: Props) {
  return (
    <figcaption
      className={`mt-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-ink-faint md:text-sm ${className}`}
    >
      {children}
    </figcaption>
  );
}
