/*
Реализуйте функцию isPlainObject(), которая проверяет, является ли переданное значение объектом. Эта функция считает, что массив не объект:

isPlainObject(1); // false
isPlainObject('hexlet'); // false
isPlainObject({}); // true
isPlainObject({ name: 'code-basics' }); // true
isPlainObject([1, 8]); // false
*/

// BEGIN (write your solution here)
function isPlainObject(value: unknown): boolean {
    return value instanceof Object && !Array.isArray(value);
}
// END

export default isPlainObject;
