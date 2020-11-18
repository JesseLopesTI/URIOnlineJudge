var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

// let [A, B, C] = input.split(' ');

let valores = lines.shift().split(' ');

let A = parseFloat(valores.shift());
let B = parseFloat(valores.shift());
let C = parseFloat(valores.shift());

let pi = 3.14159;

let areaTriangulo = (A * C) / 2.0;
let areaCirculo = pi * Math.pow(C, 2);
let areaTrapezio = ((A + B) * C) / 2.0;
let areaQuadrado = B * B;
let areaRetangulo = A * B;

console.log("TRIANGULO: " + areaTriangulo.toFixed(3));
console.log("CIRCULO: " + areaCirculo.toFixed(3));
console.log("TRAPEZIO: " + areaTrapezio.toFixed(3));
console.log("QUADRADO: " + areaQuadrado.toFixed(3));
console.log("RETANGULO: " + areaRetangulo.toFixed(3));