const { body, query, validationResult } = require('express-validator');

const validate = (rules) => [
  ...rules,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: 'Validation failed', details: errors.array() });
    next();
  }
];

const contactRules = validate([
  body('name').trim().isLength({ min: 1 }),
  body('email').isEmail(),
  body('message').trim().isLength({ min: 1 })
]);

const orderRules = validate([
  body('customer').isObject(),
  body('customer.name').trim().isLength({ min: 2 }),
  body('customer.phone').trim().isLength({ min: 7 }),
  body('customer.email').optional().isEmail(),
  body('customer.address').trim().isLength({ min: 5 }),
  body('items').isArray({ min: 1 }),
  body('items.*.product_id').isInt({ min: 1 }),
  body('items.*.quantity').isInt({ min: 1 })
]);

const productQueryRules = validate([
  query('category').optional().isString().isLength({ min: 1 }) // slug
]);

module.exports = { contactRules, orderRules, productQueryRules };
