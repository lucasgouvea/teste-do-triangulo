import React from 'react';

import { nextStep, postTree, random } from '../helpers/app';
import templateBT from '../template/binaryTree';
import templateSteps from '../template/steps';

const Menu = ({ step, steps, binaryTree, input, setStep, setSteps, setBt, setInput }) => {
  return (
    <div className="App-menu">
      <div className="App-menu-row">
        <button onClick={() => { setStep(0); setSteps(templateSteps); setBt(templateBT); setInput(JSON.stringify(templateBT)) }} >Reset</button>
        <button onClick={() => nextStep(step, steps, binaryTree, setStep, setBt)}>Next step</button>
      </div>
      <div className="App-menu-row">
        <button onClick={() => random(setBt, setStep, setSteps)} >Random!</button>
      </div>
      <div className="App-menu-row">
        <input className="App-input" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => postTree(input, setBt, setStep, setSteps)}>POST tree</button>
      </div>
    </div>
  );
}

export default Menu;