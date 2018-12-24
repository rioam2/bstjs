'use strict';
const expect = require('chai').expect;
const BST = require('../dist/index.js');

describe('BST can be instantiated', () => {
    it('should make a new empty tree', () => {
        const tree = new BST();
        expect(tree.isEmpty()).to.equal(true);
    });
});