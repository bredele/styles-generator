/**
 * Tests dependencies.
 */

const test = require('tape')
const styles = require('..')


test('generate style with given rule $RULE-$VALUE', assert => {
  assert.plan(1)
  const css = styles()
  assert.equal(css('margin-top-10rem'), 'margin-top:10rem;')
})
