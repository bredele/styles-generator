

/**
 *
 */

module.exports = function(mixins) {
  return (style) => {
    style = style.split('-')
    const value = style.pop()
    const rule = style.join('-')
    const cb = mixins && mixins[rule]
    return cb
      ? cb(value)
      : `${rule}:${value};`
  }
}
