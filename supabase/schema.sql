-- ============================================================================
-- AURA HOROLOGY — High Complication Inspection & Provenance Vault OS
-- Supabase PostgreSQL Schema with Row Level Security (RLS)
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. TIMEPIECES
CREATE TABLE IF NOT EXISTS timepieces (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  brand_name TEXT NOT NULL,
  model_name TEXT NOT NULL,
  reference_number TEXT NOT NULL UNIQUE,
  case_material TEXT NOT NULL,
  asking_price_usd NUMERIC(12,2) NOT NULL,
  is_vault_secured BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CALIBER SPECS
CREATE TABLE IF NOT EXISTS caliber_specs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  timepiece_id UUID REFERENCES timepieces(id) ON DELETE CASCADE,
  movement_designation TEXT NOT NULL,
  frequency_vph TEXT NOT NULL,
  power_reserve_hours INTEGER NOT NULL,
  jewel_count INTEGER NOT NULL,
  accuracy_rate TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PROVENANCE RECORDS
CREATE TABLE IF NOT EXISTS provenance_records (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  timepiece_id UUID REFERENCES timepieces(id) ON DELETE CASCADE,
  origin_country TEXT NOT NULL DEFAULT 'Switzerland',
  manufacture_year INTEGER NOT NULL,
  certificate_type TEXT NOT NULL,
  blockchain_nfc_hash TEXT,
  service_atelier TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. ESCROW INQUIRIES & HOLDS
CREATE TABLE IF NOT EXISTS escrow_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  timepiece_id UUID REFERENCES timepieces(id) ON DELETE SET NULL,
  collector_name TEXT NOT NULL,
  collector_email TEXT NOT NULL,
  armored_delivery_type TEXT NOT NULL CHECK (armored_delivery_type IN ('brinks_vault_air', 'geneva_private_salon', 'zurich_freeport')),
  escrow_amount NUMERIC(12,2) NOT NULL,
  escrow_status TEXT NOT NULL DEFAULT 'pending_wire' CHECK (escrow_status IN ('pending_wire', 'escrow_locked', 'inspected', 'released')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE timepieces ENABLE ROW LEVEL SECURITY;
ALTER TABLE caliber_specs ENABLE ROW LEVEL SECURITY;
ALTER TABLE provenance_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE escrow_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public timepieces view" ON timepieces FOR SELECT USING (true);
CREATE POLICY "Public specs view" ON caliber_specs FOR SELECT USING (true);
CREATE POLICY "Public provenance view" ON provenance_records FOR SELECT USING (true);
CREATE POLICY "Public escrow insert" ON escrow_inquiries FOR INSERT WITH CHECK (true);
