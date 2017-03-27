"use strict";


function readScobe(arrayScobe){
    let mas = arrayScobe.split('');
    let masSort = [];
    for(let i = 0; i < mas.length; i++){
        switch (mas[i]){
            case '{': masSort.push(mas[i]);
            break;
            case '[': masSort.push(mas[i]);
            break;
            case '(': masSort.push(mas[i]);
            break;

            case '}':  let a = masSort.pop();
                if (a != "{") { return false;}
            break;

            case ']':   let b =  masSort.pop();
                if (b != "[") { return false;}
            break;

            case ')': let c =masSort.pop();
                if (c != "(") { return false;}
            break;
        }   
    }
if (masSort.length == 0){
    return true;
}
else return false;
}
console.log(readScobe("{()}[[]]"));