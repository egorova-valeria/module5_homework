// ЗАДАНИЕ 1

// объявляем переменную, приобразовываем в число 
let value = +prompt('Введите значение'); 
// проверяем тип переменной
if (typeof value === 'number' && !Number.isNaN(value)) {
  console.log(value + ' ' + isEven(value) + ' число');
} else {
  console.log('Упс, кажется, вы ошиблись');
}

// функция дял проверки числа на четность/нечетность
  function isEven(value) {
    return value % 2 === 0 ? 'четное' : 'нечетное';
  }