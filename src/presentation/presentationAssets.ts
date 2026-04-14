/**
 * Central registry for paper screenshots and figure crops.
 * Workflow: drop files under `public/assets/` → set `src` here → slides resolve by id.
 * Do not reference raw paths in slide components — use `assetId` with `PaperScreenshotFrame` or templates.
 */

function publicAssetUrl(pathFromPublicRoot: string) {
  // Ensures URLs respect Vite `base` (e.g. GitHub Pages repo subpath).
  return new URL(pathFromPublicRoot, import.meta.env.BASE_URL).toString();
}

export type PresentationAssetId =
  | "resultsMainChart"
  | "paperFigureHook"
  | "paperFigureStudyDesign"
  | "paperFigureSourceComparison"
  | "paperFigureBackup";

/** Layout presets for stable boxes (container owns geometry, not the image file). */
export type AspectPreset = "16:9" | "4:3" | "16:10" | "3:4" | "1:1";

export type ImageFitMode = "contain" | "cover";

/**
 * - `intrinsic`: image keeps natural aspect ratio; size capped by max width/height (best for paper crops).
 * - `fixedAspect`: stable box from `aspectPreset` (legacy / when you want a locked frame).
 */
export type LayoutMode = "intrinsic" | "fixedAspect";

export type PresentationAsset = {
  id: PresentationAssetId;
  /** Short label for chrome / placeholders / debug */
  label: string;
  /**
   * Public URL (served from `public/`). Use empty string until the file exists —
   * frame still reserves space and shows a polished placeholder.
   */
  src: string;
  alt: string;
  /** Used for placeholders, fixedAspect layout, and debug — not forced on intrinsic images */
  aspectPreset: AspectPreset;
  fit: ImageFitMode;
  layoutMode: LayoutMode;
  /** Optional caption under the frame (also overridable per slide) */
  caption?: string;
  /**
   * Max height for intrinsic images (`min(Nvh, 920px)`) — preserves aspect ratio within cap.
   */
  maxHeightVh?: number;
  /**
   * Optional max width (Tailwind class on the figure), e.g. `max-w-5xl` — keeps large figures balanced on slide.
   */
  maxWidthClass?: string;
};

/** CSS aspect-ratio values — keep in sync with `AspectPreset`. */
export const ASPECT_RATIO_VALUE: Record<AspectPreset, string> = {
  "16:9": "16 / 9",
  "4:3": "4 / 3",
  "16:10": "16 / 10",
  "3:4": "3 / 4",
  "1:1": "1 / 1",
};

/**
 * Pre-structured slots for this talk — swap `src` (and optional caption) only.
 * Filenames are suggestions; point `src` to any file under `public/`.
 */
export const PRESENTATION_ASSETS: Record<
  PresentationAssetId,
  PresentationAsset
> = {
  resultsMainChart: {
    id: "resultsMainChart",
    label: "Main results chart",
    src: publicAssetUrl("assets/results-main-chart.png"),
    alt: "Main quantitative results figure from the paper",
    aspectPreset: "16:10",
    fit: "contain",
    layoutMode: "intrinsic",
    caption: "Comparison of estimates by prediction valence (p<0.01)",
    maxHeightVh: 64,
    maxWidthClass: "max-w-full",
  },
  paperFigureHook: {
    id: "paperFigureHook",
    label: "Hook / intuition figure",
    src: publicAssetUrl("assets/paper-figure-hook.png"),
    alt: "Figure from the paper illustrating the hook",
    aspectPreset: "16:9",
    fit: "contain",
    layoutMode: "intrinsic",
    caption: "Paper figure · intuition",
    maxHeightVh: 52,
    maxWidthClass: "max-w-5xl",
  },
  paperFigureStudyDesign: {
    id: "paperFigureStudyDesign",
    label: "Study design figure",
    src: publicAssetUrl("assets/paper-figure-study-design.png"),
    alt: "Study procedure and design figure from the paper",
    aspectPreset: "16:9",
    fit: "contain",
    layoutMode: "intrinsic",
    caption: "",
    maxHeightVh: 70,
    maxWidthClass: "max-w-6xl",
  },
  paperFigureSourceComparison: {
    id: "paperFigureSourceComparison",
    label: "Source comparison figure",
    src: publicAssetUrl("assets/paper-figure-source-comparison.png"),
    alt: "Figure comparing prediction sources across conditions",
    aspectPreset: "16:9",
    fit: "contain",
    layoutMode: "intrinsic",
    caption: "Across prediction sources (from paper)",
    maxHeightVh: 58,
    maxWidthClass: "max-w-6xl",
  },
  paperFigureBackup: {
    id: "paperFigureBackup",
    label: "Backup / alternate crop",
    src: publicAssetUrl("assets/paper-figure-backup.png"),
    alt: "Supplementary or alternate figure from the paper",
    aspectPreset: "16:10",
    fit: "contain",
    layoutMode: "intrinsic",
    caption: "Supplementary figure (optional)",
    maxHeightVh: 48,
    maxWidthClass: "max-w-4xl",
  },
};

export function getPresentationAsset(
  id: PresentationAssetId
): PresentationAsset {
  return PRESENTATION_ASSETS[id];
}
