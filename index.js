const express = require('express');
const steps = require('./steps');


const app = express();
app.use(express.json());

app.get('/index', (req, res) => {
  res.status(200).send();
});

app.post('/binary-tree', (req, res) => {
  const { binaryTree } = req.body;
  console.log(binaryTree);
  res.status(200).send({ steps });
});

app.listen(5555, console.log('Up on 5555'));
