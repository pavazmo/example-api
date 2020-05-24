const request = require('supertest');
const app = require('../app');

describe('Test the user path', () => {
  test('It should response the POST method', done => {
    request(app)
      .post('/user')
      .send({name: 'John', email: 'john@gmail.com', surname: 'Travolta', phone: '647890474', postalCode: '45686', password: 'SaturdayNight'})
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.statusCode).toBe(201);
        done();
    });
  });
});

describe('Test the login path', () => {
    test('It should response a token', done => {
      request(app)
        .post('/login')
        .send({ email: 'john@gmail.com', password: 'SaturdayNight'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .then(response => {
          console.log(response.res.text)
          expect(response.statusCode).toBe(200);
          done();
      });
    });
  });