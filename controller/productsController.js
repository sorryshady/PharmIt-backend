const productService = require('../services/products.service')
const productServiceInstance = new productService()

const getAllProducts = async (req, res) => {
  try {
    let products = await productServiceInstance.getAllProducts()
    if (products) {
      return res.status(200).json(products)
    } else {
      const error = {
        code: 404,
        message: 'Products not found',
      }
      throw error
    }
  } catch (error) {
    return res.status(404).json(error)
  }
}
const getProduct = async (req, res) => {
  let response = await productServiceInstance.getProduct(req.params.productId)
  return res.status(200).json(response)
}
const modifyProduct = async (req, res) => {
  try {
    let response = await productServiceInstance.modifyProduct(req.body)
    if (response.code) throw response
    return res.status(200).json(response)
  } catch (error) {
    return res.status(404).json(error)
  }
}
const deleteProduct = async (req, res) => {
  try {
    let response = productServiceInstance.deleteProduct(req.params.productId)
    if (!response.code)
      return res.status(200).json({ message: 'Deletion Successsful' })
    else throw response
  } catch (error) {
    return res.status(500).json(error)
  }
}
const addProduct = async(req, res) => {
  try{
    let response = productServiceInstance.addProduct(req.body)
    if (!response.code)
      return res.status(200).json({ message: 'Deletion Successsful' })
    else throw response
  }catch(error){
    return res.status(500).json(error)
  }
}

module.exports = { getAllProducts, getProduct, modifyProduct, deleteProduct, addProduct }
