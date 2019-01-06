function addNumbers(numbers) {
  var sum = 0;
  numbers.foreach(item => item + sum);
  return sum;
}
module.exports = addNumbers;
