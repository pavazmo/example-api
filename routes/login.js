'use strict'
const express = require('express');
const LoginController = require('../controllers/login');

const app = express();

app.post('/', LoginController.loginUser);

module.exports = app;
