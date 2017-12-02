/**
 * Password manager
 * @module apasswd
 * @version 1.1.1
 */

'use strict'

const pkg = require('../package.json')
const create = require('./create')
const  constants = require('./constants')
const  APasswd = require('./apasswd')
const  fromSpecString = require('./from_spec_string')

let lib = create({})

Object.assign(lib, create, constants, {
  create,
  fromSpecString,
  APasswd
})

module.exports = lib
