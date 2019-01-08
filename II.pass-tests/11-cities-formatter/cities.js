function capitalOfCountry(capitals) {
  var transform = function transform({ city, country }) {
    return `${city} is the capital of ${country}`;
  };

  return capitals.map(transform);
}
module.exports = capitalOfCountry;
