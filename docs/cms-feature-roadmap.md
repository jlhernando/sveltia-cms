# Sveltia CMS Feature Roadmap 2025-2026

Comprehensive competitive analysis and prioritized feature roadmap based on market research of leading headless CMS platforms.

---

## Executive Summary

This roadmap analyzes 16 leading headless CMS platforms (8 open source, 8 commercial) to identify competitive gaps and high-impact opportunities for Sveltia CMS. Features are prioritized across 4 tiers based on impact scores (1-5), implementation complexity (S/M/L/XL), and feasibility within Sveltia's git-native architecture.

**Key Findings:**
- Sveltia already leads in i18n capabilities, field type variety, and bundle size
- Biggest gaps: visual editing, AI UI integration, advanced versioning, real-time collaboration
- Quick wins available in content scheduling, enhanced search, and AI feature exposure

---

## A. Platform-by-Feature Matrix

| Feature Category | Feature | Strapi | Directus | Payload | Decap | Keystatic | Tina | Sanity | Ghost | Contentful | Hygraph | Storyblok | Prismic | Kontent | Builder | Contentstack | DatoCMS | Sveltia |
|-----------------|---------|--------|----------|---------|-------|-----------|------|--------|-------|------------|---------|-----------|---------|---------|---------|--------------|---------|---------|
| **Content Modeling** |
| Custom Field Types | 18+ | 20+ | 15+ | 12 | 8 | 10 | 15+ | 8 | 15+ | 20+ | 15+ | 12 | 18+ | 12 | 20+ | 18+ | **18** ✓ |
| Modular Blocks/Components | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **Partial** |
| Dynamic Zones | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Conditional Fields | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Content References | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **Partial** |
| Taxonomy/Categories | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| **Editorial UX** |
| Visual Page Builder | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | **None** |
| Live Preview | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** (iframe) |
| Dark Mode | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** |
| WYSIWYG Editor | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **Partial** |
| Content Calendar | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| **Workflow & Collaboration** |
| Editorial Workflow | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** (3-stage) |
| Real-time Collaboration | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Commenting/Annotations | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Scheduled Publishing | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Autosave/Drafts | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **Partial** |
| **Versioning & History** |
| Content Versioning | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Audit Trails | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Version Comparison | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Point-in-time Restore | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **Git** |
| **Localization** |
| Multi-language Support | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** (4 structures) |
| RTL Support | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** |
| Translation Workflow | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **Partial** |
| **AI Features** |
| AI Content Generation | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **Backend only** |
| AI Translation | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **Backend only** |
| AI SEO Optimization | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| AI Image Generation | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✗ | ✓ | ✗ | ✓ | ✓ | ✗ | **None** |
| AI Content Type Builder | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | **None** |
| **Media Management** |
| Asset Library | ✓ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** |
| Image Transformations | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** (WebP, SVG) |
| DAM Integration | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** (2 providers) |
| Stock Photo Integration | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | **✓** (4 providers) |
| EXIF/Metadata Extraction | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** |
| Video Support | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **Partial** |
| **Search** |
| Full-text Search | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** |
| Elasticsearch Integration | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Algolia Integration | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Faceted Search | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| **Roles & Permissions** |
| RBAC | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Field-level Permissions | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| Custom Roles | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| **Git Features** |
| Git Backend | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | **✓** (3 backends) |
| Branch Workflows | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | **Git native** |
| PR-based Publishing | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | **Git native** |
| GPG Signing | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | **✓** |
| **API & Developer Experience** |
| REST API | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **Git only** |
| GraphQL API | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **Git only** |
| Webhooks | ✓ | ✓ | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **✓** (custom hooks) |
| TypeScript SDK | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **None** |
| **Performance** |
| Bundle Size | ~2MB | ~3MB | ~2MB | ~300KB | ~200KB | ~500KB | ~500KB | ~1MB | ~1MB | Cloud | Cloud | Cloud | Cloud | Cloud | Cloud | Cloud | **~300KB** ✓ |
| Serverless Compatible | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | Cloud | Cloud | Cloud | Cloud | Cloud | Cloud | Cloud | **✓** |

**Legend:** ✓ = Full support, Partial = Limited/incomplete, None = Not available, Cloud = Managed service only

---

## B. Prioritized Feature List

### Tier 1: Critical Features (High Impact, Major Gaps)

#### 1. Content Versioning System
**Impact Score:** 5/5
**Complexity:** XL
**Current Status:** None (relies on Git history)
**Platforms:** All except Decap, Keystatic

**Description:** Built-in content versioning with visual comparison, point-in-time restore, and audit trails accessible from the CMS UI without requiring Git knowledge.

**Why it matters:** While Sveltia leverages Git for version control, non-technical users need a UI-driven way to view history, compare versions, and restore content. Every major competitor offers this. Current Git-only approach is a major barrier for marketing teams.

**Implementation considerations:**
- Build on top of Git commits but expose via UI
- Store version metadata in frontmatter or separate index
- Visual diff viewer for Markdown content
- One-click rollback with automatic commit creation
- Filter by author, date range, specific fields

---

#### 2. Role-Based Access Control (RBAC)
**Impact Score:** 5/5
**Complexity:** XL
**Current Status:** None
**Platforms:** All database-backed platforms

**Description:** Granular permissions system with custom roles, field-level access control, and workflow-based permissions.

**Why it matters:** Enterprise adoption requires security and governance. Teams need to control who can edit, publish, or delete content. Field-level permissions prevent junior editors from modifying critical SEO fields or breaking localized content.

**Git-based implementation:**
- Permissions layer in browser (enforced via auth tokens)
- Backend validation via GitHub/GitLab permissions
- Custom roles stored in config with permission sets
- Collection-level and field-level rules
- Integration with OAuth providers for SSO

---

#### 3. Scheduled Publishing
**Impact Score:** 5/5
**Complexity:** L
**Current Status:** None
**Platforms:** All except Decap, Keystatic, Tina

**Description:** Calendar-based content scheduling with timezone support, bulk scheduling, and automated publish/unpublish workflows.

**Why it matters:** Marketing teams plan campaigns weeks in advance. Ability to schedule posts for optimal engagement times (e.g., 9 AM in each timezone) is table stakes for modern CMS. Competitors like Ghost, Contentful, and DatoCMS make this a core feature.

**Git-based implementation:**
- Store publish date in frontmatter
- GitHub Actions workflow triggers on schedule
- Browser-based scheduler with visual calendar
- Batch operations for multi-locale launches
- Webhook notifications on publish completion

---

#### 4. AI Feature UI Integration
**Impact Score:** 5/5
**Complexity:** M
**Current Status:** Backend only (no UI buttons)
**Platforms:** Strapi, Sanity, Contentful, Hygraph, Prismic, Kontent, Builder, Contentstack, DatoCMS

**Description:** In-editor AI buttons for content generation, translation, SEO optimization, summarization, and tone adjustment.

**Why it matters:** Sveltia already integrates 4 AI translation providers and 3 AI content generation providers—this is a unique advantage. But without UI buttons, users can't access these features. Competitors are shipping AI everywhere. This is low-hanging fruit with massive impact.

**Implementation:**
- Context menu buttons in rich text editor
- "Generate draft" for empty fields
- "Translate to [language]" for localized fields
- "Optimize for SEO" for title/description
- "Suggest tags" for taxonomy fields
- Provider selection in settings

---

#### 5. Content Calendar View
**Impact Score:** 4/5
**Complexity:** M
**Current Status:** None
**Platforms:** Ghost, Contentful, Storyblok, Prismic, Kontent, Builder, Contentstack, DatoCMS

**Description:** Month/week/day calendar views showing scheduled and published content, drag-and-drop rescheduling, and multi-collection visibility.

**Why it matters:** Editorial teams manage dozens of posts across blogs, landing pages, and campaigns. Visual calendar prevents conflicts, reveals content gaps, and enables strategic planning. Works seamlessly with scheduled publishing.

**Implementation:**
- Parse publish dates from frontmatter
- FullCalendar.js or similar library
- Filter by collection, status, author
- Drag-to-reschedule with frontmatter update
- Export to ICS for external calendars

---

#### 6. Commenting & Annotations
**Impact Score:** 4/5
**Complexity:** L
**Current Status:** None
**Platforms:** Strapi, Directus, Payload, Sanity, Contentful, Hygraph, Storyblok, Prismic, Kontent, Builder, Contentstack, DatoCMS

**Description:** Field-level and document-level comments, threaded discussions, @mentions, and resolved/open status tracking.

**Why it matters:** Collaboration workflows require feedback loops. Editors need to flag issues, request revisions, and clarify requirements without leaving the CMS or switching to Slack/email. GitHub has comments on PRs; Sveltia should have comments on entries.

**Git-based implementation:**
- Comments stored in separate JSON file per entry
- GitHub Discussions API integration for PR-based workflow
- Real-time sync via WebSocket or polling
- Comment resolution creates audit trail
- Email notifications for @mentions

---

### Tier 2: High-Value Differentiators

#### 7. Visual Page Builder
**Impact Score:** 4/5
**Complexity:** XL
**Current Status:** None
**Platforms:** TinaCMS, Sanity, Contentful, Hygraph, Storyblok, Prismic, Builder.io, Contentstack, DatoCMS

**Description:** Drag-and-drop component editor with live preview, reusable blocks, and design system integration.

**Why it matters:** Non-technical marketers want to build landing pages without coding. Competitors like Storyblok and Builder.io are winning enterprise deals with visual editing. However, this is complex for git-based CMS and may conflict with Sveltia's philosophy.

**Git-based approach:**
- Component-based architecture (JSON arrays in frontmatter)
- Visual canvas renders from config
- Drag-drop updates JSON structure
- Git commit on save
- Pre-built component library

**Note:** This is a major undertaking and may not align with git-native simplicity. Consider as long-term goal.

---

#### 8. Conditional Fields
**Impact Score:** 4/5
**Complexity:** M
**Current Status:** None
**Platforms:** Strapi, Directus, Payload, Sanity, Contentful, Hygraph, Storyblok, Prismic, Kontent, Builder, Contentstack, DatoCMS

**Description:** Show/hide fields based on other field values, user roles, or collection type. Dynamic forms that adapt to content structure.

**Why it matters:** Reduces form complexity and prevents errors. Example: "Video URL" field only shows when "Content Type" is set to "Video". Improves UX and data quality.

**Implementation:**
- JSON-based condition rules in config
- Reactive UI hides/shows fields
- Validation skips hidden fields
- Works with existing field types
- Visual condition builder in admin

---

#### 9. Taxonomy & Hierarchical Categories
**Impact Score:** 4/5
**Complexity:** M
**Current Status:** None
**Platforms:** Strapi, Directus, Payload, Sanity, Ghost, Contentful, Hygraph, Storyblok, Prismic, Kontent, Builder, Contentstack, DatoCMS

**Description:** Hierarchical category trees, tag management, faceted filtering, and taxonomy-driven navigation.

**Why it matters:** Essential for large content sites (e-commerce, documentation, news). Enables SEO-friendly URLs, breadcrumb navigation, and advanced filtering. Current lack of taxonomy limits Sveltia for complex sites.

**Git-based implementation:**
- Taxonomy definitions in config
- Parent-child relationships in JSON
- File-based storage for simplicity
- Auto-generate breadcrumbs
- Faceted search integration

---

#### 10. Content Federation / External Data Sources
**Impact Score:** 4/5
**Complexity:** L
**Current Status:** None
**Platforms:** Hygraph (native), Contentful, Contentstack

**Description:** Pull external data from APIs (products from Shopify, events from Eventbrite) and display alongside editorial content.

**Why it matters:** Modern websites combine CMS content with external data. Hygraph built their entire differentiation on this. Enables use cases like "blog posts about products" where products live in Shopify.

**Git-based approach:**
- Proxy external APIs through Sveltia
- Cache responses in browser
- Display in read-only fields
- Reference external IDs in frontmatter
- Refresh on demand

---

#### 11. Advanced Search with Filters
**Impact Score:** 4/5
**Complexity:** M
**Current Status:** Basic full-text search
**Platforms:** All major platforms

**Description:** Faceted search, saved searches, field-specific filters, fuzzy matching, and search across media metadata.

**Why it matters:** Large content libraries (1000+ entries) require powerful search. Current search is basic. Need filters for status, author, date range, tags, collection type. Saves editors hours per week.

**Implementation:**
- Fuse.js or MiniSearch for client-side
- Advanced filter UI
- Saved search presets
- Search in media alt text, filenames
- Export search results

---

#### 12. Media Library Enhancements
**Impact Score:** 4/5
**Complexity:** M
**Current Status:** Basic asset management
**Platforms:** All major platforms

**Description:** Folders/collections, bulk operations, AI tagging, video transcoding, focal point selection, and usage tracking (where is this asset used?).

**Why it matters:** Design teams manage thousands of assets. Need organization, bulk edit, and insight into asset usage. Sanity's Media Library (2025) and Directus DAM features set new bar.

**Implementation:**
- Folder structure in Git
- Asset metadata in JSON
- AI tagging via Cloud Vision API
- Video thumbnails via ffmpeg
- Usage scanning across entries
- Unused asset detection

---

#### 13. Real-time Collaboration
**Impact Score:** 3/5
**Complexity:** XL
**Current Status:** None
**Platforms:** Directus, Sanity, Contentful, Hygraph, Storyblok, Prismic, Kontent, Builder, Contentstack, DatoCMS

**Description:** Google Docs-style simultaneous editing with live cursors, change highlighting, and conflict resolution.

**Why it matters:** Large teams need to co-edit. Prevents "last write wins" conflicts. Impressive demo feature for sales. However, complex to implement in git-based system.

**Git-based challenges:**
- Git is not real-time friendly
- Would require operational transformation (OT) or CRDT
- WebSocket server for live sync
- Conflict resolution UI
- May compromise git-native simplicity

**Recommendation:** Defer to Tier 4. Focus on async collaboration (comments) first.

---

#### 14. AI SEO Assistant
**Impact Score:** 4/5
**Complexity:** M
**Current Status:** None
**Platforms:** Strapi, Sanity, Contentful, Hygraph, Storyblok, Prismic, Kontent, Builder, Contentstack, DatoCMS

**Description:** Real-time SEO scoring, keyword suggestions, meta description generation, readability analysis, and competitor gap analysis.

**Why it matters:** SEO is critical for organic traffic. Yoast-like features in CMS save context switching. AI can suggest optimal titles, check keyword density, and flag missing meta tags.

**Implementation:**
- Client-side analysis (no API calls)
- Readability scoring (Flesch-Kincaid)
- Keyword density checks
- Character count warnings
- AI-generated suggestions via existing providers
- SEO checklist per entry

---

#### 15. Workflow Automation & Webhooks Enhancement
**Impact Score:** 4/5
**Complexity:** M
**Current Status:** Basic event hooks
**Platforms:** All except git-based platforms

**Description:** Visual workflow builder, multi-step approval chains, automated actions (e.g., publish → notify Slack → trigger build), and webhook retry/logging.

**Why it matters:** Complex organizations have multi-step approval (writer → editor → legal → publish). Automation reduces manual work. Webhooks need better debugging (logs, retry, payload inspection).

**Implementation:**
- State machine for workflows
- Visual workflow editor (if/then rules)
- Webhook queue with retry logic
- Webhook logs with request/response
- Integration templates (Slack, Discord, Zapier)

---

### Tier 3: Nice-to-Have Improvements

#### 16. A/B Testing Framework
**Impact Score:** 3/5
**Complexity:** L
**Current Status:** None
**Platforms:** Builder.io, Contentstack

**Description:** Create content variants, set traffic splits, and track performance metrics.

**Why it matters:** Marketing teams test headlines, CTAs, and layouts. Builder.io makes this a core feature. Low complexity to implement (just metadata + client-side logic).

**Implementation:**
- Variant field in config
- Traffic percentage in frontmatter
- Client-side variant selector
- Analytics integration (GA4 events)
- Winner promotion workflow

---

#### 17. Content Relationships Graph Visualization
**Impact Score:** 3/5
**Complexity:** M
**Current Status:** None
**Platforms:** Sanity, Contentful, Contentstack

**Description:** Visual graph showing how entries reference each other, orphaned content detection, and impact analysis ("what breaks if I delete this?").

**Why it matters:** Complex content graphs become unmanageable. Graph view reveals hidden dependencies and helps prevent breaking changes.

**Implementation:**
- Parse references from all entries
- D3.js or vis.js for visualization
- Orphan detection algorithm
- Click to navigate to entry
- Export as image for documentation

---

#### 18. Personalization & Audience Targeting
**Impact Score:** 3/5
**Complexity:** XL
**Current Status:** None
**Platforms:** Contentful, Hygraph, Contentstack

**Description:** Define audience segments, serve different content per segment, and track engagement by persona.

**Why it matters:** Enterprise feature for high-traffic sites. Show different hero images for "new visitors" vs. "returning customers". Contentstack's 2025 focus area.

**Note:** Requires runtime infrastructure (edge workers or CDN). Not feasible in static git-based model. Consider as future enhancement if Sveltia adds hosting layer.

---

#### 19. Content Templates & Blueprints
**Impact Score:** 3/5
**Complexity:** S
**Current Status:** None
**Platforms:** Most major platforms

**Description:** Pre-filled entry templates for common content types (e.g., "Product Launch Post" with standard structure), reusable snippets, and template marketplace.

**Why it matters:** Speeds up content creation and enforces consistency. New writers use templates to match brand voice.

**Implementation:**
- JSON templates in config
- "New from template" button
- Template library UI
- Community template sharing

---

#### 20. Multi-site Management
**Impact Score:** 3/5
**Complexity:** L
**Current Status:** One repo = one site
**Platforms:** Contentstack, DatoCMS, Contentful

**Description:** Manage multiple sites from one CMS instance, share content across sites, and site-specific workflows.

**Why it matters:** Brands run multiple regional sites or product-specific microsites. Need central content hub with site-specific overrides.

**Git-based approach:**
- Multi-repo support in one UI
- Shared content via Git submodules
- Site selector in header
- Cross-site content duplication

---

#### 21. Content Analytics Dashboard
**Impact Score:** 3/5
**Complexity:** M
**Current Status:** None
**Platforms:** Ghost, Contentful, Contentstack

**Description:** Track content performance (views, engagement), identify top/bottom performers, and recommend updates for stale content.

**Why it matters:** Data-driven content strategy. Ghost 6.0 added "writer-first analytics". Editors see which posts drive traffic and update accordingly.

**Implementation:**
- Integrate GA4 API or Plausible
- Display metrics per entry
- Content decay alerts
- Export reports

---

#### 22. Batch Operations & Bulk Editing
**Impact Score:** 3/5
**Complexity:** M
**Current Status:** None
**Platforms:** All major platforms

**Description:** Multi-select entries, bulk update fields, bulk publish/unpublish, and bulk delete with confirmation.

**Why it matters:** Saves hours when updating 100+ entries (e.g., changing author name, adding new tag, or unpublishing old promotions).

**Implementation:**
- Multi-select UI
- Bulk action menu
- Confirmation dialog with preview
- Git commit with batch changes
- Undo buffer

---

#### 23. Content Locking
**Impact Score:** 3/5
**Complexity:** M
**Current Status:** None
**Platforms:** Most database-backed platforms

**Description:** Lock entry when user is editing to prevent simultaneous edits and conflicts.

**Why it matters:** Prevents "last write wins" data loss in team environments. Shows "Jane is editing this post" warning.

**Git-based approach:**
- Lock state in localStorage + server sync
- Auto-release after timeout
- Warning dialog if locked by another user
- Override option for admins

---

#### 24. Import/Export Tools
**Impact Score:** 3/5
**Complexity:** M
**Current Status:** Git-native (already have it)
**Platforms:** All major platforms

**Description:** CSV import, WordPress XML import, bulk export to JSON/CSV, and migration tools from other CMSs.

**Why it matters:** Reduces migration friction. Users switching from WordPress or other CMSs need easy data import.

**Implementation:**
- CSV → Markdown converter
- WordPress XML parser
- Contentful JSON import
- Export to Notion, Obsidian formats
- Migration wizard UI

---

#### 25. Modular Blocks / Dynamic Zones
**Impact Score:** 4/5
**Complexity:** L
**Current Status:** Partial (arrays supported but no visual builder)
**Platforms:** Most major platforms

**Description:** Mix-and-match content blocks (Text, Image, Quote, CTA) in any order within a single entry. Visual block selector.

**Why it matters:** Flexible page layouts without custom code. Editor builds page from pre-defined blocks. Strapi and Contentstack make this core.

**Implementation:**
- Extend existing array fields
- Block type selector
- Visual block preview
- Drag-to-reorder
- Block library with thumbnails

---

### Tier 4: Future/Enterprise Features

#### 26. Content Federation API
**Impact Score:** 3/5
**Complexity:** XL
**Current Status:** None
**Platforms:** Hygraph (core feature), Contentful, Contentstack

**Description:** Unified GraphQL API combining Sveltia content with external APIs (Shopify, Stripe, Salesforce) in one query.

**Why it matters:** Enterprise use case. Hygraph's main differentiator. Reduces custom middleware.

**Note:** Requires backend service. Not feasible in pure client-side git model. Defer until Sveltia Cloud exists.

---

#### 27. Content Workflow State Machine
**Impact Score:** 3/5
**Complexity:** XL
**Current Status:** 3-stage linear workflow
**Platforms:** Kontent.ai, Contentstack, DatoCMS

**Description:** Custom workflow states beyond draft/review/ready (e.g., Legal Approval, Translation, Design Review), conditional transitions, and parallel approvals.

**Why it matters:** Regulated industries (pharma, finance) need complex approval chains. Current 3-stage workflow is too simple.

**Implementation:**
- Configurable state machine
- Role-based transitions
- Approval history log
- Parallel approval branches
- SLA tracking

---

#### 28. AI Content Type Builder
**Impact Score:** 3/5
**Complexity:** L
**Current Status:** None
**Platforms:** Strapi, Contentful, Builder.io

**Description:** Describe content type in natural language or upload Figma design, AI generates field schema automatically.

**Why it matters:** Speeds up setup for new projects. Strapi's demo feature. Fun factor.

**Implementation:**
- LLM prompt → JSON schema
- Image-to-schema via vision models
- Preview before apply
- Edit generated schema
- Template suggestions

---

#### 29. Edge-based Personalization
**Impact Score:** 2/5
**Complexity:** XL
**Current Status:** None
**Platforms:** Contentstack, Contentful (via integrations)

**Description:** Deploy content variants to CDN edge, serve personalized content based on geo/device/user segment without database lookup.

**Why it matters:** Enterprise performance feature. Sub-100ms personalized responses.

**Note:** Requires hosting infrastructure. Out of scope for git-based CMS.

---

#### 30. Headless Commerce Integration
**Impact Score:** 2/5
**Complexity:** M
**Current Status:** None
**Platforms:** Strapi (Shopify/BigCommerce plugins)

**Description:** Native integrations for product catalogs, inventory sync, and checkout flows.

**Why it matters:** E-commerce content sites need product data alongside editorial content.

**Implementation:**
- OAuth integration with Shopify/WooCommerce
- Product browser in media picker
- Product reference field type
- Price/inventory display

---

---

## C. Quick Wins (Under 2 Weeks, High Impact)

These features deliver immediate value with minimal implementation effort:

### 1. AI UI Buttons (1 week)
**Current:** Backend integration exists, no UI
**Action:** Add context menu buttons in rich text editor for "Generate", "Translate", "Optimize SEO"
**Impact:** Exposes existing unique capability, immediate competitive advantage

### 2. Content Calendar View (1 week)
**Current:** None
**Action:** Parse publish dates from entries, render in FullCalendar.js
**Impact:** High user delight, common request from marketing teams

### 3. Advanced Search Filters (1 week)
**Current:** Basic full-text only
**Action:** Add filter dropdowns for collection, status, author, date range
**Impact:** Dramatically improves UX for large content libraries

### 4. Content Templates (3 days)
**Current:** Manual copy-paste
**Action:** JSON templates with "New from template" button
**Impact:** Speeds up content creation, enforces consistency

### 5. Bulk Operations UI (1 week)
**Current:** One-by-one edits
**Action:** Multi-select + bulk action menu
**Impact:** Saves hours on mass updates

### 6. Webhook Logging & Retry (3 days)
**Current:** Fire-and-forget
**Action:** Log requests/responses, retry failed webhooks
**Impact:** Improves reliability, easier debugging

### 7. SEO Checklist (5 days)
**Current:** Manual checking
**Action:** Real-time validation for title length, meta description, alt text
**Impact:** Improves content quality, reduces SEO errors

### 8. Asset Folders (5 days)
**Current:** Flat file list
**Action:** Folder structure in Git, UI navigation
**Impact:** Better media organization for design teams

### 9. Saved Search Presets (2 days)
**Current:** Re-enter filters each time
**Action:** Save search criteria, quick access
**Impact:** Power user productivity boost

### 10. Entry Duplication (1 day)
**Current:** Manual copy-paste
**Action:** "Duplicate" button with name increment
**Impact:** Common workflow, easy win

---

## D. Market Trends 2025-2026

### 1. AI Everywhere
Every major CMS now has AI features. Not just content generation, but AI-powered workflows:
- **Content generation:** Draft posts, product descriptions, social captions
- **Translation:** Near-instant localization (Prismic's Image-to-Slice AI, Hygraph's AI Assist)
- **SEO optimization:** Auto-generate meta tags, keyword suggestions
- **Image generation:** Contentful and Builder.io embed DALL-E/Midjourney
- **Content type design:** Strapi's AI Content-Type Builder turns prompts into schemas
- **Personalization:** Contentstack's Agent OS and Kontent.ai's Agentic CMS automate compliance and updates

**Sveltia's position:** Backend integrations exist but hidden. Immediate priority is exposing AI in UI.

### 2. Agentic CMS & Multi-Agent Orchestration
2025 saw a 1,445% surge in multi-agent system inquiries. CMSs are evolving from passive databases to active systems with specialized AI agents handling:
- SEO optimization agents
- Compliance checking agents
- Content enrichment agents
- Translation workflow agents

**Platforms:** Kontent.ai's Agentic CMS (Oct 2025), Contentstack's Agent OS (Sep 2025), Directus MCP integration (Feb 2025)

**Sveltia's opportunity:** Git-based architecture naturally supports agent workflows (commit hooks, GitHub Actions). Can position as "developer-friendly agentic CMS".

### 3. Real-time Collaboration as Table Stakes
Users expect Google Docs-like simultaneous editing. Platforms shipping this:
- Sanity (leader in real-time)
- Contentful, Storyblok, Prismic, Kontent.ai, DatoCMS
- Even Directus added live cursors

**Sveltia's challenge:** Real-time conflicts with Git's async nature. Alternative: focus on async collaboration (comments, locking) first.

### 4. Visual Editing Dominance
Non-technical users demand visual page builders:
- Storyblok's Visual Editor (market leader)
- Builder.io's AI-powered Fusion 1.0 (design-to-code)
- Drupal Canvas 1.0 (Nov 2025)
- Prismic's Slice Machine with Image-to-Slice AI

**Sveltia's position:** Git-based CMSs (Decap, Keystatic) mostly skip visual builders. TinaCMS is exception. This is a gap but also a philosophical choice.

### 5. Composable Architecture
Enterprise CMSs positioning as "composable DXPs":
- Content + personalization + analytics + commerce in one platform
- Contentstack's Lytics acquisition (Dec 2024)
- Hygraph's Content Federation
- 70% of enterprises moving to composable per 2025 research

**Sveltia's niche:** Stay lean, integrate with external tools, avoid bloat.

### 6. Git-based CMS Renaissance
Git-native CMSs gaining traction for developer-first teams:
- TinaCMS: Visual editing + Git
- Keystatic: TypeScript-first, GitHub/local modes
- Decap: Still active, editorial workflow leader among git CMSs

**Sveltia's advantage:** Best-in-class i18n, smallest bundle, most field types among git CMSs. Need to maintain lead.

### 7. Versioning & Governance
Regulated industries demand audit trails, version comparison, rollback:
- Payload's field-level versioning
- Strapi's Audit Logs in admin panel
- Contentful's Release management

**Sveltia's gap:** Git provides version history but no UI. Non-developers can't use it effectively.

### 8. Developer Experience (DX)
TypeScript, SDK quality, local development:
- Payload 3.0 (2025) TypeScript-native
- DatoCMS TypeScript upgrade (Oct 2025)
- Contentful's new SDK library
- Prismic's framework-specific SDKs (Next.js, SvelteKit, Nuxt)

**Sveltia's opportunity:** Local dev via File System Access API is unique. Expand with CLI tools, migration scripts.

### 9. Content Operations (ContentOps)
Shift from "website CMS" to "content operating system":
- Workflow automation
- Content analytics
- Performance tracking
- Scheduled publishing with calendar views

**Platforms:** Ghost 6.0 analytics (Aug 2025), Contentful's Launch app for release management

**Sveltia's gap:** Missing analytics, scheduling, advanced workflows.

### 10. Headless + Hosting Convergence
Managed hosting becoming expected:
- Sanity's managed infrastructure
- Ghost Pro
- TinaCMS Cloud
- Keystatic Cloud

**Sveltia's position:** Pure client-side is unique advantage (no server costs). But limits features like real-time collaboration, personalization.

---

## E. Competitive Positioning

### Sveltia's Current Strengths
1. **Best-in-class i18n:** 4 file structures, RTL support (unmatched)
2. **Field type variety:** 18 types including unique ones (Compute, Key-Value, Map, UUID)
3. **Smallest bundle:** ~300KB (10x smaller than Strapi)
4. **Git-native:** 3 backends, GPG signing, branch workflows
5. **Stock photo + DAM:** 4 stock providers + 2 DAM integrations
6. **AI backend:** Already integrated (just needs UI)
7. **Zero infrastructure:** No server, no database, no hosting costs
8. **Developer UX:** Local dev via File System Access API, WCAG compliant

### Critical Gaps (Blockers for Enterprise)
1. **No versioning UI:** Non-technical users can't access Git history
2. **No RBAC:** Can't assign roles or restrict field access
3. **No scheduled publishing:** Marketing teams need calendar-based publishing
4. **No AI UI:** Backend exists but invisible to users
5. **No collaboration:** No comments, no real-time, no locking
6. **No content calendar:** Blind spot for editorial planning

### Differentiation Strategy

**Positioning:** "The git-native CMS for modern teams"

**Target audience:**
- Developer-led content teams
- Agencies managing client sites
- Documentation sites (technical writers)
- Multilingual publishers
- Privacy-conscious organizations (no SaaS lock-in)

**Key messages:**
- "Own your content" (git = data portability)
- "Ship fast" (300KB bundle, no server setup)
- "Scale globally" (best i18n in any CMS)
- "Developer-friendly" (TypeScript, webhooks, local dev)

**Anti-positioning:**
- **Not a visual page builder:** For teams who value code quality over drag-drop
- **Not real-time:** For async workflows where Git's audit trail matters
- **Not a database:** For teams who want files, not vendor lock-in

---

## F. Implementation Roadmap Recommendation

### Phase 1: Close Critical Gaps (Q2 2026)
**Goal:** Make Sveltia viable for enterprise teams

1. AI UI Integration (1 week)
2. Content Calendar (1 week)
3. Advanced Search (1 week)
4. Scheduled Publishing (3 weeks)
5. Commenting System (3 weeks)
6. Quick Wins batch (2 weeks)

**Total:** ~10 weeks

**Impact:** Addresses top user requests, exposes hidden AI capabilities, enables editorial workflows.

---

### Phase 2: Governance & Scale (Q3 2026)
**Goal:** Enable larger teams and complex workflows

1. RBAC System (6 weeks)
2. Content Versioning UI (6 weeks)
3. Conditional Fields (2 weeks)
4. Taxonomy System (3 weeks)
5. Workflow Automation (4 weeks)

**Total:** ~21 weeks

**Impact:** Unlocks enterprise adoption, addresses security/compliance requirements.

---

### Phase 3: Differentiation (Q4 2026)
**Goal:** Build unique competitive advantages

1. AI SEO Assistant (3 weeks)
2. Media Library Overhaul (4 weeks)
3. Content Templates (1 week)
4. Modular Blocks (3 weeks)
5. Batch Operations (2 weeks)

**Total:** ~13 weeks

**Impact:** Polishes existing strengths, builds on AI differentiation.

---

### Phase 4: Advanced Features (2027)
**Goal:** Future-proof and expand addressable market

1. Visual Page Builder (12 weeks)
2. Real-time Collaboration (12 weeks)
3. Content Federation (8 weeks)
4. A/B Testing (4 weeks)
5. Analytics Dashboard (4 weeks)

**Total:** ~40 weeks

**Impact:** Enables new use cases, competes with visual-first platforms.

---

## G. Feature Exclusions (Not Feasible for Git-Based CMS)

These features require abandoning git-native architecture:

### 1. Native GraphQL/REST API Layer
**Why excluded:** Git repos don't expose APIs. Would require backend service (Sveltia Cloud).

**Alternative:** Users deploy SSG sites with API generation (Next.js, SvelteKit).

### 2. Real-time Database Features
**Why excluded:** Git commits are async, not real-time. CRDTs/OT conflict with Git model.

**Alternative:** Focus on async collaboration (comments, locking).

### 3. Edge Personalization
**Why excluded:** Requires runtime infrastructure (CDN workers, serverless functions).

**Alternative:** Client-side personalization via localStorage, cookies.

### 4. Content-as-a-Service (CaaS)
**Why excluded:** Sveltia is CMS for static sites, not headless API for apps.

**Alternative:** Position as "git-native CMS" for JAMstack, not headless API.

### 5. E-commerce Checkout
**Why excluded:** Transactions need database, not flat files.

**Alternative:** Integrate with Shopify/Stripe via references, don't replace commerce platform.

---

## H. Sources & Research References

This roadmap is based on extensive research of platform documentation, changelogs, and feature announcements from 2025-2026:

**Open Source Platforms:**
- [Strapi CMS Features 2025-2026](https://strapi.io/blog/commitment-to-a-even-more-robust-strapi)
- [Directus AI Capabilities & MCP Integration](https://directus.io/blog/mcp-collaborative-cms)
- [Payload CMS 3.0 Localization & Versioning](https://payloadcms.com/docs/versions/overview)
- [Decap CMS Editorial Workflow](https://decapcms.org/docs/editorial-workflows/)
- [Keystatic Git-Based Content Management](https://keystatic.com/)
- [TinaCMS Visual Editing Features](https://tina.io/docs/contextual-editing/overview)
- [Sanity GROQ & AI Integration 2025](https://www.sanity.io/contentful-vs-sanity)
- [Ghost 6.0 Membership & ActivityPub](https://ghost.org/)

**Commercial Platforms:**
- [Contentful AI & Composable DXP 2025](https://www.contentful.com/blog/marketing-ai-digital-experiences-predictions-2026/)
- [Hygraph Content Federation](https://hygraph.com/blog/introducing-content-federation)
- [Storyblok Visual Editor](https://www.storyblok.com/features)
- [Prismic Slice Machine & AI Translation](https://prismic.io/slice-machine)
- [Kontent.ai Agentic CMS](https://www.cmswire.com/digital-experience/kontentai-launches-ai-powered-cms-for-content-automation/)
- [Builder.io Fusion 1.0 AI Agent](https://www.builder.io/)
- [Contentstack Agent OS & Personalization](https://www.contentstack.com/blog/product-updates/taxonomy-establish-scalable-content-best-practices-with-control-and-ease)
- [DatoCMS Structured Content Workflow](https://www.datocms.com/features)

**Industry Trends:**
- [Headless CMS Trends 2025-2026](https://www.waredock.com/magazine/headless-cms-trends-2026/)
- [Git-Based CMS Platforms 2025](https://staticmania.com/blog/top-git-based-cms)
- [CMS Versioning Best Practices](https://www.experro.com/blog/content-versioning-rollback-headless-cms/)
- [AI Features in Headless CMS 2025](https://kontent.ai/blog/best-headless-cms-for-content-managers-and-marketing-teams/)
- [CMS Role-Based Permissions](https://www.webstacks.com/blog/cms-roles-and-permissions)
- [Headless CMS Search Integration](https://www.cosmicjs.com/blog/implementing-continuous-integration-for-headless-cms-projects)
- [Visual Page Builders 2025](https://unlayer.com/blog/top-visual-editors-headless-cms)
- [Content Scheduling Features](https://www.marketpath.com/blog/top-cms-features/content-scheduling)
- [DAM Integration with Headless CMS](https://www.bynder.com/en/blog/cms-integration-dam/)

---

## Conclusion

Sveltia CMS has strong fundamentals (i18n, field types, git-native architecture) but critical gaps in versioning, RBAC, scheduling, and AI UI exposure. The 2025-2026 CMS market is dominated by AI integration, visual editing, and real-time collaboration trends.

**Recommended priority:**
1. **Immediate:** Expose existing AI features via UI (1 week)
2. **Short-term:** Add scheduling, calendar, commenting (8 weeks)
3. **Medium-term:** Build versioning UI and RBAC (12 weeks)
4. **Long-term:** Evaluate visual builder and real-time collaboration

By addressing Tier 1 and Quick Wins first, Sveltia can close enterprise adoption gaps while maintaining its unique git-native advantage.
