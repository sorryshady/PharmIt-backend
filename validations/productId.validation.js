const isValid = async (req, res, next) => {
  const id = req.params.productId
  if (isNaN(id)) {
    const error = {
      code: 400,
      message: 'productId should be a numberic value',
    }
    return res.status(error.code).json(error)
  }
  next()
}

module.exports = isValid
