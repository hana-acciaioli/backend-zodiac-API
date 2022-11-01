const { Router } = require('express');
const { signs, horoscopes } = require('../signs-data.js');

module.exports = Router()
  .get('/horoscopes/:sign', (req, res) => {
    let match;
    for (const horoscope of horoscopes) {
      if (horoscope.sign === req.params.sign) match = horoscope;
    }
    return res.json(match);
  })

  .get('/zodiac/:id', (req, res) => {
    let match;
    for (const sign of signs) {
      if (sign.id === req.params.id) {
        match = sign;
      }
    }
    return res.json(match);
  })
  .get('/zodiac', (req, res) => {
    const filteredData = [];
    for (const sign of signs) {
      filteredData.push({ id: sign.id, name: sign.name });
    }
    res.json(filteredData);
  });
