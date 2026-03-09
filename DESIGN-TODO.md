# Spectrum Premium + Glassmorphism Hybrid — Design Implementation TODO

> Target: Adobe Spectrum 2 structure with selective Glassmorphism accents.
> Current state: Color variables updated, basic sidebar collapse added. Everything else below is still TODO.

---

## Phase 1: Sidebar — Two-Level Navigation (Icon Rail + Panel)

The current sidebar is a single flat list. The target is an Adobe-style two-column layout.

### 1.1 Icon Rail (48px vertical strip)
- [ ] Create icon rail component (`icon-rail.svelte`) — 48px wide, dark background
- [ ] Move page switcher icons (Contents, Assets, Workflow) from global toolbar into icon rail
- [ ] Add logo/branding at top of rail
- [ ] Add user avatar at bottom of rail (circular, gradient background with initials)
- [ ] Active indicator: 3px blue bar on left side of selected icon
- [ ] Hover: icon background lightens
- [ ] Tooltip on hover showing section name

### 1.2 Collection Panel (200px expandable panel)
- [ ] Restructure `primary-sidebar.svelte` to sit beside the icon rail
- [ ] Panel only shows when a rail section is selected
- [ ] Search bar at top of panel
- [ ] Collection list with icons, labels, and count badges (styled as pills)
- [ ] Section headers ("Collections", "Files") as small uppercase labels
- [ ] Dividers between sections

### 1.3 Collapse Behavior
- [ ] Fix current collapse toggle to work with two-column layout
- [ ] Collapsed: only icon rail visible (48px)
- [ ] Expanded: icon rail (48px) + collection panel (200px) = 248px total
- [ ] Smooth CSS transition on panel width
- [ ] Persist collapse state in localStorage

### 1.4 User Profile Footer
- [ ] Add user profile section at bottom of collection panel
- [ ] Avatar (32px circular with gradient or photo)
- [ ] Display name (13px, semibold)
- [ ] Email (11px, secondary color)
- [ ] Top border separator
- [ ] Wire to existing `$user` store from `$lib/services/user`

**Files:** `primary-sidebar.svelte`, `page-container.svelte`, new `icon-rail.svelte`, `navigation.js`

---

## Phase 2: Stats Dashboard

The target shows 4 stat cards at the top of the content area.

### 2.1 Stats Dashboard Component
- [ ] Create `stats-dashboard.svelte` component
- [ ] 4 stat cards in responsive grid (4 cols desktop, 2 cols mobile)
- [ ] Cards: Total Entries | Published | Drafts | In Review
- [ ] Large value number (28px, bold)
- [ ] Label below (13px, secondary text)
- [ ] Trend indicator (e.g., "+3 this week" with colored arrow icon)
- [ ] Wire to `allEntries` store for total count
- [ ] Wire to `workflowStatuses` store for status breakdown

### 2.2 Stats Card Styling
- [ ] Border-radius: 12px
- [ ] Glassmorphism: `backdrop-filter: blur(20px)`, semi-transparent white bg
- [ ] Subtle border: `rgba(255,255,255,0.25)` or `var(--sui-secondary-border-color)`
- [ ] Box-shadow: `0 4px 16px rgba(0,0,0,0.06)`
- [ ] Hover: `translateY(-2px)` with stronger shadow
- [ ] Padding: 20px

### 2.3 Integration
- [ ] Place dashboard above secondary toolbar in `contents-page.svelte`
- [ ] Only show when collection is selected (not on empty state)
- [ ] Responsive: collapse to 2x2 grid on medium screens, stack on small

**Files:** new `stats-dashboard.svelte`, `contents-page.svelte` or `page-container-main-area.svelte`

---

## Phase 3: Card Grid — Visual Cards with Gradient Thumbnails

The current cards are plain boxes. Target has colorful visual cards.

### 3.1 Gradient Thumbnail Area
- [ ] Add 140px thumbnail area at top of each card
- [ ] Generate gradient backgrounds based on collection name/type (hash to color)
- [ ] Color palette: blue, purple, green, amber, pink, teal gradients (135deg angle)
- [ ] Overlay collection icon centered in thumbnail area (48px, white, 0.6 opacity)
- [ ] If entry has actual image field, display it instead of gradient
- [ ] Border-radius: 8px top corners only

### 3.2 Card Body
- [ ] Title: 14px, font-weight 600, truncate to 2 lines
- [ ] Meta line: category dot date dot slug (separated by dot character)
- [ ] Meta text: 12px, secondary color
- [ ] Slug in monospace font

### 3.3 Card Footer
- [ ] Status badge: colored dot + text (Published=green, Draft=amber, In Review=blue)
- [ ] i18n language tags: small pills showing locale codes ("en", "es", "fr")
- [ ] Tags use gray background, 4px border-radius, 10px font-size
- [ ] Only show language tags when entry has multiple locales

### 3.4 Card Interactions
- [ ] Hover: `translateY(-2px)`, shadow increase to `0 8px 24px rgba(0,0,0,0.12)`
- [ ] Hover: border color shifts to accent translucent
- [ ] Focus: visible focus ring (2px accent color outline)
- [ ] Checkbox appears on hover (top-left of thumbnail, small overlay)

### 3.5 List View Enhancement
- [ ] Add 44px colored icon block on left side of each row
- [ ] Icon block has same gradient as grid card thumbnail
- [ ] Status dot in row (before or after title)
- [ ] Language tags inline in row

**Files:** `entry-list-item.svelte`, `listing-grid.svelte`, possibly new `card-thumbnail.svelte`

---

## Phase 4: Glassmorphism Effects

Selective frosted glass applied to key surfaces.

### 4.1 Define Glass Design Tokens
- [ ] Add CSS custom properties to `app.svelte`:
  ```
  --glass-bg: rgba(255, 255, 255, 0.72)
  --glass-bg-light: rgba(255, 255, 255, 0.55)
  --glass-border: rgba(255, 255, 255, 0.25)
  --glass-shadow: 0 8px 32px rgba(31, 38, 135, 0.08)
  --glass-blur: blur(20px)
  --glass-blur-heavy: blur(40px)
  ```
- [ ] Add dark mode glass tokens:
  ```
  --glass-bg: rgba(30, 30, 30, 0.72)
  --glass-border: rgba(255, 255, 255, 0.08)
  ```

### 4.2 Apply to Sidebar
- [ ] Collection panel background: `var(--glass-bg-light)` + `backdrop-filter: var(--glass-blur-heavy)`
- [ ] Keep icon rail solid dark (no glass — needs contrast)
- [ ] Panel border: `1px solid var(--glass-border)`

### 4.3 Apply to Toolbar/Header
- [ ] Global toolbar: `backdrop-filter: var(--glass-blur)` + `var(--glass-bg)`
- [ ] Sticky positioning with `z-index: 50`
- [ ] Ensure text remains readable over glass

### 4.4 Apply to Stat Cards
- [ ] Background: `var(--glass-bg)` + `backdrop-filter: var(--glass-blur)`
- [ ] Border: `var(--glass-border)`
- [ ] Shadow: `var(--glass-shadow)`

### 4.5 Apply to Dialogs/Overlays
- [ ] Content details overlay: glass background
- [ ] Dialog modals: glass panel effect
- [ ] Toast notifications: subtle glass

### 4.6 Animated Gradient Background (optional, lower priority)
- [ ] Full-page gradient background behind content area
- [ ] Multi-color gradient: purple, pink, blue, cyan radial overlays
- [ ] Subtle animation (20s ease-in-out infinite, scale shifts)
- [ ] Only visible behind glass panels (content itself stays readable)
- [ ] Add toggle in settings to disable for performance

**Files:** `app.svelte`, `global-toolbar.svelte`, `page-container.svelte`, `stats-dashboard.svelte`

---

## Phase 5: Filter Pills — Full Implementation

Current: pills added but not wired to actual filtering.

### 5.1 Wire to Workflow Store
- [ ] Connect `activeStatusFilter` to `workflowStatuses` and `allEntries`
- [ ] Filter `listedEntries` based on selected status
- [ ] "All" shows everything, "Published" = ready, "Drafts" = draft, "In Review" = in_review
- [ ] Update entry count next to each pill label

### 5.2 Pill Styling Polish
- [ ] Active pill: gradient background (accent → accent-dark) instead of flat color
- [ ] Inactive pill: transparent bg, subtle border, hover fills slightly
- [ ] Count badge inside pill (small number, e.g., "Drafts (3)")
- [ ] Transition: smooth 150ms color/bg changes
- [ ] Show on all screens (currently hidden on small/medium)

### 5.3 Integration with Existing Filters
- [ ] Status pills should combine with existing sort/filter/group menus
- [ ] Don't conflict with `viewFilters` from collection config
- [ ] Maintain selection when switching collections

**Files:** `secondary-toolbar.svelte`, possibly `view/filter.js`

---

## Phase 6: Toolbar & Header Redesign

### 6.1 Structure
- [ ] Reduce toolbar height if needed for two-level nav
- [ ] Move page switcher (Contents/Assets/Workflow) to icon rail
- [ ] Toolbar becomes contextual: shows collection name + actions
- [ ] Breadcrumb navigation: Home > Collection Name > Entry Name

### 6.2 Search Bar
- [ ] Glassmorphic search: `backdrop-filter: blur(10px)`, semi-transparent bg
- [ ] Keyboard shortcut hint visible (Cmd+K)
- [ ] Search icon with slight opacity

### 6.3 Action Buttons
- [ ] "New" button: gradient or solid accent color
- [ ] Ghost buttons: transparent with hover fill
- [ ] Icon buttons: subtle glass effect on hover

**Files:** `global-toolbar.svelte`, toolbar item components

---

## Phase 7: Entry Editor Polish

### 7.1 Overlay Styling
- [ ] Editor overlay background: dark semi-transparent + blur
- [ ] Editor panel: glass background
- [ ] Field sections: subtle card styling with borders

### 7.2 Live Preview Pane
- [ ] Preview pane background: light glass
- [ ] Device viewport switcher: pill-style tabs
- [ ] Preview toolbar: glass effect

**Files:** `content-details-overlay.svelte`, `pane-header.svelte`, `pane-body.svelte`

---

## Phase 8: Login/Entrance Page

### 8.1 Background
- [ ] Gradient animated background (or static gradient)
- [ ] Colors matching the theme palette

### 8.2 Login Card
- [ ] Glassmorphic login panel: blur + semi-transparent white
- [ ] Rounded corners (16px)
- [ ] Glass shadow
- [ ] Logo with subtle glow or gradient

### 8.3 Buttons
- [ ] Sign-in button: gradient accent (blue → darker blue)
- [ ] Hover: slight lift + glow shadow

**Files:** `entrance-page.svelte`, `sign-in.svelte`

---

## Phase 9: Typography & Spacing Refinement

### 9.1 Typography Scale
- [ ] Verify/set font sizes: 11px labels, 12px meta, 13px small, 14px body, 16px buttons, 22px titles, 28px stats
- [ ] Font weights: 400 normal, 500 medium, 600 semibold, 700 bold
- [ ] Line height: 1.5 globally

### 9.2 Spacing System
- [ ] Define spacing tokens if not already: 4, 8, 12, 16, 20, 24, 32px
- [ ] Ensure consistent padding in cards, toolbars, sidebar sections
- [ ] Gap standardization in grids and flex layouts

### 9.3 Border Radius System
- [ ] Small (form inputs, badges): 4px
- [ ] Medium (buttons, controls): 6px
- [ ] Large (cards): 8px
- [ ] XL (dialogs, stat cards): 12px
- [ ] 2XL (login panel): 16px

**Files:** `app.svelte` (CSS custom properties)

---

## Phase 10: Dark Mode Glass Tokens

### 10.1 Dark Glass Colors
- [ ] Dark glass bg: `rgba(30, 30, 30, 0.72)`
- [ ] Dark glass border: `rgba(255, 255, 255, 0.08)`
- [ ] Dark glass shadow: `0 8px 32px rgba(0, 0, 0, 0.24)`
- [ ] Dark gradient thumbnails: muted/darker gradients

### 10.2 Dark Mode Testing
- [ ] Test all glass surfaces in dark mode
- [ ] Verify text contrast (WCAG AA minimum)
- [ ] Verify icon visibility
- [ ] Test animated background in dark mode

**Files:** `app.svelte` (`[data-theme='dark']` section)

---

## Implementation Priority

| Phase | Effort | Visual Impact | Priority |
|-------|--------|--------------|----------|
| 1. Two-level sidebar | High | Very High | 1 |
| 3. Card grid visuals | Medium | Very High | 2 |
| 2. Stats dashboard | Medium | High | 3 |
| 4. Glass effects | Medium | High | 4 |
| 5. Filter pills wiring | Low | Medium | 5 |
| 8. Login page | Low | Medium | 6 |
| 6. Toolbar redesign | Medium | Medium | 7 |
| 9. Typography/spacing | Low | Medium | 8 |
| 7. Editor polish | Low | Low | 9 |
| 10. Dark mode glass | Low | Low | 10 |

---

## Done (Foundation)

- [x] Color system: Spectrum Blue (#2680eb) accent, dark gray sidebar
- [x] Border radius: increased to 6-8px
- [x] Card hover: lift effect + shadow transitions
- [x] Collapsible sidebar: basic 250px → 56px toggle (needs rework for two-level nav)
- [x] Filter pills: UI added (not yet wired to filtering)
- [x] Toolbar: bottom border for depth

---

*Last updated: March 2026*
*Target: Spectrum Premium (Design 3) + Glassmorphism (Design 5) hybrid*
