const DB = require('../db');
const db = new DB('en');

const addDataService = (item, group) => {
  return db.addNew(item, group);
}

const updateDataService = (id, body, group) => {
  return db.updateData(id, body, group);

}

const deleteDataService = (id, key, group) => {
  return db.removeData(id, key, group);
}


module.exports = {
  addDataService,
  updateDataService,
  deleteDataService
}