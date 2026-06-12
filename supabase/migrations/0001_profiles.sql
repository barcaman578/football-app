-- Profiles table: one row per auth user
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  display_name text,
  bio text,
  avatar_url text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Anyone can view any profile (public profile pages)
create policy "Profiles are viewable by everyone"
  on public.profiles for select
  using (true);

-- Users can update only their own profile
create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Users can insert only their own profile
create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Automatically create a profile row when a new user signs up
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, 'user_' || substr(new.id::text, 1, 8));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
