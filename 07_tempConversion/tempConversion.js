const convertToCelsius = function(fahrenheit) {
  const celcius = (fahrenheit - 32) * 5/9;
  return parseFloat(celcius.toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  const fahrenheit = (celcius * 9/5) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
