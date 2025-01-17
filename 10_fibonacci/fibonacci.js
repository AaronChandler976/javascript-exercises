const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) return "OOPS";
    let fibArr = [0, 1, 1];
    for (let i = 2; i < n; i++) {
        fibArr.push(fibArr[i] + fibArr[i-1]);
    }
    return fibArr[n];
};

// Do not edit below this line
module.exports = fibonacci;
