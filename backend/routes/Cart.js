const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// ✅ ADD TO CART
router.post("/", async (req, res) => {
  try {
    const { userId, productId, size, quantity } = req.body;

    // 🔥 Prevent duplicate items
    const existing = await Cart.findOne({
      userId,
      productId,
      size,
      savedForLater: false,
    });

    if (existing) {
      existing.quantity += 1;
      await existing.save();
    } else {
      const item = new Cart({
        userId,
        productId,
        size,
        quantity,
      });

      await item.save();
    }

    res.json({ message: "Added to cart" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// ✅ GET CART
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const cartItems = await Cart.find({
      userId,
      savedForLater: false,
    }).populate("productId");

    const savedItems = await Cart.find({
      userId,
      savedForLater: true,
    }).populate("productId");

    res.json({ cartItems, savedItems });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// ✅ SAVE FOR LATER
router.put("/save/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;

    await Cart.findOneAndUpdate(
      { userId, productId },
      { savedForLater: true }
    );

    res.json({ message: "Saved for later" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ MOVE TO CART
router.put("/move-to-cart/:userId/:productId", async (req, res) => {
  try {
    const { userId, productId } = req.params;

    await Cart.findOneAndUpdate(
      { userId, productId },
      { savedForLater: false }
    );

    res.json({ message: "Moved to cart" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// ✅ SAVE DIRECT (from product page)
router.post("/save-direct", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const item = new Cart({
      userId,
      productId,
      savedForLater: true,
    });

    await item.save();

    res.json({ message: "Saved directly" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;