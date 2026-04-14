/**
 * @deprecated Prefer `PaperScreenshotFrame` with `assetId` from `presentation/presentationAssets`.
 * This wrapper pins `resultsMainChart` for backward compatibility.
 */
import {
  PaperScreenshotFrame,
  type PaperScreenshotFrameProps,
} from "../presentation/PaperScreenshotFrame";

type Props = Omit<PaperScreenshotFrameProps, "assetId">;

export function PaperFigurePlaceholder(props: Props) {
  return <PaperScreenshotFrame assetId="resultsMainChart" {...props} />;
}

export const ResultsChartScreenshot = PaperFigurePlaceholder;
