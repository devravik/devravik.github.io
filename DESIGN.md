---
name: AttendAssist
description: Free offline attendance, payroll, rent, and classroom management app
colors:
  navy: "#1C355E"
  gold: "#E8B76D"
  bg: "#FCFCFC"
  card-bg: "#F8F6F1"
  green: "#4F9D7E"
  border: "#E3D5BF"
  cream: "#E8DCC8"
  text: "#1a1a2e"
  text-muted: "#5a6070"
typography:
  display:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "40px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.25
  title:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "#ffffff"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "#162344"
    textColor: "#ffffff"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.sm}"
    padding: "10px 22px"
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  pillar-card:
    backgroundColor: "{colors.card-bg}"
    rounded: "{rounded.md}"
    padding: "28px 20px"
  feature-card:
    backgroundColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "28px 24px"
---

# Design System: AttendAssist

## 1. Overview

**Creative North Star: "The Household Professional"**

AttendAssist's visual language is the design equivalent of a trusted, competent friend who manages their household and small operation without fuss. The interface communicates specificity over generality: not "manage your team" but "track your cook, your driver, your tenants." The warmth comes from a cream-inflected neutral palette that echoes paper registers while the deep navy gives it professional authority. Gold appears sparingly, as an accent that rewards attention rather than demands it.

The atmosphere is calm and deliberate. Sections breathe. Typography is confident without being loud. The most important element on any given screen is obvious without needing to shout. The system rejects the enterprise grey of HR software and the animated-gradient performativity of SaaS landing pages. It rejects, too, the celebration-confetti energy of consumer fintech. The visual mood is closer to a premium household notebook than either a corporate portal or a promotional splash page.

**Key Characteristics:**
- Warm parchment-and-navy color temperature throughout
- Gold as a statement accent, never a fill
- Poppins at four weights: hierarchy through contrast, not decoration
- Cards that feel substantial, not lightweight
- Section rhythm at 80px; hero at 72px top - breathing room is the design
- Shadows tinted to the navy hue, never neutral grey

## 2. Colors: The Register Palette

A restrained warm palette with a committed primary. Navy owns the authority surfaces; cream and parchment own the warmth; gold marks what matters.

### Primary
- **Midnight Register Blue** (`#1C355E`): All primary interactive elements - nav, buttons, card headings, active states. The authoritative color. Never used at full intensity on light text backgrounds.
- **Warm Brass Accent** (`#E8B76D`): Highlights, the gold CTA button, the tools-teaser heading labels. Used on ≤20% of any screen surface. Its warmth against the navy is the visual signature.

### Secondary
- **Field Green** (`#4F9D7E`): Present status, paid confirmations, success states. Not a brand color - a semantic color. Used only where "complete" or "present" is the meaning.

### Neutral
- **Off-White Canvas** (`#FCFCFC`): Page background. Almost white; tinted fractionally toward the navy hue so it reads warm rather than clinical.
- **Warm Parchment** (`#F8F6F1`): Card and section backgrounds. The paper-register echo. Used on alternating sections and cards to create depth without shadows.
- **Aged Paper Border** (`#E3D5BF`): Card borders, dividers, input strokes. Warm, not grey.
- **Soft Cream** (`#E8DCC8`): Accent backgrounds on hover states, badges, soft fills.
- **Near-Black Ink** (`#1a1a2e`): Body text. Tinted slightly blue-black, not pure `#000`.
- **Slate Annotation** (`#5a6070`): Secondary text, captions, supporting copy. A cooler muted tone.

**The Brass Rule.** Warm Brass Accent (`#E8B76D`) appears in at most two contexts per screen. Its rarity makes the presence count. Never use it as a section background fill.

**The No-Pure-Neutral Rule.** No `#000`, no `#fff`, no `#808080`. Every neutral is tinted toward the navy hue. Off-White Canvas is the lightest surface.

## 3. Typography

**Display + Body Font:** Poppins (Google Fonts: 400 Regular, 500 Medium, 600 SemiBold, 700 Bold)

**Character:** A single geometric humanist sans at four weights does the heavy lifting. The hierarchy comes entirely from scale and weight contrast, never from mixing typefaces. Poppins's geometric construction gives it clarity; its humanist detail gives it warmth. It reads approachable at small sizes and authoritative at display scale.

### Hierarchy
- **Display** (700, 40px / 32px tablet / 26px mobile, line-height 1.2): Hero headline only. Navy. Maximum one display-level heading per page.
- **Headline** (700, 32px, line-height 1.25): Section headings (`h2`). Centered on content sections. Navy.
- **Title** (700, 16–18px, line-height 1.4): Card headings (`h3`), nav wordmark. Navy.
- **Body** (400, 16px, line-height 1.6, max-width 65ch): Default prose, feature descriptions. Muted slate for supporting copy, near-black for primary.
- **Label** (600, 14–15px): Button text, captions, trust-badge titles, meta text. Tight, confident.

**The One-Typeface Rule.** Poppins is the only font on this surface. Hierarchy is earned through weight contrast (400 vs 700) and scale, not through competing type families.

## 4. Elevation

Depth through tinted shadows and surface layering, not heavy drop shadows. The system uses two shadow levels, both tinted toward navy so they read as "depth" not "dirt."

### Shadow Vocabulary
- **Ambient** (`0 1px 3px rgba(28,53,94,.08)`): Resting state for feature cards. Barely perceptible at rest.
- **Lifted** (`0 4px 12px rgba(28,53,94,.12)`): Hover state for pillar cards. The card rises 2px on hover simultaneously.
- **Backdrop Blur** (`backdrop-filter: blur(8px)` on nav): The sticky nav uses a 95% opacity background with blur. Purposeful glassmorphism, not decorative.

**The State-Driven Rule.** Shadows appear as responses to interaction state (hover, active) or structural necessity (sticky nav). Resting surfaces are either flat (feature cards use ambient only) or tonal (parchment vs. white). Decorative floating shadows are prohibited.

## 5. Components

### Buttons
Confident and rounded at 8px - not pill-shaped, not sharp. Three distinct roles.
- **Primary** (navy fill `#1C355E`, white text, 12px 24px padding): Primary conversion action. "Download Free."
- **Outline** (transparent fill, navy stroke `2px solid #1C355E`, navy text): Secondary action adjacent to Primary. "See Screenshots."
- **Gold** (gold fill `#E8B76D`, navy text): High-emphasis secondary conversion, used on dark (navy) backgrounds - the tools-teaser CTA and main download CTA. Never used adjacent to a Primary button.
- **Hover:** Opacity 0.9 + translateY(-1px). 150ms transition, ease-out.
- **Focus visible:** Navy outline-offset ring (2px navy, 2px offset). No decorative glow - keyboard navigators need clear contrast.

### Pillar Cards
The four-pillar grid is the structural heart of the page. Cards are clickable, warm-parchment (`#F8F6F1`) background, 12px radius, 1px aged-paper border, 28px 20px padding. On hover: lifted shadow + 2px vertical rise. The "Learn more →" label adopts navy weight on hover to signal interactivity.

### Feature Cards
White background (`#ffffff`) distinguishes these from the parchment section behind them. Ambient shadow at rest. 12px radius. No hover state - these are informational, not interactive.

### Navigation (Sticky)
Off-white with 95% opacity and backdrop blur. Stays anchored to the top on scroll. Logo left, single CTA right. No secondary nav links - this is a single-page landing; the nav's only job is to re-expose the download action at any scroll depth.

### Trust Strip
Full-width navy background, white text. Three-column centered layout. Icon 28px. Strong label 15px/600 + supporting line 13px/0.75 opacity. This is the primary "quick scan" element - a reader who glances once should absorb: offline, no account, free.

### Screenshot Strip
Horizontal scroll gallery. Fixed height 400px per thumbnail, 180px wide, `object-fit: contain` with parchment background fill (handles the varied aspect ratios in the screenshot set). Cards at 12px radius with lifted shadow.

## 6. Do's and Don'ts

### Do:
- **Do** use Warm Parchment (`#F8F6F1`) to alternate section backgrounds instead of line dividers.
- **Do** keep section padding at 80px vertical. The breathing room is the design.
- **Do** tint every shadow toward navy (`rgba(28,53,94,...)`) not gray (`rgba(0,0,0,...)`).
- **Do** use the specific use-case noun in headings: "Track your maid's attendance," not "Manage your staff."
- **Do** state the three core differentiators (offline, no account, free) high on the page, plainly, without softening. No asterisks.
- **Do** reserve the gold CTA button for the final conversion moment: the tools-teaser and the closing CTA. Scarcity of gold makes it mean "this is the action."
- **Do** support `prefers-reduced-motion`: disable all `transform` and `transition` animations when the user has requested reduced motion.

### Don't:
- **Don't** use blob gradients, background gradient fills, or glassmorphism beyond the nav blur. These are the generic SaaS template signals the product explicitly rejects.
- **Don't** use grey-on-grey enterprise palettes, dense data tables, or compliance-heavy copy language. Enterprise HR software (SAP, Keka, GreytHR) is the explicit anti-reference.
- **Don't** use `border-left` or `border-right` accents greater than 1px as a colored stripe on cards or list items. Rewrite with background tints or leading icons.
- **Don't** use gradient text (`background-clip: text`). Use a single solid color.
- **Don't** stack navy CTA buttons and gold CTA buttons on the same screen region. Decide: one primary conversion per section.
- **Don't** use pure `#000` or `#fff`. Every neutral is tinted. Off-White Canvas (`#FCFCFC`) is the lightest background permitted.
- **Don't** add celebration language, confetti, percentage-discount urgency, or neon accent colors. Consumer fintech exuberance is the third anti-reference.
- **Don't** design grids of identical icon + heading + text cards without variation in weight or scale. The pillar cards differentiate by linking out; feature cards differentiate by topic weight.
