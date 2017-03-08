
"use strict";

function convert (source)               //обьявляем функцию с принимаемым параметром
{
let arayBit = source.split('');         //параметр переводим в массив символов
arayBit.reverse();            //инвертируем массив символов

for(let i = 0; i < arayBit.length; i++){ //в цикле перебираетм масив символов

if (arayBit[i] == 1 || arayBit[i] == 0){} //проверяем на наличие символов 1 или 0 и ничего не делаем
else{return undefined;}                   //выбрасывае  ошибку undefined 
}

return parseInt(source, 2).toString(); //Самый простой способ
//return console.log(parseInt(source).toString(2));
}

let num =  convert('01010101010');
console.log(num);