/*
Реализуйте функцию fail(), которая выбрасывает любое исключение. Пропишете ее возвращаемый тип явно.
*/

// BEGIN (write your solution here)
function fail(): never {
    throw new Error('wow');
}
// END

export default fail;
