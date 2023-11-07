/*
Реализуйте функцию lastIndex(str, char), которая возвращает индекс последнего вхождения символа в строку или null, если такого символа нет.

const str = 'test';
lastIndex(str, 't'); // 3
lastIndex(str, 'p'); // null
*/

// BEGIN (write your solution here)
function lastIndex(str: string, char: string): number | null {
    const index = str.lastIndexOf(char);
    return index === -1 ? null : index;
}
// END

export default lastIndex;
