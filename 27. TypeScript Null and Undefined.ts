/*
Реализуйте функцию formatPrice(), которая принимает число и возвращает строку с округлением до второго числа после запятой. Если пришел null или undefined должна вернуться '$0.00'.

formatPrice(3.145); // '$3.15'
formatPrice(200); // '$200.00'
formatPrice(); // '$0.00'
formatPrice(null); // '$0.00'
*/

// BEGIN (write your solution here)
function formatPrice(price?: number | null): string {
    if (price === undefined || price === null) {
        return '$0.00';
    }

    return `$${price.toFixed(2)}`;
}
// END

export default formatPrice;
