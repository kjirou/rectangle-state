/**
 * Generate a state meaning a rectangle as a plane object
 * @param {Object} params
 * @param {number} [params.top]
 * @param {number} [params.right]
 * @param {number} [params.bottom]
 * @param {number} [params.left]
 * @param {number} [params.x]
 * @param {number} [params.y]
 * @param {number} [params.width]
 * @param {number} [params.height]
 * @return {{top, right, bottom, left}}
 */
const createRectangleState = (params) => {
  let top;
  let right;
  let bottom;
  let left;

  if (
    ['top', 'right', 'bottom', 'left'].every(k => params[k] !== undefined) &&
    ['x', 'y', 'width', 'height'].every(k => params[k] === undefined)
  ) {
    top = params.top;
    right = params.right;
    bottom = params.bottom;
    left = params.left;
  } else if (
    ['top', 'right', 'bottom', 'left'].every(k => params[k] === undefined) &&
    ['x', 'y', 'width', 'height'].every(k => params[k] !== undefined)
  ) {
    top = params.y;
    right = params.x + params.width;
    bottom = params.y + params.height;
    left = params.x;
  } else {
    throw new Error('`{top, right, bottom, left}` and `{x, y, width, height}` are mixed');
  }

  if (bottom < top) {
    throw new Error(`bottom is less than top`);
  } else if (right < left) {
    throw new Error(`right is less than left`);
  }

  return {
    top,
    right,
    bottom,
    left,
  };
};

/**
 * Convert `{top, right, bottom, left}` to `{x, y, width, height}`
 * @param {{top, right, bottom, left}} rectangle
 * @return {{x, y, width, height}}
 */
const toXYWidthHeight = (rectangle) => {
  return {
    x: rectangle.left,
    y: rectangle.top,
    width: rectangle.right - rectangle.left,
    height: rectangle.bottom - rectangle.top,
  };
};


module.exports = {
  createRectangleState,
  toXYWidthHeight,
};
