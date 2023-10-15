/*
Реализуйте namespace Company, в котором экспортируется функция isEmployeeEmail(). Функция принимает почту и домен. Если емейл пользователя содержит указанный домен, то функция возвращает true:

Company.isEmployeeEmail('tirion@hexlet.io', 'hexlet.io');
// true

Company.isEmployeeEmail('user@example.com', 'hexlet.io');
// false
*/

/* eslint-disable @typescript-eslint/no-namespace */
// BEGIN (write your solution here)
namespace Company {
  export function isEmployeeEmail(email: string, domain: string): boolean {
    return email.endsWith(`@${domain}`);
  }
}
// END

type User = {
  email: string
};

function authorize(user: User | null): boolean {
  const companyDomain = 'hexlet.io';

  const email = user?.email ?? '';

  return Company.isEmployeeEmail(email, companyDomain);
}

export default authorize;
