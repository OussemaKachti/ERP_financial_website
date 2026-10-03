---
name: RFIDIA
description: The company as a zellige panel; three glazed tiles that only make sense assembled into one star.
colors:
  finance-cobalt: "#2338a8"
  crm-turquoise: "#12808f"
  rh-grenade: "#c3334f"
  logo-coral: "#f0a080"
  cobalt-night: "#0e1540"
  cobalt-night-raised: "#18215a"
  ink-navy: "#111737"
  slate-text: "#3d4360"
  muted-slate: "#646a85"
  lime-plaster: "#f3f5f7"
  lime-plaster-deep: "#e9edf2"
  glaze-white: "#ffffff"
  grout: "#d8dde6"
  wall-text: "#c9cfea"
  dark-ground: "#0a0f2e"
  dark-paper: "#141c47"
  finance-cobalt-on-dark: "#7487ff"
  crm-turquoise-on-dark: "#3ec0d0"
  rh-grenade-on-dark: "#f26d86"
typography:
  display:
    fontFamily: "Alexandria, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 1.5rem + 4.6vw, 5.2rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Alexandria, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.35rem + 2.5vw, 3.35rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Alexandria, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + .5vw, 1.55rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Readex Pro, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.02rem + .35vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Readex Pro, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "\"kern\""
  label:
    fontFamily: "Alexandria, Segoe UI, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
    letterSpacing: "0.01em"
  figure:
    fontFamily: "Alexandria, Segoe UI, system-ui, sans-serif"
    fontSize: "3.2rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontFeature: "\"tnum\""
rounded:
  chip: "1px"
  diamond: "2px"
  tile: "3px"
  window: "5px"
  mosaic: "6px"
spacing:
  joint: "6px"
  header: "76px"
  section-sm: "clamp(3rem, 2rem + 3vw, 5rem)"
  section: "clamp(4.5rem, 3rem + 6vw, 8.5rem)"
  head-gap: "clamp(2.5rem, 2rem + 2vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink-navy}"
    textColor: "{colors.lime-plaster}"
    typography: "{typography.label}"
    rounded: "{rounded.tile}"
    padding: "0.85rem 1.5rem"
    height: "3.25rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.tile}"
    padding: "0.85rem 1.5rem"
    height: "3.25rem"
  button-light:
    backgroundColor: "{colors.glaze-white}"
    textColor: "{colors.cobalt-night}"
    rounded: "{rounded.tile}"
    padding: "0.85rem 1.5rem"
    height: "3.25rem"
  button-sm:
    padding: "0.55rem 1.05rem"
    height: "2.6rem"
  button-lg:
    padding: "1rem 1.8rem"
    height: "3.6rem"
  tile-paper:
    backgroundColor: "{colors.glaze-white}"
    textColor: "{colors.slate-text}"
    rounded: "{rounded.tile}"
  tile-glazed-finance:
    backgroundColor: "{colors.finance-cobalt}"
    textColor: "{colors.glaze-white}"
    rounded: "{rounded.tile}"
  tile-featured:
    backgroundColor: "{colors.cobalt-night}"
    textColor: "{colors.wall-text}"
    rounded: "{rounded.tile}"
    padding: "1.75rem 1.5rem"
  tag:
    textColor: "{colors.finance-cobalt}"
    typography: "{typography.label}"
    rounded: "{rounded.tile}"
    padding: "0.3rem 0.65rem 0.3rem 0.55rem"
  input:
    backgroundColor: "{colors.lime-plaster}"
    textColor: "{colors.ink-navy}"
    rounded: "{rounded.tile}"
    height: "3rem"
  input-focus:
    backgroundColor: "{colors.glaze-white}"
  nav-link:
    textColor: "{colors.slate-text}"
    rounded: "{rounded.tile}"
    padding: "0.55rem 0.8rem"
  wall:
    backgroundColor: "{colors.cobalt-night}"
    textColor: "{colors.wall-text}"
---

# Design System: RFIDIA

## Overview

**Creative North Star: "The Zellige Panel"**

The site is a panel of glazed tiles laid on cool lime plaster. Each of the three applications has its own glaze: Finance cobalt, CRM turquoise, RH grenade. A colour means little on its own and only makes sense once it sits in the assembled star. The panel shows this literally in the hero rosette, whose 25 tesserae arrive scattered and lock together ring by ring. Elsewhere it shows it structurally: content blocks are tiles separated by grout, not cards floating on shadows. Drenched cobalt-night walls break the plaster at regular intervals and set the page's rhythm.

The surface is flat and glazed, not lifted. Depth comes from three things: the grout gap between tiles, a soft top-left sheen across each glaze, and a thin bevel inset. Corners are cut sharp (3px), and small markers are diamonds: a square tile turned 45°. Where two applications share data, their glazes mix into a third colour, and that mix is how the visuals show "integration". Type pairs Alexandria for display (Latin and Arabic) with Readex Pro for text. Display weight is a firm 600 with tight negative tracking, and amounts use tabular figures.

Density is calm and editorial. Sections breathe on a fluid 4.5–8.5rem rhythm. Lists stay lists: trades, FAQ and swaps are rows ruled by grout lines, not grids of cards.

**Key Characteristics:**
- Three module glazes plus cobalt night; every accent belongs to a module or to the logo.
- Grout gaps (6px) instead of borders and shadows.
- Sharp 3px corners; diamonds (squares turned 45°) as the universal marker.
- Glaze sheen: a 135° white gradient fading out by 38% of the tile.
- Shared data is drawn as a colour mix of the two module glazes.
- Alexandria 600 display with negative tracking; Readex Pro body at 1.0625rem / 1.65.

## Colors

A cool plaster-and-ink ground carrying three saturated glazes, with one coral note borrowed from the logo.

### Primary
- **Finance Cobalt** (finance-cobalt): the Finance glaze and the default accent. Used for glazed tiles, the default tag and chip, the hero tenant name, the input focus border, the text caret and text selection (22% mix). On cobalt-night walls in dark mode it brightens to `finance-cobalt-on-dark`.

### Secondary
- **CRM Turquoise** (crm-turquoise): the CRM glaze. Also marks positive confirmation: comparison-table checks and the success diamond.
- **RH Grenade** (rh-grenade): the RH glaze. Also used for Arabic display lines, the brand sub-line, the launch-offer accent, validation errors and the strike-through on "before" swaps.

### Tertiary
- **Logo Coral** (logo-coral): taken from the RFIDIA logo. Reserved for exactly two jobs: the facts band (obi) lead block and its diamond separators, and the global focus ring (2px outline, 3px offset).

### Neutral
- **Lime Plaster** (lime-plaster): the page ground and the input fill at rest.
- **Deep Plaster** (lime-plaster-deep): alternate bands and the window chrome bar.
- **Glaze White** (glaze-white): unglazed tiles, panels, the focused input.
- **Ink Navy** (ink-navy): headings, primary buttons, active role tab.
- **Slate Text** (slate-text): body copy.
- **Muted Slate** (muted-slate): captions, crumbs, secondary lines.
- **Grout** (grout): the gap colour behind mosaics and the only rule-line colour.
- **Cobalt Night** (cobalt-night) / **Raised Night** (cobalt-night-raised): drenched walls, the footer, the film band, the featured price tile. On a wall, text takes **Wall Text** (wall-text), headings go white, and grout becomes 10% white.

### Named Rules
**The One Glaze Per App Rule.** Cobalt is Finance, turquoise is CRM, grenade is RH, everywhere. A module glaze never decorates something that does not belong to that module.

**The Mixed Joint Rule.** When two applications share data, draw the link as an `oklab` mix of their glazes (`color-mix(in oklab, crm, finance)`), usually as a 4px gradient joint that runs from one glaze through the mix to the other.

**The Coral Reserve Rule.** Logo coral appears only in the facts band and the focus ring. Nothing else may use it, including icons, hovers and highlights.

**The Fixed Glaze Rule.** Solid fills (rosette pieces, glazed tiles, active sub-nav) use the `--z-glaze-*` tokens, which stay identical in light and dark themes. Only text-level accents switch to the brighter `-on-dark` values.

## Typography

**Display Font:** Alexandria (with Segoe UI, system-ui)
**Body Font:** Readex Pro (with Segoe UI, system-ui)

**Character:** Alexandria is geometric and slightly wide, and carries Arabic at the same voice. Readex Pro is a calm humanist sans with matching Arabic support. The pair keeps French and Arabic in one family of shapes.

### Hierarchy
- **Display** (600, clamp 2.7–5.2rem, 1.02, -0.035em): page h1. The home hero tightens it to 2.6–4.6rem and page heroes to 2.4–4.2rem (max 18ch).
- **Headline** (600, clamp 2–3.35rem, 1.06, -0.03em): section h2, kept under about 15ch on walls.
- **Title** (600, clamp 1.25–1.55rem, 1.2, -0.015em): h3, tile names, trade rows.
- **Lead** (400, clamp 1.1–1.3rem, 1.55): the standfirst under a headline, max 38rem.
- **Body** (400, 1.0625rem, 1.65): running text. `text-wrap: pretty` on paragraphs and `balance` on headings. FAQ answers are capped at 64ch.
- **Label** (Alexandria 600, 0.8–0.95rem): tags, nav links, form labels, buttons (1rem), segment controls. Labels are sentence case and never uppercase-tracked.
- **Figure** (Alexandria 700, 3.2rem, -0.04em, tabular figures): prices. The simulator result scales up to clamp 4–6rem.

### Named Rules
**The Tabular Amount Rule.** Every amount, price or count that can change or be compared uses tabular figures (`.z-num`).

**The Display Carries Arabic Rule.** Arabic headings and lines set in Alexandria 600 in RH grenade, never in a fallback face.

## Layout

The layout uses a Bootstrap container with gutters narrowed to 2.5rem below 992px. Sections run on a fluid vertical rhythm (`section`, or `section-sm` for tighter bands), with a fixed gap below each section head (`head-gap`). Section heads are either a single 46rem column or, from 992px, a split head (1.15fr title / 1fr lead, bottom-aligned).

Composition alternates plaster, deep-plaster bands and cobalt-night walls. Mosaics are CSS grids whose gap and padding both equal the joint (6px) on a grout background, so the gap itself draws the separation. Asymmetry is preferred: the Finance tile spans two rows in the 1.25fr / 1fr apps mosaic. Tab sets (screens, roles) become a 16–17rem left column beside a stage from 992px, and a scrolling or wrapping row below that.

Breakpoints follow Bootstrap: 576, 768, 992 (the main desktop switch) and 1200px (the full nav appears). The header is sticky at 76px and anchors scroll with an equal offset.

## Elevation & Depth

The system has no drop shadows. Depth is tonal and material: a tile is separated from its neighbour by grout, and it reads as glazed through a soft sheen and a thin bevel. Hover gives a 2px upward translate, never a shadow bloom. Walls are flat drenched colour.

### Shadow Vocabulary
- **Bevel** (`inset 0 1px 0 rgba(255,255,255,.32), inset 0 -2px 0 rgba(0,0,0,.1)`; dark: `.12` / `.25`): on every tile, button, chip and active segment. It is an inset edge, not a lift.
- **Grout ring** (`0 0 0 6px var(--z-grout)`): frames a standalone tile (app window, form, simulator) as if it were set in plaster.
- **Hairline grout ring** (`0 0 0 1px var(--z-grout)`, often combined with the bevel): lighter framing for active tabs, the roles panel, the comparison table.
- **Header rule** (`0 1px 0 var(--z-grout)`): the scrolled header and sticky sub-nav.

### Named Rules
**The Grout Not Shadow Rule.** Separation is a grout gap or a grout ring, and nothing else. The `--z-lift` drop shadow defined in the token block is unused and is not part of the system.

**The Sheen Rule.** Glazed surfaces carry a 135° white gradient (20% to 0 by 38%) from the top-left. Buttons add a one-time sheen sweep on hover (0.7s).

## Shapes

Corners are cut sharp: 3px on tiles, buttons, inputs, tags and tabs; 5–6px only on the outer plaster of a mosaic or window, so the frame reads slightly softer than the tiles inside it. The recurring silhouette is the diamond, a square turned 45° with a 1–2px radius. It is used for chips, list bullets, numbered steps, flow tiles, the film play button, the FAQ mark (which turns 180° on open), window "dots" and the footer frieze. Icons and numerals inside a diamond counter-rotate so they stay upright. The rosette is an eight-pointed star wrapped in three crowns of kites, points and arrows.

## Components

### Buttons
Ink tiles that catch light.
- **Shape:** sharp tile corner (3px), min height 3.25rem.
- **Primary:** ink-navy fill, lime-plaster label, Alexandria 600 at 1rem, bevel inset. In dark theme it inverts to a near-white fill with a dark-ground label.
- **Hover / Focus:** rises 2px (0.25s, `cubic-bezier(.16,1,.3,1)`); a diagonal sheen sweeps across once; active returns to rest. Focus uses the global coral ring.
- **Ghost:** transparent with a 1.5px inset ink ring at 30%, which goes full ink plus a 4% ink wash on hover. No sheen.
- **Light:** white fill, cobalt-night label, for use on walls.
- **Sizes:** sm (2.6rem) and lg (3.6rem).
- **Text link:** Alexandria 600 with a 1.5px underline that draws in from the left; the trailing arrow nudges 3px.

### Chips
- **Chip:** a 0.7em diamond in its module glaze with a bevel. It marks an application wherever one is named (nav, price tiles, tabs).
- **Tag:** Alexandria 600 0.8rem in the module glaze on an 11% wash of the same glaze, sharp corner, leading chip.
- **Choice pill (demo form):** plaster fill with a 1.5px grout inset. When checked it takes a 10% module wash with a 1.5px ring in the module glaze.

### Cards / Containers
- **Corner Style:** tile corner (3px) inside a 6px mosaic frame.
- **Background:** glaze-white tile, a module glaze tile (white text, list bullets as 75% white diamonds, a faint outlined polygon motif bleeding off a corner), or a cobalt-night featured tile.
- **Shadow Strategy:** bevel plus grout gap or ring only (see Elevation & Depth).
- **Border:** none; grout does the work.
- **Internal Padding:** fluid clamp 1.75–3rem for feature tiles, 1.75rem × 1.5rem for price tiles.

### Inputs / Fields
- **Style:** min height 3rem, 1.5px grout border, plaster fill, ink text, tile corner. Labels in Alexandria 600 at 0.88rem.
- **Focus:** border turns finance cobalt with a 3px 18% cobalt halo, and the fill lifts to white.
- **Error:** RH grenade border and message at 0.85rem.

### Navigation
- **Header:** sticky, 76px, 92% plaster over the content; once scrolled it becomes solid plaster with a grout hairline. Brand mark is 34px; the wordmark is Alexandria 700, with a widely tracked grenade sub-line.
- **Links:** Alexandria 500 at 0.95rem in slate, tile-corner hover wash (5% ink). The active link turns ink and its module chip scales up 1.2×.
- **Mobile (below 1200px):** a full-screen plaster sheet that slides 8px into place. Links are Alexandria 600 at 1.35rem on grout-ruled rows.
- **Segment control:** grout trough with a 4px gap; the active segment is a white tile with a bevel.
- **Breadcrumbs:** 0.85rem muted, with slash separators at 50% opacity.

### Hero Rosette (signature)
The rosette is an SVG zellige star of 25 pieces: an eight-point centre holding the RFIDIA ring, then crowns of RH kites, CRM points and Finance arrows. Each tessera is lightened or darkened a few percent (`--teinte`) to imitate real glaze variation and sits in a 3.5px plaster-coloured stroke as grout. Pieces arrive scattered and rotated, then settle ring by ring (1.1s each, staggered). The logo ring follows, and a sheen crosses the glaze every 9s. Selecting an application raises its crown 4.5% at full glaze and fades the others to a 16% wash.

### Flow Joint (signature)
On a cobalt-night wall, each step of a cross-module flow is a rotated 2.6rem glaze diamond holding an upright numeral. Steps are linked by a 4px joint that blends one module's glaze into the next through their mix. From 992px a white diamond marker travels along the rail (9s loop) to show where the document is.

### Facts Band (obi)
A full-bleed cobalt-night strip. Its lead block is solid logo coral with a large Alexandria 700 figure, followed by a 70s marquee of facts separated by coral diamonds. The marquee pauses on hover.

### Window Frame
Product screenshots sit in a plaster-chrome window: a 6px grout ring, a deep-plaster bar with grout-coloured diamond "dots" and a centred URL pill. Use at most three per application page.

### List Rows
Trades, FAQ, swaps and facts are rows ruled by 1px grout lines, not cards. On hover, a trade row fills with white and its contents slide 0.75rem. Swaps strike through the "before" line in 55% grenade.

## Do's and Don'ts

### Do:
- **Do** separate tiles with a 6px grout gap (`--z-joint` on a `--z-grout` ground) or frame a lone tile with a 6px grout ring.
- **Do** give every glazed surface the bevel inset and the 135° top-left sheen.
- **Do** colour anything module-specific in that module's glaze, and draw shared data as an oklab mix of the two glazes.
- **Do** use diamonds (squares turned 45°, 1–2px radius) for bullets, chips, step markers and toggles, with upright counter-rotated contents.
- **Do** use `--z-glaze-*` for solid fills so they hold the same value in light and dark themes.
- **Do** set amounts in tabular figures and Arabic lines in Alexandria 600.
- **Do** break long plaster runs with a cobalt-night wall, and switch to wall text, white headings and 10% white grout on it.
- **Do** honour reduced motion: every transition and animation collapses to near zero.

### Don't:
- **Don't** use drop shadows or blurred elevation; depth is grout, bevel and sheen only.
- **Don't** use logo coral outside the facts band and the focus ring.
- **Don't** round corners beyond 3px on tiles or 6px on the outer frame.
- **Don't** put kicker or eyebrow labels above headings, and don't uppercase-track labels.
- **Don't** turn list content (trades, FAQ, facts) into card grids.
- **Don't** use a module glaze for something that does not belong to that module.
- **Don't** show more than three screenshots on one application page.
