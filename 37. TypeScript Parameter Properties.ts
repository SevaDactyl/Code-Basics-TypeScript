/*
Реализуйте класс CustomFile, в конструктор которого передается имя файла и размер в байтах. Внутри класса определите метод toString(), который должен вернуть форматированную строку в формате <file-name> (<size> bytes). Используйте свойства параметров для заполнения свойств класса.

const file = new CustomFile('open-world.jpeg', 1000);
console.log(file); // open-world.jpeg (1000 bytes)
*/

// BEGIN (write your solution here)
class CustomFile {
    constructor(private name: string, private size: number) { }

    toString() {
        return `${this.name} (${this.size} bytes)`;
    }
}
// END

export default CustomFile;
