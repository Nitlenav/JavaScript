"use strict";

function readString(value){

   let message = {failure: 'Сторка пуста;('};
    let a = value.split(' ');
    let count = 0;
    let strin = "";
  if (a.length === 0){ throw new Error(message.failure); }
    else { let counrStr ='';
        for(let i = 0; i < a.length;i++ ){
        counrStr = a[i];
        let str = new RegExp(counrStr, "g");
        let num = value.match(str).length
        if ( num >= count && counrStr.length > strin.length){
            count = num;
            strin = counrStr;
        }
        }
    }
console.log('Строка ' + strin + ' встречается '+ count + ' раза.');
}

 readString('Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas finibus lorem non tempor tincidunt aera');