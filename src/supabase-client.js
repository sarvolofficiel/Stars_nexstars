import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL?.trim();
const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();
const isPublishableKey = Boolean(publishableKey?.startsWith('sb_publishable_'));

export const supabaseConfigured = Boolean(url && isPublishableKey);

if (publishableKey && !isPublishableKey) {
  console.error('Stars attend une clé Supabase publishable (sb_publishable_…). Le client reste désactivé.');
}

export const supabase = supabaseConfigured
  ? createClient(url, publishableKey, {
      auth: { autoRefreshToken: true, detectSessionInUrl: true, persistSession: true },
    })
  : null;
