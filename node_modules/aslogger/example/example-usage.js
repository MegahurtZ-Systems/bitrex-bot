'use strict'

const aslogger = require('aslogger')

// Create a logger instance
let logger = aslogger({
  PREFIX: '[my-package] ',
  disabled: process.env.NODE_ENV === 'production'
})

// Print logs with ansi colors
logger.notice('This is notice message')
logger.info('This is info message')
logger.debug('This is debug message')
logger.trace('This is trace message')
