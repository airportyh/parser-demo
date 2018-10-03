
// function pow(n) {
//     return function(m) {
//         return Math.pow(n, m);
//     };
// }

function pow(n) {
    return Math.pow.bind(null, n);
}

function diffSquared(x, y) {
    return Math.pow(x - y, 2);
}

function curry(fn, ...fixedArgs) {
    return function(...restArgs) {
        const args = [...fixedArgs, ...restArgs];
        return fn(...args);
    }
}

let diffSquared4 = curry(diffSquared, 8);
console.log(diffSquared4(5));
// let pow2 = pow(2);
// console.log(pow2(4));

// pow2 = pow(2);
// console.log(pow2(4));

// // function (2, func) {
// //     ...
// //     return func.bind(null, 2);
// // }