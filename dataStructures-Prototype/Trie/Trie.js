function Node(key) {
  this.key = key;
  this.isWord = false;
  this.children = {};
}

function Trie() {
  this.root = new Node(null);
}

Trie.prototype.insert = function (word) {
  let node = this.root;

  word.split("").forEach((ch, i) => {
    // if it doesn't exist, we then create it.
    if (node.children[ch] === undefined) {
      node.children[ch] = new Node(ch);
    }

    // proceed to the next depth in the trie.
    node = node.children[ch];

    // finally, we check to see if it's the last word.
    if (i == word.length - 1) {
      node.isWord = true;
    }
  });
};

Trie.prototype.contains = function (word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    if (node.children[ch] !== undefined) {
      node = node.children[ch];
    } else {
      return false;
    }
  }

  return node.isWord;
};

let trie = new Trie();
trie.insert("chinisko");
trie.insert("hector");
console.log(trie.contains("chinisko")); // true
console.log(trie.contains("seed")); // false
