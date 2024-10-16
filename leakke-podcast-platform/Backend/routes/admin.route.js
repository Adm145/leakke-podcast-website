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
  getCredentialsController,
  updateCredentialsController,
  addCredentialsController,
  deleteCredentialsController
} = require('../controllers/credentials.controller');

const {
  getWorkController,
  updateWorkController,
  addWorkController,
  deleteWorkController
} = require('../controllers/work.controller');


// bio
route.get('/bio', getBioController);
route.put('/bio', validateSchema(bioSchema), updateBioController);

// credentials
route.get('/credentials', getCredentialsController);
route.post('/credentials', validateSchema(credentialsSchema), addCredentialsController);
route.put('/credentials', validateSchema(credentialsSchema), updateCredentialsController);
route.delete('/credentials', deleteCredentialsController);

// work
route.get('/work', getWorkController);
route.post('/work', validateSchema(workSchema), addWorkController);
route.put('/work', validateSchema(workSchema), updateWorkController);
route.delete('/work', deleteWorkController);

module.exports = route;