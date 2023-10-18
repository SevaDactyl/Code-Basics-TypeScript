/*
Попробуйте самостоятельно определить функцию forEach() для чисел:

forEach([1, 2, 3], (n) => console.log(n));
// 1
// 2
// 3

const result = [];
forEach([1, 2, 3], (n) => result.push(n));
// [1, 2, 3]
Параметры функции:

Массив чисел
Анонимная функция, которая принимает на вход число и возвращает void. У этой функции есть необязательный параметр — индекс элемента в массиве
forEach([8, 9], (n, index) => console.log(index + n));
// 8
// 10
*/

// BEGIN (write your solution here)
function forEach(numbers: number[], callback: (n: number, index: number) => void): void {
    numbers.forEach((n, index) => callback(n, index));
}
// END

export default forEach;
