const repeatString = function(baseString, numRepeats) {
    if (numRepeats < 0) return 'ERROR';

    let finalString = "";
    for (let i = 0; i < numRepeats; i++) {
        finalString += baseString;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
