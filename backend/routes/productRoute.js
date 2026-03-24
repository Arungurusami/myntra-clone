const express = require("express");
const router = express.Router();
const BrowsingHistory = require("../models/BrowsingHistory");

router.post("/track-view", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    if (!userId) return res.status(200).json({ message: "Guest user" });

    await BrowsingHistory.create({ userId, productId });

    res.json({ message: "View tracked" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;