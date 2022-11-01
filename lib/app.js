const express = require('express');

const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./controllers/signs.js'));

// app.use('/', (req, res) => {
//   res.send('hello world!');
// });

module.exports = app;
