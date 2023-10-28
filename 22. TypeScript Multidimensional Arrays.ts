/*
Реализуйте функцию getField(), которая генерирует игровое поле для крестиков ноликов. Функция принимает на вход размерность поля и возвращает массив массивов нужного размера, заполненный значениями null.

const field1 = getField(1);
console.log(field1);
// [[null]]

const field2 = getField(2);
console.log(field2);
// [[null, null], [null, null]]
*/

// BEGIN (write your solution here)
function getField(size: number): null[][] {
    const row = Array<null>(size).fill(null);
    return Array<null[]>(size).fill(row);
}
// END

export default getField;
