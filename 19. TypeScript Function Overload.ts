/*
Реализуйте функцию newYearCongratulate(), которая аналогична примеру на Kotlin из теории:

sayHello('John'); // Hi John! Happy New Year!
sayHello(2023, 'Mila'); // Hi Mila! Happy New Year 2023!
*/

/* eslint-disable @typescript-eslint/restrict-template-expressions */

// BEGIN (write your solution here)
function newYearCongratulate(name: string): string;
function newYearCongratulate(year: number, name: string): string;
function newYearCongratulate(data1: string | number, data2?: string): string {
    if (typeof data1 === 'number') {
        return `Hi ${data2}! Happy New Year ${data1}!`;
    }

    return `Hi ${data1}! Happy New Year!`;
}
// END

export default newYearCongratulate;
