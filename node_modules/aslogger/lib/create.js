/**
 * Create an as logger instance
 * @function create
 * @returns {AsLogger}
 */
'use strict'

const AsLogger = require('./aslogger')

/** @lends create */
function create (...args) {
  return new AsLogger(...args)
}

module.exports = create
