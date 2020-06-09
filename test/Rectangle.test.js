const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
    it('les cotés du rectangle sont égaux', () => {
        let rectangle1 = new Rectangle(3,3);
        assert.strictEqual(rectangle1.isSquare(), true);
    });
    it('les cotés du rectangle ne sont pas égaux', () => {
        let rectangle2 = new Rectangle(4,3);
        assert.strictEqual(rectangle2.isSquare(), false);
    });
    it('renvoie la surface du rectangle', () => {
        let rectangle3 = new Rectangle(5,3);
        assert.strictEqual(rectangle3.getArea(), 15);
    });
    it('renvoie le périmètre du rectangle', () => {
        let rectangle4 = new Rectangle(4,3);
        assert.strictEqual(rectangle4.getPerimeter(), 14);
    });
});
