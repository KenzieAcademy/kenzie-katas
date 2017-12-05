# Trees
Trees are a data structure well suited for modeling hierarchical data. Examples
of things which could be implemented using trees are file systems, the Document
Object Model (DOM), and a programming language's abstract syntax tree. In this
set of activities, you'll be implementing a tree data structure and useful
operations on that data structure.

## Installation and Running Tests

Dependencies can be installed and the tests can be run using yarn:

```bash
~/kenzie-katas $ cd trees
~/kenzie-katas/trees $ yarn
~/kenzie-katas/trees $ yarn test
```


## Part I
Define a new data type, Tree, which has `value` and `children` properties. A
user should be able to instantiate an empty tree:

Assuming the module is named `tree.js` and it has been `require`d:

```bash
$ node --version
v9.2.0
$ node
> const Tree = require("./tree");
```

It should be possible to create an empty tree:

```bash
const tree = new Tree();
console.log(tree.value)
```

It should be possible to add child nodes by either supplying them during
instantiation:

```bash
> const tree = new Tree(1, [
  new Tree(2),
  new Tree(3, [
    new Tree(4)
  ]);
]);
```

Or by using the `addChild` method:

```bash
> const tree = new Tree(1);
> tree.addChild(2);
> const three = new Tree(3);
> three.addChild(4);
> tree.addChild(three);
```

## Part II
This part concerns how trees are traversed. The two most prominent methods are
depth-first, and breadth-first traversal. To help explain the difference, let's
assume that we have the following tree:

```bash
> const tree = new Tree("A", [
  new Tree("B", [
    new Tree("C"),
    new Tree("D")
  ]),
  new Tree("E", [
    new Tree("F") 
  ])
]);
```

We can visualize such a tree as follows:

         A
        / \
       B   E
      / \   \
     C   D   F

With depth-first traversal, we would visit nodes in the following order:

         1
        / \
       2   5
      / \   \
     3   4   6

Conversely, with breadth-first traversal, we would visit the nodes in the
following order instead:

         1
        / \
       2   3
      / \   \
     4   5   6

Your task, then, will be to write a number of methods that take advantage of
these methods of traversal. 
