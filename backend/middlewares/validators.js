// backend/middlewares/validator.js
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
  body('name').trim().isLength({ min: 1 }).withMessage('Name required'),
  body('email').optional().isEmail().withMessage('Invalid email'),
  body('message').trim().isLength({ min: 1 }).withMessage('Message required')
]);

// product query: supports search, page, limit, featured
const productQueryRules = validate([
  query('search').optional().isString().isLength({ min: 1 }),
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 200 }),
  query('featured').optional().isIn(['0','1','true','false'])
]);

module.exports = { contactRules, productQueryRules };
