class Node {
  constructor(val) {
    this.val = val;
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  // o(n)
  insert(word) {
    let node = this.root;

    for (let idx = 0; idx < word.length; idx++) {
      let ch = word[idx];
      if (node[ch]) {
        node = node[ch];
      } else {
        let newNode = new Node(ch);
        node[ch] = newNode;
        node = node[ch];
      }

      if (idx == word.length - 1) node.isWord = true;
    }
  }

  // o(w)
  contains(word) {
    let node = this.root;

    for (let idx = 0; idx < word.length; idx++) {
      let ch = word[idx];
      if (node[ch]) {
        node = node[ch];
      } else {
        return false;
      }
      return true;
    }
  }
}

let trie = new Trie();
trie.insert("chinisko");
trie.insert("hector");

console.log(trie.contains("chinisko")); // true
console.log(trie.contains("seed")); // false
