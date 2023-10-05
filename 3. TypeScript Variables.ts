/*
Допишите тело функции repeat(), которая повторяет строку указанное количество раз. Функция должна возвращать полученный результат. Постарайтесь не использовать встроенные методы, для такой реализации вам понадобится цикл.

repeat('hexlet', 2); // hexlethexlet
repeat('wo', 3); // wowowo
*/

/* eslint-disable @typescript-eslint/explicit-function-return-type */

function repeat(text: string, count: number) {
  // BEGIN (write your solution here)
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += text;
  }

  return result;

  // END
}

export default repeat;
