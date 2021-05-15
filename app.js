const express = require('express')
const cors = require('cors')
const app = express()

// Configurations
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Router Group
app.use('/', require('./src/controllers/WebController'))

module.exports = app
