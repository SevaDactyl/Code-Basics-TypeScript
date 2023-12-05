/*
Вам даны несколько интерфейсов. На их основе создайте интерфейс ISuperman. ISuperMan должен иметь метод guessWho, принимающий и возвращающий строку.

На основе интерфейса ISuperMan создайте объект superMan. Метод guessWho должен работать следующим образом: если в качестве строки в аргументе приходит любое значение кроме superman (в любом регистре), то следует вернуть предположение "It's a ${value}?", иначе "It's a ${value}!".

console.log(superMan.guessWho('bird')); // "It's a bird?";
console.log(superMan.guessWho('plane')); "It's a plane?";
console.log(superMan.guessWho('superman')); "It's a superman!";(200)); // 40
*/

interface IFlying {
  canFly: true;
}

interface IBird extends IFlying {
  isLiving: true;
}

interface IPlane extends IFlying {
  canCarryPeople: true;
}

// BEGIN (write your solution here)
interface ISuperman extends
  IBird, IPlane {
  guessWho: (guess: string) => string;
}

const superMan: ISuperman = {
  canFly: true,
  isLiving: true,
  canCarryPeople: true,
  guessWho: (guess) => (guess.toLowerCase() !== 'superman' ? `It's a ${guess}?` : `It's a ${guess}!`),
};
// END

export default superMan;
