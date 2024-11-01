const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const newId = uuidv4();
class DB {
  constructor(dir) {
    if (dir === 'gallery') {
      this.path = path.join(__dirname, `locales/gallery.images.json`);
    } else {
      this.path = path.join(__dirname, `locales/${dir}/translation.json`);
    }
  }

  get = () => {
    const parsed = JSON.parse(fs.readFileSync(this.path, 'utf-8'));
    return parsed;
  }

  getById = (id) => {
    const parsed = this.get();
    const item = parsed.find(i => i.id === id);
    return item;
  }

  save = (parsed) => {
    fs.writeFileSync(this.path, JSON.stringify(parsed, null, 2));
  }

  addNew = (item, group) => {
    const parsed = this.get();
    const data = parsed[0].data;
    if (Array.isArray(data[group])) {
      data[group].push({
        ...item,
        id: newId
      })
    } else {
      Object.assign(data[group], item);
    }
    this.save(parsed);
  }

  updateData = (id, body, group) => {
    const parsed = this.get();
    const data = parsed[0].data;
    if (Array.isArray(data[group])) {
      const itemIndex = data[group].findIndex(item => item.id === id);
      data[group][itemIndex] = { ...data[group][itemIndex], ...body, id: id };
    } else {
      data[group] = { ...data[group], ...body };
    }
    this.save(parsed);
  }

  removeData = (id, key, group) => {
    const parsed = this.get();
    const data = parsed[0].data;
    if (Array.isArray(data[group])) {
      const itemIndex = data[group].findIndex(item => item.id === id);
      data[group].splice(itemIndex, 1);
    } else {
      delete data[group][key];
    }
    this.save(parsed);
  }
}

module.exports = DB;