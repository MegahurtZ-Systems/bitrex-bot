/**
 * Test case for pdkdf2Digest.
 * Runs with mocha.
 */
'use strict'

const pdkdf2Digest = require('../lib/digesting/pdkdf2_digest.js')
const assert = require('assert')
const co = require('co')

describe('pdkdf2-digest', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Pdkdf2 digest', () => co(function * () {
    let text = 'foo'
    let salt = 'bar'
    let result1 = yield pdkdf2Digest(text, salt)
    let result2 = yield pdkdf2Digest(text, salt)
    let result3 = pdkdf2Digest.sync(text, salt)
    assert.equal(result1, result2)
    assert.equal(result1, result3)
  }))
})

/* global describe, before, after, it */
