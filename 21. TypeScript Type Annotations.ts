/*
Реализуйте функцию uniq(), которая убирает дубликаты из массива. Функция принимает на вход массив чисел и строк. Результатом работы функции должен быть новый массив, в котором сохраняется только первое вхождение каждого элемента. Порядок значений результата определяется порядком их появления в массиве.

uniq([9, 9, 3, 8, 8]); // [9, 3, 8]
uniq(['twinkle', 'twinkle', 'little', 'bat']); // ['twinkle', 'little', 'bat']
uniq([1, 1, 3, 'oops!']); // [1, 3, 'oops!']
*/

// BEGIN (write your solution here)
function uniq(coll: (number | string)[]): (number | string)[] {
    const init: (number | string)[] = [];

    return coll.reduce(
        (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
        init,
    );
}
// END

export default uniq;
