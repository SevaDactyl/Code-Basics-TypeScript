/*
Реализуйте функцию makeTurn(), которая принимает строку left или right и перемещает черепашку вперед-назад по одномерному массиву фиксированного размера с пятью элементами. Если черепашка выходит за пределы массива, то выбрасывается исключение.

const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]

makeTurn('left') // ERROR

makeTurn('right');
makeTurn('right');
console.log(state); // [null, null, 'turtle', null, null]
*/

type Turtle = 'turtle' | null;

type Game = {
  makeTurn: (direction: 'left' | 'right') => void;
  state: Array<Turtle>;
};

const startGame = (): Game => {
  const state: Array<Turtle> = ['turtle', null, null, null, null];

  // BEGIN (write your solution here)
  const makeTurn = (direction: 'left' | 'right'): void => {
    const turtleIndex = state.indexOf('turtle');
    const nextIndex = direction === 'left' ? turtleIndex - 1 : turtleIndex + 1;

    if (nextIndex < 0 || nextIndex > 4) {
      throw new Error('Out of bounds');
    }

    state[turtleIndex] = null;
    state[nextIndex] = 'turtle';
  };
  // END

  return { makeTurn, state };
};

export default startGame;
