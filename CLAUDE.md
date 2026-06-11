# Ballknowledge

A football fan app that turns fan opinions, predictions, and knowledge into a competitive game. Think football Twitter — but interactive, social, and objective. Users earn points for correct predictions and get ranked on a global leaderboard proving who actually knows football.

## Stack
- **Frontend:** Next.js (JavaScript, no TypeScript)
- **Database & Auth:** Supabase
- **Hosting:** Vercel
- **Mobile (later):** Expo / React Native
- **Football Data:** API-Football (or SportMonks)
- **Version Control:** GitHub (2 collaborators)

## Core Features
- **Leaderboard** — the main game; points based on predictions and football knowledge
- **Predictions** — predict match outcomes, scorelines, top scorers etc.
- **Fan Sections** — club-specific zones where fans vote and debate
- **Public Club Opinion** — aggregated fan sentiment on every club, visible to all
- **User Profiles** — link Twitter/X, add friends, see stats
- **Social** — follow friends, see their predictions, compare rankings

## Folder Structure
```
/app               → Next.js app router pages
/components        → Reusable UI components
/lib               → Supabase client, API helpers, utils
/hooks             → Custom React hooks
/styles            → Global styles
/public            → Static assets
```

## Coding Rules
- JavaScript only — no TypeScript
- Use Next.js App Router (not pages/)
- Supabase for all database operations and auth
- Component files: PascalCase (e.g. LeaderboardCard.jsx)
- Helper/util files: camelCase (e.g. calculatePoints.js)
- Always use async/await, never .then()
- Keep components small and focused — one job per component
- Fetch data server-side where possible using Next.js server components
- Never hardcode API keys — always use .env.local

## Supabase Rules
- Always use Row Level Security (RLS) on every table
- Use Supabase Auth for all user authentication
- Real-time subscriptions for leaderboard updates

## Collaboration Rules (2 devs)
- Never push directly to main
- Branch naming: feature/feature-name or fix/bug-name
- Always pull before starting work
- CLAUDE.md is the source of truth — both devs keep it updated

## Design
- Dark theme — football is a night sport
- Bold, high contrast — leaderboard numbers should feel like a scoreboard
- Mobile-first — most users will be on phone eventually
- Keep it fast — no bloated UI libraries, keep it lean
