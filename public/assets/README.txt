Presentation screenshots (drop files here)
==========================================

Paths are defined in ONE place: `src/presentation/presentationAssets.ts`

Suggested filenames (match default `src` entries — or change `src` in the registry only):

  results-main-chart.png           → asset id: resultsMainChart
  paper-figure-hook.png            → paperFigureHook
  paper-figure-study-design.png    → paperFigureStudyDesign
  paper-figure-source-comparison.png → paperFigureSourceComparison
  paper-figure-backup.png          → paperFigureBackup

Workflow:
1. Export or crop your figure as PNG (or update registry `src` to `.jpg` / `.webp`).
2. Place the file under `public/assets/`.
3. Ensure `src` in `presentationAssets.ts` matches `/assets/your-file.png`.
4. Reload the app — slides reference assets by **id**, not by path in slide code.

Optional dev helper: in `.env.local` add
  VITE_PRESENTATION_MEDIA_DEBUG=true
to show asset id and aspect preset on frames (development builds only).
