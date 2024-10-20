const DB = require('../db');
const db = new DB('en');

const addDataService = (newUser) => {
  return db.addNew(newUser);
}

const updateDataService = async (id, body) => {
  return db.updateById(id, body);
}

const deleteDataService = async = (id) => {
  return db.removeById(id);
}


module.exports = {
  addDataService,
  updateDataService,
  deleteDataService
}