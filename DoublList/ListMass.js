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
        message = {failure: 'Failure: non-existent node in this list.'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

    // 1-ый случай: неверная позиция
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    // 2-ой случай: первый узел удален
    if (position === 1) {
        this.head = currentNode.next;

        // 2-ой случай: существует второй узел
        if (!this.head) {
            this.head.previous = null;
        // 2-ой случай: второго узла не существует
        } else {
            this.tail = null;
        }

    // 3-ий случай: последний узел удален
    } else if (position === this._length) {
        this.tail = this.tail.previous;
        this.tail.next = null;
    // 4-ый случай: средний узел удален
    } else {
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
}
};


let a =  new DoublyList();
a.add(10);
a.add(20);
a.add(30);
console.log(a.searchNodeAt(2));

