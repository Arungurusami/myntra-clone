const express = require("express");
const mongoose = require("mongoose");
const Bag = require("../models/Bag");
const Order = require("../models/Order");
const Transaction = require("../models/Transaction");

const router = express.Router(); // ✅ THIS WAS MISSING

/* =============================
   CREATE ORDER + TRANSACTION
============================= */
router.post("/create/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    const bag = await Bag.find({ userId }).populate("productId");

    if (bag.length === 0) {
      return res.status(400).json({ message: "No items in bag" });
    }

    const orderItems = bag.map((item) => ({
      productId: item.productId._id,
      size: item.size,
      price: item.productId.price,
      quantity: item.quantity,
    }));

    const total = orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const newOrder = await Order.create({
      userId,
      date: new Date().toISOString(),
      status: "Processing",
      items: orderItems,
      total,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
    });

    // ✅ AUTO CREATE TRANSACTION
    await Transaction.create({
      userId,
      orderId: newOrder._id,
      amount: total,
      mode: req.body.paymentMethod,
      status: "Success",
    });

    await Bag.deleteMany({ userId });

    res.status(201).json({
      message: "Order placed successfully",
      order: newOrder,
    });
  } catch (error) {
    console.log("Order Error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

/* =============================
   GET USER ORDERS
============================= */
router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId })
      .populate("items.productId")
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router; // ✅ ALSO IMPORTANT