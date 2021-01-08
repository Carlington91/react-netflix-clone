const express = require('express');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
app.use(express.json({ limit: '2mb' }));

if (process.env.NODE_ENV !== 'production') {
  app.use(require('morgan')('dev'));
  app.use(require('cors')());
}

//autoload routes
fs.readdirSync('./routes').map((router) => {
  const route = router.split('.')[0];
  app.use('/api/v1/' + route, require('./routes/' + router));
});

// app.use('/api/v1/movies', require('./routes/movies'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
