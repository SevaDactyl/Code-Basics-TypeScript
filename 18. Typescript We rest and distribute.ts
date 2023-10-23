/*
Определите функцию max(), которая отличается от примера из урока только тем, что у нее первый параметр обязательный.

Например:

max(1,2,3);
max(234);
*/

// BEGIN (write your solution here)
function max(first: number, ...rest: number[]): number {
    return Math.max(first, ...rest);
}
// END

export default max;
