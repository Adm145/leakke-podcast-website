require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3500
const { errHandler } = require('./utils/error')

//i18next config
const i18next = require('i18next')
const middleware = require('i18next-http-middleware')
const { i18nextInit } = require('./utils/i18next.config')
i18nextInit();
app.use(middleware.handle(i18next));


app.use(cors({
  origin: '*'
}))
app.use(express.json())
app.use(errHandler)


app.use('/he', require('./routes/he.route'))
app.use('/en', require('./routes/en.route'))
// app.use('/images', require('./routes/images.route'))
// app.use('/auth', require('./routes/auth.route'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))