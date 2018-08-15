const should = require('should')
const request = require('supertest')
const server = require('../../../app')

describe('controllers', function() {

  describe('notes', function() {

    describe('GET /notes', function() {

      it('should return all notes - array of objects', function(done) {

        request(server)
          .get('/notes')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err)

            res.body.should.be.an.Array()
            done()
          })
      })

      it('should return string notes and which are not null', function(done) {
        request(server)
          .get('/notes')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err)

            res.body.forEach(item => {
              item.should.be.an.Object()
              item.should.have.property('text').which.is.a.String()
              item.text.should.not.equal(null)
            })

            done()
          })
      })

      it('should accept a json in req body and respond with the text containing the saved note', function(done) {
        const requestParam = { "note": "text note" }
        request(server)
          .post('/notes') // to API
          .query({ name: 'Scott'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .send(requestParam) // from input
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err)

            res.body.should.eql(`saved new entry: ${requestParam.note}`) // DB saved

            done()
          })
      })

    })

  })

})
