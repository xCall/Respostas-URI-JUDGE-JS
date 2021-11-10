var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = Number(lines.shift());
var B = Number(lines.shift());

var PROD = A * B;

console.log(`PROD = ${PROD}`);