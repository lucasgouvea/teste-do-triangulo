import React from 'react';
import Node from './Node.jsx';

import { nodesFactory } from '../helpers/tree'

const Tree = ({ binaryTree, step }) => {

  const nodes = nodesFactory(binaryTree, step);

  return (
    <div className="App-tree">
      {nodes.map((node) => {
        const { hasChildren, row, index, value, marginLeft, nodeStep, nodeStepChild } = node;
        return (
          <Node
            key={`${row}${index}`}
            hasChildren={hasChildren}
            row={row}
            index={index}
            value={value}
            marginLeft={marginLeft}
            nodeStep={nodeStep}
            nodeStepChild={nodeStepChild}
          />
        )
      })}
    </div>
  )
}

export default Tree;
