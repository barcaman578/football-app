# /supabase-table

Scaffold a new Supabase table for Ballknowledge.

## Instructions

Ask the user:
1. What is the table called? (snake_case)
2. What does this table store?
3. What columns does it need?

Then generate:

### 1. SQL Migration
A full SQL snippet to create the table with:
- `id` as uuid primary key with `gen_random_uuid()`
- `created_at` timestamp with default `now()`
- All requested columns with appropriate types
- Row Level Security (RLS) enabled
- Basic RLS policies (select for all, insert/update/delete for authenticated owner)

### 2. Supabase JS Helper
A helper function in `/lib/` for the most common operations on this table (fetch all, fetch by id, insert, update).

## Example Output

```sql
create table predictions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  user_id uuid references auth.users(id),
  match_id text not null,
  predicted_home_score int,
  predicted_away_score int
);

alter table predictions enable row level security;

create policy "Users can view all predictions"
  on predictions for select using (true);

create policy "Users can insert own predictions"
  on predictions for insert with check (auth.uid() = user_id);
```
