import React from 'react';

const rootMarginLeft = 500;

const Node = ({ value, row, index, hasChildren, marginLeft, nodeStep, nodeStepChild }) => {
  let children = null;
  let marginTop;
  let backgroundColor;
  let active = "";
  if (index > 0) {
    marginTop = -80;
  }
  marginLeft += rootMarginLeft;
  if (nodeStep || nodeStepChild) {
    backgroundColor = "red";
    active = "App-child-active"
  }

  if (hasChildren) {
    children = (
      <>
        <div className={`App-child-left ${active}`} ></div>
        <div className={`App-child-right ${active}`}></div>
      </>
    )
  }
  return (
    <div className="App-node" style={{ marginLeft, marginTop, backgroundColor }}>
      <p className="App-node-text">{value}</p>
      {children}
    </div>
  );
}

export default Node;
