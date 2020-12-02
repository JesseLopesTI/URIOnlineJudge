var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let distanciaEmKm = parseInt(lines.shift());

let tempoNecessario = distanciaEmKm * 2;

console.log(tempoNecessario + " minutos");