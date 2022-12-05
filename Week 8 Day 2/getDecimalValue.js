/* Given head which is a reference node to a singly-linked list. The value of each node in the linked 
list is either 0 or 1. The linked list holds the binary representation of a number.
Return the decimal value of the number in the linked list.
The most significant bit is at the head of the linked list.
Example 1:
Input: head = [1,0,1] // look at picture above
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:
Input: head = [0]
Output: 0
Constraints:
The Linked List is not empty.
Number of nodes will not exceed 30.
Each node's value is either 0 or 1. */
/**
* Definition for singly-linked list.
* function ListNode(val, next) {
* this.val = (val===undefined ? 0 : val)
* this.next = (next===undefined ? null : next)
* }
*/
/**
* @param {ListNode} head
* @return {number}
*/
function Node (val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
  
  const getList = (arr) => {
    if (!arr.length) throw new Error('Array is empty.');
  
    const head = new Node(arr[0]);
    let prevNode = head;
  
    for (let i = 1; i < arr.length; i++) {
      prevNode.next = new Node(arr[i]);
      prevNode = prevNode.next;
    }
  
    return head;
  };


var getDecimalValue = function(head) {
    if (!head) return;

    let num = ''
    while(head) {
        num += head.val
        head = head.next
    }
    return parseInt(num, 2)
    
};

console.log(getDecimalValue(getList([1,0,1]))); // 5
console.log(getDecimalValue(getList([0]))); // 0