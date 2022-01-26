// ЗАДАНИЕ 6

const arrSrc = [1, 1];
console.log(duplicatedResults(arrSrc));

function duplicatedResults(arr) {
  if (!Array.isArray(arrSrc)) { /* проверяем являются ли входные данные массивом */
    console.log('это не массив');
    return;
  } 

  if (arr.length === 0) { /* проверяем что массив не пустой */
    console.log('массив не содержит элементов');
    return;
  }

  let firstItem = arr[0]; /* элемент с индексом 0, который будет сравниваться */
  for (var i = 1; i < arr.length; i++) { /* элемент массива, с которым будет сравниваться элемент с индексом 0, начинаем с индекса 1 */
    if (firstItem != arr[i]) {
      return false;
    }
  }
  
  return true;
}