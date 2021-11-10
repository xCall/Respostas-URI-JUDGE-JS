var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const value = lines.shift().split(" ");

const A = parseFloat(value[0]);
const B = parseFloat(value[1]);
const C = parseFloat(value[2]);

const PI = 3.14159;

const triangulo = (A * C) / 2;
const circulo = C * C * PI;
const trapezio = ((A + B) * C) / 2;
const quadrado = B * B;
const retangulo = A * B;
console.log(
  `TRIANGULO: ${triangulo.toFixed(3)}\nCIRCULO: ${circulo.toFixed(3)}\nTRAPEZIO: ${trapezio.toFixed(3)}\nQUADRADO: ${quadrado.toFixed(3)}\nRETANGULO: ${retangulo.toFixed(3)}`
);