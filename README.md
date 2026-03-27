# Sveltia CMS (Custom Fork)

Personal fork of [Sveltia CMS](https://github.com/sveltia/sveltia-cms) with UI/UX enhancements, design explorations, and workflow improvements.

Based on upstream **v0.146.0**.

## What's Changed

### UI & Design

- **Spectrum Premium layout** with vertical icon rail navigation
- **Carbon Enterprise** assets page redesign
- **Glassmorphism effects** on toolbars and sidebars
- **Plus Jakarta Sans** font override
- **Custom sidebar logo** setting in Appearance panel
- **Breadcrumb navigation** in collection headings
- **Entry count badges** with blue circle indicators
- **Soft pastel gradient** entry cards with metadata rows

### Features

- **`preview_site_url`** config option for separate preview environments
- **Live preview** with multi-device viewport support (mobile/tablet/desktop)
- **Debounced search** with fixed navigation and store-bound values
- **3-stage editorial workflow** mapping (Draft, In Review, Ready to Publish)
- **Eleventy integration**: `eleventyExcludeFromCollections` mapped to draft workflow status

### Fixes

- Live preview URL reactivity (`$derived.by()`)
- Workflow race condition on config read
- Search bar visibility on desktop
- SCSS syntax issues after rebase
- Glass blur token consistency

## Design Explorations

The repo includes standalone HTML prototypes exploring different design systems:

| File | Design System |
|------|---------------|
| `design-1-carbon-enterprise.html` | IBM Carbon |
| `design-1-spectrum-premium.html` | Adobe Spectrum |
| `design-2-geist-minimal.html` | Vercel Geist |
| `design-3-pinterest-gestalt.html` | Pinterest Gestalt |
| `design-3-spectrum-premium.html` | Adobe Spectrum v2 |
| `design-4-carbon-enterprise.html` | IBM Carbon v2 |
| `design-4-govuk-accessible.html` | GOV.UK Design System |
| `design-5-glassmorphism-luxury.html` | Glassmorphism |
| `design-5-glassmorphism-modern.html` | Glassmorphism v2 |

## Tech Stack

- **Svelte 5** + **Vite 7** + **TypeScript**
- **Lexical** (rich text editor)
- **Leaflet** (map widget)
- **SCSS/PostCSS** styling
- **svelte-i18n** for internationalization

## Development

```bash
pnpm install
pnpm dev          # Dev server
pnpm build        # Production build
pnpm test         # Run tests
pnpm run check    # Lint + type check + audit
pnpm format       # Auto-format
```

## Upstream

- Upstream repo: [sveltia/sveltia-cms](https://github.com/sveltia/sveltia-cms)
- Upstream docs: [sveltiacms.app](https://sveltiacms.app/en/)

## License

MIT (same as upstream)
