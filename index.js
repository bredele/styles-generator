

/**
 * Generate styles based on given mixins.
 *
 * Mixins have precedence over dynamic styles.
 *
 * Examples:
 *
 *   const css = styles({
 *      'margin-top': value => `margin-top:${value}rem;`
 *   })
 *
 * @param {Object}
 * @return {Function}
 * @api public
 */

module.exports = function(mixins = {}) {

  /**
   * Generate styles based on given rules.
   *
   * Examples:
   *
   *   const css = styles()
   *   css('margin-top-10rem')
   *   // => margin-top:10rem;
   *
   * @param {String} style
   * @return {String}
   * @api public
   */

  return (style) => {
    let cb = mixins[style]
    if (cb) return cb()
    const {rule, value} = parse(style, mixins)
    cb = mixins[rule]
    return cb ? cb(value) : `${rule}:${value};`
  }
}


/**
 * Parse style to extract rule as well as its value.
 *
 * Examples:
 *
 *  parse('margin-top-10')
 *  // => {rule: 'margin-top', value: '10'}
 *
 * @param {String} styles
 * @param {Object} mixins
 * @return {Object}
 * @api private
 */

function parse (style, mixins) {
  let arr = style.split('-')
  var value = arr.splice(index(arr, mixins))
  return {
    rule: arr.join('-'),
    value: value.join('-')
  }
}


/**
 * Determine the index of the value.
 *
 * @param {Array} styles
 * @param {Array} mixins
 * @return {Number}
 * @api private
 */

function index (styles, mixins) {
  const length = styles.length
  let i = 0
  let rule = ''
  var idx = i
  while (i < length) {
    const tmp = styles[i]
    rule = rule
      ? (rule + '-' + tmp)
      : tmp
    if (mixins[rule]) idx = i + 1
    i++
  }
  return idx ? idx : length - 1
}
