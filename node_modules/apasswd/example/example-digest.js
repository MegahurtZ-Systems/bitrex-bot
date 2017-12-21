'use strict'

const apasswd = require('apasswd')
const co = require('co')

let password = 'm*y*p*a*s*s*w*o*r*d'
let salt = '1234asdf'

co(function * () {
  let hash = yield apasswd.digest(password, salt)
  /* ... */
}).catch((err) => console.error(err))
