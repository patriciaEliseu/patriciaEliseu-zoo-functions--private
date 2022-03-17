const data = require('../data/zoo_data');
// console.log(data.especies);
function getSpeciesByIds(...ids) {
  if (!ids) {
    return [];
  }
  // ids.includes é para verificar se tem dentro do meu array ids o elemento id
  // https://www.w3schools.com/jsref/jsref_includes_array.asp
  const resultadoIds = data.species.filter((elemento) => ids.includes(elemento.id));
  return resultadoIds;
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
