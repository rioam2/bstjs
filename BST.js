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
        this.root = new BSTNode(null, null);

        /* Required for member functions to access
           class member variables through current class
           context using 'this' */
        this.insert.bind(this);
        this.findNode.bind(this);
        this.get.bind(this);
        this.remove.bind(this);
        this.isEmpty.bind(this);
    };

    /* Internal helper function used to traverse the tree
       and return the node with the key specified. If the
       key does not exist in the tree, the node where the 
       key would be is returned. */
    findNode(subRoot, key) {
        if (subRoot.key === null || subRoot.key === key) {
            /* If we reach an empty node, this will be our
               insertion point, or if the key is what we are
               looking for, return the target node. */
            return subRoot;
        } else {
            /* We haven't reached an empty node or the target
               node yet and need to recurse deeper... */
            return (key < subRoot.key)
                ? this.findNode(subRoot.left, key)
                : this.findNode(subRoot.right, key);

        }
    };

    /* Inserts a new key/value pair into the BST. */
    insert(key, value) {
        /* Find insertion point and update key/value of Node 
           accordingly: */
        const insertionNode = this.findNode(this.root, key);
        insertionNode.value = value;
        if (insertionNode.key === null) {
            /* Only need to update key, left and right fields
               if we're adding a new node to the tree */
            insertionNode.key = key;
            insertionNode.left = new BSTNode(null, null);
            insertionNode.right = new BSTNode(null, null);
        }

    };

    /* Finds the data associated with the supplied 
       key. Returns NULL if no such key is present. */
    get(key) {
        return this.findNode(this.root, key).value;
    };

    /* Removes data with supplied key from the BST. */
    remove(key) {
        const removalNode = this.findNode(this.root, key);
        if (removalNode.key === null) return; /* does not exist */
        const hasLeftChild = removalNode.left.key !== null;
        const hasRightChild = removalNode.right.key !== null;
        if (hasLeftChild && hasRightChild) {
            /* Two child remove */
            let iop = removalNode.left;
            /* Select the left sub-tree's rightmost child as IOP */
            while (iop.right.key !== null) iop = iop.right;
            /* Swap removalNode with IOP */
            removalNode.key = iop.key;
            removalNode.value = iop.value;
            /* Remove node now at position of IOP: */
            if (iop.right.key !== null) {
                /* One child removal on IOP (left) */
                iop.key = iop.left.key;
                iop.value = iop.left.value;
                iop.right = iop.left.right;
                iop.left = iop.left.left;
            } else if (iop.left.key !== null) {
                /* One child removal on IOP (right) */
                iop.key = iop.right.key;
                iop.value = iop.right.value;
                iop.left = iop.right.left;
                iop.right = iop.right.right;
            } else {
                /* No child removal on IOP */
                iop.key = null;
                iop.value = null;
                iop.left = null;
                iop.right = null;
            }
        } else if (hasLeftChild && !hasRightChild) {
            /* One child remove (left) */
            removalNode.key = removalNode.left.key;
            removalNode.value = removalNode.left.value;
            removalNode.right = removalNode.left.right;
            removalNode.left = removalNode.left.left;
        } else if (!hasLeftChild && hasRightChild) {
            /* One child remove (right) */
            removalNode.key = removalNode.right.key;
            removalNode.value = removalNode.right.value;
            removalNode.left = removalNode.right.left;
            removalNode.right = removalNode.right.right;
        } else if (!hasLeftChild && !hasRightChild) {
            /* No child remove */
            removalNode.key = null;
            removalNode.value = null;
            removalNode.left = null;
            removalNode.right = null;
        }
    };

    /* Returns true if no data is in the BST, and false
       if the structure stores data. */
    isEmpty() {
        return this.root.key === null;
    };
};

/* Export the BST class for use in other files */
module.exports = BST;