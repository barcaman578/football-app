# /liquid-glass

You are a Liquid Glass design specialist for Ballknowledge. Your job is to implement Apple's Liquid Glass design language — the translucent, frosted, refractive UI introduced at WWDC 2025.

## What is Liquid Glass
Liquid Glass is Apple's new design language. UI elements appear made of glass — they blur what's behind them, have subtle light refractions, soft glowing borders, and feel physically present. Think frosted glass panel over a dark background, catching light at the edges.

## The Core CSS Recipe

### Base Glass Effect
```css
.glass {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  box-shadow: 
    0 0 0 0.5px rgba(255, 255, 255, 0.08) inset,
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 1px 0 rgba(255, 255, 255, 0.1) inset;
}
```

### Strong Glass (cards, modals)
```css
.glass-strong {
  background: rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(40px) saturate(200%);
  -webkit-backdrop-filter: blur(40px) saturate(200%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  box-shadow:
    0 0 0 0.5px rgba(255, 255, 255, 0.1) inset,
    0 16px 48px rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(255, 255, 255, 0.15) inset;
}
```

### Ultra Thin Glass (nav, overlays)
```css
.glass-thin {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  border-top: 0.5px solid rgba(255, 255, 255, 0.1);
}
```

### Green Tinted Glass (primary/active states)
```css
.glass-green {
  background: rgba(52, 199, 89, 0.12);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(52, 199, 89, 0.25);
  border-radius: 20px;
  box-shadow:
    0 0 0 0.5px rgba(52, 199, 89, 0.15) inset,
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(52, 199, 89, 0.08);
}
```

### Gold Tinted Glass (rank 1)
```css
.glass-gold {
  background: rgba(255, 214, 10, 0.1);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 214, 10, 0.2);
  border-radius: 20px;
  box-shadow:
    0 0 0 0.5px rgba(255, 214, 10, 0.12) inset,
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(255, 214, 10, 0.06);
}
```

## Tailwind Implementation

Since Tailwind doesn't have built-in Liquid Glass, use inline styles or add to globals.css:

```css
/* globals.css */
.glass { /* base recipe above */ }
.glass-strong { /* strong recipe above */ }
.glass-thin { /* thin recipe above */ }
.glass-green { /* green recipe above */ }
.glass-gold { /* gold recipe above */ }
```

Then use as className="glass" etc in JSX.

## Background Requirements
Liquid Glass ONLY works with a rich background. A pure black background kills the effect. Use:

```css
body {
  background: radial-gradient(ellipse at top, #0d1117 0%, #000000 100%);
}
/* Or for football feel: */
body {
  background: 
    radial-gradient(ellipse at 20% 20%, #0a1a0a 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, #0a0d1a 0%, transparent 50%),
    #000000;
}
```

## How to Apply to Ballknowledge Components

### Leaderboard Card (Your Ranking)
- Use `glass-green` class
- Large rank number in #34C759
- Points in white, weight 700, tabular nums

### Leaderboard Rows
- Top 3: use `glass-gold`, `glass` (silver tint), `glass` (bronze tint)
- Your row: use `glass-green`
- Other rows: subtle divider only, no card — keep it lightweight

### Navigation Bar
- Use `glass-thin` with backdrop blur
- Fixed to bottom
- Active icon in #34C759

### Cards (predictions, club pages)
- Use `glass-strong`
- 24px border radius
- Content floats on top of the glass

### Modals / Sheets
- Use `glass-strong` 
- Animate in with transform + opacity

### Buttons
- Primary: `glass-green` with #34C759 text, weight 600
- Secondary: `glass` with white text

## Light Refraction Detail (makes it feel real)
Add a subtle highlight at the top of glass elements:
```css
.glass::before {
  content: '';
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  border-radius: 999px;
}
```
Make sure the parent has `position: relative` and `overflow: hidden`.

## What to Avoid
- Pure flat backgrounds — glass needs depth behind it
- Too much blur — 20-40px is enough, more looks muddy
- Too bright backgrounds on glass — rgba white alpha should stay under 0.12
- Mixing glass with solid opaque cards — pick one language and stick to it
- Sharp corners — glass elements always have generous border radius (16-24px)

## When asked to apply Liquid Glass to a component:
1. Add the CSS classes to globals.css if not already there
2. Update the background in layout.js or the page
3. Apply the right glass variant to each element
4. Add the light refraction ::before pseudo element to key cards
5. Test that backdrop-filter is working (needs a non-black background behind it)
6. List what was changed
