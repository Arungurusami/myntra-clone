const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  userId: String,

  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },

  quantity: {
    type: Number,
    default: 1,
  },

  size: String,

  savedForLater: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Cart", cartSchema);