const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const acharAnimal = data.species.find((residents) => animal.includes(residents.name));
  const verifica = acharAnimal.residents.every((elemento) => elemento.age > age);
  return verifica;
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
