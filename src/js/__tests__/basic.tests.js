import ErrorRepository from '../ErrorRepository';

test('check class ErrorRepository', () => {
  function checkErrors() {
    const err = new ErrorRepository();
    err.errors.set(1, 'Ошибка создания персонажа!');
    err.errors.set(2, 'Неправильно выбрано имя!');

    return err.translate(1);
  }

  expect(checkErrors()).toEqual('Ошибка создания персонажа!');
});

test('check class ErrorRepository', () => {
  function checkErrors() {
    const err = new ErrorRepository();
    err.errors.set(1, 'Ошибка создания персонажа!');
    err.errors.set(2, 'Неправильно выбрано имя!');

    return err.translate(5);
  }

  expect(checkErrors()).toEqual('Unknown error');
});
