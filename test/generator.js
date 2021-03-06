/**
 * Tests dependencies.
 */

const test = require('tape')
const styles = require('..')


test('generate style with given rule', assert => {
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

test('generate style from rule matching a mixin', assert => {
  assert.plan(1)
  const css = styles({
    'small-caps' : () => 'font-variant:small-caps;'
  })
  assert.equal(css('small-caps'), 'font-variant:small-caps;')
})

test('generate style from rule with 2 hyphens', assert => {
  assert.plan(1)
  const css = styles({
    'padding': (value) => {
      return `padding:${value === 'extra-small' ? '.25' : '0'}rem;`
    }
  })
  assert.equal(css('padding-extra-small'), 'padding:.25rem;')
})

test('generate style from rule with 2 hyphens and corresponding mixins', assert => {
  assert.plan(1)
  const css = styles({
    'padding': (value) => {
      return `padding:0;`
    },
    'padding-top': (value) => {
      return `padding-top:0;`
    }
  })
  assert.equal(css('padding-top-small'), 'padding-top:0;')
})

test('generate style from rule with 3 or more hyphens', assert => {
  assert.plan(1)
  const css = styles({
    'padding': (value) => {
      return `padding:0;`
    },
    'padding-top': (value) => {
      return `padding-top:0;`
    }
  })
  assert.equal(css('padding-top-extra-small'), 'padding-top:0;')
})
