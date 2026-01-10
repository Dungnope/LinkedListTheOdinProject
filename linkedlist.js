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
            this.root.data = data;
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

    //check if value in list or not
    contains(value){
        let tmp = this.root;

        while(tmp !== null){
            if(tmp.data === value) return true;
            tmp = tmp.next;
        }
        return false;
    }

    //return index of value if exist
    findIndex(value){
        if(this.root.data === null) return -1;
        let index = 1;
        let tmp = this.root;
        while(tmp !== null){
            if(tmp.data === value) return index;
            tmp = tmp.next;
            index++;
        }

        return -1;
    }

    toString(){
        if(this.root.data === null) return `( ) -> `;
        let ans = "";
        let tmp = this.root;
        while(tmp !== null){
            ans += `( ${tmp.data} )`;
            ans += " -> ";
            tmp = tmp.next;
        }
        ans += tmp;
        return ans;
    }
}

const test = new LinkedList();

//test add to head of list
for(let i = 0; i < 5; i++){
    test.prepend(new Node(`No.${i}`));
}

console.log(test.toString());

//test delete to the list
for(let i = 0; i < 4; i++){
    test.pop();
}

console.log(test.toString());


//test add to tail of list
for(let i = 1; i < 5; i++){
    test.append(new Node(`No. 0${i}`));
}

console.log(test.toString());