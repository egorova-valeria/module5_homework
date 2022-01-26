// ЗАДАНИЕ 8

myMap = new Map();
myMap.set(1, 'понедельник');
myMap.set(2, 'вторник');
myMap.set(3, 'среда');
myMap.set(4, 'четверг');
myMap.set(5, 'пятница');
myMap.set(6, 'суббота');
myMap.set(7, 'воскресенье');

// способ 1
for (let pair of myMap) {
  console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`)
};

// способ 2
// myMap.forEach((value, key) => {
//   console.log('Ключ - ' + key + ', ' + 'значение - ' + value)
// });

// способ 3
// for (let pair of myMap.entries()) {
//   console.log(`Ключ - ${pair[0]}, значение - ${pair[1]}`)
// };