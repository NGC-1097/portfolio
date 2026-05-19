# Robert Lazar — Portfolio

Welcome! This repo holds the source for my personal portfolio site: an Industrial Design student at TU/e working at the intersection of hardware, software, and human experience.

**Live site:** [robertilazar.com](https://robertilazar.com) — deployed on Vercel, auto-rendered on every push to `main`.

Built with [Nuxt 4](https://nuxt.com), [Nuxt Content](https://content.nuxt.com), [TresJS](https://tresjs.org) for 3D model viewing, [shadcn-vue](https://www.shadcn-vue.com) for UI primitives, and Tailwind CSS for styling.

---

## What changed in the latest update

- **Apple-inspired design language** — color tokens (`#0066cc` action blue, `#1d1d1f` near-black ink, `#f5f5f7` parchment) plus SF Pro font stack with Inter fallback. Headings now use `font-display` with "Apple tight" negative tracking, body runs at 17px / 1.47 line-height.
- **PIV page restructure** — Professional Identity (timeline narrative), Vision, Expertise this year, and Projects & skills are now four separate sections all synced via a shared `useActiveYear` composable. Click any year tab in the timeline and every section below flips together.
- **Per-year expertise content** — five expertise areas (Business, Creativity, Computing, Technology, Society) now have their own markdown file per year under `content/expertise/y{1,2,3}/`. Each area shows a 5-segment level bar with a ghost overlay for the previous year, so growth is visible at a glance.
- **Year 3 quotes** — PIV year-3 sections (PI + Vision) open with Roman/Stoic quotes (Marcus Aurelius, Seneca). Expertise year-3 placeholders open with growth-themed quotes from Franklin, Emerson, Newton, Hayes, and De Pree. All rendered as primary-blue bordered italic blockquotes.
- **3D model viewer auto-fit** — `ModelViewer.vue` now computes the model's bounding box on load and derives camera distance from FOV, so small models zoom in and large models zoom out automatically. Includes a "drag to rotate · scroll to zoom" usage tip that fades on first interaction or after 5 seconds.
- **Image folder restructure** — `public/expertise/` now organised as `y{1,2,3}/{1..5}/` to mirror the year-and-area content structure.

---

## Local development

```bash
# install deps
pnpm install

# dev server on http://localhost:3000
pnpm dev
```

## Production

```bash
# build
pnpm build

# preview production build locally
pnpm preview
```

Pushes to `main` trigger Vercel to rebuild and redeploy automatically — no manual deploy step needed.

See the [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment) for general background.
