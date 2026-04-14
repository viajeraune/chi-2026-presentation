import type { ReactNode } from "react";
import { SlideFrame } from "../../components/SlideFrame";
import { SectionHeadline } from "../../visual";
import { PaperScreenshotFrame } from "../PaperScreenshotFrame";
import type { PresentationAssetId } from "../presentationAssets";

type Props = {
  assetId: PresentationAssetId;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Narrower column for readability */
  maxWidthClass?: string;
};

/**
 * Headline + single centered figure — good for one hero paper crop.
 */
export function CenteredScreenshotSlide({
  assetId,
  title,
  subtitle,
  maxWidthClass = "max-w-5xl",
}: Props) {
  return (
    <SlideFrame>
      <div className={`mx-auto w-full ${maxWidthClass} space-y-8`}>
        <SectionHeadline
          title={title}
          subtitle={subtitle}
          align="center"
          className="!max-w-none"
        />
        <PaperScreenshotFrame assetId={assetId} />
      </div>
    </SlideFrame>
  );
}
