'use strict'

class LinkedList {
constructor(val){
    this.value = val;               //значение
    this.next = null;               //шаг следующий
    this.previous = null;           //шаг предыдущий
    }
}

function DoubleLink(){
this.lenght = -1;                    //длинна
this.head = null;                   //переменная для хранения ссалки на голову
this.tail = null;                   //переменная для хранения ссалки на хвост
}

DoubleLink.prototype.add = function(val) {
let linkedList = new LinkedList(val); //создаём ссылку на обькт LinkedList и передаём значение

if (this.lenght == -1){
this.tail.next = linkedList;
linkedList.previous = this.tail;
this.tail = linkedList;
}
else{
    this.head = linkedList;
    this.tail = linkedList;
}
length++;
return linkedList;
};

DoubleLink.prototype.serchPosition = function(position){
let currentList = this.head;
countPosition = 0;
message = {failure: "Данная позиция отсутствует"}
if(this.lenght === -1 || position < 0 || position > this.lenght){
    throw new Error(message.failure);
}
while(countPosition < position){
    currentList = currentList.next;
    countPosition++;
}
return currentList;
};

DoubleLink.prototype.remove = function(position){
let currentList = this.head;
countPosition = 0;
message = {failure: "Данная позиция отсутствует"};
beforeListToDelete = null;
listToDelete = null;
deletedList = null;

if(this.lenght ===  -1 || position < 0 || position > this.lenght){
    throw new Error(message.failure);
}
if (position == 0){
    this.head = currentList.head;
    if(!this.head){
        this.head.previous = null;
    }else{this.tail = null;}
}else if(position === this.lenght){
    this.tail = this.tail.previous;
    this.tail.next = null;
} else {while (countPosition < position){
    currentList = currentList.next;
    countPosition++;
    beforeListToDelete = currentList.previous;
    listToDelete = currentList;
    afteListToDelete = currentList.next;
    beforeListToDelete.next = afteListToDelete;
    afteListToDelete.previous = beforeListToDelete;
    deletedList = listToDelete;
    listToDelete = null;
}
this.lenght--;
return message.success;
}
};
//DoubleLink
let  node = new DoubleLink();
node.add(10);
node.add(20);
node.serchPosition(0);
