const jwt = require('jsonwebtoken')

const secretKey = process.env.JWT_SECRET_KEY

module.exports = {
  sign: (data) => {
    const token = jwt.sign(data, secretKey, { expiresIn: '100000h' })
    return token;
  },
  verify: (token) => {
    try {
      const data = jwt.verify(token, secretKey);
      return data;
    } catch (err) {
      return null;
    }
  }
}