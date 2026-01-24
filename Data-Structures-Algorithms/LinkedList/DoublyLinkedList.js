class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
    }
  
    insertAtBeginning(data) {
      let newNode = new Node(data);
      if (this.head !== null) {
      console.log("test", this.head.prev = newNode);  
        newNode.next = this.head;
      }
      this.head = newNode;
    }

    insertAtEnd(data) {
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while(temp.next !== null){
           
            temp = temp.next;
            console.log("testing",temp)
        }
        console.log("testing",temp)

        temp.next = newNode;
        newNode.prev = temp;
    }

    
  
    display() {
      let current = this.head;
      if (!current) {
        console.log("List is empty");
        return;
      }
      let elements = [];
      while (current !== null) {
        elements.push(current.data);
        current = current.next;
      }
      console.log(elements.join(" <-> "));
    }
  }
  
  let dll = new DoublyLinkedList();
  dll.insertAtBeginning(10);
  dll.insertAtEnd(20);
  dll.display();
  