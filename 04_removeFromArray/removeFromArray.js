// using rest operator ... to get an array of all arguments passed
const removeFromArray = function(...argument) 
{ 
  // New variable to get the array that was passed in the argument
  const array = argument[0]; 
  // I want to return all elements in the array that are not the arguments
  return array.filter(function(element) 
  { // Using an anonymous function to pass the argument that I want to check against
    return !argument.includes(element); // Here the if the argument is in the array, it doesn't get included
  })

//   OR another way to do it...
//   const array = argument[0];
//   return array.filter(val => !argument.includes(val))
};

// test('removes multiple values', () => {
//     expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
//   });
// Do not edit below this line
module.exports = removeFromArray;
