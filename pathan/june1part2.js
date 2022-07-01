class linkedlist {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
function addnodeatend(head, val) {
  cur = head;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = new linkedlist(val, null);
}

function printll() {
  cur = head;
  while (cur) {
    console.log(cur.data);
    cur = cur.next;
  }
}
head = new linkedlist(5, null);
addnodeatend(head, 10);
addnodeatend(head, 15);
addnodeatend(head, 20);
printll(head);
