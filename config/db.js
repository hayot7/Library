const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose
      .connect(process.env.MONGO_URL) // ✅ to‘g‘risi shu
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.log("Connection error:", err.message));
  } catch (error) {
    console.log("Try-catch error:", error.message);
  }
}

module.exports = connectDB;
