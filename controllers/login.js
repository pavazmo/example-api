'use strict'
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const SEED = require('../config/config').SEED;
const resp = require('../config/res');

function loginUser(req, res){
  const body = req.body;
  User.findOne({ email: body.email }).exec((err, loggedUser) => {
    if (err) {
      return resp.error500( err, res );
    }

    if (!loggedUser) {
      return resp.error404( err, res );
    }

    if (!bcrypt.compareSync(body.password, loggedUser.password)) {
      return resp.error400( err, res );
    }

    loggedUser.password = ':)'; 
    const token = jwt.sign({ user: loggedUser }, SEED, { expiresIn: 14400 });
    res.status(200).json({
        ok: true,
        user: loggedUser,
        token: token,
        id: loggedUser.id
    });
  })
}
  
exports.loginUser = loginUser;
