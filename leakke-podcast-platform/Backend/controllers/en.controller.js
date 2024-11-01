const {
  updateDataService,
  addDataService,
  deleteDataService
} = require('../services/en.service');
const { dataNotFoundError, generalError } = require('../utils/error');


const getDataController = (req, res) => {
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

const updateDataController = (req, res) => {
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

const deleteDataController = (req, res) => {
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