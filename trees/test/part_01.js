const { expect } = require("chai");
const Tree = require("../tree");

describe("Part I: Creating Trees", () => {
  describe("creating an empty tree", () => {
    const tree = new Tree();

    it("should not have a value", () => {
      expect(tree.value).to.be.undefined;
    });

    it("should not have any children", () => {
      expect(tree.children).to.be.an("array").that.is.empty;
    });
  });

  describe("creating a tree with a value and no children", () => {
    const tree = new Tree(1);

    it("should have the provided value", () => {
      expect(tree.value).to.equal(1);
    });

    it("should still have no children", () => {
      expect(tree.children).to.be.an("array").that.is.empty;
    });
  });

  describe("creating a tree with a value and children", () => {
    const tree = new Tree(1, [
      new Tree(2, []),
      new Tree(3, [])
    ]);

    it("should have the provided value", () => {
      expect(tree.value).to.equal(1);
    });

    it("should still have 2 children", () => {
      tree.children.forEach(child => expect(child).to.be.an.instanceOf(Tree));
    });
  });

  describe("manipulating children", () => {
    const tree = new Tree(1);

    it("`addChild` should create a new tree and append it to children", () => {
      tree.addChild(2);
      expect(tree.children).to.be.an("array").that.has.a.lengthOf(1);
      expect(tree.children[0].value).to.equal(2);
    });

    it("`removeChild` without arguments should remove the last child", () => {
      tree.addChild(3);
      expect(tree.children).to.be.an("array").that.has.a.lengthOf(2);
      expect(tree.children[tree.children.length - 1].value).to.equal(3);

      tree.removeChild();
      expect(tree.children[tree.children.length - 1].value).to.equal(2);
    });

    it("`removeChild` with an argument should remove the child at that index", () => {
      tree.addChild(3);
      tree.addChild(4);
      expect(tree.children).to.be.an("array").that.has.a.lengthOf(3);

      tree.removeChild(0);
      expect(tree.children[0].value).to.equal(3);
    });
  });
});