export type AppException = "user-not-found" | "cant-use-local-storage";

export type ExceptionType = "not-found";

export function getExceptionByType(type: ExceptionType | AppException): Error {
  switch (type) {
    case "user-not-found":
      return new Error("Пользователь не найден или не верный логин или пароль");
    case "not-found":
      return new Error("Мы ничего не смогли найти ;(");
    case "not-found":
      return new Error("Мы не можем использовать LocalStorage");
  }

  return new Error("Упс... что-то пошло не так");
}
