class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class stack {
  constructor() {
    this.first = null;
    this.second = null;
    this.size = 0;
  }
  push(val) {
    var newnode = new node(val);
    if (!this.first) {
      this.first = newnode;
      this.second = newnode;
    } else {
      var temp = this.first;
      this.first = newnode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.second) {
      this.second = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
var list = new stack();
list.push(230);
list.push(240);
list.push(430);
console.log(list.first);
list.pop();
console.log(list.first);
