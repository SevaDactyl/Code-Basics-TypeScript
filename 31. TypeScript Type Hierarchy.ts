/*
Реализуйте функцию getUserFriends(userResponseJSON, userId), которая принимает на вход JSON-строку и userId пользователя. JSON содержит массив пользователей users и с массив друзей friends в виде пар [userId, userId]. Функция возвращает список друзей пользователя по переданному userId`.

Если пользователь с указанным id не найден, то функция должна вернуть пустой массив.

const userJson = JSON.stringify({
  users: [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Mary', age: 21 },
  ],
  friends: [
    [1, 2],
  ],
});

getUserFriends(userJson, 1); // [{ id: 2, name: 'Mary', age: 21 }]
getUserFriends(userJson, 2); // [{ id: 1, name: 'John', age: 20 }]
getUserFriends(userJson, 3); // []
*/

type User = {
  id: number,
  name: string,
  age: number,
};

type Friends = [number, number];

export type UserResponse = {
  users: User[],
  friends: Friends[]
};

// BEGIN (write your solution here)
const defaultUser = { id: 0, name: '', age: 0 };
const getUserFriends = (userResponseJSON: string, userId: number): User[] => {
  const userResponse = JSON.parse(userResponseJSON) as UserResponse;

  return userResponse.friends
    .map(([ownerId, friendId]: Friends): User => {
      if (!(userId === ownerId || userId === friendId)) return defaultUser;
      const searchId = (ownerId === userId) ? friendId : ownerId;
      const friend: User | undefined = userResponse.users.find(({ id }) => id === searchId);

      return friend === undefined ? defaultUser : friend;
    })
    .filter((user: User) => user.id > 0);
};
// END

export default getUserFriends;
