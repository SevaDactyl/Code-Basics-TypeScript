/*
Реализуйте описание обощенного типа MyArray, который представляет аналог массива из JavaScript. Пример использования объекта этого типа:

const coll: MyArray<number> = ...;
coll.push(1); // 1
coll.push(10); // 2
coll.push(99); // 3

const newColl = coll.filter((value) => value % 2 == 0);
console.log(newColl.items); // [10]
Тип включает в себя два метода: push() и filter(), совпадающие по сигнатуре с методами Array. Данные внутри должны храниться в свойстве items. Для push() примем соглашение, что метод принимает только один параметр. Игнорируйте остальные параметры.
*/

// BEGIN (write your solution here)
type MyArray<T> = {
    items: Array<T>;
    push(value: T): number;
    filter(callback: (value: T, index: number, array: Array<T>) => boolean): MyArray<T>;
};
// END

export default MyArray;
