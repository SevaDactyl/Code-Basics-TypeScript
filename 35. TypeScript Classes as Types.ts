/*
Реализуйте класс CustomFile, в конструктор которого передается имя файла и размер в байтах или другой файл. Внутри класса определите метод toString(), который должен вернуть форматированную строку в формате (copy) <file-name> (<size> bytes). (copy) должно выводиться только в том случае, если файл является копией другого файла.

const file = new CustomFile({ name: 'open-world.jpeg', size: 1000 });
console.log(file.toString()); // open-world.jpeg (1000 bytes)

const file2 = new CustomFile(file);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)

const file3 = new CustomFile(file2);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)
*/

// BEGIN (write your solution here)
type OptionName = string;
type OptionSize = number;
type CustomFileOptions = { name: OptionName, size: OptionSize };

class CustomFile {
    name: OptionName;

    size: OptionSize;

    private isCopy: boolean;

    constructor(options: CustomFileOptions) {
        this.name = options.name;
        this.size = options.size;
        this.isCopy = (options instanceof CustomFile);
    }

    toString(): string {
        const copyString = this.isCopy ? '(copy) ' : '';
        return `${copyString}${this.name} (${this.size} bytes)`;
    }
}
// END

export default CustomFile;
