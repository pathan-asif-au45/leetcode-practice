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
}
var list = new singleylinkedlist();
// list.push("hello");
// list.push("goodbye");
list.push("hi");
list.push("there");
console.log(list.head);
console.log(list.tail);
console.log(list.push());
