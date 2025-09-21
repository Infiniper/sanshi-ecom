// const { createClient } = require('@supabase/supabase-js');
// const { Pool } = require('pg');

// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY); 
// // IMPORTANT: use SERVICE_ROLE on the server only (never in frontend)

// const pool = new Pool({
//   connectionString: process.env.DB_URL, // Supabase Postgres connection string
//   ssl: { rejectUnauthorized: false }    // Required by many hosted Postgres (Supabase)
// });

// module.exports = { supabase, pool };




// backend/utils/db.js
require('dotenv').config(); // safe to call multiple times
const { createClient } = require('@supabase/supabase-js');
const { Pool } = require('pg');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const DB_URL = process.env.DB_URL || process.env.DATABASE_URL;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.warn('⚠️  Missing SUPABASE env vars. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
}

if (!DB_URL) {
  console.warn('⚠️  Missing DB_URL / DATABASE_URL. Set your Postgres connection string.');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

// PG pool: keep rejectUnauthorized:false if hosted Postgres requires it
const pool = new Pool({
  connectionString: DB_URL,
  ssl: { rejectUnauthorized: false }
});

// optional quick connection test (uncomment while debugging locally)
// (async () => {
//   try {
//     const client = await pool.connect();
//     await client.query('SELECT 1');
//     client.release();
//     console.log('✅ Postgres connection ok');
//   } catch (err) {
//     console.error('❌ Postgres connection error:', err.message);
//   }
// })();

module.exports = { supabase, pool };
