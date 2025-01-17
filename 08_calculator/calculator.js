const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, num) => acc * num, 1);
};

const power = function(a, b) {
	let pow = 1;
  for (let i = 0; i < b; i++) {
    pow *= a;
  }
  return pow;
};

const factorial = function(num) {
	let fact = 1;
  while (num > 0) {
    fact *= num;
    num--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
