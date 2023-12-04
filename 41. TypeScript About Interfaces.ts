/*
Вам дан интерфейс IVehicle. Задача состоит в том, чтобы на основе этого интерфейса реализовать класс Car, который будет иметь метод calcFuelNeeded, принимающий расстояние в километрах и возвращающий расход топлива на указанную дистанцию. Также у класса Car должна быть функция-конструктор, которая принимает и реализует свойства, указанные в интерфейсе.

const porche = new Car(4, 'red', true, 20);
console.log(porche.calcFuelNeeded(200)); // 40
*/

interface IVehicle {
  seats: number;
  colour: string;
  canHavePassengers: boolean;
  fuelPer100Kilometers: number;
  calcFuelNeeded(distance:number): number;
}

// BEGIN (write your solution here)
class Car implements IVehicle {
  constructor(
    public seats: number,
    public colour: string,
    public canHavePassengers: boolean,
    public fuelPer100Kilometers: number,
  ) { }

  calcFuelNeeded(distance: number) {
    return (this.fuelPer100Kilometers / 100) * distance;
  }
}
// END

export default Car;
