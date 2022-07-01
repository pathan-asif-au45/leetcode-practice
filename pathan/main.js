class Queue {
  constructor() {
    this.item = [];
  }
  enqueue(val) {
    this.item.push(val);
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return;
    }
    return this.item.shift();
  }
  isEmpty() {
    return this.item.length == 0;
  }
  printqueue() {
    console.log(this.item);
  }
}
let q1 = new Queue();
q1.enqueue(5);
q1.enqueue(6);
q1.enqueue(7);
q1.printqueue();
q1.dequeue();
q1.printqueue();
