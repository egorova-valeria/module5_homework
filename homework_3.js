// ЗАДАНИЕ 3

let str = "Переверни меня";
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString(str))