# Handoff: Snehal — Designer Portfolio

## Overview
A single-page editorial portfolio for Snehal, a designer working in identity, packaging and editorial. The page introduces her, indexes her work, lets visitors peek into individual case studies via a postage-stamp-framed drawer, surfaces favourite ads as scattered polaroids, and ends with résumé + contact.

## About the Design Files
The files in this bundle are **design references created in HTML / React-via-Babel** — prototypes that show the intended look, layout and interaction model. They are **not production code to copy verbatim**.

Recreate these designs in the target codebase's environment using its existing patterns. If no environment exists yet, the recommended starting point is **Next.js (App Router) + TypeScript + CSS Modules or Tailwind**, with a CMS (Sanity / Contentful / Notion) feeding `PROJECTS`, `ADS`, `EXPERIENCE`, `EDUCATION` so Snehal can update content without touching code. Deploy to Vercel.

## Fidelity
**Mid-to-high fidelity.** Final palette, typography, spacing and interaction patterns are locked. Image content is represented by colored placeholder cards (sage / lilac / rust / mustard etc.) with handwritten labels — the developer should swap these for real photography but keep the layout, framing, rotation and shadow treatments exactly as shown.

## Screens / Views

This is a single scrolling page with two overlay views (the project Drawer and the Ad Modal).

### 1. Nav (sticky)
- **Layout**: Flex row — logo left, links center, availability chip right. Sticky to top, ~85% opaque cream + backdrop-blur(10px), no border.
- **Logo**: "Snehal ✱" — Fraunces italic 24px, near-black ink, rust-colored sparkle.
- **Links**: Work / Ads / About / Résumé / Contact — Geist Mono 11.5px UPPERCASE, letter-spacing .12em. Active link gets a 1.5px solid underline in ink.
- **Availability chip**: pill with green dot + "Available · Jun 2026". Toggleable via tweaks.
- **Active section** is tracked via IntersectionObserver (rootMargin "-40% 0px -55% 0px").

### 2. Hero
- **Layout**: Full-width section, 110px top / 80px bottom padding. Two layers: a `.hero-objects` decorative layer (absolute, pointer-events:none) behind, and the typographic block in front (max-width 980px).
- **Decorative objects** (absolutely positioned, all rotated):
  - Lilac product card — top:40 right:60, 180×230, rotate(-6deg), with handwritten "fancy bakers" caption in deep lilac.
  - Sage circle — top:280 right:280, 90×90, rotate(8deg).
  - Rust folio tab — top:360 left:-10, 70×26, rotate(-90deg), text "FOLIO '26" in cream.
- **Eyebrow**: "SNEHAL ✱ DESIGNER ✱ BANGALORE" — Geist Mono 11px, letter-spacing .22em, ink-mute.
- **Headline**: Fraunces 116px (tweakable 64–160), weight 300, line-height .96, letter-spacing -.025em.
  - Three lines, italic accent on word 2 ("brands") in sage-deep, mustard highlight band on word in line 3 ("things") via inline-block padding 0 18px 6px.
- **Subhead**: 18px / line-height 1.55, ink-soft, max-width 520px, 38px above.
- **CTAs**: two pill chips — outline ("See the work ↓") + filled-ink ("Get in touch →").

### 3. Work Index
- **Section head**: italic Fraunces 56px "Index of Work", 1px ink underline, 16px below.
- **List**: 6 rows, each a 60px / 1fr / auto grid: number → name → meta. Row height ~92px, 1px var(--line) divider.
  - Number: Geist Mono 11px "01"…"06"
  - Name: Fraunces 64px, weight 300; on hover → italic + 16px left padding shift.
  - Meta (right): "PACKAGING — 2024 →" in Geist Mono 10px / .14em.
- **Peek panel**: absolutely positioned right-side card, 260px wide, paper bg, rotate(-1.5deg), follows hovered row's vertical position (top: hov*92 + 12, transition .25s). Contains a 4:3 colored image card with a handwritten lowercased project name, plus caption row + "peek ↗" hand-written link.

### 4. Drawer (overlay)
**This is the centerpiece.** Triggered by clicking any work index row. Modeled on a postage stamp.
- **Backdrop**: full-viewport `rgba(29,28,24,.55)` + backdrop-blur(10px), 40px/24px padding, scrolls.
- **Content width**: 900px max, centered.
- **Top action row** (above the stamp, since the mask would clip it): three pill buttons — `← prev`, `next →`, `close ✕` (close button is filled-ink).
- **The stamp** (`.stamp` class): paper bg, 64px 64px 80px padding, drop-shadow filter. The perforated edge is implemented with FOUR radial-gradient masks (one per side) composited with `mask-composite: exclude` on top of a base solid-fill mask. Perf diameter 22px. Implementation in `portfolio/aesthetic.css`.
- **Inside the stamp** — two-column grid (1fr / 1.1fr, gap 48):
  - Left: 4:5 colored hero card (one of 6 swatches keyed off project index — sage / lilac / rust / dark-sage / mustard-deep / rose), with handwritten lowercased project name in bottom-left and "01/06" slide marker in top-right. Below it, an N-square thumbnail strip; clicking sets `slide` state, opacity .35 vs 1 indicates active.
  - Right: KIND ✱ YEAR caption · italic Fraunces 60px name · serif 22px sage role · 16.5px blurb · tag chips · two-column "TYPE / DURATION / DELIVERABLES" meta with sage dashed-underline value.
- **Below the fold** (still inside the stamp): two-column "THE BRIEF" / "WHAT I MADE" body copy, then a 16:9 process card with diagonal stripe pattern over the accent color and handwritten "process · sketches" label.
- **Sticky note overlay** (`.drawer-sticky`): mustard square, bottom:60 right:-24, rotate(8deg), Caveat 22px "flip to see the design in action!". Toggleable via tweaks.
- **Keyboard**: Esc closes, ←/→ change slide.

### 5. Ads Section
- **Section head**: italic Fraunces 56px "Ads I Love" + caption.
- **Tray**: relative container, 580px min-height, linear-gradient cream bg, 1px line-soft border, rounded 6px, inner shadow.
- **6 polaroids**: absolutely positioned with given top/left/rotation. Each has paper bg (var(--paper)), 14px 14px 0 padding, soft shadow (`0 1px 2px / 0 12px 22px`).
  - Photo area: variable size per item, colored bg from same 6-swatch palette, 2px radius, with handwritten label in white at bottom-left.
  - Caption: Caveat 22px, dark warm ink, centered, padded 10px 6px 18px.
- **Hover lift**: `.lift` class — translateY(-4px) + bigger shadow on hover.
- **Click → Modal**: polaroid-styled overlay, 560px max width, with the same photo card and a Caveat 22px take/blurb.

### 6. About
- **Layout**: 260px / 1fr grid, gap 56px.
- **Left**: 4:5 sage card rotated -2deg with "that's me!" handwritten in white-ish; bottom-right of it, a small mustard sticky "says hi ✱" rotated 7deg.
- **Right**: Lead paragraph in Fraunces 28px / weight 300 with italics on "identity, packaging" and "editorial". Secondary paragraph in 16px ink-soft. Chips row.

### 7. Résumé
- **Section head**: italic "Résumé" + caption.
- **Two columns** (1fr / 1fr, gap 60px).
- **Left = EXPERIENCE**: caption header, then 4 rows of 140px / 1fr grid (year col mono 12px ink-mute, body has Fraunces 22px role + caption org + 14px notes). Top row gets 1px ink top border, others get 1px line.
- **Right = EDUCATION + RECOGNITION + downloads**: same row pattern for education, then a 3-row recognition list with title + year right-aligned, then two action chips: filled-ink "Download PDF résumé ↓" + outline "View on Read.cv ↗".

### 8. Toolbox
- Marquee row, 22px vertical padding, 1px borders top+bottom. Tools list duplicated and animated translateX(0 → -50%) over 30s linear infinite. Each tool word is 64px Fraunces, alternating italic-300 ink vs roman-600 sage every 3 words. Trailing rust sparkle ✱.
- Below: row of 8 discipline chips.

### 9. Contact Footer
- 1px ink top border, 60px top padding.
- **Display word**: lowercase italic Fraunces "contact." 220px, weight 300, line-height .88, letter-spacing -.035em.
- **4 link cards** in a 4-col grid: each has 1px line top border, caption label, Fraunces 24px value. (LinkedIn / Email / Résumé / Instagram.)
- Bottom meta row: copyright + "BUILT WITH CARE · BANGALORE".

## Interactions & Behavior
- **Smooth scroll** between nav links (scrollIntoView { behavior:"smooth" }).
- **Active nav link** via IntersectionObserver.
- **Work row hover** → font shifts to italic + slides 16px right (transition .2s); peek panel slides vertically to align (transition .25s cubic-bezier(.2,.8,.2,1)).
- **Open drawer** on row click. Inside: `slide` state, ←/→ keys + thumbnail click navigate. Esc closes. `prev`/`next` cycle PROJECTS modulo length.
- **Polaroid hover** → lift via `.lift` class (translateY(-4px), shadow grows).
- **Polaroid click** → polaroid-styled modal with the take/blurb.
- **Marquee**: pure CSS keyframes, infinite.
- **Tweaks panel** (toggle from the host toolbar): live-edit accent / paper / highlight colors via CSS custom properties on `documentElement`; live-edit hero copy; toggle hero objects, drawer sticky, nav availability via `data-show-*` attributes on `<html>` driving `display:none` rules.

## State Management
- `drawer` (number | null) — index of opened project, drives Drawer overlay.
- `slide` (number) — current slide index inside the drawer; resets on `index` change.
- `adSel` (number | null) — index of selected ad polaroid.
- `hov` (number) — currently hovered work row, used for peek panel position + active styling.
- `active` (string) — id of section currently in viewport, drives nav active state.
- `t` (object) — tweaks state from `useTweaks(TWEAK_DEFAULTS)`. Persisted via host `__edit_mode_set_keys` postMessage.

In a real app, replace the in-file `PROJECTS` / `ADS` / `EXPERIENCE` / `EDUCATION` arrays with CMS-backed fetches. Each project should grow a `blocks: Block[]` field where Block is a discriminated union (`cover | text | gallery | video | quote | compare | fullbleed`) — the drawer becomes a renderer that walks the blocks array. See "Per-project content variety" below.

## Per-project content variety (to implement)
The current drawer renders a fixed shape. The intended evolution:

```ts
type Block =
  | { type: 'cover';     src: string; alt?: string }
  | { type: 'text';      heading?: string; body: string }
  | { type: 'gallery';   images: { src: string; alt?: string }[]; layout?: 'grid' | 'masonry' }
  | { type: 'video';     src: string; poster?: string }
  | { type: 'quote';     text: string; attribution?: string }
  | { type: 'compare';   before: string; after: string }
  | { type: 'fullbleed'; src: string };

type Project = {
  id: string; name: string; kind: string; year: string; role: string;
  blurb: string; tags: string[];
  blocks: Block[];
};
```

Drawer renders `<header>` (name / kind / role / blurb / tags) then `project.blocks.map(renderBlock)`.

## Design Tokens

All defined in `portfolio/aesthetic.css`. Hex values:

### Colors
| Token | Value | Use |
|---|---|---|
| `--bg` | `#efe9dc` | warm cream paper, page background |
| `--bg-warm` | `#ebe3d3` | polaroid tray gradient top |
| `--bg-cool` | `#e6ddc9` | polaroid tray gradient bottom |
| `--paper` | `#fbf7ec` | card / polaroid / stamp interior |
| `--ink` | `#1d1c18` | primary text |
| `--ink-soft` | `#4a4742` | body copy |
| `--ink-mute` | `#837e74` | captions, meta |
| `--ink-faint` | `#b8b1a3` | dividers, lines |
| `--line` | `#c9c2b1` | borders |
| `--line-soft` | `#ddd6c5` | softer borders |
| `--sage` | `#6c6e54` | primary accent / image-card fills |
| `--sage-deep` | `#555738` | links, italic accent text |
| `--sage-soft` | `#8d8e6f` | dashed underlines |
| `--lilac` | `#b8b3d8` | secondary accent |
| `--lilac-deep` | `#8a83b8` | text on lilac |
| `--rust` | `#c2643c` | sparkles, tabs, highlights |
| `--mustard` | `#f5e16c` | sticky note + headline highlight |
| `--mustard-deep` | `#e8c93a` | secondary mustard |
| `--rose` | `#e9b8a3` | swatch alt |

### Shadows
- `--shadow-soft`: `0 1px 2px rgba(0,0,0,.04), 0 6px 18px rgba(40,36,28,.07)`
- `--shadow-card`: `0 2px 1px rgba(0,0,0,.04), 0 8px 22px rgba(40,36,28,.10)`
- `--shadow-pop`: `0 4px 4px rgba(0,0,0,.05), 0 18px 36px rgba(40,36,28,.18)` (hover state)

### Typography
- **Fraunces** (Google Fonts, ital,opsz,wght 9..144 / 300..900) — display, serif body, headings. Variable font; uses `font-variation-settings: "SOFT" 50, "WONK" 0` for normal serif and `"SOFT" 0, "opsz" 144, "WONK" 1` for display.
- **Geist Mono** (Google Fonts, 400, 500) — captions, eyebrows, meta, tags.
- **Caveat** (Google Fonts, 400..700) — handwritten labels, sticky notes, polaroid captions.

Type scale (px): 9 (vertical caption) · 10 (caption) · 11 (eyebrow / chip) · 14 (notes) · 15 (long copy) · 16 (paragraph) · 17 (lead) · 18 (subhead) · 22 (sub-name) · 24 (footer link value) · 28 (lead paragraph) · 56 (section head) · 60 (drawer name) · 64 (work row) · 116 (hero) · 220 (footer display).

### Spacing
- Page max-width: 1320px, side padding 48px.
- Section vertical rhythm: 110px top + bottom (`.wf-section`).
- Section head bottom margin: 48px.
- Card padding: 14–22px (polaroid), 64/64/80 (drawer stamp), 22 (sticky note).

### Radii
2 (placeholder), 3 (polaroid photo, thumb), 4 (rust tab), 6 (cards / lilac product / tray / image hero), 100 (chips).

## Assets to source
The HTML uses colored placeholder cards in place of real images. Replace these with:
- 6 project hero images (one per project, 4:5 portrait)
- N project case-study slides per project (square or 16:9, dictated by chosen `blocks` per project)
- A portrait photo for About (4:5)
- 6 ad-reference photos (still frames or product shots)
- A résumé PDF
- Favicon

Snehal's brand sparkle is a Unicode `✱` (U+2731) in rust — keep this; no SVG asset needed.

## Files in this bundle
- `Portfolio.html` — entry point. Mounts `<WireC />` into `#root`. Loads React 18.3.1 + ReactDOM + Babel standalone, then `wireframes/shared.css`, `portfolio/aesthetic.css`, `portfolio/tweaks-panel.jsx`, `portfolio/portfolio.jsx`.
- `portfolio/portfolio.jsx` — every component (`Nav`, `Hero`, `WorkIndex`, `Drawer`, `Polaroids`, `Modal`, `About`, `Resume`, `Toolbox`, `Footer`, `WireC`) plus the data arrays and `TWEAK_DEFAULTS`.
- `portfolio/aesthetic.css` — design tokens, typography, paper-grain texture, postage-stamp mask implementation, polaroid + sticky-note + editorial-card styles. **The stamp/sticky/polaroid CSS is the part you most want to port carefully.**
- `portfolio/tweaks-panel.jsx` — the Tweaks shell (you can drop this in development; not needed in the production build).
- `wireframes/shared.css` — earlier mid-fi base layer that the aesthetic layer overrides. Most rules here are now superseded by `aesthetic.css`; you can flatten the two during port.

## Recommended port plan
1. Scaffold Next.js + TS. Pull tokens from `aesthetic.css` into a `tokens.css` (or Tailwind config / CSS Modules).
2. Wire fonts via `next/font` (Fraunces, Geist Mono, Caveat).
3. Re-implement components 1:1 in `app/page.tsx` + `components/`. Keep `Drawer` as a route-modal (`@modal` parallel route) so it's URL-addressable and shareable.
4. Move `PROJECTS / ADS / EXPERIENCE / EDUCATION` into a CMS. Add the `blocks` array on `Project` and a `<BlockRenderer>` component.
5. Image handling: `next/image` everywhere; convert the colored placeholder pattern into a `Placeholder` component for missing images during content load.
6. Strip the `tweaks-panel` for production; it's a design-time tool.
7. Deploy to Vercel; point a custom domain (snehal.xyz / similar) at it.

## Notes
- The postage-stamp perforated edge uses `mask-composite: exclude` with multiple radial-gradient masks. This works in Safari/Chrome/Firefox modern but **fails silently on older browsers** — confirm support targets and consider an SVG mask fallback.
- Backdrop-blur on the sticky nav assumes a translucent background; ensure the polyfill story is acceptable for your target browsers.
- All interactions are pointer + keyboard; touch behavior should be re-tested on real devices, particularly Drawer scroll-vs-swipe.
