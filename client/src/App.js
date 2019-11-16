import React from 'react';
import './App.css';
import Tree from './components/Tree';

const binaryTree1 = [[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]];
const binaryTree2 = [[6], [3, 5], [9, 7, 1], [4, 6, 8, 4], [9, 9, 9, 9, 9]];
const binaryTree3 = [[6], [3, 5], [9, 7, 1], [4, 6, 8, 4], [9, 9, 9, 9, 9], [9, 9, 9, 9, 9, 9]];

function App() {
  return (
    <div className="App">
      <body className="App-body">
        <div className="App-panel">
          <Tree binaryTree={binaryTree3} />
        </div>
        <small style={{ marginTop: 10 }}>Use resolução de 100% para esta aplicação! :)</small>
      </body>
    </div>
  );
}

export default App;
