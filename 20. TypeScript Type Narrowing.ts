/*
Реализуйте функцию last(), которая извлекает последний элемент из переданного значения. Значением может быть строка или число. Функция возвращает значение того же типа, которое было передано в качестве параметра:

// Передаем в качестве параметра строку
// Функция возвращает строку
last('hexlet'); // t

// Передаем в качестве параметра число
// Функция возвращает число
last(12345); // 5
*/

// BEGIN (write your solution here)
function last(value: string | number): string | number {
    if (typeof value === 'number') {
        return value % 10;
    }

    return value[value.length - 1] ?? '';
}
// END

export default last;
