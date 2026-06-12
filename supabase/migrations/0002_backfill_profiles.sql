-- One-time backfill: create profile rows for users who signed up
-- before the on_auth_user_created trigger existed.
insert into public.profiles (id, username)
select id, 'user_' || substr(id::text, 1, 8)
from auth.users
where id not in (select id from public.profiles);
