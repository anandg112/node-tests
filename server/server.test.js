const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          })
        })
        .end(done);
    });
  });
  describe('GET /Users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Anand',
            age: 30
          })
        })
        .end(done);
    });
  });
});