const assert = require('assert');

const { createRectangleState, toXYWidthHeight } = require('../index');


describe('rectangle-state', () => {
  describe('createRectangleState', () => {
    it('can parse `{top, right, bottom, left}`', () => {
      assert.deepStrictEqual(createRectangleState({ top: 1, right: 12, bottom: 2, left: 11 }), {
        top: 1,
        right: 12,
        bottom: 2,
        left: 11,
      });
    });

    it('can parse `{x, y, width, height}`', () => {
      assert.deepStrictEqual(createRectangleState({ x: 1, y: 2, width: 10, height: 20 }), {
        top: 2,
        right: 11,
        bottom: 22,
        left: 1,
      });
    });

    it('should throw a error if `{top, right, bottom, left}` and `{x, y, width, height}` are mixed', () => {
      assert.throws(() => {
        createRectangleState({ top: 1, right: 12, bottom: 2, left: 11, x: 1 });
      }, /mixed/);
      assert.throws(() => {
        createRectangleState({ x: 1, y: 2, width: 3, height: 4, top: 1 });
      }, /mixed/);
    });

    it('should throw a error if bottom is less than top', () => {
      assert.throws(() => {
        createRectangleState({ top: 100, right: 12, bottom: 2, left: 11 });
      }, /less than/);
    });

    it('should throw a error if right is less than left', () => {
      assert.throws(() => {
        createRectangleState({ top: 1, right: 12, bottom: 2, left: 110 });
      }, /less than/);
    });
  });

  describe('toXYWidthHeight', () => {
    it('can execute correctly', () => {
      const rect = createRectangleState({ top: 1, right: 12, bottom: 2, left: 11 });
      assert.deepStrictEqual(
        toXYWidthHeight(
          createRectangleState({ top: 1, right: 12, bottom: 2, left: 11 })
        ),
        {
          y: 1,
          x: 11,
          width: 1,
          height: 1,
        }
      );
    });
  });
});
