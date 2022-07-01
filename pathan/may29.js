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
q1.enqueue(1);
q1.enqueue(2);
q1.printqueue();
n = 100;
for (let i = 1; i < n; i++) {
  e = q1.dequeue();
  console.log(e);
  fe = e + "1";
  q1.enqueue(fe);
  se = e + "2";
  q1.enqueue(se);
}
