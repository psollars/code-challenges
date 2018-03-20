// Exercise 1:

// Given an array of numbers, sort ascending odd numbers but leave even numbers in their original place in the array.  Zero does not need to move. If the array is empty, return an empty array.

// Examples:
// [5, 3, 2, 8, 1, 4] should return [1, 3, 2, 8, 5, 4]
// [6, 3, 2, 7, 5, 0] should return [6, 3, 2, 5, 7, 0]

function oddSort(array) {
  let newOddArray = [];
  let newEvenArray = [];
  // remember positions of all numbers
  let placeHolderArray = [];
  let sortedArray = [];

  // iterate, if odd pull out in separate array
  array.forEach(function(number){
    if (number % 2 === 1) {
      newOddArray.push(number);
      placeHolderArray.push(1);
    } else {
      newEvenArray.push(number);
      placeHolderArray.push(0);
    }
  });

  // sort odd array
  newOddArray.sort();

  // assemble new array back together
  placeHolderArray.forEach(function(number){
    if (number === 1) {
      sortedArray.push(newOddArray[0]);
      newOddArray = newOddArray.slice(1);
    } else {
      sortedArray.push(newEvenArray[0]);
      newEvenArray = newEvenArray.slice(1);
    }
  });
  
  return sortedArray;
}

const quickTest1 = oddSort([5, 3, 2, 8, 1, 4]);
console.log(quickTest1);

const quickTest2 = oddSort([6, 3, 2, 7, 5, 0]);
console.log(quickTest2);

const quickTest3 = oddSort([]);
console.log(quickTest3);
