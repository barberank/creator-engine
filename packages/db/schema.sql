create table users (
  id uuid primary key,
  confirmed_adult boolean not null default false,
  created_at timestamptz not null default now()
);

create table conversations (
  id uuid primary key,
  user_id uuid not null references users(id),
  character_id text not null,
  created_at timestamptz not null default now()
);

create table messages (
  id uuid primary key,
  conversation_id uuid not null references conversations(id),
  role text not null check (role in ('user', 'assistant', 'operator')),
  content text not null,
  created_at timestamptz not null default now()
);

create table user_memories (
  user_id uuid primary key references users(id),
  memory jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table safety_events (
  id uuid primary key,
  conversation_id uuid references conversations(id),
  category text not null,
  action text not null,
  created_at timestamptz not null default now()
);
