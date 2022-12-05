// //? CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'
 const str = "Hello"
function reverseString(str) {
    return str.split("").reverse().join("") 
   }
   console.log(reverseString(str))    

   //? CHALLENGE 2: VALIDATE A PALINDROME
   // Return true if palindrome and false if not
   // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
    const str = "racecar"

   function isPalindrome(str) {
    const rev = str.split('').reverse().join('') 
    if (str === rev) return true 
    return false
   }
   console.log(isPalindrome(str))    


   //? CHALLENGE 3: REVERSE AN INTEGER
   // Return an integer in reverse
   // ex. reverseInt(521) === 125
   const int = 521 
   function reverseInt(int) {
    return int.toString().split("").reverse().join("") 
   }
   console.log(reverseInt(int))    

 
   //? CHALLENGE 4: CAPITALIZE LETTERS
   // Return a string with the first letter of every word capitalized
   // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
    const str = "i love javascript"
   function capitalizeLetters(str) {
    const cap = str.split(" ")
    for (let i = 0  i < cap.length  i++) {
        cap[i] = cap[i].charAt(0).toUpperCase() + cap[i].substr(1)
    }
    cap.join()
    return cap
        
    }    
    console.log(capitalizeLetters(str))
    
   //? CHALLENGE 5: MAX CHARACTER
   // Return the character that is most common in a string
   // ex. maxCharacter('javascript') == 'a'
   const str = "javasscripts"
   function maxCharacter(str) {
    // let cap = str.split('')
    let obj = {}, max = 0, total = ""

    for (let char of str) {
        obj[char] = obj[char] + 1 || 1
      }

      for (let key in obj) {
        if (obj[key] > max) {
          max = obj[key]
          total = key
        }
      }
      return total
   }
   console.log(maxCharacter(str)) 

   //? CHALLENGE 6: FIZZBUZZ
   // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the 
//    number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 
//    and 5, print "FizzBuzz".
   function fizzBuzz() {
    for (let i = 1  i < 101  i++) {
        if (!(i % 3) && !(i % 5)) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
   }
   console.log(fizzBuzz()) 


   //? CHALLENGE 7: LONGEST WORD
   // Return the longest word of a string
   // ex. longestWord('Hi there, my name is Brad') === 'there,'
   const sen = "Hi there, my name is Brad"
   function longestWord(sen) {
    // SOLUTION 1 - Return a single longest word
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    let longest = "", old = 0
    let slice = sen.split(" ")
      for (let max of slice) {
        if (max.length > old) {
            old = max.length
            longest = max
        }
        
      }
      return longest

   }
   console.log(longestWord(sen))
   //? CHALLENGE 8: ARRAY CHUNKING
   // Split an array into chunked arrays of a specific length
   // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
   // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
   function chunkArray(arr, len) {
    let [...array]  = arr 
    
    let result = [] 
    while (array.length) {
        result.push(array.splice(0, len)) 
    }
    return result 
   }
   console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))
   console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))

   //? CHALLENGE 9: FLATTEN ARRAY
   // Take an array of arrays and flatten to a single array
   // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
   function flattenArray(arrays) {
    let total = arrays.flat() 
    return total
   }
   console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]))

   //? CHALLENGE 10: ANAGRAM
   // Return true if anagram and false if not
   // ex. 'elbow' === 'below'
   // ex. 'Dormitory' === 'dirty room'
   function isAnagram(str1, str2) {
     let str = str1.toLowerCase().split("").reverse().join("")
    if (str === str2) {
        return true
    }
    return false
   }
   console.log(isAnagram('elbow','below')) 
   console.log(isAnagram('elbow','woble')) 
   console.log(isAnagram('Dormitory','dirty room')) 
   console.log(isAnagram('Dormitory','yrotimrod')) 


   //! CHALLENGE 11: LETTER CHANGES
   // Change every letter of the string to the one that follows it and capitalize the vowels
   // Z should turn to A
   // ex. 'hello there' === 'Ifmmp UIfsf'
  
   function letterChanges(str) {
    const vowels = 'aeiou' 
    let result = '' 
    for (let i = 0  i < str.length  i++) {
        let newChar 
        if (str[i] !== ' ')

            if (str[i].toLowerCase() === 'z') newChar = 'a' 

            else
                newChar = str[i] !== ' ' ? String.fromCodePoint(str[i].codePointAt(0) + 1) : str[i] 
                
        else newChar = str[i] 
        result += vowels.split('').includes(newChar) ? newChar.toUpperCase() : newChar 
    }

    return result
   }
   console.log(letterChanges('hello there')) 

   //? CHALLENGE 12: ADD ALL NUMBERS
   // Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
   // ex. addAll(2,5,6,7) === 20
   let array1 = [1, 2, 3, 4] 
   function addAll() {
    let total = array1.reduce((a, b) => a + b)
    return total
    }

    console.log(addAll())

   //! CHALLENGE 13: SUM ALL PRIMES
   // Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole 
//    number greater than 1 whose only factors are 1 and itself
   // ex. sumAllPrimes(10) == 17
   function sumAllPrimes(num) {
    let sum = 0 
    for (let i = 2  i <= num  i++) {
        if (isPrime(i)) sum += i 
    }
    return sum 
   }
   function isPrime(n) {
    for (let i = 2  i < n  i++)
        if (n % i === 0)
            return false 

    return true 
}
console.log(sumAllPrimes(10))


   //? CHALLENGE 14: SEEK & DESTROY
   // Remove from the array whatever is in the following arguments. Return the leftover numbers in an 
   // array
   // ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
   function seekAndDestroy(arr, ...target) {
    return arr.filter(del => !target.includes(del)) 
   }
   console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))
  
   //? CHALLENGE 15: SORT BY HEIGHT
   // Some people are standing in a row in a park. There are trees between them which cannot be moved. 
//    Your task is to rearrange the people by their heights in a non-descending order without moving the 
//    trees.
   // ex.
   // a = [-1, 150, 190, 170, -1, -1, 160, 180]
   // sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
   let a = [-1, 150, 190, 170, -1, -1, 160, 180]
   function sortByHeight(a) {
    const treeIndexes = [] 
    let people = [] 
    a.forEach((elem, index) => {
        if (elem === -1) {
            treeIndexes.push(index) 
        }
    })
    people = a.filter(elem => elem !== -1).sort((a, b) => a - b)
    for (let i = 0  i < treeIndexes.length  i++) {
        people.splice(treeIndexes[i], 0, -1) 
    }
    return people 
     }
   console.log(sortByHeight(a))

   //? CHALLENGE 16: MISSING LETTERS
   // Find the missing letter in the passed letter range and return it. If all letters are present, 
  //  return undefined
   // ex.
   // missingLetters("abce") == "d"
   // missingLetters("abcdefghjklmno") == "i"
   // missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
   function missingLetters(str) {
    let compare = str.charCodeAt(0) 
    let missing 
  
    str.split("").map((char, i) => {
      if (str.charCodeAt(i) === compare) {
        ++compare 
      } else {
        missing = String.fromCharCode(compare) 
      }
    }) 
  
    return missing 
   }
   
console.log(missingLetters("abce"))  // d
console.log(missingLetters("abcdefghjklmno"))  // i
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"))  // undefined
   //? CHALLENGE 17: EVEN & ODD SUMS
   // Take in an array and return an array of the sums of even and odd numbers
   // ex.
   // evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
   function evenOddSums(arr) {
   let oddSum = 0 
   let evenSum = 0 
   for(let num of arr)
       num % 2 === 0 ? evenSum += num : oddSum += num 
   return [ evenSum, oddSum] 
   }
   
   console.log(evenOddSums([50, 60, 60, 45, 71]))  // [170, 116]
