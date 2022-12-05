class Node{
    constructor(val){
        this.val = val 
        this.next = null 
    }
}
   class SinglyLinkedList{
    // constructor(val){ 
        constructor(){
        this.head = null 
        this.tail = null 
        this.length = 0 
    }
    push(val){ //!  WORKING
            let newNode = new Node(val)

            if(!this.head) {
                this.head = newNode
                this.tail = newNode
            } else {
                this.tail.next = newNode
                this.tail = newNode
            }

            this.length++
            return this
    }
    unshift(val){ //!  WORKING
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
    shift(){ //!  WORKING
            if(!this.head) return undefined 

            let currentHead = this.head 
            this.head = currentHead.next 
            // this.head = this.currentHead.next 
            this.length--

            if (this.length === 0) {
                this.tail = null 
            }

            return currentHead.val
    }
    set(index, val){ //!  WORKING
            let foundNode = this.get(index) 
            if (!foundNode) return false
            if (foundNode) {
                foundNode.val = val 
                return this 
            }

            return false 
    }
    remove(index){  //!  WORKING
            if (index < 0 || index >= this.length) return undefined 
            if (index === 0) return this.shift()
            if (index === this.length - 1) return this.pop()

            // this.head = this.head.next
            // this.length --
            let prevNode = this.get(index -1)
            let removed = prevNode.next 
            // prev.next = prev.next.next

            prevNode.next = removed.next 

            this.length--

            return removed
    }
    pop(){ //!  WORKING
            if(!this.head) return undefined
            //if (this.length === 0) return undefined

            let current = this.head 
            let newTail = current 

            while (current.next) {
                newTail = current 
                current = current.next 
            }

            this.tail = newTail 
            this.tail.next = null

            this.length--
            if (this.length === 0) {
                this.head = null 
                this.tail = null 
            }

            return current.val
    }
    get(index){  //!  WORKING
            if (index < 0 || index >= this.length) return null

            let current = this.head 

            /* let counter = 0 
            while (counter !== index) {
                current = current.next
                current++
            } */
            
            for (let i = 0; i < this.length; i++) {
                if (i === index) break
                current = current.next
            }

            return current
    }
    insert(index, val){ //!  WORKING
            if (index < 0 || index > this.length) return false
            if (index === this.length) return this.push(val)
            if (index === 0) return this.unshift(val) 

            let newNode = new Node(val) 
            // let newNode = new Node(value, prev.next)
            let prev = this.get(index - 1) 
            let temp = prev.next 
            prev.next = newNode 
            newNode.next = temp 

            // let prev = this.get(index - 1) 
            // if (prev == null) return null


            this.length++

            return this 
    }
}

const list = new SinglyLinkedList()
list.push('John')
list.push('Kara')
list.push('Johannes')
list.push('Kassy')
list.push('Daryl')
console.log('PUSH 5 ELEMENTS')
console.log(list) // display all 5
list.pop()
console.log('POP DARYL WHICH IS THE LAST')
console.log(list)
list.unshift('Tony')
console.log('UNSHIFT TONY')
console.log(list)
list.shift('Tony')
console.log('SHIFT TONY AND HE GONE')
console.log(list)
list.push('Daryl')
console.log('PUSH DAR TO BE BACK')
console.log(list)
list.set(1,'Tony')
console.log('SET TONY TO REPLACE KARA ')
console.log(list)
list.remove(1)
console.log('REMOVE TONY AGAIN')
console.log(list)
let get1 = list.get(2)
console.log('GET KASSY TO DISPLAY')
console.log(get1, 'was get')
list.insert(1, 'Kara')
console.log('INSERT KARA AND SHE BACK')
console.log(list)