import type { ReactNode } from "react";

type Props = {
  /** Small caps line above title — e.g. slide theme or conference */
  kicker?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  /** Extra classes on the header wrapper */
  className?: string;
};

export function SectionHeadline({
  kicker,
  title,
  subtitle,
  align = "left",
  className = "",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <header className={`max-w-4xl space-y-4 ${alignClass} ${className}`}>
      {kicker ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-faint md:text-sm">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.12] text-ink">
        {title}
      </h2>
      {subtitle ? (
        <div className="max-w-3xl text-lg leading-relaxed text-ink-muted md:text-xl">
          {subtitle}
        </div>
      ) : null}
    </header>
  );
}
