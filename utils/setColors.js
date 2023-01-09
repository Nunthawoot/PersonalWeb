/**
 * See `./tailwind.config.js` for color code reference
 * @param {string} color
 */
const setColor = (color) => {
  let _color = color

  if (color === 'gold') _color = '#FFD700'
  if (color === 'white') _color = '#F4FBFF'
  if (color === 'gray') _color = '#8892B0'
  if (color === 'black') _color = '#333'

  return _color
}

export default setColor
