# Ingeorbe — Website Redesign

Homepage build per the redesign brief. **All colors and content below are placeholders** — replace before launch.

## How to swap in real branding

### Colors
Every color on the site is defined once in `app/globals.css`, inside the `:root` block, stored
as **raw "R G B" channel triples** (not hex) — this is what allows Tailwind's opacity modifiers
(`text-paper/80`, `border-line/20`, etc.) to work correctly throughout the site. To change a
color: convert your hex to its R G B components and paste the three numbers:

```css
:root {
  --color-paper: 247 245 240;        /* #f7f5f0 — page background */
  --color-paper-raised: 255 255 255; /* #ffffff — card backgrounds */
  --color-ink: 22 36 61;             /* #16243d — primary text + headlines */
  --color-ink-soft: 60 74 97;        /* #3c4a61 — secondary headline weight */
  --color-steel: 92 100 112;         /* #5c6470 — body copy */
  --color-line: 221 217 208;         /* #ddd9d0 — hairline borders */
  --color-signal: 216 124 44;        /* #d87c2c — single accent, CTAs, key marks */
  --color-signal-soft: 243 227 210;  /* #f3e3d2 — tint of accent */
}
```

These map to Tailwind classes (`bg-ink`, `text-signal`, `border-line`, etc.) via `tailwind.config.ts`,
so components never hardcode hex values. **Important:** if you ever reference one of these
variables directly in raw CSS or an inline style (rather than through a Tailwind class), wrap it
in `rgb(...)` — e.g. `rgb(var(--color-ink))` — since the variable itself is just three numbers,
not a valid CSS color on its own. An earlier version of this file stored hex values directly,
which silently broke every opacity modifier site-wide (`text-paper/80` rendered at full opacity
instead of 80%) — that's been fixed, but it's worth understanding if you're editing this file by hand.

### Content
All copy, stats, services, projects, and testimonials live in `app/content.ts`, separate from
the component files. Edit values there — no JSX editing required for routine content updates.

### Fonts
Currently using Inter Tight (display), Inter (body), and IBM Plex Mono (labels/data) as
placeholders, loaded in `app/layout.tsx`. Swap for the real brand typefaces there.

### Logo
The header (`components/Header.tsx`) currently renders "INGEORBE" as styled text. Replace with
an `<Image>` component pointing at the real logo file once available.

## Design direction

Palette and motifs are drawn from the firm's actual technical domain (survey coordinates,
measurement, registration marks) rather than generic "blueprint" clichés — a deep ink-blue base,
warm off-white paper background, and a single amber "signal" accent used sparingly for CTAs and
data points. The corner tick-mark motif (`.tick-corner` in `globals.css`) nods to registration
marks on technical drawings and is used only at structural moments, not as decoration.

## Setup

```bash
npm install
npm run dev
```

## What's built (homepage)

- Header with mobile nav (now includes Equipo link)
- Hero with background image (placeholder, structured for an easy video swap — see `components/Hero.tsx` comment) and credibility stats
- Trusted Expertise (mission/overview)
- Logo marquee — looping strip of client logos (placeholder logos via placehold.co, swap `clientLogos` in `app/content.ts`)
- Services grid — clicking a card opens a modal with an expanded description and process steps, plus a "Ver página completa" link to the dedicated page (not yet built) and a CTA to the contact form
- Featured Projects — 7 projects with thumbnail images, 4 visible by default with a "Ver los 7 proyectos" expand button
- Why Choose Ingeorbe (5 differentiators)
- Team — 3 members, compact circular photo + name and role side by side (placeholder photos, swap in `app/content.ts`)
- Industries Served
- Testimonials
- Consultation CTA form (front-end only — needs an API route or form handler wired up)
- Footer

## Swapping placeholder imagery

All placeholder images are now **local SVG files in `/public`**, not external URLs — this was a deliberate fix after the hero background broke due to a hardcoded (and apparently invalid) Unsplash photo ID. Local files can't 404 or get rate-limited, so the site always renders something even before you've added real photography.

- **Hero background**: `components/Hero.tsx`, the `HERO_IMAGE` constant, currently `/public/hero-placeholder.svg` (an abstract road-line + survey-tick design in the site's palette). To use video instead, the file has a commented example showing exactly what to replace the image with.
- **Team photos**: `app/content.ts`, the `team` array's `photo` field, currently `/public/placeholder-portrait.svg`. Displayed as a small circular crop (96px), so a centered headshot works best when you swap in real photos.
- **Project thumbnails**: each project's `image` field in `app/content.ts` currently points to a sector-specific icon under `/public/sectors/` (e.g. a road icon for "Infraestructura Pública", a leaf for "Ambiental") rather than a generic gray box — see the `sectorPlaceholderImage` map at the top of `content.ts` for which icon goes with which sector. This makes the placeholder state itself informative instead of just decorative. Once you have real project photography, replace each project's `image` field directly with the real photo path.
- **Client logos**: `app/content.ts`, the `clientLogos` array's `src` field, currently `/public/placeholder-logo.svg` — replace with real logo files (SVG or transparent PNG recommended) once available.

To swap in real photography: drop the file into `/public` (e.g. `/public/hero-real.jpg`) and update the relevant constant/field to `/hero-real.jpg`. If you'd rather host images on an external CDN or Unsplash, that still works — just add the domain to `remotePatterns` in `next.config.js` first, since Next.js blocks unlisted external image domains by default. All image rendering goes through `components/SafeImage.tsx`, a wrapper around `next/image` that shows a quiet labeled placeholder if a source ever fails to load instead of a broken-image icon — so even a bad URL won't visibly break the page again.

## Not yet built

- Individual service pages (`/servicios/[slug]`) — the modal links to these, so they'll need to exist before that link works in production
- Project case study template + individual project pages
- Schema markup (Organization / Services / Projects)
- Real metadata per page (currently only homepage metadata is set)
- Form submission handling (currently just shows a success state client-side)
# ingeorbe-proposal
# ingeorbe-proposal
