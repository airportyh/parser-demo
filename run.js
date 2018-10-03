const parser = require("./grammar");
const fs = require("fs");
const util = require("util");

const fnMap = {
    sqr: (n) => n * n,
    pow: Math.pow,
    sin: Math.sin
};

const code = fs.readFileSync("./example.code") + "";
const ast = parser.parse(code);
console.log(util.inspect(ast, { depth: 10 }));
console.log(evaluate(ast));

function evaluate(node) {
    if (typeof node === "number") {
        return node;
    } else if (typeof node === "string") {
        return 42;
    } else if (node.type === 'function_call') {
        const args = node.args.map(evaluate);
        return fnMap[node.fn](...args);
    } else if (node.type === 'bin_op') {
        const lhs = evaluate(node.lhs);
        const rhs = evaluate(node.rhs);
        const op = node.op;
        if (op === "+") {
            return lhs + rhs;
        } else if (op === "-") {
            return lhs - rhs;
        } else if (op === "*") {
            return lhs * rhs;
        } else if (op === "/") {
            return lhs / rhs;
        }
    } else {
        throw new Error("BLARGS");
    }
}