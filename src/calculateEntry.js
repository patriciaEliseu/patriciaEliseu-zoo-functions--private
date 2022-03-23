const data = require('../data/zoo_data');

const entrants1 = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  const child = entrants.filter((param) => param.age < 18).length;
  const adult = entrants.filter((param) => param.age >= 18 && param.age < 50).length;
  const senior = entrants.filter((param) => param.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const totalChild = countEntrants(entrants).child * data.prices.child;
  const totalAdult = countEntrants(entrants).adult * data.prices.adult;
  const totalSenior = countEntrants(entrants).senior * data.prices.senior;
  const valorTotal = totalChild + totalAdult + totalSenior;
  return valorTotal;
}
console.log(calculateEntry(entrants1));
module.exports = { calculateEntry, countEntrants };
