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


//CAPITALIZE


/*--- Directions
Write a function that accepts a string.  The function should
capitalize the first letter of each word in the string then
return the capitalized string.
--- Examples
  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'*/

function capitalize(str) {
  const array = str.split(' ');
  let newArray = []

  for (let word of array) {
    newArray.push(word.slice(0, 1).toUpperCase() + word.slice(1))
  }

  return newArray.join(' ')

}

//STEPS

/*--- Directions
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
--- Examples
  steps(2)
      '# '
      '##'
  steps(3)
      '#  '
      '## '
      '###'
  steps(4)
      '#   '
      '##  '
      '### '
      '####'*/


function steps(n) {
  let number = 1;

  while (number <= n) {

    let result = '#'.repeat(number) + ' '.repeat(n - number);

    console.log(result)

    number++
  }
}


//PYRAMID
//Este no lo he entendido demasiado bien... REPASARLO!!!!

/* --- Directions
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left *and* right hand sides
--- Examples
  pyramid(1)
      '#'
  pyramid(2)
      ' # '
      '###'
  pyramid(3)
      '  #  '
      ' ### '
      '#####' */

function pyramid(n) {

  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';
    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level)
  }
}



//VOWELS
/*--- Directions
Write a function that returns the number of vowels
used in a string.  Vowels are the characters 'a', 'e'
'i', 'o', and 'u'.
--- Examples
  vowels('Hi There!') --> 3
  vowels('Why do you ask?') --> 4
  vowels('Why?') --> 0 */

function vowels(str) {
  let counter = 0;
  for (let char of str.toLowerCase()) {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      counter++
    }
  }
  return counter
}



//MATRIX
/*--- Directions
Write a function that accepts an integer N
and returns a NxN spiral matrix.
--- Examples
  matrix(2)
    [[1, 2],
    [4, 3]]
  matrix(3)
    [[1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]]
 matrix(4)
    [[1,   2,  3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]] */

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([])
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= startRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++
    }
    startRow++

    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++
    }
    endColumn--

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++
    }
    endRow--

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++
    }
    startColumn++
  }

  return results


}



//FIB
/*--- Directions
Print out the n-th entry in the fibonacci series.
The fibonacci series is an ordering of numbers where
each number is the sum of the preceeding two.
For example, the sequence
 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
forms the first ten entries of the fibonacci series.
Example:
  fib(4) === 3*/

function fib(n) {
  let result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1]
    const b = result[i - 2]

    result.push(a + b)
  }
  return result[result.length - 1]
}

//La solucion que exploded my mind!!!:

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2)
}

