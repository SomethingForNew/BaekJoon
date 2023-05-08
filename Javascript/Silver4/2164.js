// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = "6".toString().trim();

class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(value){
        const node = new Node(value);

        if(!this.head){
            this.head = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
        this.size++;

        return node;
    }

    getHead(){
        return this.head.value;
    }

    removeHead(){
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
    }

    getSize(){
        return this.size;
    }
}

const linkedList = new LinkedList();

function card2(input){

    // ↓시간초과↓
    // let cardArr = [];

    // for(let i = 1; i <= input; i++) {
    //     cardArr.push(+i);
    // }

    // while(true){
    //     if(cardArr.length === 1) {
    //         break;
    //     }

    //     cardArr.shift();
    //     let replaceCard = cardArr.shift();
    //     cardArr.push(replaceCard);
    // }

    // console.log(cardArr);


    for(let i = 1; i <= input; i++) {
        linkedList.add(i);
    }

    while(linkedList.getSize() !== 1){
        linkedList.removeHead();
        linkedList.add(linkedList.getHead());
        linkedList.removeHead();
    }

    console.log(linkedList.getHead());
}

card2(input);