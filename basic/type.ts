/**
 * 1. If the type is set to any,type verification is disabled.
 */
let x: any = "hello";
x = 100; // no error.

/**
 * 2. Type inference defaults to any if no type is specified or cannot be recommended.
 */
function add(x: any, y) {
  //  Parameter y implicitly has an any type.
  return x + y;
}

add("c", [1, 2, 3]); // no error.

/**
 * 3. Any type pollution,if the type is set to any that can be value for every type variable.
 * To prevent this, use unknown.
 */
let tempAny: any = 123;
let tempString: string = "nihao";
tempString = tempAny;
console.log(tempString); // print 123

let tempUnknown: unknown = 123;
// tempString = tempUnknown; // error: Type unknown is not assignable to type string
