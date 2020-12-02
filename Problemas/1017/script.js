var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let tempoGastoEmHoras = parseInt(lines.shift());
let velocidadeMedia = parseInt(lines.shift());

let kmPorLitro = 12;

let consumoDeCombustivel = (velocidadeMedia / kmPorLitro) * tempoGastoEmHoras;

console.log(consumoDeCombustivel.toFixed(3));