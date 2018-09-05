const app = require('./app')

const server = app.listen(
  4000, () => console.log('Data API server listening on port 4000')
)

module.exports = server
