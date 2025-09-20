module.exports = (err, req, res, next) => {
  console.error('[API ERROR]', err);
  const code = err.status || 500;
  res.status(code).json({ error: err.message || 'Internal Server Error' });
};
