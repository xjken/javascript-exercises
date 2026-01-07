const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanStr = str
                        .toLowerCase()
                        .split('')
                        .filter((char)=>alphanumerical.includes(char))
                        .join('')
                        
    const reversedCleanStr = cleanStr
                                .split('')
                                .reverse()
                                .join('')

    return cleanStr === reversedCleanStr
};

// console.log(palindromes("Racecar!"))
// console.log(palindromes('ZZZZ car, a man, a maracaz.'))
// Do not edit below this line
module.exports = palindromes;
