# /new-page

Create a new Next.js page for Ballknowledge.

## Instructions

Ask the user:
1. What is the page called and what is its URL path? (e.g. `/leaderboard`, `/clubs/[id]`)
2. What is the main purpose of this page?
3. Does it need to be protected (logged in users only)?
4. What data does it need to display?

Then create the page file in `/app/` following these rules:
- Use Next.js App Router structure
- JavaScript only, no TypeScript
- Use server components by default — only add `'use client'` if the page needs interactivity or hooks
- If protected, check Supabase session and redirect to `/login` if not authenticated
- Fetch data server-side where possible
- Keep the page file lean — move complex UI into `/components/`
- Add a comment at the top with the page purpose

## Example Output Structure

```jsx
// app/leaderboard/page.jsx
// Global leaderboard — shows all users ranked by total points

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import LeaderboardTable from '@/components/LeaderboardTable'

export default async function LeaderboardPage() {
  const supabase = createServerComponentClient({ cookies })
  
  const { data: rankings } = await supabase
    .from('profiles')
    .select('*')
    .order('points', { ascending: false })
    .limit(100)

  return (
    <main>
      <LeaderboardTable rankings={rankings} />
    </main>
  )
}
```
