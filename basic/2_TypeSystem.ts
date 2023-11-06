/**
 * 1. es2020 new feature bigint, need config target to es2020.
 */
const xInt: bigint = 123n;
console.log(xInt);

/**
 * 2. wrapper object.
 */
const s = new String("123");
const s1 = "123";
console.log(typeof s); // object
console.log(typeof s1); // string
console.log(s == s1); // true
console.log(s === s1); // false
console.log(s1.charAt(2)); // 3

const s3: String = "hello"; // correct
const s4: String = new String("hello"); // correct

const s5: string = "hello"; // correct, recommend use.
// const s6: string = new String("hello"); // wrong TS2322: Type String is not assignable to type string.

const n1: number = 1;
const n2: Number = 1;

Math.abs(n1); // 1
// Math.abs(n2); // 报错

// 3. Object
let obj: {};
obj = "hi";
obj = 1;
obj = () => 1;
// obj = undefined; // error
// obj = null; // error
console.log(typeof obj);

// 4. undefined & null, if you setting strictNullChecks is false, this code no errors.
let obj1: object = {};
obj1 = undefined;
// obj1.toString(); // error : Cannot read property 'toString' of undefined

// 5. value type.
let h: "hello";

h = "hello"; // 正确
// h = "world"; // 报错
const h2 = "https";
console.log(typeof h2); // string

// const x:5 = 4 + 1; // error

// 6. union types.
let nameString: string | null;

nameString = "John";
nameString = null;

let rainbowColor: "赤" | "橙" | "黄" | "绿" | "青" | "蓝" | "紫";

// 7. subtype
let a: "hi" = "hi";
let b: string = "hello";

b = a; // correct
// a = b; // error
