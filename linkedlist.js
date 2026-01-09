class Node{
    constructor(data){
        this.data = data === undefined ? null : data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.root = new Node;
    }
    
    //add new node at the end of list
    append(data){
        if(this.root.data === null){
            this.root = data;
        }
        else{
            let tmp = this.root;
            while(tmp.next !== null) tmp = tmp.next;

            tmp.next = data;
        }
    }

    //add new node at start of list
    prepend(data){
        if(this.root.data === null){
            this.root = data;
        }
        else{
            let tmp = this.root;
            this.root = data;
            this.root.next = tmp;
        } 
    }

    //number node of list
    size(){
        let number = 0;
        let tmp = this.root;
        while(tmp !== null) 
        {
            number++
            tmp = tmp.next;
        }
        return number;
    }

    //the value of first node
    head(){

        if(this.root.data === null) return undefined;

        return this.root.next.data;
        
    }

    //the value of last node
    tail(){
        if(this.root.data === null) return undefined;

        let tmp = this.root;
        while(tmp.next !== null) tmp = tmp.next;
        return tmp.data;
    }

    //return data at index input
    at(index){ 
        let tmp = this.root;

        if(this.size() - 1 < index) return undefined;

        while(index && tmp !== null){
            tmp = tmp.next;
            index--;
        }
        
        return tmp !== null ? tmp.data : undefined;
    }

    //remove head node and return its value
    pop(){
        if(this.root.data === null) return undefined;

        let ans = this.root.data;
        this.root = this.root.next;
        return ans;
    }

    contains(value){
        let tmp = this.root;

        while(tmp !== null){
            if(tmp.data === value) return true;
            tmp = tmp.next;
        }
        return false;
    }

    findIndex(value){
        if(this.root.data === null) return -1;
        let index = 1;
        let tmp = this.root;
        while(tmp !== null){
            if(tmp.data === value) return index;
            tmp = tmp.next;
            index++;
        }
        
    }
}

const test = new LinkedList();

const n1 = new Node(23);
const n2 = new Node(24);
test.append(n1);
test.append(n2);
test.append(new Node(25));
test.append(new Node(26));
test.prepend(new Node(1));


console.log(test.findIndex(25));