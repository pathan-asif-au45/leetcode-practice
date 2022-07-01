class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class queue {
  constructor() {
    this.first = null;
    this.second = null;
    this.size = 0;
  }
  enqueue(val) {
    var newnode = new node(val);
    if (!this.first) {
      this.first = newnode;
      this.second = newnode;
    } else {
      this.second.next = newnode;
      this.second = newnode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.second) {
      this.second === null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
var q = new queue();
q.enqueue("first");
q.enqueue("second");
console.log(q.dequeue());

console.log(q.dequeue());
