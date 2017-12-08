/**
 * Create a pon password context from spec string.
 * @function fromSpecString
 * @param {string} spec - Spec string.
 * @returns {APasswd} - An apeman password instance.
 */

'use strict'

const create = require('./create')
const { DEFAULT_ITERATIONS, DEFAULT_LENGTH } = require('./constants');

/** @lends fromSpecString */
function fromSpecString (spec) {
  let values = String(spec).split(/:/g)
  return create({
    algorithm: values[ 0 ],
    iterations: Number(values[ 1 ] || DEFAULT_ITERATIONS),
    length: Number(values[ 2 ] || DEFAULT_LENGTH)
  })
}

module.exports = fromSpecString
