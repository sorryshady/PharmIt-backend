const Categories = require('../models/category.model')

class CategoryService {
  getAllCategories = async () => {
    const categories = await Categories.find({})
    return categories
  }
  getCategory = async (id) => {
    try {
      const category = await Categories.findOne({ category_id: id })

      if (!category) {
        const error = {
          code: 404,
          message: 'No category found with matching id,',
        }
        throw error
      }
      return category
    } catch (error) {
      return error
    }
  }
  addCategory = async (categoryBody) => {
    try {
      const id = categoryBody.category_id
      const existing = await Categories.findOne({
        category_id: id,
      })
      if (existing) {
        throw { code: 400, message: 'Already Exists in DB' }
      }
      const category = await Categories.create(categoryBody)
      return category
    } catch (error) {
      return error
    }
  }
  deleteCategory = async (category_id) => {
    try {
      const { _id } = await Categories.findOne({ category_id })
      const deletedCategory = await Categories.findByIdAndDelete(_id)
      if (!deletedCategory) {
        return deletedCategory
      } else {
        throw { code: 400, message: 'Category not found' }
      }
    } catch (error) {
      return error
    }
  }
}
module.exports = CategoryService
