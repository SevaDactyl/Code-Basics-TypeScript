/*
Реализуйте дженерик last(), который извлекает последний элемент из массива если он есть или null — если его нет:

last([]); // null
last([3, 2]); // 2
last(['code-basics', 'hexlet']); // hexlet
*/

// BEGIN (write your solution here)
function last<T>(coll: Array<T>): T | null {
    return coll.length > 0 ? coll[coll.length - 1] : null;
}
// END

export default last;
