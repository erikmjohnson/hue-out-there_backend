'use strict';

const server = require('../src/app.js').server;
const supergoose = require('./supergoose');
const jwt = require('jsonwebtoken');
const auth = require('../src/middleware.js');
const mockRequest = supergoose.server(server);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Testing 404 and error middle', () => {
    let user = {username: 'username', password: 'password'};

    let encodeToken;
    let id;
    let errorObject = {status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/Password'};

    test('/signup', () => {
        return mockRequest.post('/signup')
            .send(user)
            .then(results => {
                let token = jwt.verify(results.text, process.env.SECRET || 'test');
                id = token.id;
                encodeToken = results.text;
                expect(id).toBeTruthy();
            })
    });

  test('401 testing', () => {
    let req = {
      headers: {
        authorization: 'Basic eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ',
      },
    };

    let res = {};
    let next = jest.fn();
    let middleware = auth;

    return middleware (req, res, next)
      .then(() => {
        expect(next).toHaveBeenCalledWith(errorObject);
      })
  });

  test('404 testing', () => {
    return mockRequest.post('/signn')
      .send(user)
      .then(result => {
        expect(result.text).toBe("{\"error\":\"Resource Not Found\"}");
        expect(result.statusCode).toEqual(404);
      });
  });

  test('500 testing', () => {
    return mockRequest.post('/signin')
      .send({username: 'usernam', password: 'password'})
      .then(result => {
        expect(result.text).toBe("{\"error\":{}}");
        expect(result.statusCode).toEqual(500);
      });
  });
});
