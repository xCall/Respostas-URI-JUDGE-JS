var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var product1 = lines.shift().split(' ');
var codPeca1 = parseInt(product1[0]);
var numPecas1 = parseInt(product1[1]);
var valorUnitPeca1 = parseFloat(product1[2]);

var product2 = lines.shift().split(' ');
var codPeca2 = parseInt(product2[0]);
var numPecas2 = Number(product2[1]);
var valorUnitPeca2 = Number(product2[2]);

var total = (numPecas1 * valorUnitPeca1) + (numPecas2 * valorUnitPeca2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
//console.log(typeof product1);
