'use strict';
const expect = require('chai').expect;
const BST = require('../dist/index.js').BST;

/**
 * Generates a new tree of the following structure:
 * 
 *        __5__
 *      /      \
 *     3       7
 *   /  \    /  \
 *  2   4   6   8
 * 
 */
function makeTree1() {
    const tree = new BST();
    tree.insert(5, 5);
    tree.insert(3, 3);
    tree.insert(7, 7);
    tree.insert(2, 2);
    tree.insert(4, 4);
    tree.insert(6, 6);
    tree.insert(8, 8);
    return tree;
};

/**
 * Helper function used to simplify validation of various tree traversals
 * @param {*} traversal Array of values visited in actual traversal
 * @param {*} expected Array of values visited in expected traversal
 */
function checkTraversal(traversal, expected) {
    expect(JSON.stringify(traversal)).to.equal(JSON.stringify(expected));
}

describe('BST basic ADT functionality', () => {
    it('should make a new empty tree', () => {
        const tree = new BST();
        expect(tree.isEmpty()).to.equal(true);
    });
    it('should have expected insertion structure', () => {
        const tree = makeTree1();
        /* Test internal structure manually */
        expect(tree.root.value === 5).to.be.true;
        expect(tree.root.left.value === 3).to.to.true;
        expect(tree.root.left.left.value === 2).to.be.true;
        expect(tree.root.left.right.value === 4).to.be.true;
        expect(tree.root.right.value === 7).to.be.true;
        expect(tree.root.right.left.value === 6).to.be.true;
        expect(tree.root.right.right.value === 8).to.be.true;

    });
    it('should perform a correct level-order traversal', () => {
        const tree = makeTree1();
        checkTraversal(tree.levelOrderTraversal(), [5, 3, 7, 2, 4, 6, 8]);
    });
    it('should perform a correct pre-order traversal', () => {
        const tree = makeTree1();
        checkTraversal(tree.preOrderTraversal(), [5, 3, 2, 4, 7, 6, 8]);
    });
    it('should perform a correct in-order traversal', () => {
        const tree = makeTree1();
        checkTraversal(tree.inOrderTraversal(), [2, 3, 4, 5, 6, 7, 8]);
    });
    it('should perform a correct post-order traversal', () => {
        const tree = makeTree1();
        checkTraversal(tree.postOrderTraversal(), [2, 4, 3, 6, 8, 7, 5]);
    });
    it('should remove nodes with no children by setting key/value to null', () => {
        const tree = makeTree1();
        tree.remove(2);
        tree.remove(8);
        checkTraversal(tree.levelOrderTraversal(), [5, 3, 7, 4, 6]);
    });
    it('should remove nodes with one child by replacing node with child', () => {
        const tree = makeTree1();
        tree.remove(2);
        tree.remove(3);
        checkTraversal(tree.levelOrderTraversal(), [5, 4, 7, 6, 8]);
    });
    it('should remove nodes with two children by swapping IOP', () => {
        const tree = makeTree1();
        tree.remove(3);
        checkTraversal(tree.levelOrderTraversal(), [5, 2, 7, 4, 6, 8]);
        checkTraversal(tree.preOrderTraversal(), [5, 2, 4, 7, 6, 8]);

        tree.remove(7);
        checkTraversal(tree.levelOrderTraversal(), [5, 2, 6, 4, 8]);
        checkTraversal(tree.preOrderTraversal(), [5, 2, 4, 6, 8]);

        tree.remove(5);
        checkTraversal(tree.levelOrderTraversal(), [4, 2, 6, 8]);
        checkTraversal(tree.preOrderTraversal(), [4, 2, 6, 8]);

        tree.remove(6);
        checkTraversal(tree.levelOrderTraversal(), [4, 2, 8]);
        checkTraversal(tree.preOrderTraversal(), [4, 2, 8]);

        tree.remove(4);
        checkTraversal(tree.levelOrderTraversal(), [2, 8]);
        checkTraversal(tree.preOrderTraversal(), [2, 8]);
    });
    it('should find as expected', () => {
        const tree = makeTree1();
        expect(tree.get(5) === 5).to.be.true;
        expect(tree.get(7) === 7).to.be.true;
        expect(tree.get(2) === 2).to.be.true;
        expect(tree.get(10)).to.be.null;
    });
});