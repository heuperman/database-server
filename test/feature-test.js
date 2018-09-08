const server = require('../server')

const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp);

const expect = chai.expect

const host = 'http://localhost:4000'

beforeEach(() => {
  server.listen(4000)
})

afterEach(() => {
  server.close()
})

describe('/set', () => {
  it('should accept a key and value pair', (done) => {
    chai.request(host)
        .get('/set?testkey=testvalue')
        .end((err, res) => {
          expect(res).to.have.status(200)
          expect(res.text).to.equal('key and value pair accepted')
          done()
        })
  })
})

describe('/set', () => {
  it('should return an error when passed invalid query string', (done) => {
    chai.request(host)
        .get('/set?invaliddata')
        .end((err, res) => {
          expect(res).to.have.status(500)
          done()
        })
  })
})

describe('/get', () => {
  it('should return a previously saved value when passed correct key', (done) => {
    chai.request(host)
        .get('/set')
        .query({hello: 'world'})
        .end((err, res) => {
          chai.request(host)
              .get('/get')
              .query({key: 'hello'})
              .end((err, res) => {
                expect(res).to.have.status(200)
                expect(res).to.be.json
                expect(res.body).to.equal('world')
                done()
              })
        })
  })
})
