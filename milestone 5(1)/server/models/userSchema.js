"use strict";
var mongoose1 = require('mongoose');
// const Schema= mongoose.Schema;
var UserSchema = new mongoose1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true }); //passing a constructor here
var User = mongoose1.model('user', UserSchema);
module.exports = User;
