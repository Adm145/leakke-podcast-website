const schema = {
  type: "object",
  properties: {
    title: { type: 'string' },
    url: { type: 'string' },
    desc: { type: 'string' },
    location: { type: 'string' },
  },
  required: ['title', 'url', 'desc'],
  additionalProperties: false
}

module.exports = {
  imageSchema: schema
}