const request = require('supertest');
const app = require('../app');

describe('Test the user create path', () => {
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
          expect(response.statusCode).toBe(200);
          done();
      });
    });
});

describe('Test the user delete/modify path', () => {
    test('It should response the PUT method', done => {
      request(app)
        .put('/user')
        .query({ email: 'john@gmail.com' })
        .send({name: 'Johnatan'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .then(response => {
          expect(response.statusCode).toBe(201);
          done();
      });
    });
    test('It should response the DELETE method', done => {
        request(app)
          .delete('/user')
          .query({ email: 'john@gmail.com' })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
      });
});

