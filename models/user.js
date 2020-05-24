//  Schema of user

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String },
    surname: {type: String},
    email: {type: String, index: { unique: true }, required: true},
    password: {type: String},
    country: {type: String},
    phone: {type: String},
    postalCode: {type: Number},
    __v: { type: Number, select: false },
});

module.exports = mongoose.model('User', userSchema); 