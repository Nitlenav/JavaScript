"use strict";

function readString(value){

   let message = {failure: 'Сторка пуста;('};
    let a = value.split('');
    let count = 0;
    let strin = "";
  if (a.length === 0){ throw new Error(message.failure); }
    else { let counrStr ='';
        for(let i = 0; i < a.length;i++ ){
        counrStr += a[i];
        let str = new RegExp(counrStr, "g");
        let num = value.match(str).length
        if ( num >= count && counrStr.length > strin.length && (counrStr.length * num == a.length)){
            count = num;
            strin = counrStr;
        }
        }
    }
console.log('Строка ' + strin + ' встречается '+ count + ' раза.');
}

 readString('abcabcabcabc');

