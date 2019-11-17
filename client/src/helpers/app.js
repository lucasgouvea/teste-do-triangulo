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
    const result = steps[step].sum;
    alert(`Result: ${result}`);
  }
};

const postTree = async (binaryTree, setBt, setStep, setSteps, parse = true) => {
  binaryTree = parse ? JSON.parse(binaryTree) : binaryTree; // string -> array
  const body = JSON.stringify({ binaryTree });
  const headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
  const method = 'POST';
  const res = await fetch('/binary-tree', { method, headers, body });
  const resBody = await res.json();
  setBt(binaryTree);
  setSteps(resBody.solution.steps);
  setStep(0);
};

const random = async (setBt, setStep, setSteps) => {
  const nodes = [];
  for (let i = 0; i < 5; i++) {
    const row = [];
    for (let j = 0; j < i + 1; j++) {
      const number = Math.ceil(Math.random() * 10);
      row.push(number);
    }
    nodes.push(row);
  }
  await postTree(nodes, setBt, setStep, setSteps, false);
};


export { postTree, random, nextStep };
