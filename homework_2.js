  // ЗАДАНИЕ 2

  let X = 'hello';
switch (typeof X) {
    case 'number':
        console.log(X + ' - число');
        break;
    case 'string':
        console.log(X + ' - строка');
        break;
    case 'boolean':
        console.log(X + ' - логический тип');
        break;
    default:
        console.log('Тип Х не определен') 
}
