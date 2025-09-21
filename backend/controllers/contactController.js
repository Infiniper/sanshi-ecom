// backend/controllers/contactController.js
const { supabase } = require('../utils/db');

exports.submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const payload = { name, email: email || null, message };

    const { data, error } = await supabase
      .from('contacts')
      .insert([payload])
      .select('id,created_at')
      .single();

    if (error) throw error;
    res.status(201).json({ id: data.id, created_at: data.created_at });
  } catch (e) { next(e); }
};
