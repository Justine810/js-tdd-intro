const assert = require('assert');

function capitalizeFirstLetters(string) {
    return string.length > 0
    ?
    string
    .split(' ')
    .map( function(word) {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ')
    : '';
  }
  console.log(capitalizeFirstLetters("la première lettre doit être en majuscule"))
  
  module.exports = capitalizeFirstLetters;

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirstLetters transforms few words
assert.strictEqual(capitalizeFirstLetters('mon prénom est justine'), 'Mon Prénom Est Justine')

// Check that capitalizeFirstLetters transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
