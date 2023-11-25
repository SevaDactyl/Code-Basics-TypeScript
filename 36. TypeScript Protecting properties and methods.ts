/*
Реализуйте класс ImageCustomFile, который расширяет (extends) класс CustomFile дополнительными приватными полями: width, height. Также переопределите метод toString(). Теперь он должен дополнительно выводить <width>x<height>.

const imageCustomFile = new ImageCustomFile({
  name: 'image.png',
  size: 100,
  width: 200,
  height: 300,
});
console.log(imageCustomFile.toString()); // image.png (100 bytes) 200x300
Чтобы вызвать метод родительского класса, используйте super.toString().
*/

/* eslint-disable max-classes-per-file */

type CustomFileOptions = {
  name: string;
  size: number;
};

class CustomFile {
  private name: string;

  private size: number;

  constructor(options: CustomFileOptions) {
    this.name = options.name;
    this.size = options.size;
  }

  protected toString() {
    return `${this.name} (${this.size} bytes)`;
  }
}

// BEGIN (write your solution here)
class ImageCustomFile extends CustomFile {
  private width: number;

  private height: number;

  constructor(options: CustomFileOptions & { width: number; height: number }) {
    super(options);
    this.width = options.width;
    this.height = options.height;
  }

  toString() {
    return `${super.toString()} ${this.width}x${this.height}`;
  }
}
// END

export default ImageCustomFile;
