const findTheOldest = function(arr) {
    return arr.reduce((acc, p) => getAge(acc) > getAge(p) ? acc : p);
};

function getAge(person) {
    return (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
