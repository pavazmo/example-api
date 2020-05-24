'use strict'
const express = require('express');
const userController = require('../controllers/user');

const app = express();

app.post('/', userController.createUser);
app.put('/:id', userController.updateUser);
app.delete('/:id', userController.deleteUser);

module.exports = app;
