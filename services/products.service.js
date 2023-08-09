const Products = require('../models/product.model')
const Categories = require('../models/category.model')
class productService {
  getAllProducts = async () => {
    const products = await Products.find({})
    return products
  }
  getProduct = async (id) => {
    try {
      const product = await Products.findOne({ product_id: id })

      if (!product) {
        const error = {
          code: 404,
          message: 'No product found with matching id,',
        }
        throw error
      }
      return product
    } catch (error) {
      return error
    }
  }
  modifyProduct = async (modifyProductData) => {
    const { _id, category_id } = modifyProductData
    const check = await Categories.findOne({ category_id })
    if (!check) {
      const error = {
        code: 404,
        message: 'Category does not exist',
      }
      return error
    }
    const updatedData = {
      ...modifyProductData,
      category_id: check['category_id'],
    }
    const updatedProduct = await Products.findByIdAndUpdate(_id, updatedData, {
      new: true,
      runValidators: true,
    })
    if (updatedProduct) {
      return updatedProduct
    } else {
      const error = {
        code: 400,
        message: 'Failed to modify',
      }
      return error
    }
  }
  deleteProduct = async (product_id) => {
    try {
      const { _id } = await Products.findOne({ product_id })
      const deletedProduct = await Products.findByIdAndDelete(_id)
      if (!deletedProduct) {
        return deletedProduct
      } else {
        throw { code: 400, message: 'Product not found' }
      }
    } catch (error) {
      return error
    }
  }
  addProduct = async (productBody) => {
    try {
      const id = productBody.product_id
      const existing = await Products.findOne({
        product_id: id,
      })
      if (existing) {
        throw { code: 400, message: 'Already Exists in DB' }
      }
      const product = await Products.create(productBody)
      return product
    } catch (error) {
      return error
    }
  }
}
module.exports = productService
