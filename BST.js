/**
 * Used internally in the main BST class to store
 * data in the tree structure. Each node represents
 * a key/value pair in our BST.
 */
class BSTNode {
    /* Initializes node storage upon creation: */
    constructor(key, value) {
        /* Internal variables for storing data: */
        this.key = key;
        this.value = value;
        /* Used for storing references to left/right 
           children */
        this.left = null;
        this.right = null;
    };
}

/**
 * Main wrapper class for the BST data structure.
 * Implements necessary ADT member functions for 
 * accessing, adding and removing data from the tree.
 */
class BST {
    /* Creates a new BST object. */
    constructor() {
        /* Stores the root node of the tree */
        this.root = null;

        /* Required for member functions to access
           class member variables through 'this' */
        this.insert.bind(this);
        this.find.bind(this);
        this.remove.bind(this);
        this.isEmpty.bind(this);
    };

    /* Inserts a new key/value pair into the BST. */
    insert(key, value) { };

    /* Finds the data associated with the supplied 
       key. Returns NULL if no such key is present. */
    find(key) { };

    /* Removes data with supplied key from the BST. */
    remove(key) { };

    /* Returns true if no data is in the BST, and false
       if the structure stores data. */
    isEmpty() { };
};

/* Export the BST class for use in other files */
module.exports = BST;