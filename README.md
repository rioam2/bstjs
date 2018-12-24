# BST.js

[![Build Status](https://travis-ci.com/rioam2/bstjs.svg?token=CAdydv8txGmutostKGxE&branch=master)](https://travis-ci.com)
[![Coverage Status](https://coveralls.io/repos/github/rioam2/bstjs/badge.svg?branch=master)](https://coveralls.io/github/rioam2/bstjs?branch=master)
[![Typescript Definitions](https://camo.githubusercontent.com/8c16d262a28b65cad19f334906882ae5589e228d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f74797065253230646566696e6974696f6e732d5479706553637269707425323076322e352d626c75652e737667)](https://camo.githubusercontent.com/8c16d262a28b65cad19f334906882ae5589e228d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f74797065253230646566696e6974696f6e732d5479706553637269707425323076322e352d626c75652e737667)
[![NPM Version](https://img.shields.io/npm/v/@rioam2/bstjs.svg)](https://github.com/rioam2/bstjs)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://img.shields.io/badge/license-MIT-blue.svg)


BSTjs is an npm package for Node.JS that implements the Dictionary ADT using a Binary Search Tree (BST) data structure. The codebase is written in TypeScript with ES6 features which is transpiled to ES5 for compatibility.

For more information on implementation, please read my development article on Medium here: [Implementation Details]()

## Todo

- [ ] Implement AVL Functionality
  - [ ] Add height and balance helper methods
  - [ ] Add callbacks to `findNode` for before/after recursion processes (used for balancing calls).
- [ ] Add proxy handler for retrieval and setting of data using index operator (`[]`).
- [ ] Add [iterator definitions](https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e) to wrapper class for use in `for ... of` loops.
- [ ] Add examples to API documentation.

## Contributing

Contributions to this project are more than welcome! If you can help with any of the above todo items, here is a timeline for submitting your work that will ensure peace-of-mind for everyone:

1. If you plan to implement/change anything other than one of the items listed under the todo section, please submit an issue *first*. This way I can approve/deny the prospective changes before you spend your time implementing them.
2. Once your issue has been approved/verified, please clone the repository and *make all necessary additions/modifications on the development branch*. Please keep the scope of your changes to that specified in step 1 to ensure your pull request will be accepted.
3. Write tests for your implementation in the `./tests/test.js` file. Once all tests are passing, squash all of your commits and send a pull request. Please do not merge with the master branch yet.
4. I'll do my best to get back to you in a timely manner with any changes I might see before accepting! Thank you!

If you feel that I have made any oversights in the contributing checklist above, please let me know by opening an issue.

## API Documentation

The BST class contains all necessary ADT functionality as specified [here](http://www.algolist.net/Data_structures/Dictionary_(ADT))

- **insert(`key: any`, `value: any`) : `void`**

  Inserts a new key/value pair into the Binary Search Tree

- **get(`key: any`) : `any`**

  Gets the data associated with the supplied key. Returns null if no such key is present in the Binary Search Tree.

- **remove(`key: any`) : `void`**

  Removes data with the supplied key from the Binary Search Tree

- **isEmpty() : `bool`**

  Returns true of no data is in the Binary Search Tree and false if the structure stores any data

- **levelOrderTraversal() : `any[]`**

  Returns an array of values in a level-order traversal of the binary-search-tree.

- **preOrderTraversal() : `any[]`**

  Returns an array of values in a pre-order traversal of the Binary Search Tree

- **inOrderTraversal() : `any[]`**

  Returns an array of values in a post-order traversal of the Binary Search Tree. This traversal will return a sorted array of values based on key by definition.

- **postOrderTraversal() : `any[]`**

  Returns an array of values in a post-order traversal of the Binary Search Tree.

