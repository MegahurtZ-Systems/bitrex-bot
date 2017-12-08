/**
 * Create a new salt.
 * @memberof module:apemanpasswd/lib/salting
 * @function newSalt
 * @param {number} [len=8] - Salt length.
 * @returns {Promise.<string>} - Salt string.
 */

'use strict'

const randomval = require('randomval')

/** @lends newSalt */
function newSalt (len) {
  return Promise.resolve(randomval.randomHash(len || 8))
}

module.exports = newSalt