/**
 * Create a new password context.
 * @function create
 * @returns {APasswd}
 */

'use strict'

const APasswd = require('./apasswd')

/** @lends create */
function create (config) {
  return new APasswd(config)
}

module.exports = create
