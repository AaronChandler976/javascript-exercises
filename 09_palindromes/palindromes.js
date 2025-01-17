const palindromes = function (word) {
    const regex = new RegExp(/[a-zA-z0-9]/);
    const characters = word.toLowerCase().split("").filter(c => regex.test(c));
    console.log(characters);
    let lo = 0;
    let hi = characters.length - 1;
    while (lo < hi) {
        if (characters[lo] !== characters[hi]) return false;
        lo++; hi--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
