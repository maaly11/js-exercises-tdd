function removeMiddil(n) {
  var array = [];
  index = (n.length - 1) / 2;
  array.push(n[index]);
  n.splice(index, 1);
  return array;
}
module.exports = removeMiddil;
