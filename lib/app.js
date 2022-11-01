const express = require('express');

const app = express();

app.use('/zodiac', require('./controllers/signs.js'));

// app.use('/', (req, res) => {
//   res.send('hello world!');
// });

module.exports = app;
