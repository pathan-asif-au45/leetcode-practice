class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class bst {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newnode = new node(value);
    if (this.root === null) {
      this.root = newnode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = newnode;
            return this;
          }
        }
      }
    }
  }
}
var tree = new bst();
