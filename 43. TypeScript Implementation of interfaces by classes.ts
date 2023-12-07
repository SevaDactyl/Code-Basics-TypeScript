/*
С помощью предоставленного интерфейса IPhonebook и типа Entry реализуйте класс Phonebook, который представляет телефонный справочник со следующими свойствами:

entries — база данных, объект, записи в котором представляют собой имена в качестве ключей и телефоны в качестве значений. Свойство должно быть неизменяемым и доступным только для чтения
get — метод, возвращающий телефон по имени
set — метод, записывающий имя и телефон в справочник
Примеры:
typescript
const myNote = new Phonebook();
myNote.set('help', 911);
myNote.get('help'); // 911
*/

type Entry = {
  [key: string]: number
};

interface IPhonebook {
  get(key: string): number | null
  set(key: string, value: number): void
}

// BEGIN (write your solution here)
class Phonebook implements IPhonebook {
  private readonly entries: Entry = {};

  get(key: string): number | null {
    return key in this.entries ? this.entries[key] : null;
  }

  set(key: string, value: number): void {
    this.entries[key] = value;
  }
}
// END

export default Phonebook;
