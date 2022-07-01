class linkedlist {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
let node1 = new linkedlist(5, null);
// // console.log(node1.data);

// let node2 = new linkedlist(10, null);
// // console.log(node2.data);

// node1.next = node2;
// console.log(node1.data);
// console.log(node1.next.data);

// let node3 = new linkedlist(15, null);
// node2.next = node3;
// console.log(node1.next.next.data);
node1.next = new linkedlist(10, null);
node1.next.next = new linkedlist(15, null);
console.log(node1.next.next.data);
