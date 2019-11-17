const steps1 = [
  {
    row: 2,
    leftChild: { index: 0, value: 4 },
    rightChild: { index: 1, value: 6 },
    node: { index: 0, value: 9 },
    bigger: 'right',
    sum: 15,
  },
  {
    row: 2,
    leftChild: { index: 1, value: 6 },
    rightChild: { index: 2, value: 8 },
    node: { index: 1, value: 7 },
    bigger: 'right',
    sum: 15,
  },
  {
    row: 2,
    leftChild: { index: 2, value: 8 },
    rightChild: { index: 3, value: 4 },
    node: { index: 2, value: 1 },
    bigger: 'left',
    sum: 9,
  },
  {
    row: 1,
    leftChild: { index: 0, value: 15 },
    rightChild: { index: 1, value: 15 },
    node: { index: 0, value: 3 },
    bigger: 'left',
    sum: 18,
  },
  {
    row: 1,
    leftChild: { index: 1, value: 15 },
    rightChild: { index: 2, value: 9 },
    node: { index: 1, value: 5 },
    bigger: 'left',
    sum: 20,
  },
  {
    row: 0,
    leftChild: { index: 0, value: 18 },
    rightChild: { index: 1, value: 20 },
    node: { index: 0, value: 6 },
    bigger: 'right',
    sum: 26,
  },
];

const binaryTree1 = [[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]];

const updateNodesValue = (binaryTree, nodeRow, nodeIndex, sum) => binaryTree.map((arr, row) => {
  if (nodeRow === row) return arr.map((node, index) => (index === nodeIndex ? sum : node));
  return arr;
});

const deleteRow = (binaryTree, step, steps) => {
  if (steps[step + 1].row === steps[step].row - 1) {
    binaryTree = binaryTree.filter((arr) => arr.length < binaryTree.length);
  }
  return binaryTree;
};

const updateBinaryTree = (step, steps, binaryTree, setBt) => {
  const { sum } = steps[step];
  const nodeRow = steps[step].row;
  const nodeIndex = steps[step].node.index;
  let bt = updateNodesValue(binaryTree, nodeRow, nodeIndex, sum);
  bt = deleteRow(bt, step, steps);
  setBt(bt);
};


const nextStep = (step, steps, binaryTree, setStep, setBt) => {
  if (step < steps.length - 1) {
    setStep(step + 1);
    updateBinaryTree(step, steps, binaryTree, setBt);
  } else {
    alert('no more steps');
  }
};

const changeTree = (input, setBt, setSteps) => {
  setBt(JSON.parse(input));
  setSteps(0);
};


module.exports = {
  steps1, binaryTree1, nextStep, changeTree,
};
