// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  image: String,
  name: String,
  price: Number,
  rating: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;