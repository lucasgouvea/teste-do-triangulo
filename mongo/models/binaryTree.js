const mongoose = require('mongoose');

const binaryTree = {
  data: [[]],
};

const schema = new mongoose.Schema(binaryTree);
const BinaryTree = mongoose.model('BinaryTree', schema);

module.exports = BinaryTree;
