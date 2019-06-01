'use strict';

/**
 * This sends out a 500 server error to our server.
 */

module.exports = (err, req, res, next) => {
    let error = {error: err};
    res.statusCode = 500;
    res.statusMessage = 'Server error';
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(error));
    res.end();
};