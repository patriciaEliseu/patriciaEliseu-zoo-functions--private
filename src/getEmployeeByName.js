const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const aFirstName = data.employees.find((employee) =>
    employeeName.includes(employee.firstName) || employeeName.includes(employee.lastName));
  return aFirstName;
}

module.exports = getEmployeeByName;
