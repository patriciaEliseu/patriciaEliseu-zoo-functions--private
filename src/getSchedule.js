const data = require('../data/zoo_data');
// console.log (data.hours);
const hora = data.hours; /* retorna os dias e horarios de funcionamento (obj) */
const animaisDias = data.species;

function criarObjCalen() {
  const resHF = Object.keys(hora);
  const vazio = {};
  resHF.forEach((diaSemana) => {
    vazio[diaSemana] = {
      officeHour: `Open from ${hora[diaSemana].open}am until ${hora[diaSemana].close}pm`,
      exhibition: animaisDias.filter((elemento) => elemento.availability.includes(diaSemana))
        .map((valor) => valor.name),
    };
  });
  vazio.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return vazio;
}
criarObjCalen();

function trazAnim(scheduleTarget) {
  return animaisDias.find((elemento) => elemento.name === scheduleTarget).availability;
}
function getSchedule(scheduleTarget) {
  if (Object.keys(hora).includes(scheduleTarget)) {
    return ({ [scheduleTarget]: criarObjCalen()[scheduleTarget] });
  }
  if (animaisDias.map((elemento) => elemento.name)
    .includes(scheduleTarget)) return trazAnim(scheduleTarget);

  return criarObjCalen();
  // if (!scheduleTarget || )
  // console.log(copiaAD);
}
// console.log(getSchedule('Thursday'));
// console.log(getSchedule('lions'));
module.exports = getSchedule;
