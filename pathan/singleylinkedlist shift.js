class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class singleylinkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newnode = new node(val);
    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    } else {
      this.tail.next = newnode;
      this.tail = newnode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newtail = current;
    while (current.next) {
      newtail = current;
      current = current.next;
    }
    this.tail = newtail;
    this.tail.next = null;
    this.length--;
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currenthead = this.head;
    this.head = currenthead.next;
    this.length--;
    return currenthead;
  }
}
var list = new singleylinkedlist();
// list.push("hello");
// list.push("goodbye");
list.push("hi");
list.push("there");
list.push("!");

//   console.log(list.pop());
//   console.log(list.head);
//   console.log(list.tail.next)
console.log(list.shift());
console.log(list.head);
console.log(list.tail);
