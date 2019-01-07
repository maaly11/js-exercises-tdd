// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function getAverage(element) {
  var arr = element.filter(number => typeof number === "number");
  return arr.reduce((a, b) => a + b) / arr.length;
}
module.exports = getAverage;
