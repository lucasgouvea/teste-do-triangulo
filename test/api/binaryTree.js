const { expect } = require('chai');
const request = require('request');

const API_HOST = 'http://localhost:5555';

const json = { binaryTree: [[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]] };

describe('POST Binary Tree', () => {
  it('Should post Binary Tree and receive solution steps', (done) => {
    request.post(`${API_HOST}/binary-tree`, { json }, (_, res, body) => {
      expect(res.statusCode).to.be.equals(200);
      expect(body.steps).to.be.a('array');
      expect(body.steps[0].row).to.be.a('number');
      expect(body.steps[0].leftChild).to.be.a('object');
      expect(body.steps[0].rightChild).to.be.a('object');
      expect(body.steps[0].node).to.be.a('object');
      expect(body.steps[0].bigger).to.be.a('string');
      expect(body.steps[0].sum).to.be.a('number');
      done();
    });
  });
});
