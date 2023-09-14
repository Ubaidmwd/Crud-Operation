const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the product name please"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Enter the product description please"],
  },
  price: {
    type: Number,
    required: [true, "Enter the product price please"],
    maxlength: [8, "Price cannot exceed 8 characters"],
  },
});

module.exports = mongoose.model("Product", productSchema);
