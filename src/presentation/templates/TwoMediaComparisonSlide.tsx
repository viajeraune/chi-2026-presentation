import type { ReactNode } from "react";
import { SlideFrame } from "../../components/SlideFrame";
import { SectionHeadline } from "../../visual";
import { PaperScreenshotFrame } from "../PaperScreenshotFrame";
import type { PresentationAssetId } from "../presentationAssets";

type Props = {
  leftAssetId: PresentationAssetId;
  rightAssetId: PresentationAssetId;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Optional takeaway line below the pair */
  footer?: ReactNode;
};

/**
 * Two side-by-side screenshot frames — equal grid tracks for layout stability.
 */
export function TwoMediaComparisonSlide({
  leftAssetId,
  rightAssetId,
  title,
  subtitle,
  footer,
}: Props) {
  return (
    <SlideFrame>
      <SectionHeadline title={title} subtitle={subtitle} />
      <div className="mt-10 grid min-h-0 gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="min-w-0">
          <PaperScreenshotFrame assetId={leftAssetId} />
        </div>
        <div className="min-w-0">
          <PaperScreenshotFrame assetId={rightAssetId} />
        </div>
      </div>
      {footer ? (
        <p className="mt-8 text-center text-sm text-ink-faint">{footer}</p>
      ) : null}
    </SlideFrame>
  );
}
