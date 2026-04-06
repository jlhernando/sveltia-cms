# Spec: Preview Mode for Draft Articles (`?preview=true`)

## Problem

Users writing articles in Sveltia CMS cannot preview how their draft content will look on the actual published site before committing to production. The existing CMS preview (iframe with `preview_path`) only works for already-published entries.

## Goal

Allow users to generate a shareable preview URL (e.g., `https://mysite.com/blog/my-draft-post?preview=true`) that renders draft/unpublished content on the live site exactly as it would appear when published.

---

## Architecture Overview

Since Sveltia CMS works with **static site generators** (11ty, Hugo, Next.js, Astro, etc.), true draft preview requires coordination between **two sides**:

1. **CMS side** (Sveltia) — Generates preview URLs, manages preview tokens, provides a draft content API
2. **Site side** (user's SSG/framework) — Detects `?preview=true`, fetches draft content, renders it

---

## Part 1: CMS-Side Changes (Sveltia)

### 1.1 Preview Token Generation

- When a user clicks "Preview on site" for a draft entry, generate a **signed preview token**
- Token payload: `{ entryId, collectionName, slug, locale, expiresAt, userId }`
- Token is a base64url-encoded JSON blob signed with HMAC-SHA256 using a secret derived from the user's auth token
- Tokens expire after **1 hour** by default (configurable)

### 1.2 Preview URL Construction

Extend `getEntryPreviewURL()` in `/src/lib/services/contents/entry/index.js`:

```
Current:  https://mysite.com/blog/my-post
New:      https://mysite.com/blog/my-post?preview=true&token=<preview_token>
```

### 1.3 Git Branch Preview (Recommended Approach)

Since drafts in Sveltia CMS are saved to Git (either main branch with `draft: true` frontmatter, or editorial workflow branches):

- **Option A — Same branch, draft flag**: Entry exists in repo with `draft: true` or `__workflow_status: draft`. The SSG needs to include these when `?preview=true` is present.
- **Option B — Feature branches**: Editorial workflow creates branches like `cms/posts/my-draft`. Preview URL tells the hosting platform to serve from that branch.

**Recommended: Option A** — simpler, works with all hosting platforms.

### 1.4 UI Changes

Add to entry editor toolbar (`src/lib/components/contents/details/toolbar.svelte`):

- **"Preview on site" button** (visible for draft/in_review entries)
- Opens preview URL in new tab
- Shows a "Copy preview link" option for sharing
- Button disabled if `site_url` is not configured

### 1.5 Config Extension

New optional config in `config.yml`:

```yaml
preview:
  enabled: true                    # Enable preview mode (default: false)
  draft_field: "draft"             # Field name that marks drafts (default: "draft")
  preview_param: "preview"         # Query param name (default: "preview")
  token_expiry: 3600               # Token expiry in seconds (default: 3600)
```

---

## Part 2: SEO Protection (CRITICAL)

Preview URLs **must never be indexed** by search engines. This requires defense-in-depth across multiple layers.

### 2.1 Meta Tags (injected by site-side preview middleware)

Every page rendered in preview mode MUST include:

```html
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<meta name="googlebot" content="noindex, nofollow">
```

These tags are injected dynamically when `?preview=true` is detected — they do NOT appear on the normal published page.

### 2.2 X-Robots-Tag HTTP Header

The site's preview middleware/serverless function MUST return:

```
X-Robots-Tag: noindex, nofollow, noarchive, nosnippet
```

This provides server-level protection even if the meta tags are somehow stripped. Framework-specific examples:

**Next.js middleware:**

```js
if (request.nextUrl.searchParams.get('preview') === 'true') {
  response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
}
```

**Astro middleware:**

```js
if (context.url.searchParams.get('preview') === 'true') {
  return new Response(body, {
    headers: { 'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet' },
  });
}
```

**Netlify `_headers` / Vercel `vercel.json`:**

```
# Netlify _headers
/*
  X-Robots-Tag: noindex, nofollow; if=preview
```

### 2.3 Robots.txt Blocking

The site MUST block crawlers from preview URLs via `robots.txt`:

```
# Block all preview URLs
User-agent: *
Disallow: /*?preview=true
Disallow: /*?preview=true&*
Disallow: /*&preview=true
Disallow: /*&preview=true&*
```

**Note:** Query-param based `Disallow` rules are supported by Google and Bing but not all crawlers — this is why we need all three layers (meta tags + headers + robots.txt).

### 2.4 Canonical Tag Override

Preview pages MUST set the canonical URL to the **non-preview version** (without `?preview=true`):

```html
<link rel="canonical" href="https://mysite.com/blog/my-post">
```

This prevents any preview URL from competing with the real page in search results even if accidentally indexed.

### 2.5 Sitemap Exclusion

Preview URLs MUST NOT appear in XML sitemaps. Since preview is query-param based (not a separate path), this is handled automatically — sitemaps typically only list canonical URLs. The integration guide will confirm this.

### 2.6 CMS-Side SEO Safeguards

The **SveltiaPreviewBanner** component (provided by the CMS) will:

- Inject the `<meta name="robots" content="noindex, nofollow">` tag automatically
- Inject the `<link rel="canonical">` tag pointing to the clean URL
- Display a visible warning: "Preview mode — this page is not indexed"
- These are injected client-side as a fallback; server-side injection (headers + meta) is the primary defense

---

## Part 3: Site-Side Integration (User's Framework)

### 3.1 How It Works on the Site

The user's static site / framework needs to:

1. **Detect** `?preview=true` in the URL
2. **Bypass** the draft filter — include entries where `draft: true`
3. **Inject SEO protection** — meta tags, X-Robots-Tag header, canonical override
4. **Render** the page normally with draft content
5. **Show a banner** indicating "This is a preview — not yet published"

### 3.2 Framework-Specific Guides

**Astro:**

```js
// src/pages/blog/[slug].astro
const isPreview = Astro.url.searchParams.get('preview') === 'true';
const posts = await getCollection('blog', (entry) =>
  isPreview ? true : !entry.data.draft
);
// In <head>: {isPreview && <meta name="robots" content="noindex, nofollow" />}
```

**Next.js (App Router):**

```js
// Uses Next.js Draft Mode API
// GET /api/preview?token=xxx → enables draft mode cookie
// Pages check draftMode() to include drafts
// Middleware adds X-Robots-Tag for draft mode responses
```

**11ty:**

```js
// .eleventy.js — build with drafts included for preview deploy
// Use a deploy preview branch that includes draft content
// Add robots meta via layout when PREVIEW env var is set
```

**Hugo:**

```
hugo server --buildDrafts --buildFuture
# For production preview: deploy a second instance with drafts enabled
# Template: {{ if .Params.draft }}<meta name="robots" content="noindex">{{ end }}
```

### 3.3 Preview Banner Component

Provide a drop-in `<SveltiaPreviewBanner>` snippet (HTML/JS) that:

- Detects `?preview=true` in current URL
- Shows a floating banner: "Preview Mode — This content is not yet published"
- Includes "Exit preview" button that removes the param
- **Auto-injects `<meta name="robots" content="noindex, nofollow">` tag**
- **Auto-injects `<link rel="canonical">` pointing to clean URL**
- Optional: shows entry metadata (author, last edited, workflow status)

---

## Part 4: Implementation Phases

### Phase 1 — MVP (CMS-side only)

- Add "Preview on site" button to toolbar
- Generate preview URL: `{site_url}/{preview_path}?preview=true`
- Copy-to-clipboard support
- Provide `<SveltiaPreviewBanner>` drop-in snippet with SEO protection
- Provide robots.txt rules in documentation
- No token auth (relies on site being behind staging/branch deploy)
- Works today if user's site already handles `?preview=true`

### Phase 2 — Token-Based Auth

- Generate signed preview tokens
- Add token validation endpoint (serverless function template)
- Token expiry and revocation
- Config options for preview behavior

### Phase 3 — Framework Integrations

- Publish official integration packages:
  - `@sveltia/preview-astro`
  - `@sveltia/preview-next`
  - `@sveltia/preview-11ty`
- Each package provides: middleware (with X-Robots-Tag), draft detection, preview banner, canonical override
- Documentation and examples
- SEO checklist in integration guide

---

## SEO Protection Checklist (for integration docs)

Before going live with preview mode, verify:

- [ ] `<meta name="robots" content="noindex, nofollow">` present on all `?preview=true` pages
- [ ] `X-Robots-Tag: noindex, nofollow` header returned for preview responses
- [ ] `robots.txt` blocks `/*?preview=true` URLs
- [ ] `<link rel="canonical">` points to clean URL (no query params)
- [ ] Preview URLs do NOT appear in XML sitemap
- [ ] Google Search Console — check "URL Inspection" to confirm preview URLs return "noindex"

---

## Files to Create/Modify

| File | Change |
|------|--------|
| `src/lib/services/contents/entry/index.js` | Extend `getEntryPreviewURL()` with preview param |
| `src/lib/components/contents/details/toolbar.svelte` | Add "Preview on site" button |
| `src/lib/services/config/parser/index.js` | Parse new `preview` config block |
| `src/lib/services/contents/preview/token.js` | **New** — Token generation/validation |
| `src/lib/components/contents/details/preview/preview-banner.svelte` | **New** — Embeddable banner with SEO tags |
| `docs/preview-mode.md` | **New** — Integration guide with SEO checklist |
