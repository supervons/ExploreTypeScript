/**
 * 1. Array member type must belong declaration.
 */
let arr: number[] = [1, 2, 3]; // success
// let arr1: number[] = [1, 2, "3"]; // error
let arr2: (string | number)[] = [1, 2, "3-1"]; // success
console.log(arr2); // [ 1, 2, '3' ]

if (typeof arr2[2] === "string") {
  const temp = arr2[2].split("-");
  console.log(temp);
}

/**
 * 2. Dynamic array length.
 */
let arr3: number[] = [1, 2, 3];

arr3[3] = 4;
arr3.length = 2;

console.log(arr3); // [ 1, 2 ]

// Array boundaries are not checked.
let arr4 = [1, 2, 3, ""];
let foo = arr4[4]; // success
console.log(foo);

/**
 * 3. Readonly array.
 */
const arr5: readonly number[] = [0, 1];

// arr5[1] = 2; // error
// arr5.push(3); // error
// delete arr5[0]; // error
