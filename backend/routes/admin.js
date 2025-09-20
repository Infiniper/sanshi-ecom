const express = require("express");
const router = express.Router();

// Admin login page (placeholder)
router.get("/login", (req, res) => {
  res.render("login", { title: "Admin Login" });
});

// Admin dashboard (placeholder)
router.get("/", (req, res) => {
  res.render("dashboard", { title: "Admin Dashboard" });
});

module.exports = router;
