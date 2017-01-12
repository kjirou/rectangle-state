# rectangle-state

[![npm version](https://badge.fury.io/js/rectangle-state.svg)](https://badge.fury.io/js/rectangle-state)

Generate a state meaning a rectangle as a plane object


## Installation

```bash
npm install rectangle-state
```


## Usage

```js
const { createRectangleState, toXYWidthHeight } = require('rectangle-state');

console.log(
  createRectangleState({ top: 1, right: 12, bottom: 2, left: 11 })
);  // -> { top: 1, right: 12, bottom: 2, left: 11 }

console.log(
  createRectangleState({ x: 11, y: 1, width: 1, left: 1 })
);  // -> { top: 1, right: 12, bottom: 2, left: 11 }

console.log(
  toXYWidthHeight(
    createRectangleState({ top: 1, right: 12, bottom: 2, left: 11 })
  )
);  // -> { x: 11, y: 1, width: 1, left: 1 }

// Error - The `x` is mixed.
//createRectangleState({ top: 1, right: 12, bottom: 2, left: 11, x: 1 });

// Error - The `top` is greater than the `bottom`.
//createRectangleState({ top: 100, right: 12, bottom: 2, left: 11 });
```
