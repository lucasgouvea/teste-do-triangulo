const mongoose = require('mongoose');

const solution = {
  executionTime: Number,
  steps: [
    {
      row: Number,
      leftChild: {
        index: Number,
        value: Number,
      },
      rightChild: {
        index: Number,
        value: Number,
      },
      node: {
        index: Number,
        value: Number,
      },
      bigger: String,
      sum: Number,
    },
  ],
};

const schema = new mongoose.Schema(solution);
const Solution = mongoose.model('Solution', schema);

module.exports = Solution;
