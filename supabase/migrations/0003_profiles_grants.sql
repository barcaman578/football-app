-- RLS policies only take effect if the role also has the underlying
-- table privilege. Without these grants, all queries to profiles
-- fail with "permission denied for table profiles".
grant select on public.profiles to anon, authenticated;
grant insert, update on public.profiles to authenticated;
