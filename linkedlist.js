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
}

const test = new LinkedList();

const n1 = new Node(23);
const n2 = new Node(24);
test.append(n1);
test.append(n2);
test.append(new Node(25));
test.append(new Node(26));
test.prepend(new Node(1));

console.log(test.size());