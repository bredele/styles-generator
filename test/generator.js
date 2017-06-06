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


test('generate style based on constructor mixin', assert => {
  assert.plan(1)
  const css = styles({
    'margin-top': (value) => {
      return `margin-top:${value}rem;`
    }
  })
  assert.equal(css('margin-top-10'), 'margin-top:10rem;')
})


test('generate style with custom rule without hyphens', assert => {
  assert.plan(1)
  const css = styles({
    'measure': () => {
      return 'max-width:30em;'
    }
  })
  assert.equal(css('measure'), 'max-width:30em;')
})
