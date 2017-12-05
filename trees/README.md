# Trees
Trees are a data structure well suited for modeling hierarchical data. Examples
of things which could be implemented using trees are file systems, the Document
Object Model (DOM), and a programming language's abstract syntax tree. In this
set of activities, you'll be implementing a tree data structure and useful
operations on that data structure.


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

Alternatively, I should be able to create a 
