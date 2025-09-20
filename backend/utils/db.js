const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY); 
// IMPORTANT: use SERVICE_ROLE on the server only (never in frontend)

const pool = new Pool({
  connectionString: process.env.DB_URL, // Supabase Postgres connection string
  ssl: { rejectUnauthorized: false }    // Required by many hosted Postgres (Supabase)
});

module.exports = { supabase, pool };
