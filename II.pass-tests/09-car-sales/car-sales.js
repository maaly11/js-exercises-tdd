function sale(carsSold) {
  price = x => x.price;
  var fordCars = carsSold.filter(type => type.make === "Ford");
  var fordTotalPrice = fordCars.map(price).reduce((a, b) => a + b, 0);

  var hondaCars = carsSold.filter(type => type.make === "Honda");
  var hondaTotalPrice = hondaCars.map(price).reduce((a, b) => a + b, 0);

  var landRoverCars = carsSold.filter(type => type.make === "Land Rover");
  var landRoverTotalPrice = landRoverCars.map(price).reduce((a, b) => a + b, 0);

  var toyotaCars = carsSold.filter(type => type.make === "Toyota");
  var toyotaTotalPrice = toyotaCars.map(price).reduce((a, b) => a + b, 0);

  var totals = {
    Ford: fordTotalPrice,
    Honda: hondaTotalPrice,
    "Land Rover": landRoverTotalPrice,
    Toyota: toyotaTotalPrice
  };

  return totals;
}
module.exports = sale;
