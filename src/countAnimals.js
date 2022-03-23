const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    const bichos = species.reduce((acc, item) => {
      acc[item.name] = item.residents.length;
      return acc;
    }, {});
    return bichos;
  }
  const espeBicho = species.find((elemento) => elemento.name === animal.specie);
  if (!animal.sex) {
    // const espeBicho = species.find((elemento) => elemento.name === animal.species);
    return espeBicho.residents.length;
  }
  const sexBicho = espeBicho.residents.filter((elemento) => elemento.sex === animal.sex);
  return sexBicho.length;
}

// console.log(countAnimals({specie:'lions'));
module.exports = countAnimals;
