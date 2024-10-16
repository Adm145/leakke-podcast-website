const schema = {
  type: "object",
  properties: {
    institute: { type: 'string' },

  },
  required: ['institute'],
  additionalProperties: false
}

module.exports = {
  workSchema: schema
}