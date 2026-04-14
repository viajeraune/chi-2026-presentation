export {
  ASPECT_RATIO_VALUE,
  PRESENTATION_ASSETS,
  getPresentationAsset,
  type ImageFitMode,
  type AspectPreset,
  type LayoutMode,
  type PresentationAsset,
  type PresentationAssetId,
} from "./presentationAssets";
export { PaperScreenshotFrame } from "./PaperScreenshotFrame";
export type { PaperScreenshotFrameProps } from "./PaperScreenshotFrame";
export { ScreenshotCaption } from "./ScreenshotCaption";
export { isPresentationMediaDebug } from "./mediaDebug";

export { CenteredScreenshotSlide } from "./templates/CenteredScreenshotSlide";
export {
  ScreenshotWithMetricsSlide,
  type MetricItem,
} from "./templates/ScreenshotWithMetricsSlide";
export { ScreenshotWithSideText } from "./templates/ScreenshotWithSideText";
export { TwoMediaComparisonSlide } from "./templates/TwoMediaComparisonSlide";
