'use strict';

const supertest = require('supertest');
const {server} = require('../src/app');
const mockClient = supertest(server);

describe('testing bridge functionality', () => {

  test('testing single light off', () => {
    return mockClient.get('/light/1/off')
        .then(result => {
          expect(result.text).toEqual('Light 1 Is Off');
        })
  });

  test('testing single light on', () => {
    return mockClient.get('/light/1/on')
        .then(result => {
          expect(result.text).toEqual('Light 1 Is On');
        })
  });

  test('testing group light on', () => {
    return mockClient.get('/lightgroup/on')
        .then(result => {
          expect(result.text).toEqual('All lights are on');
        })
  });

  test('testing group light off', () => {
    return mockClient.get('/lightgroup/off')
      .then(result => {
        expect(result.text).toEqual('All lights are off');
      })
});
});