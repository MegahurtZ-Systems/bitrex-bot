/**
 * Create pdkdf2 digest.
 * @function pdkdf2Digest
 * @param {string} text - Text to digest.
 * @param {string} salt - Digest salt.
 * @param {object} [options] - Optional settings.
 * @param {number} [options.iterations=100] - Iteration count.
 * @param {number} [options.length=84] - Key length.
 * @param {string} [options.format='base64']
 * @returns {Promise}
 */

'use strict'

const co = require('co')
const crypto = require('crypto')
const {
  DEFAULT_ITERATIONS,
  DEFAULT_LENGTH,
  DEFAULT_FORMAT
} = require('../constants');

const DIGEST = 'sha512'

/** @lends pdkdf2Digest */
function pdkdf2Digest (text, salt, options = {}) {
  if (!salt) {
    throw new Error('Salt is required.')
  }
  let iterations = options.iterations || DEFAULT_ITERATIONS
  let length = options.length || DEFAULT_LENGTH
  let format = options.format || DEFAULT_FORMAT
  return co(function * () {
    let buffer = yield new Promise((resolve, reject) =>
      crypto.pbkdf2(text, salt, iterations, length, DIGEST, (err, buffer) =>
        err ? reject(err) : resolve(buffer)
      )
    )
    let result = Buffer(buffer, 'binary').toString(format)
    return result
  })
}

pdkdf2Digest.sync = function (text, salt, options = {}) {
  if (!salt) {
    throw new Error('Salt is required.')
  }
  let iterations = options.iterations || DEFAULT_ITERATIONS
  let length = options.length || DEFAULT_LENGTH
  let format = options.format || DEFAULT_FORMAT
  let buffer = crypto.pbkdf2Sync(text, salt, iterations, length, DIGEST)
  return Buffer(buffer, 'binary').toString(format)
}

module.exports = pdkdf2Digest;