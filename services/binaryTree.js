const BinaryTree = require('../mongo/repository/binaryTree');

const { stepFactory } = require('./solution');

exports.create = async (binaryTree) => BinaryTree.create(binaryTree);

exports.findAll = async () => BinaryTree.findAll();

exports.findById = async (id) => BinaryTree.findById(id);

exports.getSolution = (binaryTree) => {
  const initialRow = binaryTree.length - 2;
  const steps = [];
  const init = new Date();
  for (let row = initialRow; row >= 0; row--) {
    for (index = 0; index < row + 1; index++) {
      const node = binaryTree[row][index];
      const leftChild = binaryTree[row + 1][index];
      const rightChild = binaryTree[row + 1][index + 1];
      const sum = leftChild >= rightChild ? leftChild : rightChild;
      steps.push(stepFactory(row, index, leftChild, rightChild, node, sum));
      binaryTree[row][index] += sum;
    }
    delete binaryTree[row + 1];
  }
  const end = new Date();
  const executionTime = (end - init);
  const solution = { executionTime, steps };
  console.log(`Took ${executionTime} mili seconds`);
  return solution;
};
