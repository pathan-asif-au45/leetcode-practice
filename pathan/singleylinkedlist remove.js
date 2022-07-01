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
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);
    var newnode = new node(val);
    var previous = this.get(index - 1);
    var temp = previous.next;
    previous.next = newnode;
    newnode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    var prevnode = this.get(index - 1);
    var removed = prevnode.next;
    prevnode = removed.next;
    this.length--;
    return removed;
  }
}
var list = new singleylinkedlist();
list.push(100);
list.push(200);
list.push(250);
list.push(300);
list.push(500);

//   console.log(list.pop());
//   console.log(list.head);
//   console.log(list.tail.next);
//   console.log(list.unshift("first"));
//   console.log(list.tail);
//   console.log(list.get(1))
//   console.log(list.insert(0, "first"));
//   console.log(list.head);
console.log(list.remove(3));
console.log(list.head);
