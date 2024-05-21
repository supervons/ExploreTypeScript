/**
 * 1. Need params type and return type.
 */
function sayHello(txt: string): void {
  console.log("hello " + txt);
}

sayHello("world!");

/**
 * 2. Variable function.
 */
// a
const sayHelloA = function (txt: string) {
  console.log("hello a " + txt);
};

// b
const sayHelloB: (txt: string) => void = function (txt) {
  console.log("hello b " + txt);
};
sayHelloA("zhangsan"); // hello a zhangsan
sayHelloB("lisi"); // hello b lisi

/**
 * 3. Omit parameter.
 */
let myFunc: (a: number, b: number) => number;

myFunc = (a: number) => a; // correct

// myFunc = (a: number, b: number, c: number) => a + b + c; // error

/**
 * 4. Function props.
 */
function f(x: number) {
  console.log(x);
}

let foo2: {
  (x: number): void;
  version: string;
} = f;

f.version = "1.0";
console.log(foo2); // [Function: f] { version: '1.0' }

/**
 * 5. Arrow function.
 */
const repeat = (str: string, times: number): string => str.repeat(times);

console.log(repeat("h", 5)); // hhhhh

function greet(fn: (a: string) => void): void {
  fn("world");
}

greet((temp) => {
  console.log(`hello, ${temp}`); // hello, world
});

/**
 * 6. Optional parameter.
 * Must follow mandatory parameter.
 */
function f1(x?: number) {
  return x;
}
console.log(f1()); // undefined
console.log(f1(3)); // 3

/**
 * 7. Default parameter.
 */

function f2(x: number = 1) {
  return x;
}
console.log(f2()); // 1
console.log(f2(undefined)); // 1
console.log(f2(3)); // 3

/**
 * 8. Parameter deconstruction.
 */
function f3([x, y]: [number, number]) {
  // ...
}
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
sum({ a: 34, b: 4, c: 5 });

// 9. StrictNullChecks

function fNullChecks():void {
  return undefined; // 正确
}

// function f():void {
//   return null; // 报错
// }