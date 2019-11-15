const { expect } = require('chai');
const request = require('request');
const solutionSteps = require('../solution');

const API_HOST = 'http://localhost:5555';

const json = { binaryTree: [[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]] };

describe('POST Binary Tree', () => {
  it('Should post Binary Tree and receive solution steps', (done) => {
    request.post(`${API_HOST}/binary-tree`, { json }, (_, res, body) => {
      const { executionTime, steps } = body.solution;
      expect(res.statusCode).to.be.equals(200);
      expect(steps).to.be.a('array');
      expect(executionTime).to.be.a('number');
      /* Checks the solution steps with the pre-made solution */
      let i = 0;
      steps.forEach((step) => {
        expect(step.row).to.be.equals(solutionSteps[i].row);
        expect(step.leftChild.index).to.be.equals(solutionSteps[i].leftChild.index);
        expect(step.leftChild.value).to.be.equals(solutionSteps[i].leftChild.value);
        expect(step.rightChild.index).to.be.equals(solutionSteps[i].rightChild.index);
        expect(step.rightChild.value).to.be.equals(solutionSteps[i].rightChild.value);
        expect(step.node.index).to.be.equals(solutionSteps[i].node.index);
        expect(step.node.value).to.be.equals(solutionSteps[i].node.value);
        expect(step.bigger).to.be.equals(solutionSteps[i].bigger);
        expect(step.sum).to.be.equals(solutionSteps[i].sum);
        i++;
      });
      done();
    });
  });
});
