'use strict'

const apasswd = require('apasswd')
const co = require('co')

co(function * () {
  let salt = yield apasswd.newSalt(24)

  console.log(salt) // -> b8c0faa8df6e43fe9fa2f4a1
}).catch((err) => console.error(err))
