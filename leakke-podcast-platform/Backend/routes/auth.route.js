const express = require('express')
const route = express.Router();
const { loginController, profileEditController } = require('../controllers/auth.controller')
const { validateSchema } = require('../schema/validate');
const { authLoginSchema } = require('../schema/auth.login.schema')


route.post('/login', validateSchema(authLoginSchema), loginController);

module.exports = route;