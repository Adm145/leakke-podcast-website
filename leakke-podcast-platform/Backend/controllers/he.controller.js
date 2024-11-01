const {
  updateDataService,
  addDataService,
  deleteDataService
} = require('../services/he.service');
const { dataNotFoundError, generalError } = require('../utils/error');


const getDataController = async (req, res) => {
  try {
    res.send(req.t('data'))
  } catch (err) {
    res.error(dataNotFoundError);
  }
}

const addDataController = (req, res) => {
  const { group } = req.body
  delete req.body.group
  try {
    const newEntry = addDataService(req.body, group);
    return res.send(newEntry)
  } catch (err) {
    res.error(generalError);
  }
}

const updateDataController = async (req, res) => {
  const { group, id } = req.body
  delete req.body.group
  delete req.body.id
  try {
    const updated = updateDataService(id, req.body, group);
    return res.send(updated)
  } catch (err) {
    res.error(generalError);
  }
}

const deleteDataController = async (req, res) => {
  const { group, id, key } = req.body
  try {
    const deleted = deleteDataService(id, key, group);
    return res.send(deleted)
  } catch (err) {
    res.error(generalError);
  }
}

module.exports = {
  getDataController,
  addDataController,
  updateDataController,
  deleteDataController
}