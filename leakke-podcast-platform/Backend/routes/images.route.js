const express = require('express')
const route = express.Router();

const {
  getAllImagesController,
  addImageController,
  updateImageController,
  deleteImageController
} = require('../controllers/images.controller')

route.get('/', getAllImagesController);
route.post('/upload', addImageController);
route.put('/:id', updateImageController);
route.delete('/:id', deleteImageController);

module.exports = route;