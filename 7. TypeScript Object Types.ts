/*
Реализуйте функцию isComplete(), которая принимает на вход курс и определяет, завершен ли он. Завершенным считается курс, в который добавлено четыре или более уроков:

// Определите тип исходя из структуры объекта
const course = {
  name: 'Java',
  lessons: ['variables', 'functions', 'conditions'],
};
isComplete(course); // false
*/

// BEGIN (write your solution here)
function isComplete(course: { name: string, lessons: string[] }): boolean {
    return course.lessons.length >= 4;
}
// END

export default isComplete;
