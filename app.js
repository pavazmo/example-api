'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongoCON = require('./config/config').CON;
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');
const app = express();

//db
mongoose.connection.openUri( mongoCON, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err, res) => { 
  if (err) throw err;
  console.log('Mongo port 27017: \x1b[32m%s\x1b[0m', 'online');
})

// App
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', userRoutes);
app.use('/login', loginRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('Express server port 3000: \x1b[32m%s\x1b[0m', 'online');
})

module.exports = app
