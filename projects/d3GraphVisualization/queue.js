class Queue {
  constructor() {
    this.queue= [];
  }

  /* Add item to the queue */
  enqueue(item) {
    this.queue.push(item);
  }

  /* Remove item from the queue*/
  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length == 0;
  }
}

class Stack {
  constructor() {
    this.stack= [];
  }

  /* Add item to the queue */
  push(item) {
    this.stack.push(item);
  }

  /* Remove item from the queue*/
  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length == 0;
  }
}

