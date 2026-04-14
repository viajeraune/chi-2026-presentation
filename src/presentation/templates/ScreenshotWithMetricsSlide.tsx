import type { ReactNode } from "react";
import { SlideFrame } from "../../components/SlideFrame";
import { MetricHighlight, SectionHeadline } from "../../visual";
import { PaperScreenshotFrame } from "../PaperScreenshotFrame";
import type { PresentationAssetId } from "../presentationAssets";

export type MetricItem = { label: string; value: string };

type Props = {
  assetId: PresentationAssetId;
  title: ReactNode;
  subtitle?: ReactNode;
  metrics: MetricItem[];
  metricsEyebrow?: ReactNode;
  /** Extra classes on the outer slide frame */
  className?: string;
};

/**
 * Results-style layout: large screenshot (stable aspect box) + metric tiles.
 * Works with placeholders — grid does not collapse when `src` is empty.
 */
export function ScreenshotWithMetricsSlide({
  assetId,
  title,
  subtitle,
  metrics,
  metricsEyebrow,
  className = "",
}: Props) {
  return (
    <SlideFrame className={className}>
      <SectionHeadline title={title} subtitle={subtitle} />
      <div className="mt-8 grid min-h-0 gap-10 xl:grid-cols-[1.12fr_0.88fr] xl:items-start">
        <div className="min-w-0">
          <PaperScreenshotFrame assetId={assetId} />
        </div>
        <div className="flex min-w-0 flex-col gap-4">
          {metricsEyebrow ?? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-faint">
              Percentage differences in estimates for positive predictions (vs negative)
              <span className="ml-2 font-normal normal-case text-ink-faint">
              </span>
            </p>
          )}
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m) => (
              <MetricHighlight key={m.label} label={m.label} value={m.value} />
            ))}
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
