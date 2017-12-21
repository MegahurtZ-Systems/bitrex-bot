/**
 * Apeman password context.
 * @constructor APasswd
 * @param {object} config - Password configuration.
 * @param {string} [config.algorithm='pdkdf2'] - Name of algorithm.
 * @param {number} [config.iterations=100] - Iteration count.
 * @param {number} [config.length=84] - Key length.
 * @param {string} [config.format='base64'] - Digest format.
 */

'use strict'

const newSalt = require('./salting/new_salt')
const co = require('co')
const abind = require('abind')
const pdkdf2Digest = require('./digesting/pdkdf2_digest')
const {
  DEFAULT_ALGORITHM,
  DEFAULT_ITERATIONS,
  DEFAULT_LENGTH,
  DEFAULT_FORMAT
} = require('./constants')

/** @lends APasswd */
function APasswd (config) {
  const s = this
  Object.assign(s, config)
  abind(s)
}

APasswd.prototype = {
  algorithm: DEFAULT_ALGORITHM,
  iterations: DEFAULT_ITERATIONS,
  length: DEFAULT_LENGTH,
  format: DEFAULT_FORMAT,
  /**
   * Digest a password.
   * @param {string} text - Text to digest.
   * @param {string} salt - Salt for digest.
   * @returns {Promise}
   */
  digest (text, salt) {
    const s = this
    return co(function * () {
      switch (s.algorithm) {
        case 'pdkdf2':
          return yield pdkdf2Digest(text, salt, {
            iterations: s.iterations,
            length: s.length,
            format: s.format
          })
        default:
          throw new Error(`Unknown algorithm: ${s.algorithm}`)
      }
    })
  },
  /**
   * Generate a new salt.
   * @param {number} [len=8] - Salt length.
   * @returns {Promise.<string>} - New salt.
   */
  newSalt (len) {
    return newSalt(len || 8)
  },
  /**
   * Get spec string.
   * @returns {string} spec - Spec of this password.
   */
  toSpecString () {
    const s = this
    return [ s.algorithm, s.iterations, s.length ].join(':')
  }
}

module.exports = APasswd
