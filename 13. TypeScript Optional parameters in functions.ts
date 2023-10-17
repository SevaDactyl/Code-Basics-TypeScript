/*
Реализуйте функцию map(). Она должна принимать на вход массив чисел и колбек, который будет использоваться для преобразования каждого числа из массива в другое число. Функция возвращает массив с новыми числами:

map([3, 9], (n) => n - 3);
// [0, 6]

map([8, 9], (n) => n + 8);
// [16, 17]
Параметры функции:

Массив чисел
Анонимная функция, которая принимает на вход число и возвращает число. У этой функции есть необязательный параметр — индекс элемента в массиве
map([8, 9], (n, index) => index + n);
// [8, 10]
*/

/* eslint-disable @typescript-eslint/no-explicit-any */

// BEGIN (write your solution here)
function map(numbers: number[], callback: (n: number, index: number) => number): number[] {
    const result: number[] = [];
    numbers.forEach((n, index) => result.push(callback(n, index)));
    return result;
}
// END

export default map;
