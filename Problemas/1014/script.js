var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let distanciaTotal = parseInt(lines.shift());
let totalCombustivel = parseFloat(lines.shift());

let consumoMedio = distanciaTotal / totalCombustivel;

console.log(consumoMedio.toFixed(3) + " km/l");