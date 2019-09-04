// Write a function that replaces an element in an array
// The function must:
// - NOT change the original array
// - return a new array with the replacement value inserted
// - insert the replacement value at the provided index

function replace(arr, index, value) {
  let newArr = [value];
  var insertedArr = arr.slice(0, index).concat(newArr).concat(arr.slice(index + 1));
  return insertedArr;
   // complete this statement
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];
var models = ["Honda", "Mercedes", "BMW", "Suzuki", "Yamaha"];

var newNumbers = replace(numbers, 1, 2);
var newNames = replace(names, 2, "Rares");
var newModels = replace(models, 2, "Kawasaki");

console.log(numbers);
console.log(newNumbers);
console.log(names);
console.log(newNames);
console.log(models);
console.log(newModels);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3, 3]
  [1, 2, 3]
  [Irina, Ashleigh, Mozafar]
  [Irina, Ashleigh, Rares]
*/
