"use strict";


function Node(value) {
    this.data = value;       //данные
    this.next = null;        //указатель на следующий узел 
    this.previous = null;    //указатель на предыдущий узел
              
}

function DoublyList() {
    this._length = 0;       //колличество узлов
    this.head = null;       //указатель на головной элемент в списке
    this.tail = null;       //указатель на конечный элемент в списке
}

DoublyList.prototype = {
    
add : function(value) {
    let node = new Node(value);
    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } 
    else {
        this.head = node;
        this.tail = node;
    }
    this._length++;
    return node;
},

searchNodeAt : function(position) {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Не существующий узел в данном списке ;('}; //сообщение о ошибке


    if (length === 0 || position < 1 || position > length) {     // 1-ый случай: неверная позиция
        throw new Error(message.failure);                        // при выполнении условия выводим ошибку
    }
    
    while (count < position) {                                   // 2-ой случай: верная позиция
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
},

remove : function(position) {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Данная позиция отсутствует'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;


    if (length === 0 || position < 1 || position > length) {      // 1-ый случай: неверная позиция
        throw new Error(message.failure);
    }
    if (position === 1) {                                         // 2-ой случай: первый узел удален
        this.head = currentNode.next;
        if (!this.head) {                                         // 2-ой случай: существует второй узел
            this.head.previous = null;
        } else {                                                  // 2-ой случай: второго узла не существует
            this.tail = null;
        }
    } else if (position === this._length) {                       // 3-ий случай: последний узел удален
        this.tail = this.tail.previous;
        this.tail.next = null;
    } else {                                                      // 4-ый случай: средний узел удален
        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }
        beforeNodeToDelete = currentNode.previous;
        nodeToDelete = currentNode;
        afterNodeToDelete = currentNode.next;

        beforeNodeToDelete.next = afterNodeToDelete;
        afterNodeToDelete.previous = beforeNodeToDelete;
        deletedNode = nodeToDelete;
        nodeToDelete = null;
    }
    this._length--;
    return message.success;
},

associatioList : function (list_1, list_2){
    let a = new String();
    let b = new String();
    let mass = [];
    //let c = new DoublyList();
    for(let i = 1; i <= list_1._length; i++){
        let str1 = list_1.searchNodeAt(i).data;
        let str2 = list_2.searchNodeAt(i).data;
        let num = str1 + str2;
        mass.push(num.toString());
    }
for(let a = 0; a < mass.length; a++){
    if (+mass[a] >= 10){
        mass[a + 1] = +mass[a + 1] + ((+mass[a] - mass[a] % 10) / 10); 
        mass[a] = (mass[a] % 10).toString();
                console.log(mass[a + 1]);
    }
}
    console.log(mass);
}

};


let a = new DoublyList(); let b = new DoublyList();
a.add(1); b.add(2);
a.add(3); b.add(4);
a.add(5); b.add(6);
a.add(7); b.add(8);
console.log("Список а = "+ a._length, " Список b = " + b._length);
//console.log(a.searchNodeAt(1).data);
let c = new DoublyList();
c.associatioList(a, b);

