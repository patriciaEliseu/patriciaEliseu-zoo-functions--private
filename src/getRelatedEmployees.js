const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// console.log(data.employees);
function isManager(id) {
  const verifGerente = data.employees.some((elemento) => elemento.managers.includes(id));
  return verifGerente;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const pessoaGerente = employees
      .filter((elemento1) => elemento1.managers.includes(managerId))
      .map((elemento) => `${elemento.firstName} ${elemento.lastName}`);
    return pessoaGerente;
    // console.log(pessoaGerente);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83');
// console.log(getRelatedEmployees());
module.exports = { isManager, getRelatedEmployees };
