const { expect } = require("chai");
const Tree = require("../tree");

describe("Part II: Traversing Trees", () => {
  const tree = new Tree(
    1, [
      new Tree(2, [
        new Tree(3, []),
        new Tree(4, [])
      ]),
      new Tree(5, []),
      new Tree(6, [
        new Tree(7, []),
        new Tree(8, [])
      ])
    ]
  );

  describe("breadth-first search", () => {
    it("should traverse nodes left-to-right, then top-to-bottom", () => {
      const values = tree.breadthFirst(node => node.value);
      expect(values).to.deep.equal([1, 2, 5, 6, 3, 4, 7, 8]);
    });
  });

  describe("depth-first search", () => {
    it("should traverse nodes top-to-bottom, then left-to-right", () => {
      const values = tree.depthFirst(node => node.value);
      expect(values).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8]);
    });
  });

  describe("getting the length of a tree", () => {
    it("`getLength()` should return the number of children a tree has recursively", () => {
      expect(tree.getLength()).to.equal(8);
    });
  });
});