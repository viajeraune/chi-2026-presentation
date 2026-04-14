import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import {
  ASPECT_RATIO_VALUE,
  type ImageFitMode,
  type PresentationAsset,
  type PresentationAssetId,
  getPresentationAsset,
} from "./presentationAssets";
import { ScreenshotCaption } from "./ScreenshotCaption";
import { isPresentationMediaDebug } from "./mediaDebug";

type FrameOverrides = Partial<
  Pick<
    PresentationAsset,
    | "src"
    | "alt"
    | "aspectPreset"
    | "fit"
    | "caption"
    | "maxHeightVh"
    | "label"
    | "layoutMode"
    | "maxWidthClass"
  >
>;

export type PaperScreenshotFrameProps = {
  assetId: PresentationAssetId;
  asset?: FrameOverrides;
  className?: string;
  figureClassName?: string;
  hideCaption?: boolean;
  forcePlaceholder?: boolean;
};

type LoadState = "idle" | "loaded" | "error";

function PlaceholderInterior({
  label,
  hint,
  debug,
}: {
  label: string;
  hint?: string;
  debug?: string;
}) {
  return (
    <div className="flex h-full min-h-[12rem] w-full flex-col items-center justify-center gap-3 px-6 py-10 text-center md:min-h-[16rem]">
      <span className="rounded-full border border-white/10 bg-surface-raised/85 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-ink-faint">
        {label}
      </span>
      {hint ? (
        <p className="max-w-sm text-sm leading-snug text-ink-muted">{hint}</p>
      ) : null}
      {debug ? (
        <p className="font-mono text-[10px] text-ink-faint/90">{debug}</p>
      ) : null}
    </div>
  );
}

/**
 * Framed paper screenshot.
 * - **`intrinsic`**: preserves each image’s natural aspect ratio; capped by `maxHeightVh` and `maxWidthClass`.
 * - **`fixedAspect`**: stable box from `aspectPreset` (legacy).
 */
export function PaperScreenshotFrame({
  assetId,
  asset: overrides,
  className = "",
  figureClassName = "",
  hideCaption,
  forcePlaceholder,
}: PaperScreenshotFrameProps) {
  const base = useMemo(() => getPresentationAsset(assetId), [assetId]);
  const merged: PresentationAsset = {
    ...base,
    ...overrides,
    id: base.id,
  };

  const {
    src,
    alt,
    label,
    aspectPreset,
    fit,
    caption,
    maxHeightVh,
    layoutMode,
    maxWidthClass,
  } = merged;

  const hasSrc = Boolean(src && src.trim().length > 0);
  const showImage = hasSrc && !forcePlaceholder;

  const [loadState, setLoadState] = useState<LoadState>(
    showImage ? "idle" : "error"
  );

  const maxH =
    maxHeightVh != null
      ? (`min(${maxHeightVh}vh, 920px)` as const)
      : ("min(70vh, 920px)" as const);

  const aspectValue = ASPECT_RATIO_VALUE[aspectPreset];
  const objectFit: ImageFitMode = fit;
  const debug = isPresentationMediaDebug();

  const showPlaceholder =
    forcePlaceholder ||
    !showImage ||
    loadState === "error" ||
    (showImage && loadState === "idle");

  const onError = () => setLoadState("error");
  const onLoad = () => setLoadState("loaded");

  const widthCls = maxWidthClass ?? "";

  const placeholderHint = hasSrc
    ? "Image missing or failed to load — check `src` in presentationAssets.ts"
    : "Set `src` in presentationAssets.ts — layout is reserved";

  const debugStr = debug
    ? `${assetId} · ${layoutMode} · ${aspectPreset} · ${loadState}`
    : undefined;

  const frameStyleFixed: CSSProperties = {
    aspectRatio: aspectValue,
    maxHeight: maxH,
  };

  if (layoutMode === "fixedAspect") {
    return (
      <figure
        className={`w-full ${widthCls} ${figureClassName}`}
        data-asset-id={assetId}
        data-layout="fixedAspect"
        data-aspect={aspectPreset}
      >
        <div
          className={`overflow-hidden rounded-2xl border border-white/[0.09] bg-surface-muted shadow-card ${className}`}
        >
          <div
            className="relative w-full bg-[radial-gradient(ellipse_at_30%_0%,rgba(124,156,255,0.07),transparent_50%),radial-gradient(ellipse_at_80%_100%,rgba(110,231,183,0.05),transparent_45%)]"
            style={frameStyleFixed}
          >
            <div
              className={`absolute inset-0 z-0 transition-opacity duration-200 ${
                showPlaceholder ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!showPlaceholder}
            >
              <PlaceholderInterior
                label={label}
                hint={placeholderHint}
                debug={debugStr}
              />
            </div>
            {showImage ? (
              <img
                src={src}
                alt={alt}
                decoding="async"
                loading="lazy"
                onLoad={onLoad}
                onError={onError}
                className={`absolute left-1/2 top-1/2 z-10 max-h-full max-w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                  loadState === "loaded" ? "opacity-100" : "opacity-0"
                } ${
                  objectFit === "cover" ? "object-cover" : "object-contain"
                }`}
              />
            ) : null}
            {debug && (
              <div className="absolute left-2 top-2 z-20 rounded border border-white/10 bg-surface/90 px-2 py-1 font-mono text-[9px] text-ink-muted">
                {assetId} · {aspectPreset}
              </div>
            )}
          </div>
        </div>
        {!hideCaption && caption ? (
          <ScreenshotCaption>{caption}</ScreenshotCaption>
        ) : null}
      </figure>
    );
  }

  /* intrinsic — natural aspect ratio */
  return (
    <figure
      className={`mx-auto w-full ${widthCls} ${figureClassName}`}
      data-asset-id={assetId}
      data-layout="intrinsic"
      data-aspect={aspectPreset}
    >
      <div
        className={`overflow-hidden rounded-2xl border border-white/[0.09] bg-surface-muted/90 shadow-card backdrop-blur-[2px] ${className}`}
      >
        <div className="relative w-full px-3 py-3 sm:px-5 sm:py-5 md:px-7 md:py-6">
          <div className="relative flex min-h-[10rem] w-full justify-center md:min-h-[12rem]">
            <div
              className={`absolute inset-0 z-0 flex items-center justify-center transition-opacity duration-200 ${
                showPlaceholder ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={!showPlaceholder}
            >
              <PlaceholderInterior
                label={label}
                hint={placeholderHint}
                debug={debugStr}
              />
            </div>
            {showImage ? (
              <img
                src={src}
                alt={alt}
                decoding="async"
                loading="lazy"
                onLoad={onLoad}
                onError={onError}
                style={{ maxHeight: maxH }}
                className={`relative z-10 mx-auto h-auto w-auto max-w-full object-contain transition-opacity duration-300 ${
                  loadState === "loaded" ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : null}
            {debug && (
              <div className="absolute right-2 top-2 z-20 rounded border border-white/10 bg-surface/90 px-2 py-1 font-mono text-[9px] text-ink-muted">
                {assetId} · intrinsic
              </div>
            )}
          </div>
        </div>
      </div>
      {!hideCaption && caption ? (
        <ScreenshotCaption>{caption}</ScreenshotCaption>
      ) : null}
    </figure>
  );
}
