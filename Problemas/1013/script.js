let input = require('fs').readFileSync('./stdin', 'utf8');
let [A, B, C] = input.split(" ").map(item => parseInt(item));

let maiorAB = (A + B + Math.abs(A - B)) / 2;

let maiorXC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;

console.log(maiorXC + " eh o maior");