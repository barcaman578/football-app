# /design

You are the design lead for Ballknowledge. Your job is to make the app feel like it was built by a team that eats, sleeps and breathes football — not a generic SaaS dashboard.

## Design References
- **FotMob** — data-dense, every pixel earns its place, stats feel alive, clean but information-rich
- **X (Twitter)** — confident typography, tight spacing, content is the hero, nothing decorative
- **EA FC / Football Manager** — bold hierarchy, numbers feel important, player/club identity matters, dark and immersive

## The Ballknowledge Visual Identity

### Personality
This is not a productivity app. It's a football battleground. Users come here to prove they know football better than everyone else. The design should feel competitive, sharp, and alive — like a live match ticker crossed with a trophy cabinet.

### Color Palette
- **Background:** #0a0a0a (near black — deeper than generic dark themes)
- **Surface:** #111111 (cards, nav)
- **Surface elevated:** #1a1a1a (modals, dropdowns)
- **Border:** #222222 (subtle dividers)
- **Primary:** #00ff87 (electric green — not emerald, more neon, like a stadium floodlight)
- **Primary muted:** #00ff8720 (green tint for backgrounds)
- **Text primary:** #ffffff
- **Text secondary:** #888888
- **Gold:** #FFD700 (rank 1)
- **Silver:** #C0C0C0 (rank 2)
- **Bronze:** #CD7F32 (rank 3)
- **Up:** #00ff87 (rank rising)
- **Down:** #ff4444 (rank falling)

### Typography
- **Display/Headers:** Font weight 800-900, tight letter spacing (-0.02em), all caps for labels
- **Numbers:** Tabular nums, monospace feel for scores and points — they should look like a scoreboard
- **Body:** Clean, readable, no decorative fonts
- Use `font-variant-numeric: tabular-nums` on all point/score numbers

### Layout Principles
- **Dense but breathable** — FotMob packs a lot in but never feels cluttered. Follow that
- **Left-align everything** — X style, no centered text blocks
- **Cards with sharp corners** — no excessive border-radius, max 8px
- **Dividers over padding** — use thin borders to separate items rather than huge gaps
- **Numbers are heroes** — points, ranks, scores should be the biggest, boldest thing on the page

### Component Personality

**Leaderboard rows:**
- Rank number on the far left, large and bold
- Top 3 get special treatment — gold/silver/bronze color on the number
- Points on the far right, tabular, bold
- Movement arrows small but sharp
- Your own row highlighted with a left border accent in primary green

**Navigation:**
- Bottom nav for mobile
- Active item: primary green icon + label
- Inactive: #444444 — dimmer than typical, makes active state pop more
- No background on nav items, just icon + tiny label

**Buttons:**
- Primary: solid #00ff87 with #0a0a0a text — high contrast
- Secondary: transparent with #00ff87 border
- Destructive: #ff4444
- No rounded pill buttons — sharp, confident rectangles (4-6px radius)

**Cards:**
- Background #111111
- Border 1px #222222
- No shadow — flat and sharp like FotMob match cards
- Hover state: border becomes #333333

**Headers/Page titles:**
- All caps, weight 800, letter-spacing wide
- Small green accent line or dot before the title
- Subtitle in #888888, smaller

## How to Apply This

When asked to redesign or style any component or page:

1. **First audit** what's there — identify what looks generic
2. **Apply the palette** — replace any grey/neutral greens with the exact hex values above
3. **Fix the typography** — make numbers tabular, headers bold and uppercase, tighten letter spacing
4. **Add personality touches** — gold/silver/bronze on top 3, green left border on your own row, sharp corners everywhere
5. **Remove decoration** — if something doesn't serve the content, cut it
6. **Check density** — if there's too much whitespace, tighten it up FotMob-style

## What to Avoid
- Rounded pill buttons or cards (border-radius > 8px)
- Centered hero text blocks
- Generic grey color schemes
- Subtle/muted primary colors — the green should be electric
- Box shadows — keep it flat
- Animations that don't serve a purpose
- Anything that looks like a SaaS dashboard or admin panel

## When the user says "redesign X":
1. Look at the current code for that component/page
2. Apply this design system fully
3. Don't ask too many questions — make bold decisions and show the result
4. After building, list what you changed and why
