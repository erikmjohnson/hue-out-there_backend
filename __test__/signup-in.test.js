'use strict';

const server = require('../src/app.js').server;
const supergoose = require('./supergoose');
const jwt = require('jsonwebtoken');
const mockRequest = supergoose.server(server);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Testing /signin and /signup', () => {
    let user = {username: 'username', password: 'password'};

    let encodeToken;
    let id;

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

test('/signin', () => {
    return mockRequest.post('/signin')
        .auth(user.username, user.password)
        .then(() => {
            let token = jwt.verify(encodeToken, process.env.SECRET || 'test');
            expect(token.id).toEqual(id);
        })
    })
});
