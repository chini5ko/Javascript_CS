/**
 * FIFO
 */

function Queue() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

Queue.prototype.clean = function () {
  this.head = null;
  this.tail = null;
};

Queue.prototype.enqueue = function (val) {
  let newNode = new Node(val);

  this.tail ? (this.tail.next = newNode) : (this.head = newNode);
  this.tail = newNode;
};

Queue.prototype.deQueue = function () {
  if (!this.head) return null;

  let val = this.head.val;
  this.head = this.head.next;

  return val;
};

Queue.prototype.currentList = function () {
  let cur = this.head;
  let str = "";
  while (cur) {
    str += `(${cur.val})->`;
    cur = cur.next;
  }
  return str;
};

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.currentList()); // (1)->(2)->(3)->
console.log(queue.deQueue()); // 1
console.log(queue.currentList()); // (2)->(3)->
