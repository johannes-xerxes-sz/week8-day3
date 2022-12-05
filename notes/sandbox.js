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