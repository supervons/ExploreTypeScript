/**
 * 1. Base usage.
 */
export {};
let x: symbol = Symbol();
let y: symbol = Symbol();
let y1: string = String();
let y2: string = String();

console.log(y1 === y2); // false

/**
 * 2. Unique symbol
 */
const a: unique symbol = Symbol();
const b: unique symbol = Symbol();
// console.log(a === b); // Error, this comparison appears to be unintentional because the types typeof a and typeof b have no overlap.
// like:
const a1: "hello" = "hello";
const b2: "world" = "world";
// console.log(a1 === b2);
