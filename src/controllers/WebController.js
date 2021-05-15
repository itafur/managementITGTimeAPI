const express = require('express')
const morgan = require('morgan')
const app = express()
const router = express.Router()

app.use(morgan('combined'))
app.use('/', require('../routes/Default'))
app.use('/account', require('../routes/User'))

module.exports = app