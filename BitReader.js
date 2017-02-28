

var bit = '01010101010'; // Сюда вводим число
var arayBit = bit.split('');
arayBit.reverse();
var numb = 0;
var a = arayBit.indexOf('2');
var b = arayBit.indexOf('3');
var c = arayBit.indexOf('4');
var d = arayBit.indexOf('5');
var f = arayBit.indexOf('6');
var g = arayBit.indexOf('7');
var h = arayBit.indexOf('8');
var i = arayBit.indexOf('9');
if (a <= -1 && b <= -1 && c <= -1 && d <= -1 && f <= -1 && g <= -1 && h <= -1 && i <= -1)
{
console.log(parseInt(bit, 2).toString()); //Самый простой способ
}
else 
{ 
var str = parseInt(bit).toString(2);
console.log(str);
}
