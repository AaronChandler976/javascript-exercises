const sumAll = function(num1, num2) {
    for (const arg of arguments) {
        if (typeof arg !== 'number' || !Number.isInteger(arg) || arg < 0) return 'ERROR';
    }

    let finalSum = 0;
    let small = num1 < num2 ? num1 : num2;
    let large = num1 > num2 ? num1 : num2;
    while (small <= large) {
        finalSum += small;
        small++;
    }
    return finalSum;
};

sumAll(123, 1);

// Do not edit below this line
module.exports = sumAll;
