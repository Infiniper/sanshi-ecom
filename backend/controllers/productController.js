const { supabase } = require('../utils/db');

// GET /api/products?category=slug
exports.listProducts = async (req, res, next) => {
  try {
    const { category } = req.query;
    let categoryId = null;

    // If category slug is provided, resolve it to id
    if (category) {
      const { data: cat, error: catErr } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', category)
        .single();

      if (catErr) throw catErr;
      if (!cat) return res.json({ products: [] });
      categoryId = cat.id;
    }

    // Fetch products
    let query = supabase
      .from('products')
      .select('id, category_id, name, description, price, sku, in_stock, created_at')
      .order('name', { ascending: true });

    if (categoryId) query = query.eq('category_id', categoryId);

    const { data: products, error } = await query;
    if (error) throw error;

    // Fetch first image for each product
    const productIds = products.map(p => p.id);
    let images = [];
    if (productIds.length > 0) {
      const { data: imgData, error: imgErr } = await supabase
        .from('images')
        .select('product_id, url, alt_text')
        .in('product_id', productIds);

      if (imgErr) throw imgErr;
      images = imgData;
    }

    // Attach first image (if exists) to each product
    const enriched = products.map(p => {
      const img = images.find(i => i.product_id === p.id);
      return { ...p, image_url: img ? img.url : null, image_alt: img ? img.alt_text : null };
    });

    res.json({ products: enriched });
  } catch (e) {
    next(e);
  }
};
