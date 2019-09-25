let X = prompt("Введите число", "");
let Y = prompt("Введите число", "");
let Z = prompt("Введите число", "");
if (X===Y || Y===Z || Z===X)
alert ("есть два одинаковых числа")
else if (X>Y && X>Z) {
alert ("X наибольшее число");
}
else if(Y>X && Y>Z) {
alert ("Y наибольшее число");
}
else {
alert ("Z наибольшее число");
}
