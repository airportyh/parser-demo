const esprima = require("esprima");
const util = require("util");
const fs = require("fs");
const code = fs.readFileSync("./run.js") + "";
const ast = esprima.parse(code);
console.log(util.inspect(ast, { depth: 10 }));