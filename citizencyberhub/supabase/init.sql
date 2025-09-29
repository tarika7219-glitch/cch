-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Cases table
create table if not exists cases (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text not null,
  issue_type text not null,
  description text not null,
  attachments jsonb,
  status text default 'pending' check (status in ('pending', 'approved', 'declined')),
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Add RLS (Row Level Security)
alter table cases enable row level security;

-- Policies
-- Allow anyone to insert a case
create policy "Allow public case submissions"
on cases for insert
with check (true);

-- Allow authenticated users with admin role to read all cases
create policy "Allow admins to read all cases"
on cases for select
using (auth.role() = 'admin');

-- Allow admins to update cases
create policy "Allow admins to update cases"
on cases for update
using (auth.role() = 'admin');

-- Donations table
create table if not exists donations (
  id uuid default uuid_generate_v4() primary key,
  amount numeric not null,
  currency text default 'INR',
  donor_name text,
  donor_email text,
  message text,
  payment_id text,
  payment_status text default 'pending',
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Add RLS
alter table donations enable row level security;

-- Policies
-- Allow anyone to insert a donation
create policy "Allow public donation submissions"
on donations for insert
with check (true);

-- Allow admins to read all donations
create policy "Allow admins to read all donations"
on donations for select
using (auth.role() = 'admin');

-- Function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Trigger for cases table
create trigger update_cases_updated_at
  before update on cases
  for each row
  execute function update_updated_at_column();