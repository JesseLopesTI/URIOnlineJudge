var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let numeroId = parseInt(lines.shift());
let horasTrabalhadas = parseFloat(lines.shift());
let valorRecebidoPorHora = parseFloat(lines.shift());

let salario = horasTrabalhadas * valorRecebidoPorHora;

console.log("NUMBER = " + numeroId);
console.log("SALARY = U$ " + salario.toFixed(2));