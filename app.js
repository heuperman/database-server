const express = require('express')
const app = express()
const controller = require('./src/controller')

app.use('/', controller)

module.exports = app
