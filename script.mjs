import { getNames } from "./randomNames.mjs";

class NodeList {

    head;
    nodeCount;

    constructor() {
        this.head = null;
        this.nodeCount = 0;
    }

    append(node) {
        //for empty linked lists
        if (this.head == null) {
            this.head = node;
            this.nodeCount++;
            return;
        }

        let temp = this.head;
        while (temp.nextNode != null) {
            temp = temp.nextNode;
        }

        temp.nextNode = node;
        this.nodeCount++;
    }

    prepend(node) {
        let temp = this.head;
        this.head = node;
        this.head.nextNode = temp;
        this.nodeCount++;
    }

    size() {
        return this.nodeCount;
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

        for (let i = 0; i < this.nodeCount; i++) {
            depths = depths.nextNode;

            if (index == i) {
                return depths;
            }
        }
    }

    pop() {
        let lastNode = this.head.nextNode;

        for (let i = 0; i < this.nodeCount - 3; i++) {
            lastNode = lastNode.nextNode;
        }

        lastNode.nextNode = null;
        nodeCount--;
    }

    contains(value) {
        let iterator = this.head;

        for (let i = 0; i < this.nodeCount - 1; i++) {
            if (iterator.value == value) {
                return true;
            }
            iterator = iterator.nextNode;
        }

        return false;
    }

    find(value) {
        let iterator = this.head;

        for (let i = 0; i < this.nodeCount; i++) {
            if (iterator.value == value) {
                return i;
            }
            iterator = iterator.nextNode;
        }
        return null;
    }

    toString() {
        let iterator = this.head;

        for (let i = 0; i < this.nodeCount; i++) {
            console.log(`Node:${i} ` + iterator.value);
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

let listOfNames = new NodeList();

function populate() {
    getNames().then((response) => {
        return response.json();
    })
        .then(
            (result) => {
                for (let i = 0; i < result.length; i++) {
                    listOfNames.append(new Node(result[i]));
                }
                process();
            }
        );

    function process() {
        console.log(listOfNames.size());
        listOfNames.toString();
    }
}
populate();