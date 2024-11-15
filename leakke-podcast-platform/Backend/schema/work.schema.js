const schema = {
  type: "object",
  properties: {
    institute: { type: 'string' },
    timePeriod: { type: 'string' },
    desc: { type: 'string' },
    location: { type: 'string' },
    isVoluteering: { type: 'boolean' }
  },
  required: ['institute'],
  additionalProperties: false
}

module.exports = {
  workSchema: schema
}