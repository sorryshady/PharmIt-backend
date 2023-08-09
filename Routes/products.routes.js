const {
  getAllProducts,
  getProduct,
  modifyProduct,
  deleteProduct,
  addProduct
} = require('../controller/productsController')
const isValid = require('../validations/productId.validation')

const router = require('express').Router()

router.get('/', getAllProducts)
router.get('/:productId', isValid, getProduct)
router.post('/', addProduct)
router.put('/:productId', isValid, modifyProduct)
router.delete('/:productId', isValid, deleteProduct)

module.exports = router
