var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var nome = lines.shift();
var salario = parseFloat(lines.shift());
var venda = parseFloat(lines.shift());

var salarioBonus = salario + (venda * 15) / 100;

console.log(`TOTAL = R$ ${salarioBonus.toFixed(2)}`);
