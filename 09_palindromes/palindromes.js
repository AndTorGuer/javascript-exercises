const palindromes = function (word) {
// \W removes all non-alphanumeric characters 
// g flag for global search  
var re =  /[\W]/g;
var lowRegWord = word.toLowerCase().replace(re,''); 
let reverseArray = lowRegWord.split('').reverse().join('');
return lowRegWord === reverseArray;
};

// Do not edit below this line
module.exports = palindromes;
