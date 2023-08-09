const Users = require('../models/user.model')

class UserService {
  createUser = async (userBody) => {
    try {
      const email = userBody.email
      const existingUser = await Users.findOne({ email })
      if (existingUser) {
        const error = {
          code: 200,
          message: 'Email already taken',
        }
        throw error
      } else {
        const user = await Users.create(userBody)
        return user
      }
    } catch (error) {
      return error
    }
  }
  loginUser = async (email, password) => {
    try {
      const user = await Users.findOne({ email })
      if (!user || !(await user.isPasswordMatch(password))) {
        const error = {
          code: 401,
          message: 'Incorrect email or password',
        }
        throw error
      }
      return user
    } catch (error) {
      return error
    }
  }
}

module.exports = UserService
