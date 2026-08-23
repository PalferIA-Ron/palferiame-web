-- ============================================================
--  palferia.me — Tabla de contactos web
--  Ejecutar en: Supabase → SQL Editor
--  Proyecto: aqaiqmsypbwhgknbbmae (mismo que CRM)
-- ============================================================

create table if not exists web_contacts (
  id         uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  nombre     text not null,
  email      text not null,
  whatsapp   text,
  sector     text,
  mensaje    text,
  fuente     text  -- 'home' | 'about' | 'vertical-academias' | etc.
);

-- Row Level Security
alter table web_contacts enable row level security;

-- Cualquiera puede insertar (formulario público)
create policy "insert_public"
  on web_contacts for insert
  to anon
  with check (true);

-- Solo usuarios autenticados pueden leer (tú desde el CRM)
create policy "select_authenticated"
  on web_contacts for select
  to authenticated
  using (true);
