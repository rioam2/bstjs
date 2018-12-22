const BST = require('./BST');

/* Create a new tree */
const tree = new BST();

/* Insert some key/values into the tree */
tree.insert('NodeJS', 'Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.');
tree.insert('Python', 'Python is an interpreted, high-level, general-purpose programming language.');
tree.insert('C++', 'C++ is a general-purpose programming language.');
tree.insert('Ruby', 'Ruby is a dynamic, interpreted, reflective, object-oriented, general-purpose programming language.');
tree.insert('Haskell', 'Haskell is a standardized, general-purpose, purely functional programming language with non-strict semantics and strong static typing.');

/* Remove C++ */
tree.remove('C++');

/* Get the definition of NodeJS */
console.log(`\nNodeJS Definition: ${tree.find('NodeJS')}\n`);

/* Pretty-print the tree to the console: */
console.log(`\nTree: ${JSON.stringify(tree, null, 2)}\n`);