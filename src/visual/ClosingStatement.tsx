import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  statement: ReactNode;
  supportingLines?: ReactNode[];
  footer?: ReactNode;
  align?: "center" | "left";
};

/** Large-type closing or emphasis block — minimal, memorable. */
export function ClosingStatement({
  eyebrow,
  statement,
  supportingLines,
  footer,
  align = "center",
}: Props) {
  const box =
    align === "center" ? "w-full max-w-4xl text-center mx-auto" : "";
  return (
    <div className={`max-w-4xl space-y-8 ${box}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-ink-faint md:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <p className="font-display text-[clamp(1.65rem,3.8vw,2.35rem)] font-normal leading-[1.25] text-ink">
        {statement}
      </p>
      {supportingLines && supportingLines.length > 0 ? (
        <div
          className={`max-w-2xl space-y-4 text-lg leading-relaxed text-ink-muted md:text-xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {supportingLines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      ) : null}
      {footer}
    </div>
  );
}
