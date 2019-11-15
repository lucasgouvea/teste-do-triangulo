exports.factory = (row, index, leftChild, rightChild, node, sum) => ({
  row,
  leftChild: { index, value: leftChild },
  rightChild: { index: index + 1, value: rightChild },
  node: { index, value: node },
  bigger: leftChild >= rightChild ? 'left' : 'right',
  sum: node + sum,
});
