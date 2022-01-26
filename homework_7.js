// ЗАДАНИЕ 7

const arrSrc = [1, 2, 2, 4];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

 arrSrc.forEach((item) => {
    if (typeof item === 'number' && !Number.isNaN(item)) { 
      if (item === 0) {
        zeroCount++;
      } else { 
        if (item % 2 === 0) {
          evenCount++;
        } else {
          oddCount++;
        }
      }  
    } else {
        console.log('Массив не содержит чисел');
    }  
 })

    console.log('Количество четных элементов равно' + ' ' + evenCount);
    console.log('Количество нечетных элементов равно' + ' ' + oddCount);
    console.log('Количество нулевых элементов равно' + ' ' + zeroCount);

