/**
 * 1. 一旦值设置成 any，将会关闭对其类型检查。
 */
let x:any = 'hello';
x = 100; // 不报错

/**
 * 2. 类型推断，如果没有指定类型或无法推荐，则为 any。
 */
function add(x: any, y) { //  Parameter y implicitly has an any type.
    return x + y;
}

add('c', [1, 2, 3]) // 不报错
