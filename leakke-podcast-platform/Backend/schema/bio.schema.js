const schema = {
  type: "object",
  properties: {
    fullName: { type: 'string' },
    description: { type: 'string' },
    email: { type: 'string', format: 'email' },
    phone: { type: 'string' },
    location: { type: 'string' },
    dateOfBirth: { type: 'string', format: 'date' },
  },
  required: [fullName, email, phone, location, dateOfBirth],
  additionalProperties: false
}

module.exports = {
  bioSchema: schema
}