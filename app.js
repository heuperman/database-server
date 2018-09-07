const express = require('express')
const app = express()

app.get('/set',(req, res) => res.send('key and value pair accepted'))

module.exports = app
