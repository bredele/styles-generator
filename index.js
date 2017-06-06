

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

module.exports = function(mixins) {

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
    style = style.split('-')
    const value = style.length > 1 ? style.pop() : null
    const rule = style.join('-')
    const cb = mixins && mixins[rule]
    return cb
      ? cb(value)
      : `${rule}:${value};`
  }
}
