// Exercise 3:

// Given a sentence, move the first letter of each word to the end of it, then add "ay" to the end of the word. Punctuation should be left unaffected.

// Examples:
// "Pig latin is cool" should return “igPay atinlay siay oolcay”
// "Hello world !" should return “elloHay orldWay !”

function pigLatin(string) {
  const words = string.split(" ");
  let pigLatinArray = [];
  
  words.forEach(function(word) {
    // handle punctuation
    if (word === "." || word === "!" || word === "?") {
      pigLatinArray.push(word);
    } else {
      // slice off first letter and stick it on the end
      pigLatinArray.push(`${word.slice(1)}${word[0]}ay`);
    }
  });
  
  // concat everything back together
  return pigLatinArray.join(" ");
}

const quickTest1 = pigLatin("Pig latin is cool");
console.log(quickTest1);
console.log(quickTest1 === "igPay atinlay siay oolcay");

const quickTest2 = pigLatin("Hello World !");
console.log(quickTest2);
console.log(quickTest2 === "elloHay orldWay !");
