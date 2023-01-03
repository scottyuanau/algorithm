class Node{
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
  
    function insertAtBeginning(data){
// A newNode object is created with property data and next = null
    let newNode = new Node(data);
// The pointer next is assigned head pointer so that both pointers now point at the same node.
    newNode.next = this.head;
// As we are inserting at the beginning the head pointer needs to now point at the newNode. 
    
    this.head = newNode;
    return this.head;
}
  
  function insertAtEnd(data){
// A newNode object is created with property data and next=null
    
    let newNode = new Node(data);
// When head = null i.e. the list is empty, then head itself will point to the newNode.
    if(!this.head){
        this.head = newNode;
        return this.head;
    }
// Else, traverse the list to find the tail (the tail node will initially be pointing at null), and update the tail's next pointer.
   let tail = this.head;
   while(tail.next !== null){
        tail = tail.next;
   }
   tail.next = newNode;
   return this.head;
}}
}
