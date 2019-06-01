 'use strict';

/** NODE PACKAGES
 * Mongoose
 * Jsonwebtoken
 * Bcrypt
 * Dotenv
 */
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

require('dotenv').config();

/**
 * Creates 'user' as a new mongo schema, and defines types for username and password.
 * @type {mongoose.Schema}
 */
const user = new mongoose.Schema({
  username: {type:String, required:true, unique:true},
  password: {type:String, required:true}
});

/** Hashes given password. */
user.pre('save', function(next) {
  bcrypt.hash(this.password,10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
  }).catch(err => {throw err;});
});

/**
 * Runs authenticateBasic based on...
 * @param auth - compares username with what's in Schema
 * @returns {boolean|*} - calls comparePassword function to verify password
 */
user.statics.authenticateBasic = function(auth) {
  let query = {username:auth.username};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
  .catch(console.error);
};

/**
 * This function compares the password with what's in the schema
 * @param password - given password
 * @returns {*} - uses bcrypt to compare the this.password with what's in the Schema
 */
user.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

/**
 * Function that generates a token and assigns it to an _id in the Schema
 * @returns {*} - uses jsonwebtoken to sign the tokenData and salts it with our .env file's SECRET
 */
user.methods.generateToken = function() {
  let tokenData = {
    id: this._id,
  };
  return jwt.sign(tokenData, process.env.SECRET || 'test');
};


/**
 * Exports user-model for use outside of this file.
 */
module.exports = mongoose.model('user', user);
