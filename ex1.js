// Exercise 1:

// Given an array of numbers, sort ascending odd numbers but leave even numbers in their original place in the array.  Zero does not need to move. If the array is empty, return an empty array.


// Examples:
// [5, 3, 2, 8, 1, 4] should return [1, 3, 2, 8, 5, 4]
// [6, 3, 2, 7, 5, 0] should return [6, 3, 2, 5, 7, 0]

function oddSort(array) {
  // iterate, if odd pull out in separate array
  // remember positions of even numbers

  // sort odd array

  // assemble new array back together

}

const quickTest1 = oddSort([5, 3, 2, 8, 1, 4]);
console.log(quickTest1);
console.log(quickTest1 === [1, 3, 2, 8, 5, 4]);

const quickTest2 = oddSort([6, 3, 2, 7, 5, 0]);
console.log(quickTest2);
console.log(quickTest2 === [6, 3, 2, 5, 7, 0]);
