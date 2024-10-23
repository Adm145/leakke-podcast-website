const express = require('express')
const route = express.Router({ mergeParams: true });
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