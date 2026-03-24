const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const Wishlist = require("../models/Wishlist");
const BrowsingHistory = require("../models/BrowsingHistory");

router.get("/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;

    const currentProduct = await Product.findById(productId);

    if (!currentProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    // 1️⃣ Get user's browsing history
    const history = await BrowsingHistory.find({ userId })
      .sort({ createdAt: -1 })
      .limit(10);

    const viewedProductIds = history.map((h) => h.productId);

    // 2️⃣ Get wishlist items
    const wishlistItems = await Wishlist.find({ userId });
    const wishlistProductIds = wishlistItems.map((w) => w.productId);

    // 3️⃣ Intelligent filter logic
    const recommendations = await Product.find({
      _id: { $ne: productId }, // exclude current
      $or: [
        { category: currentProduct.category },
        { brand: currentProduct.brand },
        { _id: { $in: viewedProductIds } },
        { _id: { $in: wishlistProductIds } },
      ],
    })
      .limit(10)
      .lean();

    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;