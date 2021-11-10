var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var r = Number(lines.shift());
var pi = 3.14159;
var total = (4.0 / 3.0) * pi * (r * r * r);
console.log(`VOLUME = ${total.toFixed(3)}`);
