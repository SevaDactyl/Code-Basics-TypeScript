/*
Другое полезное применение статических свойств и методов — создание фабричных методов. Фабричный метод — это статический метод, который возвращает новый экземпляр класса. Реализуйте класс UserResponse с полем user: string и фабричный метод fromArray, который принимает массив и возвращает массив экземпляров класса UserResponse:

const response = UserResponse.fromArray(['user1', 'user2', 'user3']);
console.log(response[0].user); // user1
console.log(response[0] instanceof UserResponse); // true
*/

// BEGIN (write your solution here)
class UserResponse {
    constructor(public user: string) { }

    static fromArray(users: string[]): UserResponse[] {
        return users.map((user) => new UserResponse(user));
    }
}
// END

export default UserResponse;
