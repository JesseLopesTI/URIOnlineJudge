let input = require('fs').readFileSync('./stdin', 'utf8');
let lines = input.split('\n');

let tempoTotalEmSegundos = parseInt(lines.shift());

let totalSegundos = 60;
let totalMinutos = 60;

let horas = (tempoTotalEmSegundos / (totalSegundos * totalMinutos)) | 0;
let horasCalculadas = tempoTotalEmSegundos % (totalSegundos * totalMinutos);

let minutos = (horasCalculadas / totalMinutos) | 0;
let minutosCalculados = horasCalculadas % totalMinutos;

let segundos = minutosCalculados % totalMinutos;

console.log(`${horas}:${minutos}:${segundos}`);