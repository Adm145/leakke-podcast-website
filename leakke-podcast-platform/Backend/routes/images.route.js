const express = require('express')
const route = express.Router();
const { validateSchema } = require('../schema/validate')
const { imageSchema } = require('../schema/image.schema')

const {
  getAllImagesController,
  addImageController,
  updateImageController,
  deleteImageController
} = require('../controllers/images.controller')

route.get('/', getAllImagesController);
route.post('/upload', validateSchema(imageSchema), addImageController);
route.put('/:id', validateSchema(imageSchema), updateImageController);
route.delete('/:id', deleteImageController);

module.exports = route;