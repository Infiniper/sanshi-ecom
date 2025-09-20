// frontend/src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Get the environment variables from Vite's import.meta.env object
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Use a named export for the client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);