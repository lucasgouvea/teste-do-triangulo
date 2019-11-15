const express = require('express');

const { factory } = require('./steps');

const app = express();

app.use(express.json());

app.post('/binary-tree', (req, res) => {
  const { binaryTree } = req.body;
  const initialRow = binaryTree.length - 2;
  const steps = [];
  for (let row = initialRow; row >= 0; row--) {
    for (index = 0; index < row + 1; index++) {
      const node = binaryTree[row][index];
      const leftChild = binaryTree[row + 1][index];
      const rightChild = binaryTree[row + 1][index + 1];
      const sum = leftChild >= rightChild ? leftChild : rightChild;
      steps.push(factory(row, index, leftChild, rightChild, node, sum));
      binaryTree[row][index] += sum;
    }
    delete binaryTree[row + 1];
  }
  res.status(200).send({ steps });
});

app.listen(5555, console.log('Up on 5555'));
