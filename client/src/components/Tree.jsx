import React from 'react';
import Node from './Node.jsx';

const getRowMarginsLeft = (row) => {
  const positions = [];
  const index = row * -50;
  const iterations = row % 2 === 0 ? row : row + 1;
  for (let i = 0; i <= iterations; i++) {
    const position = index + (i * 100);
    positions.push(position);
  }
  return positions;
}

const Tree = ({ binaryTree }) => {
  const nodes = [];
  const totalRows = binaryTree.length - 1;
  let row = 0;
  binaryTree.forEach(nodeArray => {
    const marginsLeft = getRowMarginsLeft(row);
    for (let index = 0; index < nodeArray.length; index++) {
      const hasChildren = row === totalRows ? false : true;
      const node = { hasChildren, row, index, value: nodeArray[index], marginLeft: marginsLeft[index] }
      nodes.push(node);
    }
    row++;
  })

  return (
    <div className="App-tree">
      {nodes.map((node) => {
        const { hasChildren, row, index, value, marginLeft } = node;
        return (
          <Node
            key={`${row}${index}`}
            hasChildren={hasChildren}
            row={row}
            index={index}
            value={value}
            marginLeft={marginLeft}
          />
        )
      })}
    </div>
  )
}

export default Tree;
