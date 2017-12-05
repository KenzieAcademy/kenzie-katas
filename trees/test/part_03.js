const { expect } = require("chai");
const Tree = require("../tree");

describe("Part III: Revisiting Trees", () => {
  const tree = new Tree(1, [
    new Tree(2, [
      new Tree(3)
    ]),
    new Tree(4),
    new Tree(5, [
      new Tree(6),
      new Tree(7, [
        new Tree(8),
        new Tree(9, [
          new Tree(10, [
            new Tree(11)
          ])
        ])
      ])
    ])
  ]);

  describe("tree parents", () => {
    const node = tree.children[2].children[1].children[0];
    it("should have a parent with a value of 7", () => {
      expect(node.parent.value).to.equal(7);
    })

    it("`isParent()` on the root node should return false", () => {
      expect(tree.isParent()).to.be.false;
    })
  });
});