# Sveltia CMS Custom Fork — Feature TODO

> Comprehensive feature list based on competitive analysis of Contentful, Strapi, WordPress, Sanity, Storyblok, Builder.io, Payload, Hygraph, and DatoCMS.

---

## Phase 1: Quick Wins (1-2 months)

### AI Content Tools
- [ ] **AI content generation** — "Generate" button on text/rich-text fields using existing LLM integrations (Claude, GPT, Gemini)
- [ ] **AI alt text generation** — Auto-generate alt text when uploading images
- [ ] **AI content rewriting** — Rewrite/rephrase content with tone options (formal, casual, concise)
- [ ] **AI field suggestions** — Suggest titles, meta descriptions, summaries from body content
- [ ] **AI SEO meta generation** — Generate SEO-friendly meta titles and descriptions

### Preview Improvements
- [ ] **Real-time preview updates** — Content changes reflect in iframe preview instantly (no save required)
- [x] **Multi-device preview** — Toggle between mobile / tablet / desktop viewport sizes *(done)*
- [x] **Preview refresh button** — Manual refresh for preview iframe *(done)*
- [x] **Live site preview** — Load actual site URL in iframe with URL bar and open-in-new-tab *(done)*

### Content Versioning
- [ ] **Visual diff view** — Side-by-side or inline diff when comparing entry versions
- [ ] **Version history timeline** — Show Git commit history for each entry with author and timestamp
- [ ] **One-click restore** — Restore any previous version with a single click (already partially exists)

### UX Polish
- [ ] **Apply Enterprise UI theme on mobile viewports** — Currently the Refined Enterprise theme (dark navy sidebar, indigo accents) only applies on screens >= 768px; extend to mobile with responsive-friendly adaptations
- [ ] **Bulk actions** — Select multiple entries for bulk delete/publish/unpublish
- [ ] **Entry duplication** — Duplicate an existing entry as a starting point
- [ ] **Improved search** — Full-text search with filters by collection, status, date, author
- [ ] **Keyboard shortcut overlay** — Show available shortcuts with a help modal (Cmd+/)

---

## Phase 2: Core Feature Gaps (2-4 months)

### Editorial Workflow
- [x] **3-stage workflow** — Draft → In Review → Ready to Publish with Kanban board *(done)*
- [x] **Status indicators** — Visual badges showing entry status in list views *(done)*
- [x] **Workflow transitions** — Rules for who can move entries between stages *(done)*
- [ ] **Draft auto-save** — Auto-save drafts at regular intervals (partially exists)
- [ ] **Publish confirmation** — Confirmation dialog before publishing with change summary

### Media Library Enhancements
- [ ] **Directory/folder navigation** — Browse media in folder tree (planned v2.0)
- [ ] **In-browser image editing** — Crop, resize, rotate images in a modal editor
- [ ] **Focal point selection** — Click to set focal point for responsive cropping
- [ ] **AI image tagging** — Auto-tag uploaded images using vision AI
- [ ] **Media search improvements** — Search by filename, type, size, tags, date
- [ ] **Drag-and-drop reordering** — Reorder media in galleries via drag-and-drop
- [ ] **Batch upload with progress** — Upload multiple files with individual progress bars
- [ ] **Image format conversion** — Convert between formats (PNG→WebP, JPEG→AVIF) on upload

### Scheduled Publishing
- [ ] **Publish date field** — `publishDate` / `unpublishDate` frontmatter fields
- [ ] **Schedule UI** — Calendar picker for scheduling future publication
- [ ] **GitHub Actions integration** — Template workflow for time-based builds
- [ ] **GitLab CI integration** — Template pipeline for scheduled publishing
- [ ] **Visual calendar** — Calendar view showing scheduled entries

### Roles & Permissions (Basic)
- [ ] **3 default roles** — Admin / Editor / Viewer
- [ ] **Role assignment** — Assign roles to users (stored in config or Git)
- [ ] **Read-only mode** — Viewer role can browse but not edit
- [ ] **Publish permission** — Only Admin can publish; Editor can draft

---

## Phase 3: Differentiation (4-6 months)

### Visual Editing
- [ ] **Click-to-edit** — Click any element in preview iframe to focus the corresponding field
- [ ] **Inline editing** — Edit text directly in the preview (for simple text fields)
- [ ] **Component highlighting** — Hover over preview elements to highlight their boundaries
- [ ] **Field-to-preview mapping** — Data attributes connecting fields to preview elements
- [ ] **Preview panel resize** — Draggable divider between editor and preview

### Advanced AI Features
- [ ] **AI content audit** — Scan all entries for quality issues (broken links, missing alt text, SEO gaps)
- [ ] **AI translation improvements** — Batch translate entire entries, not just individual fields
- [ ] **AI writing assistant sidebar** — Persistent AI chat panel for content help
- [ ] **AI image generation** — Generate images from text prompts (DALL-E / Stability AI)
- [ ] **AI content scoring** — Readability score, SEO score, accessibility score per entry
- [ ] **Custom AI prompts** — Let users save custom AI prompt templates per field type

### Collection-Level Permissions
- [ ] **Per-collection access** — Define which roles can access which collections
- [ ] **Per-collection actions** — Separate create/edit/delete/publish permissions per collection
- [ ] **Permission UI** — Settings panel for managing collection permissions

### Collaboration (Lightweight)
- [ ] **Comments on entries** — Leave comments on an entry (stored in Git as metadata)
- [ ] **@mentions in comments** — Tag team members in comments
- [ ] **Entry activity log** — Show recent changes per entry with timestamps
- [ ] **Comment notifications** — Notify users when mentioned (via Git commit message or webhook)

### Content Modeling
- [ ] **Conditional fields** — Show/hide fields based on other field values
- [ ] **Field groups / tabs** — Organize fields into collapsible groups or tabs
- [ ] **Reusable field groups** — Define a group of fields once, reuse across collections
- [ ] **Field validation improvements** — Custom regex patterns, cross-field validation
- [ ] **Nested collections** — Collections within collections (planned v2.0)

---

## Phase 4: Enterprise Features (6-12 months)

### Real-time Collaboration
- [ ] **Optimistic locking** — Warn when another user is editing the same entry
- [ ] **"Currently editing" indicators** — Show who's editing what in entry lists
- [ ] **Conflict detection** — Detect conflicting changes on save
- [ ] **Merge conflict UI** — Visual conflict resolution when two edits collide
- [ ] **Presence service** — Lightweight WebSocket service for real-time presence

### Advanced Roles & Permissions
- [ ] **Custom roles** — Create roles with custom permission sets
- [ ] **Field-level permissions** — Control visibility/editability per field per role
- [ ] **Locale-based permissions** — Restrict editing to specific locales per role
- [ ] **Permission inheritance** — Roles can inherit from other roles
- [ ] **Invite system** — Invite users via email with role assignment

### Audit & Compliance
- [ ] **Audit log** — Track all user actions (edits, publishes, deletes, logins)
- [ ] **Audit log viewer** — Searchable/filterable audit log in the admin panel
- [ ] **Export audit log** — Export logs as CSV/JSON
- [ ] **Content history retention** — Configure how many versions to keep

### Advanced Publishing
- [ ] **Content releases** — Group entries into a release for batch publishing
- [ ] **Release management UI** — Create, manage, and schedule releases
- [ ] **Multi-version scheduling** — Schedule multiple future versions of the same entry
- [ ] **Rollback releases** — Undo an entire release with one click

### A/B Testing
- [ ] **Variant creation** — Create content variants for the same entry
- [ ] **Traffic splitting** — Define traffic allocation between variants
- [ ] **Analytics integration** — Connect to analytics to track variant performance
- [ ] **Winner selection** — Auto-select or manually pick the winning variant

---

## Phase 5: Advanced & Experimental (12+ months)

### Custom Widgets / Field Types
- [ ] **Widget API** — Complete the `registerFieldType()` / `registerWidget()` API (currently non-functional)
- [ ] **Widget marketplace** — Community-contributed custom field types
- [ ] **Widget SDK** — Documentation and tooling for creating custom widgets

### Preview Templates
- [ ] **Custom preview templates** — Complete the `registerPreviewTemplate()` API (currently non-functional)
- [ ] **Preview template gallery** — Pre-built templates for common SSGs (Hugo, Astro, Next.js, etc.)

### Config & Administration
- [ ] **Config editor UI** — Visual editor for CMS configuration (no YAML editing)
- [ ] **Config validation** — Real-time validation with helpful error messages
- [ ] **Config migration** — Tools to migrate from Decap CMS config to Sveltia

### Performance & Offline
- [ ] **Offline support** — Service worker for offline editing with sync on reconnect
- [ ] **Lazy loading** — Load collections and entries on demand for large repos
- [ ] **Virtual scrolling** — Handle thousands of entries without performance degradation

### Integrations
- [ ] **Webhook system** — Fire webhooks on content events (create, update, publish, delete)
- [ ] **Zapier/Make integration** — No-code automation triggers
- [ ] **Slack notifications** — Notify Slack channels on content changes
- [ ] **Amazon S3 / Cloudflare R2** — Media storage on S3/R2 (planned v1.0)

### Advanced Content Features
- [ ] **MDX support** — Parse and render MDX files
- [ ] **Table editing in Markdown** — Visual table editor within the rich text editor
- [ ] **Content relationships** — Bi-directional entry references with backlinks
- [ ] **Auto-increment fields** — Auto-incrementing numeric IDs
- [ ] **Unique constraints** — Enforce uniqueness across entries for specific fields
- [ ] **Manual entry sorting** — Drag-and-drop entry ordering (planned v2.0)

### Theming & Branding
- [ ] **Theming system** — Customize CMS colors, fonts, logo
- [ ] **Custom CSS injection** — Apply custom styles to the admin panel
- [ ] **White-labeling** — Remove Sveltia branding for client projects

### Deployment & Infrastructure
- [ ] **Edge function deployment** — Deploy CMS on Cloudflare Workers (planned v3.0)
- [ ] **Serverless auth** — OAuth without a proxy server
- [ ] **Multi-repo support** — Manage content across multiple Git repositories

---

## Existing Sveltia Advantages to Amplify

> Features we already have that competitors lack. Promote and enhance these.

### Already Best-in-Class
- [x] **i18n (4 file structures)** — single_file, multiple_files, multiple_folders, multiple_root_folders
- [x] **AI translation (4 providers)** — Google Cloud, Gemini, Claude, OpenAI
- [x] **Stock photos (4 providers)** — Pexels, Pixabay, Unsplash, Picsum
- [x] **Cloud DAM (2 providers)** — Cloudinary, Uploadcare
- [x] **Dark mode** — System-aware theming
- [x] **Mobile responsive admin** — Full mobile and tablet support
- [x] **Accessibility (WCAG)** — WAI-ARIA, keyboard nav, screen readers, reduced motion
- [x] **~300KB bundle** — 5x lighter than Decap CMS
- [x] **No server required** — Client-side only, no infrastructure costs
- [x] **3 Git backends** — GitHub, GitLab, Gitea/Forgejo
- [x] **Local backend** — File System Access API, zero auth
- [x] **QR code login** — Unique mobile sign-in flow
- [x] **GPG-signed commits** — Verified commits on GitHub
- [x] **PDF preview** — Inline PDF viewing
- [x] **SVG optimization** — Auto-optimize on upload via SVGO
- [x] **EXIF data reading** — Camera metadata extraction
- [x] **Computed fields** — Derived fields unique to Sveltia
- [x] **Key-value fields** — Native key-value pair widget
- [x] **UUID fields** — Auto-generated unique identifiers
- [x] **Map/geo widget** — Leaflet + terra-draw integration
- [x] **RTL support** — Arabic, Hebrew, Persian
- [x] **Locale fallback chains** — Configurable fallback hierarchies
- [x] **Event hooks** — preSave, postSave, prePublish, postPublish, etc.
- [x] **Multiple config formats** — YAML, JSON, TOML
- [x] **Content sanitization** — DOMPurify, no unsafe-eval needed

### Should Enhance
- [ ] Improve stock photo UX — add search filters, favorites, recent
- [ ] Improve AI translation UX — batch translate, progress indicator, quality review
- [ ] Promote dark mode — add manual toggle (not just system preference)
- [ ] Enhance mobile UX — optimize for thumb-friendly interactions
- [ ] Expand cloud DAM options — add more providers (S3, Azure Blob, etc.)

---

## Original Sveltia Roadmap (for reference)

### v1.0 (early 2026)
- PKCE support for GitHub OAuth
- Amazon S3 / Cloudflare R2 media storage
- More thorough config validation
- Entry pre-validation/normalization
- More CMS UI languages
- Live demo site

### v2.0 (mid-2026)
- Full editorial workflow
- Nested collections
- Manual entry sorting
- Directory navigation in Asset Library
- Asset collections

### v3.0 (late 2026)
- Multi-user support with roles/permissions
- Edge function deployment (Cloudflare Workers)
- Commits without Git service account
- Post locking to prevent conflicts

---

*Last updated: March 2026*
*Based on competitive analysis of 9 CMS platforms*
