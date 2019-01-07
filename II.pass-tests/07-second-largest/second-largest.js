function secondLargest(numArray) {
  numArray.sort((a, b) => b - a);

  return numArray[1];
}
module.exports = secondLargest;
