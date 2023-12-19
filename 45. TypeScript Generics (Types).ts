/*
Реализуйте описание обобщенного типа MySet, который представляет из себя аналог множества Set из JavaScript. Пример использования объекта этого типа:

const s: MySet<number> = ...;
// Добавление возвращает количество элементов
s.add(1); // 1
s.add(10); // 2

s.has(1); // true
s.has(8); // false
Тип включает в себя два метода: add() и has(). Данные внутри должны храниться в свойстве items.
*/

// BEGIN (write your solution here)
type MySet<T> = {
    items: Array<T>;
    has(value: T): boolean;
    add(value: T): number;
};
// END

export default MySet;
