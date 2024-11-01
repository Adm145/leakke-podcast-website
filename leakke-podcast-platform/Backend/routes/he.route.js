const express = require('express')
const route = express.Router();
const {
  getDataController,
  addDataController,
  updateDataController,
  deleteDataController
} = require('../controllers/he.controller')

route.get('', getDataController);
route.post('', addDataController);
route.put('', updateDataController);
route.delete('', deleteDataController);

module.exports = route;