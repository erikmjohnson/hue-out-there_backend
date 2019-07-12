'use strict';

/** Single Dependency - user model */
const User = require('./user-model');

/** Most of this middleware file is exported for use in the rest of the project. */
module.exports = (req, res, next) => {

  /**
   * This part makes the headers for our Basic Authorization
   */
  try {
    let [authType, encodedString] = req.headers.authorization.split(/\s+/);

    switch (authType.toLowerCase()) {
      case 'basic':
        return _authBasic(encodedString);
      default:
        return _authError();
    }

  } catch(err){
    next(err);
  }

  /**
   * This function runs Basic Authenticaton hashing on a given username and password.
   * @param authString - passes string that contains username and password.
   * @returns {boolean}
   * @private
   */
  function _authBasic(authString) {

    let base64Buffer = Buffer.from(authString, 'base64');
    let bufferString = base64Buffer.toString();
    let [username, password] = bufferString.split(':');
    let auth = {username: username, password: password};

    return User.authenticateBasic(auth)
      .then (user => _authenticate(user));
  }

  /**
   * Generates a token for this user.
   * @param user - given user/username that we're working with.
   * @private
   */

  function _authenticate(user) {
    if(user) {
      req.user = user;
      req.token = user.generateToken();
      next();
    }
    else {
      _authError();
    }
  }

  /**
   * Function for outputting an error if an invalid username or password is given.
   * Purposely nonspecific for better security.
   * @private
   */

  function _authError() {
    next({status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/Password'});
  }
};
