var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift());
var horas = parseFloat(lines.shift());
var valor = parseFloat(lines.shift());

var salario = horas * valor;

console.log(`NUMBER = ${number}\nSALARY = U$ ${salario.toFixed(2)}`);