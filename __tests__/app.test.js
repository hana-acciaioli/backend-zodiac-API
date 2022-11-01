const request = require('supertest');
const app = require('../lib/app');

const { signs } = require('../lib/signs-data.js');

describe('signs routes', () => {
  it('/signs should return a list of zodiac signs with id', async () => {
    const res = await request(app).get('/zodiac');
    const expected = signs.map((sign) => {
      return { id: sign.id, name: sign.name };
    });
    expect(res.body).toEqual(expected);
  });
});
