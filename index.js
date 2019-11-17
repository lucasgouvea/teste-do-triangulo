const express = require('express');
const dotenv = require('dotenv');

const btService = require('./services/binaryTree');

const mongo = require('./mongo/index');
const Solution = require('./mongo/repository/solution');

dotenv.config();

const { API_PORT } = process.env;

const app = express();

app.use(express.json());

mongo.connectMongo();

app.post('/binary-tree', async (req, res) => {
  const { binaryTree } = req.body;
  console.log(typeof binaryTree);
  await btService.create(binaryTree);
  const solution = btService.getSolution(binaryTree);
  await Solution.create(solution);
  res.status(200).send({ solution });
});

app.listen(API_PORT, console.log(`Up on ${API_PORT}`));
