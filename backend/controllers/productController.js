// backend/controllers/productController.js
const { supabase } = require('../utils/db');

// Helper for pagination
const parsePagination = (pageStr, limitStr) => {
  const page = parseInt(pageStr, 10) || 1;
  const limit = Math.min(Math.max(parseInt(limitStr, 10) || 20, 1), 200);
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  return { page, limit, from, to };
};

// GET /api/products?search=&page=&limit=&featured=true
exports.listProducts = async (req, res, next) => {
  try {
    const { search, page, limit, featured } = req.query;
    const { from, to } = parsePagination(page, limit);

    // Build base query selecting product fields + nested images & links
    // Using PostgREST nested select: product_images(...) and product_links(...)
    let query = supabase
      .from('products')
      .select(`
        id,
        name,
        short_description,
        price,
        currency,
        sku,
        in_stock,
        is_featured,
        created_at,
        product_images ( url, alt_text, position ),
        product_links ( platform, url, label )
      `)
      .order('is_featured', { ascending: false })
      .order('created_at', { ascending: false })
      .range(from, to);

    // Search by name or short_description if provided
    if (search) {
      const term = `%${search}%`;
      // ilike works case-insensitive
      query = query.or(`name.ilike.${term},short_description.ilike.${term}`);
    }

    // Filter by featured flag
    if (featured === 'true' || featured === '1') {
      query = query.eq('is_featured', true);
    }

    const { data, error, count } = await query;

    if (error) throw error;

    // Map items to include a 'image_url' (first image) and 'links' array
    const products = (data || []).map((p) => {
      const imgs = p.product_images || [];
      const links = p.product_links || [];
      const firstImage = imgs.length > 0 ? imgs.sort((a,b) => (a.position || 0) - (b.position || 0))[0] : null;
      return {
        id: p.id,
        name: p.name,
        short_description: p.short_description,
        price: p.price,
        currency: p.currency,
        sku: p.sku,
        in_stock: p.in_stock,
        is_featured: p.is_featured,
        created_at: p.created_at,
        image_url: firstImage ? firstImage.url : null,
        image_alt: firstImage ? firstImage.alt_text : null,
        links: links.map(l => ({ platform: l.platform, url: l.url, label: l.label }))
      };
    });

    res.json({
      products,
      meta: {
        page: parseInt(page, 10) || 1,
        limit: parseInt(limit, 10) || 20,
        returned: products.length
      }
    });
  } catch (e) {
    next(e);
  }
};

// GET /api/products/:id
exports.getProduct = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (!id) return res.status(400).json({ error: 'Invalid product id' });

    const { data, error } = await supabase
      .from('products')
      .select(`
        id,
        name,
        short_description,
        long_description,
        price,
        currency,
        sku,
        in_stock,
        is_featured,
        inventory_count,
        created_at,
        updated_at,
        product_images ( url, alt_text, position ),
        product_links ( platform, url, label )
      `)
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116' || error.message && error.message.includes('No rows found')) {
        return res.status(404).json({ error: 'Product not found' });
      }
      throw error;
    }

    // Normalize response
    const imgs = data.product_images || [];
    const links = data.product_links || [];

    const product = {
      id: data.id,
      name: data.name,
      short_description: data.short_description,
      long_description: data.long_description,
      price: data.price,
      currency: data.currency,
      sku: data.sku,
      in_stock: data.in_stock,
      is_featured: data.is_featured,
      inventory_count: data.inventory_count,
      created_at: data.created_at,
      updated_at: data.updated_at,
      images: imgs.sort((a,b) => (a.position || 0) - (b.position || 0)),
      links: links.map(l => ({ platform: l.platform, url: l.url, label: l.label }))
    };

    res.json({ product });
  } catch (e) {
    next(e);
  }
};
