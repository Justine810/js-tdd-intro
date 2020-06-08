const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {

    it('capitalizeFirstLetters is a function', () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
       });
   it('transforms javascript correctly', () => {
    assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
   });
   it('works with a 1 character string', () => {
    assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
   });
   it('works with a longer string', () => {
    assert.strictEqual(capitalizeFirstLetters('mon prénom est justine'), 'Mon Prénom Est Justine')
   });
   it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
   });
});
