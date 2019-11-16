const getRowMarginsLeft = (row) => {
  const positions = [];
  const index = row * -50;
  const iterations = row % 2 === 0 ? row : row + 1;
  for (let i = 0; i <= iterations; i++) {
    const position = index + (i * 100);
    positions.push(position);
  }
  return positions;
};

const isNodeStep = (row, index, step) => {
  if (step && row === step.row && index === step.node.index) {
    return true;
  }
  return false;
};

const isNodeStepChild = (row, index, step) => {
  if (step && row === step.row + 1 && index === step.node.index && step.bigger === 'left') {
    return true;
  }
  if (step && row === step.row + 1 && index === step.node.index + 1 && step.bigger === 'right') {
    return true;
  }

  return false;
};

const nodesFactory = (binaryTree, step) => {
  const nodes = [];
  const totalRows = binaryTree.length - 1;
  let row = 0;
  binaryTree.forEach((nodeArray) => {
    const marginsLeft = getRowMarginsLeft(row);
    for (let index = 0; index < nodeArray.length; index++) {
      const hasChildren = row !== totalRows;
      const nodeStep = isNodeStep(row, index, step);
      const nodeStepChild = isNodeStepChild(row, index, step);
      const node = {
        hasChildren,
        row,
        index,
        value: nodeArray[index],
        marginLeft: marginsLeft[index],
        nodeStep,
        nodeStepChild,
      };
      nodes.push(node);
    }
    row++;
  });
  return nodes;
};

module.exports = { nodesFactory };
