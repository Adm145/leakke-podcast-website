const schema = {
  type: "object",
  properties: {
    institute: { type: 'string' },
    timePeriod: { type: 'string' },
    typeOfEducation: { type: 'string' },
    subject: { type: 'string' },
    gradeAverage: { type: 'number' },
    desc: { type: 'string' },
    completionStatus: { type: 'string', enum: ['completed', 'ongoing'] },
  },
  required: ['institute', 'timePeriod', 'typeOfEducation', 'subject'],
  additionalProperties: false
}

module.exports = {
  credentialsSchema: schema
}