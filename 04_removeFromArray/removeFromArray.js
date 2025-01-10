const removeFromArray = function(arr, ...numsToRemove) {
    let finalArr = arr;
    for (const num of numsToRemove) {
        let idx = finalArr.indexOf(num)
        while (idx > -1) {
            finalArr.splice(idx, 1);
            idx = finalArr.indexOf(num);
        }
    }
    return finalArr;
};

removeFromArray([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
