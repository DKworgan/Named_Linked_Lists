import { arr } from "./randomNames.mjs";
class NodeList {

    head;
    counter;

    constructor() {
        this.head = null;
        this.counter = 0;
    }

    append(node) {
        //for empty linked lists
        if (this.head == null) {
            this.head = node;
            this.counter++;
            return;
        }

        let temp = this.head;
        while (temp.nextNode != null) {
            temp = temp.nextNode;
        }

        temp.nextNode = node;
        this.counter++;
    }

    prepend(node) {
        let temp = this.head;
        this.head = node;
        this.head.nextNode = temp;
        this.counter++;
    }

    size() {
        return this.counter;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let temp = this.head;

        while (temp.nextNode != null) {
            temp = temp.nextNode;
        }

        return temp;
    }

    at(index) {
        let depths = this.head;

        for (let i = 0; i < this.counter; i++) {
            depths = depths.nextNode;

            if (index == i) {
                return depths;
            }
        }
    }

    pop() {
        let lastNode = this.head.nextNode;

        for (let i = 0; i < this.counter - 3; i++) {
            lastNode = lastNode.nextNode;
        }

        lastNode.nextNode = null;
        counter--;
    }

    contains(value) {
        let iterator = this.head;

        for (let i = 0; i < this.counter - 1; i++) {
            if (iterator.value == value) {
                return true;
            }
            iterator = iterator.nextNode;
        }

        return false;
    }

    find(value) {
        let iterator = this.head;

        for (let i = 0; i < this.counter; i++) {
            if (iterator.value == value) {
                return i;
            }
            iterator = iterator.nextNode;
        }
        return null;
    }

    toString() {
        let iterator = this.head;

        for (let i = 0; i < this.counter; i++) {
            console.log("value: " + iterator.value);
            iterator = iterator.nextNode;
        }
    }


}

class Node {
    value;
    nextNode;

    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let list = new NodeList();
list.append(new Node(1));
list.append(new Node(2));
list.append(new Node(3));
list.append(new Node(4));
list.prepend(new Node(-1));

list.toString();