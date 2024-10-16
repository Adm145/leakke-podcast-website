require('dotenv').config()
require('./utils/mongo')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3500

app.use(cors({
  origin: '*'
}))

app.use(express.json())

app.use((req, res, next) => {
  res.error = (err) => {
    const [status, msg] = err;
    res.status(status).send(msg);
  }
  next();
})

app.use((error, req, res, next) => {
  res.status(500).send(error)
})

app.use('/images', require('./routes/images.route'))
app.use('/auth', require('./routes/auth.route'))
app.use('/admin', require('./routes/admin.route'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))