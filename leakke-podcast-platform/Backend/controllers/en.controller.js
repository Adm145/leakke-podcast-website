const {
  updateDataService,
  addDataService,
  deleteDataService
} = require('../services/en.service');


const getDataController = (req, res) => {
  res.send({ message: req.t('name') })
}

const addDataController = (req, res) => {
  const newUser = addDataService(req.body)
  return res.send(newUser)
}

const updateDataController = (req, res) => {
  const { id, username, password } = req.body
  const body = { username, password }
  const updated = updateDataService(id, body);
  return res.send(updated)
}

const deleteDataController = (req, res) => {
  const { id } = req.body
  const deleted = deleteDataService(id);
  return res.send(deleted)
}

module.exports = {
  getDataController,
  addDataController,
  updateDataController,
  deleteDataController
}