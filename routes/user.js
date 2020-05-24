'use strict'
const express = require('express');
const userController = require('../controllers/user');

const app = express();

app.post('/', userController.createUser);
app.put('/', userController.updateUser);
app.delete('/', userController.deleteUser);

module.exports = app;
