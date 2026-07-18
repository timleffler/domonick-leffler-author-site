-- Run this entire file once in Supabase: SQL Editor → New query → Run.
create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.site_sections (
  id text primary key check (id in ('book', 'author')),
  hero_eyebrow text not null,
  hero_title text not null,
  hero_intro text not null,
  heading text not null,
  body text not null,
  extra jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id)
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  title text not null,
  excerpt text not null,
  category text not null,
  published_at date,
  read_minutes integer not null default 4 check (read_minutes between 1 and 120),
  content text not null,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  author_id uuid references auth.users(id)
);

alter table public.admin_users enable row level security;
alter table public.site_sections enable row level security;
alter table public.posts enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists(select 1 from public.admin_users where user_id = auth.uid());
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

drop policy if exists "Admin can read own membership" on public.admin_users;
create policy "Admin can read own membership" on public.admin_users for select to authenticated using (user_id = auth.uid());

drop policy if exists "Everyone can read site sections" on public.site_sections;
create policy "Everyone can read site sections" on public.site_sections for select using (true);
drop policy if exists "Admins can insert site sections" on public.site_sections;
create policy "Admins can insert site sections" on public.site_sections for insert to authenticated with check (public.is_admin());
drop policy if exists "Admins can update site sections" on public.site_sections;
create policy "Admins can update site sections" on public.site_sections for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "Published posts are public" on public.posts;
create policy "Published posts are public" on public.posts for select using (status = 'published' or public.is_admin());
drop policy if exists "Admins can create posts" on public.posts;
create policy "Admins can create posts" on public.posts for insert to authenticated with check (public.is_admin() and author_id = auth.uid());
drop policy if exists "Admins can update posts" on public.posts;
create policy "Admins can update posts" on public.posts for update to authenticated using (public.is_admin()) with check (public.is_admin());

insert into public.site_sections (id, hero_eyebrow, hero_title, hero_intro, heading, body, extra)
values
('book', 'The Mada Mariner series', 'One pendant. One hidden prophecy.', 'A magical academy, an ancient secret, and a destiny that refuses to stay buried.', 'Mada Mariner and the Hidden Prophecy', E'In a world where magic shapes destiny, Mada Mariner is about to learn her future was never truly hers to begin with. When she enters the legendary Velrendor Academy, she expects rules, training, and the challenge of surviving a school built for the magically gifted. What she doesn\'t expect is the way the halls seem to recognize her—or the strange pull of the pendant she\'s worn her entire life without understanding why.\n\nAs hidden truths begin to unravel, Mada is drawn into a prophecy that reaches far beyond the classroom walls. With forces closing in and her past beginning to fracture, Mada must discover who she truly is before the academy decides for her.', '{"publication_date":"May 8, 2026","kindle_pages":189,"paperback_pages":208,"amazon_url":"https://www.amazon.com/dp/B0GXXDYDF2","hardcopy_note":"Currently in production. Availability details coming soon."}'::jsonb),
('author', 'Behind the worlds', 'Meet Domonick.', 'Magic-minded mischief-maker, lifelong storyteller, and creator of the Mada Mariner series.', 'Wonder is non-negotiable.', E'Domonick Leffler is a magic-minded mischief-maker in their 30s who believes every great adventure should come with a prophecy, a pendant, and at least one unexpected plot twist. When they\'re not spinning tales of wizard academies, ancient legacies, and morally questionable heroes, they\'re probably rewatching a favorite cartoon—or imagining how their characters would derail a quiet afternoon in a donut shop.\n\nBorn with Athetoid Cerebral Palsy, Domonick has faced physical and mental challenges, but those experiences have never defined the limits of their imagination. Storytelling, world-building, and creative play have always been places of freedom—spaces where curiosity wins, rules are bendable, and wonder is non-negotiable.\n\nFor Domonick, meaning comes from recognizing the past, acknowledging the present, and looking toward the future. It\'s a philosophy summed up by a line they hold close to heart: “Keep moving forward.”\n\nMada Mariner and the Hidden Prophecy is Domonick\'s debut novel and a love letter to underdogs, spell-casters, and anyone who has ever wondered if they were destined for something bigger.', '{}'::jsonb)
on conflict (id) do nothing;

insert into public.posts (slug, title, excerpt, category, published_at, read_minutes, content, status)
values ('welcome-to-velmara', 'Welcome to Velmara', 'A first look at the magic, mysteries, and mischief behind the Mada Mariner series.', 'Worldbuilding', '2026-05-01', 4, E'Every story starts with a door. Sometimes it is a literal one. Sometimes it is a strange pendant, an impossible prophecy, or the feeling that a hallway already knows your name.\n\nVelmara began with that feeling: a world just beyond sight, waiting for the right character to find the way in. Mada Mariner is that character, although she might not agree that she is ready for everything waiting on the other side.\n\nI wanted Velrendor Academy to feel both wondrous and unsettling—a place where magic is taught, but where the oldest lessons may have been intentionally forgotten. Its corridors hold history. Its rules hold secrets. And beneath all of it, something ancient is beginning to stir.\n\nThis space will be where I share more about the world of Mada Mariner, the process behind the books, and the strange sparks that become stories. Thank you for stepping through the door.\n\nKeep moving forward,\nDomonick', 'published')
on conflict (slug) do nothing;

-- After creating DJ in Authentication → Users, replace the email and run this line:
-- insert into public.admin_users (user_id, email) select id, email from auth.users where email = 'dj@example.com';
