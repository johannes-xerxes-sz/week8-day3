class Node {
    constructor(val) {
    this.val = val
    this.next = null; 
    this.prev = null; 
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {        
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++
        return this
    }

    unshift(val){
        let newNode = new Node(val) 
        if (!this.head) {
            this.head = newNode 
            this.tail = newNode 
        } else {
            newNode.next = this.head
            this.head = newNode 
        }

        this.length++ 
        return this
    }

    shift(){
        if (!this.head) return undefined

        let oldHead = this.head;
        
        if (this.length === 1 ) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length --;
        return oldHead;
    }

    set(index, val){
        let currentNode = this.get( index)
        if (!currentNode) return false

        currentNode.val = val
        return true
    }
    remove(index){
        if ( index < 0 ||  index >= this.length) return undefined
        if ( index === 0) return this.shift()
        if ( index === this.length - 1) return this.pop()
    
        let currentNode = this.get(index)
        let prevNode = currentNode.prev
        let newNode = currentNode.next

        prevNode.next = newNode
        newNode.prev = prevNode

        this.length--
        return currentNode
    }
    pop(){
        // if there is no head, return undefined
        if (!this.head) return undefined;
       
        // store the current tail to remove in a variable to return later
        let poppedNode = this.tail
        console.log(poppedNode)
        // if there is only one node, set the head/tail to null
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // reassisgn our tail tro be the prev
            this.tail = poppedNode.prev
            // remove the right arrow
            
            this.tail.next = null
            // remove the left arrow
            poppedNode.prev = null;
        }
        this.length--
        return poppedNode;
    }

    get(index){
        if (index < 0 || index >= this.length) return null

        let listDiff = this.length - index - 1
        let count = 0
        let currentNode
    
        if (index <= listDiff) {
          currentNode = this.head
          while (count < index) {
            currentNode = currentNode.next
            count++
          }
        } else {
          currentNode = this.tail
          while (count < listDiff) {
            currentNode = currentNode.prev
            count++
          }
        }
    
        return currentNode
    }

    insert(index, val){
        if ( index < 0 ||  index > this.length) return false
        if ( index === 0) {
          this.unshift(val)
        } else if ( index === this.length) {
            this.push(val)
        } else {
            let newNode = new Node(val)
            let currentNode = this.get( index)
            let prevNode = currentNode.prev
            newNode.prev = prevNode
            newNode.next = currentNode
            prevNode.next = newNode
            currentNode.prev = newNode
            this.length++
        }
        return true
    }
}
   
const list = new DoublyLinkedList()
list.push('John')
list.push('Kara')
list.push('Johannes')
list.push('Kassy')
list.push('Daryl')
console.log('PUSH 5 ELEMENTS')
console.log('UPDATE LIST',list) // display all 5
console.log(list.pop())
console.log(list)
console.log(list.unshift('Tony'))
console.log(list)
console.log(list.shift('Tony'))
console.log(list)
console.log(list.push('Daryl'))
console.log(list)
console.log(list.set(1,'Tony'))
console.log(list)
console.log(list.remove(1))
let get1 = list.get(2)
console.log('GET KASSY TO DISPLAY')
console.log(get1, 'was get')
list.insert(1, 'Kara')
console.log('INSERT KARA AND SHE BACK')
console.log(list)