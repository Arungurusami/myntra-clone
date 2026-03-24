const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load env variables
dotenv.config();

// App init
const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// ================= ROUTES =================
const userrouter = require("./routes/Userroutes");
const categoryrouter = require("./routes/Categoryroutes");
const productrouter = require("./routes/Productroutes");
const Bagroutes = require("./routes/Bagroutes");
const Wishlistroutes = require("./routes/Wishlistroutes");
const OrderRoutes = require("./routes/OrderRoutes");
const transactionRoutes = require("./routes/Transaction");
const recommendationRoute = require("./routes/recommendationRoute");
const productRoute = require("./routes/productRoute");

// Routes
const cartRoutes = require("./routes/Cart");
app.use("/cart", cartRoutes);


// Root route
app.get("/", (req, res) => {
  res.send("✅ Myntra backend is working");
});

// API routes
app.use("/api", transactionRoutes);
app.use("/user", userrouter);
app.use("/category", categoryrouter);
app.use("/product", productrouter);
app.use("/product", productRoute);
app.use("/bag", Bagroutes);
app.use("/wishlist", Wishlistroutes);
app.use("/order", OrderRoutes);
app.use("/recommend", recommendationRoute);

// ================= MONGODB CONNECTION =================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });