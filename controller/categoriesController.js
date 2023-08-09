const categoryService = require('../services/categories.service')
const categoryServiceInstance = new categoryService()

const getAllCategories = async (req, res) => {
  try {
    let categories = await categoryServiceInstance.getAllCategories()
    if (categories) {
      return res.status(200).json(categories)
    } else {
      const error = {
        code: 404,
        message: 'Categories not found',
      }
      throw error
    }
  } catch (error) {
    return res.status(404).json(error)
  }
}
const getCategory = async (req, res) => {
  let response = await categoryServiceInstance.getCategory(
    req.params.categoryId
  )
  return res.status(200).json(response)
}
const addCategory = async (req, res) => {
  try {
    let response = await categoryServiceInstance.addCategory(req.body)
    console.log(response)
    if (!response.code)
      return res.status(200).json({ message: 'Deletion Successsful' })
    else throw response
  } catch (error) {
    return res.status(500).json(error)
  }
}
const deleteCategory = async (req, res) => {
  try {
    let response = categoryServiceInstance.deleteCategory(
      req.params.categoryIdId
    )
    if (!response.code)
      return res.status(200).json({ message: 'Deletion Successsful' })
    else throw response
  } catch (error) {
    return res.status(500).json(error)
  }
}
module.exports = { getAllCategories, getCategory, addCategory, deleteCategory }
