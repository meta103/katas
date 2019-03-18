//REVERSE STRING

/*--- Directions
Given a string, return a new string with the reversed
order of characters
--- Examples
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'*/

function reverse(str) {
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

// function reverse(str) {
//   return str.split("").reverse().join("")
// }


//PALINDROMES

/*--- Directions
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
  palindrome("abba") === true
  palindrome("abcdefg") === false*/

function palindrome(str) {
  return str === str.split("").reverse().join("")
}


//INTEGER REVERSAL

/*--- Directions
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
  reverseInt(15) === 51
  reverseInt(981) === 189
  reverseInt(500) === 5
  reverseInt(-15) === -51
  reverseInt(-90) === -9*/

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("")
  return parseInt(reversed) * Math.sign(n)

}


//MAXCHARS

/*--- Directions
Given a string, return the character that is most
commonly used in the string.
--- Examples
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"*/

function maxChar(str) {
  obj = {};
  maxValue = 0;
  objKey = '';
  //Para iterar sobre string o arrays, usamos un "For-of loop"
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1
    } else {
      obj[char]++
    }
  }
  //Para iterar sobre un objeto, usamos un "For-in loop"
  for (let key in obj) {
    if (obj[key] > maxValue) {
      maxValue = obj[key];
      objKey = key
    }
  }

  return objKey
}


//FIZZBUZZ

/*--- Directions
Write a program that console logs the numbers
from 1 to n. But for multiples of three print
“fizz” instead of the number and for the multiples
of five print “buzz”. For numbers which are multiples
of both three and five print “fizzbuzz”.
--- Example
  fizzBuzz(5);
  1
  2
  fizz
  4
  buzz*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else if (i % 3 === 0) {
      console.log("fizz")
    } else {
      console.log(i)
    }
  }
}


//ARRAY CHUNKING

/*--- Directions
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]*/

function chunk(array, size) {
  const emptyArray = [];
  let index = 0;

  while (index < array.length) {
    emptyArray.push(array.slice(index, index + size))
    index += size
  }
  return emptyArray
}


//ANAGRAMS

/*--- Directions
Check to see if two provided strings are anagrams of eachother.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case
--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False*/


function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false
    }
  }
  return true
}

//FUNCION DE SOPORTE para crear objetos 
function buildCharMap(str) {
  const charMap = {};
  //Para quitar simbolos, espacios y pasar a minuscula 
  const cleanString = str.replace(/[^\w]/g, '').toLowerCase()

  for (let char of cleanString) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  return charMap;
}
