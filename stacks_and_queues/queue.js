// Node class represents an element of the queue
class Node {
  constructor(value) {
    this.value = value; // The value stored in the node
    this.next = null; // Reference to the next node (in a queue, this points to the next node in line)
  }
}

// Queue implementation using a Linked List
class Queue {
  constructor() {
    this.first = null; // The first element of the queue (front of the queue)
    this.last = null; // The last element of the queue (end of the queue)
    this.length = 0; // Length to keep track of the number of elements in the queue
  }

  // Peek method to view the first element in the queue without modifying it
  peek() {
    return this.first; // Return the first node (front of the queue)
  }

  // Enqueue method to add an element to the end of the queue
  enqueue(value) {
    const newNode = new Node(value); // Create a new node with the given value
    if (this.length === 0) {
      // If the queue is empty, both first and last will point to the new node
      this.first = newNode;
      this.last = newNode;
    } else {
      // Otherwise, add the new node to the end of the queue
      this.last.next = newNode; // Link the last node to the new node
      this.last = newNode; // Update the last pointer to the new node
    }
    this.length++; // Increase the length of the queue
    return this; // Return the updated queue instance
  }

  // Dequeue method to remove an element from the front of the queue
  dequeue() {
    if (this.length === 0) {
      return this; // If the queue is empty, return without doing anything
    }
    if (this.first === this.last) {
      // If there's only one element in the queue, reset last to null
      this.last = null;
    }
    // Optionally, you can keep a reference to the removed node using the following:
    // const holdingPointer = this.first;

    // Move the first pointer to the next node (removing the front element)
    this.first = this.first.next;
    this.length--; // Decrease the length of the queue
    return this; // Optionally, you could return the removed node using: return holdingPointer;
  }
}

// Test the Queue implementation
const myQueue = new Queue();
myQueue.enqueue("Joy"); // Add "Joy" to the queue
myQueue.enqueue("Matt"); // Add "Matt" to the queue
myQueue.enqueue("Pavel"); // Add "Pavel" to the queue
myQueue.enqueue("Samir"); // Add "Samir" to the queue
myQueue.peek(); // Peek at the front element ("Joy")
myQueue.dequeue(); // Remove "Joy" from the queue
myQueue.dequeue(); // Remove "Matt" from the queue
// Uncomment the following lines to remove more elements:
// myQueue.dequeue();      // Remove "Pavel"
// myQueue.dequeue();      // Remove "Samir"
console.log(myQueue); // Log the current state of the queue
