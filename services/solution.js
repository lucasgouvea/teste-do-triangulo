const Solution = require('../mongo/repository/solution');

exports.stepFactory = (row, index, leftChild, rightChild, node, sum) => ({
  row,
  leftChild: { index, value: leftChild },
  rightChild: { index: index + 1, value: rightChild },
  node: { index, value: node },
  bigger: leftChild >= rightChild ? 'left' : 'right',
  sum: node + sum,
});

exports.create = async (solution) => Solution.create(solution);

exports.findAll = async () => Solution.findAll();

exports.findById = async (id) => Solution.findById(id);
