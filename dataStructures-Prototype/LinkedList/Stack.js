/**
 * LIFO
 */

function Stack() {
  this.head = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
}

Stack.prototype.clean = function () {
  this.head = null;
};

Stack.prototype.push = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
};

Stack.prototype.pop = function () {
  if (!this.head) return null;

  let val = this.head.val;
  this.head = this.head.next;

  return val;
};

Stack.prototype.currentList = function () {
  let cur = this.head;
  let str = "";
  while (cur) {
    str += `(${cur.val})->`;
    cur = cur.next;
  }
  return str;
};

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.currentList()); // (3)->(2)->(1)->
console.log(stack.pop()); //3
console.log(stack.pop()); // 2
console.log(stack.currentList()); // (1)->
