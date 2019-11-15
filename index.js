const express = require('express');
const dotenv = require('dotenv');

const { getSolution } = require('./services/binaryTree');

const mongo = require('./mongo/index');

dotenv.config();

const { API_PORT } = process.env;

const app = express();

app.use(express.json());

mongo.connectMongo();

app.post('/binary-tree', (req, res) => {
  const { binaryTree } = req.body;
  const solution = getSolution(binaryTree);
  res.status(200).send({ solution });
});

app.listen(API_PORT, console.log(`Up on ${API_PORT}`));
