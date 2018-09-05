const server = require('../server')

const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp);

const expect = chai.expect

describe('/', () => {
  it('should be accessible', (done) => {
    chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          done()
      })
   })
})
