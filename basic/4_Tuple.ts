export {};
/**
 * 1. Basic usage.
 */
const s: [string, string, boolean] = ["a", "b", true];
console.log(s); // [ 'a', 'b', true ]

/**
 * 2. Optional member.
 */
const s1: [string, string, boolean?] = ["a", "b"];
// s1[3] = 123; // error
console.log(s1); // [ 'a', 'b' ]

/**
 * 3. Unlimited member need use（...）.
 */
const s3: [string, ...number[]] = ["A", 1, 2];
s3[6] = 7; // success
console.log(s3); // [ 'A', 1, 2, <3 empty items>, 7 ]

const arr: [number, number] = [1, 2];
const arr1 = [1, 2];

function add(x: number, y: number) {
  // ...
}
// add(...arr1); // error, array member not sure.
add(...arr);
