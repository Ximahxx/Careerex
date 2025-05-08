const mongoose = require("mongoose");
const productModel = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: String, default: "" },
  quantity: { type: Number, default: 0 },
  inStock: { type: Boolean, default: false },
});

const Product = new mongoose.model("Product", productSchemat);

module.exports = Product;
