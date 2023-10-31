/*
Реализуйте функцию reverse(), которая переворачивает массив. Технически она должна возвращать новый массив, в котором элементы расположены в обратном порядке. Используйте модификатор readonly для входящего массива. Не используйте встроенный метод reverse().

reverse([1, 2, 8]); // [8, 2, 1]
reverse([10, 33, 7, 0]); // [0, 7, 33, 10]
*/

// BEGIN (write your solution here)
function reverse(coll: readonly number[]): number[] {
    return coll.map((_, index) => coll[coll.length - 1 - index]);
}
// END

export default reverse;
