/*
Реализуйте функцию getOlderUser(), которая принимает на вход двух пользователей и возвращает того, который старше. Если пользователи являются ровесниками, то возвращается null:

const user1 = { name: 'Petr', age: 8 };
Определите для пользователя псевдоним, чтобы не дублировать определение его типа в параметрах функции.
*/

// BEGIN (write your solution here)
type User = {
    name: string,
    age: number,
};

function getOlderUser(user1: User, user2: User): User | null {
    if (user1.age > user2.age) {
        return user1;
    }
    if (user2.age > user1.age) {
        return user2;
    }

    return null;
}
// END

export type { User };
export default getOlderUser;
