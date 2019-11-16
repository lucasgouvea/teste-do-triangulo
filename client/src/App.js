import React, { useState } from 'react';
import './App.css';
import Tree from './components/Tree';

import { binaryTree1, nextStep, steps1, changeTree } from './helpers/app';

function App() {
  const [binaryTree, setBt] = useState(binaryTree1);
  const [input, setInput] = useState(JSON.stringify(binaryTree));
  const [steps, setSteps] = useState(steps1);
  const [step, setStep] = useState(0);
  console.log(binaryTree1);
  return (
    <div className="App App-body">
      <div className="App-menu">
        <div className="App-menu-row">
          <button onClick={() => { setStep(0); setSteps(steps1); setBt(binaryTree1); }} >Reset</button>
          <button onClick={() => nextStep(step, steps, binaryTree, setStep, setBt)}>Next step</button>
        </div>
        <div className="App-menu-row">
          <input className="App-input" value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={() => changeTree(input, setBt, setSteps)}>Change tree</button>
        </div>
      </div>
      <div className="App-panel">
        <Tree binaryTree={binaryTree} step={steps[step]} />
      </div>
      <small style={{ marginTop: 10 }}>Use resolução de 100% para esta aplicação! :)</small>
    </div>
  );
}

export default App;
