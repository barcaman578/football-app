# /component

Create a new React component for Ballknowledge.

## Instructions

Ask the user:
1. What is the component called? (PascalCase)
2. What does it do in one sentence?
3. Does it need data from Supabase? If yes, what data?
4. Does it need any props?

Then create the component file in `/components/` following these rules:
- JavaScript only, no TypeScript
- Use functional components with hooks
- Keep it focused — one job only
- If it fetches data, use async/await with Supabase client from `/lib/supabase.js`
- Add a brief comment at the top explaining what the component does
- Export as default

## Example Output Structure

```jsx
// LeaderboardCard.jsx
// Displays a single user's rank, name, and points on the leaderboard

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function LeaderboardCard({ userId }) {
  // component logic here
}
```
