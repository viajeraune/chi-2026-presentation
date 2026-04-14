/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Set to `"true"` in `.env.local` to show asset id / aspect / load state on screenshot frames (dev only). */
  readonly VITE_PRESENTATION_MEDIA_DEBUG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
