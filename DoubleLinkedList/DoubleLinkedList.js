'use strict'

class LinkedList {
constructor(val){
    this.value = val;               //значение
    this.next = null;               //шаг следующий
    this.previous = null;           //шаг предыдущий
    }
}

function DoubleLink(){
this.lenght = 0;                    //длинна
this.head = null;                   //переменная для хранения ссалки на голову
this.tail = null;                   //переменная для хранения ссалки на хвост
}

DoubleLink.prototype.add = function(val) {
let linkedList = new LinkedList(val);

if (this.lenght == 0){
this.tail.next = linkedList;
linkedList.previous = this.tail;
this.tail = linkedList;
}
else{
    this.head = linkedList;
    this.tail = linkedList;
}
length++;

}