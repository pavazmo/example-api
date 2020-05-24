'use strict'
const bcrypt = require('bcryptjs');
const resp = require('../config/res');
const User = require('../models/user');

function createUser(req, res){
  const body = req.body;
  const userCreate = new User({
    name: body.name,
    surname: body.surname,
    country: body.country,
    email: body.email,
    phone: body.phone,
    postalCode: body.postalCode,
    password: bcrypt.hashSync(body.password, 10),
  })

  userCreate.save((err, savedUser) => {
    if (err) {
      return resp.error500( err, res );
    }

    resp.OK201(savedUser, res);
  });
}

function updateUser(req, res){
  const userEmail = req.query.email;
  const body = req.body;
  User.findOne({ email: userEmail }, (err, foundUser) => {
    if (err) {
      return resp.error500( err, res );
    }

    if (!foundUser) {
      return resp.error404( err, res );
    }

    foundUser.name = body.name ? body.name : foundUser.name;
    foundUser.surname = body.surname ? body.surname : foundUser.surname;
    foundUser.country = body.country ? body.country: foundUser.country;
    foundUser.phone = body.phone ? body.phone: foundUser.phone;
    foundUser.email = body.email ? body.email: foundUser.email;
    foundUser.postalCode = body.postalCode ? body.postalCode: foundUser.postalCode;
    foundUser.password = body.newPassword ? bcrypt.hashSync(body.newPassword, 10): foundUser.password;

    foundUser.save((err, saveUser) => {
      if (err) {
        return resp.error400( err, res );
      }

      resp.OK201(saveUser, res);
    });
  });
}

function deleteUser(req, res){
  const userEmail = req.query.email;
  User.findOneAndRemove({email: userEmail}, { useFindAndModify: false }, (err, deletedUser) => {
    if (err) {
        return resp.error500(err, res );
    }

    if (!deletedUser) {
        return resp.error404(err, res );
    }

    resp.OK200(deletedUser, res);
  });
}
  
module.exports = {
  createUser,
  updateUser,
  deleteUser
}
