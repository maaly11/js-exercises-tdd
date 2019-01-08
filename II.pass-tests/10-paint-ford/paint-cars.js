function paintShop(cars, Pink) {
  var repaintedCars = cars.map(x => {
    var unpaintedCars = {
      make: x.make,
      model: x.model,
      colour: x.colour
    };
    return unpaintedCars;
  });

  repaintedCars[0].colour = Pink;

  return repaintedCars;
}

module.exports = paintShop;
