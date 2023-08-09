const userService = require('../services/user.service')
const userServiceInstance = new userService()

const register = async (req, res) => {
  // console.log(req.body)
  const response = await userServiceInstance.createUser(req.body)
  return res.status(200).json(response)
}
const login = async (req, res) => {
  const { email, password } = req.body
  const user = await userServiceInstance.loginUser(email, password)
  return res.status(200).json(user)
}

module.exports = { register, login }
