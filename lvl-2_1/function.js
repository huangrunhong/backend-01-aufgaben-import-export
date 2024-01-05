const moreThan100000 = (citys) =>
  citys.filter((city) => city.population > 100000);

const lessThan100000 = (citys) =>
  citys.filter((city) => city.population < 100000);

module.exports = {
  moreThan100000,
  lessThan100000,
};
