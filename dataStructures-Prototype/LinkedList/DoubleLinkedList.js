function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(prev, val, next) {
  this.prev = prev;
  this.val = val;
  this.next = next;
}

DoubleLinkedList.prototype.addToTail = function (val) {
  let newNode = new Node(this.tail, val, null);

  this.tail ? (this.tail.next = newNode) : (this.head = newNode);

  this.tail = newNode;
};

DoubleLinkedList.prototype.addToHead = function (val) {
  let newNode = new Node(null, val, this.head);

  this.head ? (this.head.prev = newNode) : (this.tail = newNode);

  this.head = newNode;
};

DoubleLinkedList.prototype.clean = function () {
  this.head = null;
  this.tail = null;
};

// testing

DoubleLinkedList.prototype.removeFromTail = function () {
  // is empty , no nodes
  if (!this.tail) return null;

  const val = this.tail.val;

  this.tail = this.tail.prev;

  this.tail ? (this.tail.next = null) : (this.head = null);

  return val;
};

DoubleLinkedList.prototype.removeFromHead = function () {
  // is empty , no nodes
  if (!this.head) return null;

  const val = this.head.val;

  this.head = this.head.next;

  this.head ? (this.tail.prev = null) : (this.tail = null);

  return val;
};

DoubleLinkedList.prototype.search = function (val) {
  let cur = this.head;
  let idx = 0;

  while (cur) {
    if (cur.val === val) {
      return idx;
    }
    idx++;
    cur = cur.next;
  }

  return null;
};

DoubleLinkedList.prototype.deleteByValues = function (val) {
  let cur = this.head;
  let idx = 0;

  while (cur) {
    if (cur.val === val) {
      let node = cur;

      node.prev ? (node.prev.next = node.next) : (this.head = node.next);
      node.next ? (node.next.prev = node.prev) : (this.tail = node.prev);

      return idx;
    }
    idx++;
    cur = cur.next;
  }

  return null;
};

DoubleLinkedList.prototype.currentList = function () {
  let cur = this.head;
  let str = "";
  while (cur) {
    str += `(${cur.val})->`;
    cur = cur.next;
  }
  return str;
};

// testing
let ll = new DoubleLinkedList();

ll.addToHead(2);
ll.addToHead(1);
ll.addToTail(116);
ll.addToTail(3);
ll.addToTail(4);

console.log("current list: ", ll.currentList()); // (1)->(2)->(116)->(3)->(4)->

console.log("\nuse ll.search(116) ", ll.search(116)); // 2
console.log("use ll.search(88) ", ll.search(88)); // null
console.log("use ll.delete(116) ", ll.deleteByValues(116)); // 2
console.log("current list: ", ll.currentList()); // (1)->(2)->(3)->(4)->

console.log("\nremove from tails:", ll.removeFromTail()); // 4
console.log("current list: ", ll.currentList()); // (1)->(2)->(3)->

console.log("\nremove from head:", ll.removeFromHead()); // 1
console.log("current list: ", ll.currentList()); // (2)->(3)->
