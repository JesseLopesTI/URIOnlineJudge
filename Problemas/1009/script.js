var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let nomeVendedor = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let totalDeVendasMensais = parseFloat(lines.shift());
let comissao = 0.15;

let totalAReceber = (totalDeVendasMensais * comissao) + salarioFixo;

console.log("TOTAL = R$ " + totalAReceber.toFixed(2));