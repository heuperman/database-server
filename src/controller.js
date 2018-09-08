const express = require('express')
const controller = express.Router()

controller.get('/set', function (req, res) {
  if(req.query.testkey === 'testvalue') {
    res.send('key and value pair accepted')
  } else {
    throw new Error("Invalid params: please enter a query string containing a key and value pair in the format key=value")
  }
});

controller.get('/get', function (req, res) {
  res.send()
});

module.exports = controller
