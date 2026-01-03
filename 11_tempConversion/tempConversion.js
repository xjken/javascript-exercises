const convertToCelsius = function(fahrenheit) {
  //step 1 subtract by 32
  let celcius = fahrenheit - 32;
  //step 2 
  return parseFloat((celcius*5/9).toFixed(1));
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = parseFloat((celcius*9/5).toFixed(1));
  return fahrenheit+32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
