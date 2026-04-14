/**
 * Set `VITE_PRESENTATION_MEDIA_DEBUG=true` in `.env.local` to show asset id / aspect / load state on frames.
 * No effect in production builds.
 */
export function isPresentationMediaDebug(): boolean {
  if (!import.meta.env.DEV) return false;
  return import.meta.env.VITE_PRESENTATION_MEDIA_DEBUG === "true";
}
