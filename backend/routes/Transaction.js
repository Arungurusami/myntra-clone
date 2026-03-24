const express = require("express");
const mongoose = require("mongoose");
const Transaction = require("../models/Transaction");

const router = express.Router();

router.get("/transactions/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    // ✅ Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid User ID" });
    }

    const transactions = await Transaction.find({
      userId: userId,
    })
      .populate("orderId")
      .sort({ createdAt: -1 });

    res.json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;