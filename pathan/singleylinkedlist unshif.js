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
  unshift(val) {
    var newnode = new node(val);
    if (!this.head) {
      this.head = newnode;
      this.tail = this.head;
    }
    newnode.next = this.head;
    this.head = newnode;
    this.length++;
    return this;
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
//   console.log(list.tail.next);
console.log(list.unshift("first"));
console.log(list.tail);
