const express = require('express')
const route = express.Router();
const { validateSchema } = require('../schema/validate');
const { bioSchema } = require('../schema/bio.schema');
const { credentialsSchema } = require('../schema/credentials.schema');
const { workSchema } = require('../schema/work.schema');

const {
  getBioController,
  updateBioController
} = require('../controllers/bio.controller');

const {
  getAllCredentialsController,
  updateCredentialsController,
  addCredentialsController,
  deleteCredentialsController
} = require('../controllers/credentials.controller');

const {
  getAllWorkController,
  updateWorkController,
  addWorkController,
  deleteWorkController
} = require('../controllers/work.controller');


// bio
route.get('/bio', getBioController);
route.put('/bio', validateSchema(bioSchema), updateBioController);

// credentials
route.get('/credentials', getAllCredentialsController);
route.post('/credentials', validateSchema(credentialsSchema), addCredentialsController);
route.put('/credentials/:id', validateSchema(credentialsSchema), updateCredentialsController);
route.delete('/credentials/:id', deleteCredentialsController);

// work
route.get('/work', getAllWorkController);
route.post('/work', validateSchema(workSchema), addWorkController);
route.put('/work/:id', validateSchema(workSchema), updateWorkController);
route.delete('/work/:id', deleteWorkController);

module.exports = route;