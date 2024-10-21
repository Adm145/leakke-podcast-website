const {
  updateDataService,
  addDataService,
  deleteDataService
} = require('../services/he.service')

const getDataController = async (req, res) => {
  res.send(req.t('data'))
}

const addDataController = (req, res) => {
  const newUser = addDataService(req.body)
  return res.send(newUser)
}

const updateDataController = async (req, res) => {
  const { id, username, password } = req.body
  const body = { username, password }
  const updated = updateDataService(id, body);
  return res.send(updated)
}

const deleteDataController = async (req, res) => {
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