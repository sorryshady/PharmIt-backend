const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
  category_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
})

const Categories = mongoose.model('Category', categorySchema)
module.exports = Categories
