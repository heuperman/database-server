const express = require('express')
const app = express()

app.get('/set',(req, res) => {
  if(req.query.testkey === 'testvalue') {
    res.send('key and value pair accepted')
  } else {
    throw new Error()
  }
})

module.exports = app
