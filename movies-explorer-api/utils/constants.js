const options = {
  origin: [
    'http://localhost:3001',
  ],
  credentials: true,
};

const SecretKey = 'some-secret-key';

const ServerCrash = 'На сервере произошла ошибка';
const IncorrectEmailPassword = 'Неправильный e-mail или пароль';
const EnterEmail = 'Введите e-mail';
const IncorrectLinkFormat = 'Некорректный формат ссылки';
const CanNotFind = 'Ничего не найдено';
const ServerError = 'На сервере произошла ошибка';
const AuthError = 'Необходима авторизация';
const IncorrectLoginPassword = 'Неправильный e-mail или пароль';
const NotFoundUser = 'Пользователь не найден';
const NotFoundMovie = 'Фильм не найден';
const EditProfileError = 'При обновлении профиля произошла ошибка';
const IncorrectUserData = 'Переданы некорректные данные ждя создания пользователя';
const IncorrectMoviesData = 'Переданы некорректные данные для создания фильма';
const UsedEmail = 'Пользователь с данным e-mail уже существует';
const DeletedToken = 'Токен удалён';
const SomethingWrong = 'Что-то пошло не так';
const ForbiddenDeleteMovie = 'Недостаточно прав для удаления фильма';
const MovieIsRemoved = 'Фильм удалён';

module.exports = {
  options,
  SecretKey,
  ServerCrash,
  IncorrectEmailPassword,
  EnterEmail,
  IncorrectLinkFormat,
  CanNotFind,
  ServerError,
  AuthError,
  IncorrectLoginPassword,
  NotFoundUser,
  NotFoundMovie,
  EditProfileError,
  IncorrectUserData,
  IncorrectMoviesData,
  UsedEmail,
  DeletedToken,
  SomethingWrong,
  ForbiddenDeleteMovie,
  MovieIsRemoved,
};
