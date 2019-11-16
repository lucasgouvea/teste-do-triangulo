import React from 'react';

const rootMarginLeft = 500;

const Node = ({ value, row, index, hasChildren, marginLeft }) => {
  let children = null;
  let marginTop;
  if (hasChildren) {
    children = (
      <>
        <div className="App-child-left"></div>
        <div className="App-child-right"></div>
      </>
    )
  }
  if (index > 0) {
    marginTop = -80;
  }
  marginLeft += rootMarginLeft;
  return (
    <div className="App-node" style={{ marginLeft, marginTop }}>
      <p className="App-node-text">{value}</p>
      {children}
    </div>
  );
}

export default Node;
