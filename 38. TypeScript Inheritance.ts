/*
Реализуйте класс HttpError, который должен наследоваться от встроенного класса Error и принимать первым параметром код ошибки, а вторым — message. Также реализуйте классы NotFoundError, UnauthorizedError, ForbiddenError. Каждый из них должен наследоваться от класса HttpError и иметь свойство status, которое равно коду ошибки и message — сообщение, передающееся в базовый класс. Коды ошибок: 404, 401, 403.

import { NotFoundError } from './errors';

const error = new NotFoundError('Not Found');
console.log(error.status); // 404
console.log(error.message); // Not Found
*/

/* eslint-disable max-classes-per-file */

// BEGIN (write your solution here)
class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

class NotFoundError extends HttpError {
  constructor(message: string) {
    super(404, message);
  }
}

class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(401, message);
  }
}

class ForbiddenError extends HttpError {
  constructor(message: string) {
    super(403, message);
  }
}
// END

export {
  HttpError,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
};
