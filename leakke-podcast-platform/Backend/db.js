const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const newId = uuidv4();
class DB {
  constructor(lang) {
    this.lang = lang;
    this.path = path.join(__dirname, `locales/${lang}/translation.json`);
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

  addNew = (item) => {
    const parsed = this.get();
    parsed.push({
      ...item,
      id: newId
    });
    this.save(parsed);
  }

  updateById = (id, body) => {
    const parsed = this.get();
    const itemIndex = parsed.findIndex(i => i.id === id);
    parsed[itemIndex] = { ...parsed[itemIndex], ...body, id: id }
    this.save(parsed);
  }

  removeById = (id) => {
    const parsed = this.get();
    const index = parsed.findIndex(i => i.id === id);
    parsed.splice(index, 1)
    this.save(parsed);
  }
}

module.exports = DB; 