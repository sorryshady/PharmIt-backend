const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  product_id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category_id: {
    type: Number,
    required: true,
  },
})

const Products = mongoose.model('Product', productSchema)
module.exports = Products
