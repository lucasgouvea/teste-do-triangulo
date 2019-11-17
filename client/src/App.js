import React, { useState } from 'react';
import './App.css';
import Tree from './components/Tree';
import Menu from './components/Menu';

import { nextStep, postTree } from './helpers/app';
import templateBT from './template/binaryTree';
import templateSteps from './template/steps';

function App() {
  const [binaryTree, setBt] = useState(templateBT);
  const [input, setInput] = useState(JSON.stringify(binaryTree));
  const [steps, setSteps] = useState(templateSteps);
  const [step, setStep] = useState(0);
  return (
    <div className="App App-body">
      <Menu
        binaryTree={binaryTree}
        input={input}
        step={step}
        steps={steps}
        setStep={setStep}
        setSteps={setSteps}
        setBt={setBt}
        setInput={setInput}
      />
      <Tree binaryTree={binaryTree} step={steps[step]} />
      <p style={{ color: 'white' }}>developed by lucas gouvea</p>
    </div>
  );
}

export default App;
