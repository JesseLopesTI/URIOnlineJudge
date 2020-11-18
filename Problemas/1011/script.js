var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let R = parseInt(lines.shift());
let pi = 3.14159;

let volume = ((4/3) * pi) * Math.pow(R, 3);

console.log("VOLUME = " + volume.toFixed(3));