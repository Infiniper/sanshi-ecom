const { supabase } = require('../utils/db');

exports.listCategories = async (req, res, next) => {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('id,name,slug,description,image_url,availability')
      .order('name', { ascending: true });
    if (error) throw error;
    res.json({ categories: data });
  } catch (e) { next(e); }
};
