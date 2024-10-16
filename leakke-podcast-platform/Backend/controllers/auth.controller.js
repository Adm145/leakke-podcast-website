const { loginService, profileEditService } = require('../services/auth.service')


const loginController = async (req, res) => {
  const { email, password } = req.body
  await loginService(email, password, res)
}

const profileEditController = async (req, res) => { }


module.exports = {
  loginController,
  profileEditController
}