var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let informacoesItem1 = lines.shift().split(' ');
let informacoesItem2 = lines.shift().split(' ');

let iditem1 = informacoesItem1.shift();
let quantidadeItem1 = informacoesItem1.shift();
let valorUnitarioDoItem1 = informacoesItem1.shift();

let iditem2 = informacoesItem2.shift();
let quantidadeItem2 = informacoesItem2.shift();
let valorUnitarioDoItem2 = informacoesItem2.shift();

let valorAPagar = (quantidadeItem1 * valorUnitarioDoItem1) + (quantidadeItem2 * valorUnitarioDoItem2);

console.log("VALOR A PAGAR: R$ " + valorAPagar.toFixed(2));