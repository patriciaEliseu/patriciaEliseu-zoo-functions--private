const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const buscarColaborador = data.employees.find((elemento) => elemento.id === id); /* achei a pessoa colab do param id */
  const animalGerenciado = buscarColaborador.responsibleFor[0]; /* achei a primeira especie geren pelo colaborador */
  const animalEspecie = data.species.find((elem) => elem.id === animalGerenciado); /* achei a especie */
  const maisVelho = animalEspecie.residents.sort((a, b) => (b.age - a.age));
  // console.log(maisVelho[0]);
  return Object.values(maisVelho[0]);
}
// getOldestFromFirstSpecies();
module.exports = getOldestFromFirstSpecies;
