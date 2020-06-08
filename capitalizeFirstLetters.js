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
  //console.log(capitalizeFirstLetters("la première lettre doit être en majuscule"))
  
  module.exports = capitalizeFirstLetters;