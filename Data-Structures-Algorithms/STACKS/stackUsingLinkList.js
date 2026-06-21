class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
    pop(){
      if(this.isEmpty()){
          console.log("Stack is empty!")
      }
      const poppedValue = this.top.value;
      this.top = this.top.next;
      this.size--;
      return poppedValue;
    }
  
    getSize() {
      return this.size;
    }
    isEmpty() {
      return this.size === 0;
    }
  
    printStack() {
      let current = this.top;
      let stackValue = [];
      while (current) {
        stackValue.push(current.value);
        current = current.next;
      }
      console.log("testing", stackValue);
      console.log("Stack", stackValue.join(" ->"));
    }
  }
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  // stack.pop()
  stack.getSize();
  stack.printStack();
  
  console.log("isEmpty",stack.isEmpty());
  console.log("Popped Element", stack.pop());
  