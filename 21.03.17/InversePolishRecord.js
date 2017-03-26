"use strict";

function readMass (value){

let arrayReader = value.split(" ");
let number = [];
let errorMes = {failure: 'Ошибка: в функцию передаётся дробное число' }
let errorNum = {failure: 'Последовательность передачи числовых значений не верна' }
let errorCount = {failure: 'В стеке yаходится не один элемент'}
for (let i = 0; i < arrayReader.length; i++){
if(arrayReader[i] % 1 == 0 
|| arrayReader[i] == '+'
|| arrayReader[i] == '-'
|| arrayReader[i] == '*'
|| arrayReader[i] == '/'){
    number.push(+arrayReader[i]);
switch (arrayReader[i]){
case '+' : if(!isNaN(number[number.length - 3] ) && !isNaN(number[number.length - 2] )){
number[number.length - 3] += number[number.length - 2];
number.pop();
number.pop();
}
else {throw new Error(errorNum.failure)}
break;
case '-' : if(!isNaN(number[number.length - 3] ) && !isNaN(number[number.length - 2] )){
number[number.length - 3] -= number[number.length - 2];
number.pop();
number.pop();
}
else {throw new Error(errorNum.failure)}
break;
case '*' : if(!isNaN(number[number.length - 3] ) && !isNaN(number[number.length - 2] )){ 
number[number.length - 3] *= number[number.length - 2];
number.pop();
number.pop();
}
else {throw new Error(errorNum.failure)}
break;
case '/' : if(!isNaN(number[number.length - 3] ) && !isNaN(number[number.length - 2] )){
number[number.length - 3] /= number[number.length - 2];
number.pop();
number.pop();
}
else {throw new Error(errorNum.failure)}
break;
}
}
else {throw new Error(errorMes.failure); }
}
if(number.length > 1){
    throw new Error(errorCount.failure);
}
else console.log(number[0])
}

readMass('234 345 456 + + 5 / 10');