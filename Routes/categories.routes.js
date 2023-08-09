const {
  getAllCategories,
  getCategory,
  addCategory,
  deleteCategory,
} = require('../controller/categoriesController')

const router = require('express').Router()

router.get('/', getAllCategories)
router.get('/:categoryId', getCategory)
router.post('/', addCategory)
router.delete('/:categoryId', deleteCategory)

module.exports = router
