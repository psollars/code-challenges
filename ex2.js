// Exercise 2:

// Given a word, return the middle character or characters of the word.  If the word is odd in length, return a string of the middle character.  If the word is even, return a string of the middle two characters.  If the string is empty, return an empty string.

// Examples:

// “dog” should return “o”
// “Fishing” should return “h”
// “have” should return “av”
// “Middle” should return “dd”
// “C” should return “C”

function middleOut(string) {
  const middle = string.length / 2;
  // handle odd/even?
  const index = Math.ceil(middle);

  // slice it out
  if (middle % 1 === 0) {
    return string.slice(index - 1, index + 1);
  } else {
    return string.slice(index - 1, index);
  }

}

// “dog” should return “o”
// “Fishing” should return “h”
// “have” should return “av”
// “Middle” should return “dd”
// “C” should return “C”

const quickTest1 = middleOut("dog");
console.log(quickTest1);
console.log(quickTest1 === "o");

const quickTest2 = middleOut("Fishing");
console.log(quickTest2);
console.log(quickTest2 === "h");

const quickTest3 = middleOut("have");
console.log(quickTest3);
console.log(quickTest3 === "av");

const quickTest4 = middleOut("Middle");
console.log(quickTest4);
console.log(quickTest4 === "dd");

const quickTest5 = middleOut("C");
console.log(quickTest5);
console.log(quickTest5 === "C");

const quickTest6 = middleOut("");
console.log(quickTest6);
console.log(quickTest6 === "");
