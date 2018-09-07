const server = require('../server')

const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp);

const expect = chai.expect

afterEach(() => {
  server.close()
})

describe('/', () => {
  it('should be accessible', (done) => {
    chai.request('http://localhost:4000')
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          done()
      })
   })
})
