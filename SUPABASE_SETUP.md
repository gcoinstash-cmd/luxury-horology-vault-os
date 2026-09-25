# Supabase Setup Guide — AURA HOROLOGY OS

Follow these 3 quick steps to deploy your live backend:

1. **Create Supabase Project**:
   - Go to [supabase.com](https://supabase.com) and create a project.
2. **Execute Database Schema**:
   - Open **SQL Editor** in Supabase.
   - Paste and execute `supabase/schema.sql`.
   - Run `supabase/seed.sql` to populate timepieces and caliber specs.
3. **Connect Frontend**:
   - Add `.env` in root:
     ```env
     VITE_SUPABASE_URL=https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY=your-anon-key
     ```
   - Run `npm run dev` to launch!
