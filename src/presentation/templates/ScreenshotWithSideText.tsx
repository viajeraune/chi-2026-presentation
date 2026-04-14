import type { ReactNode } from "react";
import { SlideFrame } from "../../components/SlideFrame";
import { SectionHeadline } from "../../visual";
import { PaperScreenshotFrame } from "../PaperScreenshotFrame";
import type { PresentationAssetId } from "../presentationAssets";

type Props = {
  assetId: PresentationAssetId;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Right column (or below on small screens) */
  side: ReactNode;
  /** Visual order: when false, text column appears left on large screens */
  imageFirst?: boolean;
};

/**
 * Screenshot + interpretation column — stable two-column grid.
 */
export function ScreenshotWithSideText({
  assetId,
  title,
  subtitle,
  side,
  imageFirst = true,
}: Props) {
  return (
    <SlideFrame>
      <SectionHeadline title={title} subtitle={subtitle} />
      <div className="mt-10 grid min-h-0 items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <div
          className={`min-w-0 ${imageFirst ? "" : "lg:order-2"}`}
        >
          <PaperScreenshotFrame assetId={assetId} />
        </div>
        <div
          className={`min-w-0 text-lg leading-relaxed text-ink-muted lg:pt-1 ${
            imageFirst ? "" : "lg:order-1"
          }`}
        >
          {side}
        </div>
      </div>
    </SlideFrame>
  );
}
