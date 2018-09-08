const express = require('express')
const controller = express.Router()

controller.get('/set', function (req, res) {
  this.data = {}
  const query = req.query
if(Object.keys(query).length === 1 && Object.values(query).join() != '') {
    const key = Object.keys(query)
    const value = Object.values(query).join()
    this.data[key] = value
    res.send('key and value pair accepted')
  } else {
    throw new Error("Invalid query format: please enter a query string containing a key and value pair in the format key=value")
  }
});

controller.get('/get', function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(this.data[req.query.key]))
});

module.exports = controller
