'use strict'

const co = require('co')
// Define a new apasswd context.
const apasswd = require('apasswd').create({
  algorithm: 'pdkdf2', // algorithm for digest.
  iterations: 120, // Iteration count
  length: 84, // Digest key length
  format: 'hex'
})

co(function () {
  let hash = yield apasswd.digest('my_password', 'my_salt')
}).catch((err) => console.error(err))
