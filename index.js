

/**
 *
 */

module.exports = function() {
  return (style) => {
    style = style.split('-')
    const value = style.pop()
    return `${style.join('-')}:${value};`
  }
}
