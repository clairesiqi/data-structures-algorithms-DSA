// Node class represents an element of the stack
class Node {
  constructor(value) {
    this.value = value; // the value stored in the node
    this.next = null; // reference to the next node (in a stack, this would point to the one below it)
  }
}

// Stack implementation using a Linked List
class StackWithLinkedList {
  constructor() {
    this.top = null; // the top element of the stack
    this.bottom = null; // the bottom element of the stack
    this.length = 0; // length to track the number of elements in the stack
  }

  // Peek method to view the top element without modifying the stack
  peek() {
    console.log(this.top.value); // Output the value at the top
  }

  // Push method to add an element to the top of the stack
  push(value) {
    const newNode = new Node(value); // Create a new node with the given value

    if (this.length === 0) {
      // If the stack is empty, the new node becomes both the top and bottom
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // Otherwise, insert the new node at the top
      const holdingPointer = this.top; // Hold reference to the current top
      newNode.next = holdingPointer; // Link the new node to the previous top
      this.top = newNode; // Update the top to be the new node
    }
    this.length++; // Increase the length of the stack
    return this;
  }

  // Pop method to remove the top element of the stack
  pop() {
    if (!this.top) {
      return null; // If the stack is empty, return null
    }
    if (this.top === this.bottom) {
      // If there's only one element, reset the bottom
      this.bottom = null;
    }
    // Remove the top element by updating the top reference
    this.top = this.top.next; // Move the top to the next element
    this.length--; // Decrease the length of the stack
    return this;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.length === 0; // Return true if the stack has no elements
  }
}

// Test StackWithLinkedList
const myStack = new StackWithLinkedList();
myStack.push("google"); // Add "google" to the stack
myStack.push("discord"); // Add "discord" to the stack
myStack.push("udemy"); // Add "udemy" to the stack
myStack.pop(); // Remove the top element ("udemy")
console.log(myStack); // Log the current state of the stack

// Stack implementation using an Array
class StackWithList {
  constructor() {
    this.array = []; // Use an array to store stack elements
    this.length = 0; // Track the number of elements in the stack
  }

  // Peek method to view the top element
  peek() {
    return this.array[this.array.length - 1]; // Return the last element of the array (top of the stack)
  }

  // Push method to add an element to the top of the stack
  push(value) {
    this.array.push(value); // Add the value to the end of the array
    this.length++; // Increase the length of the stack
    return this;
  }

  // Pop method to remove the top element
  pop() {
    this.array.pop(); // Remove the last element of the array (top of the stack)
    this.length--; // Decrease the length of the stack
    return this;
  }
}

// Test StackWithList
const arrayStack = new StackWithList();
arrayStack.push("google"); // Add "google" to the stack
arrayStack.push("udemy"); // Add "udemy" to the stack
arrayStack.push("discord"); // Add "discord" to the stack
arrayStack.peek(); // Peek at the top element ("discord")
arrayStack.pop(); // Remove the top element ("discord")
arrayStack.pop(); // Remove the top element ("udemy")
arrayStack.pop(); // Remove the top element ("google")
console.log(arrayStack); // Log the current state of the stack
