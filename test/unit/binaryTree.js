const { expect } = require('chai');
const mongoose = require('mongoose');
const btService = require('../../services/binaryTree');
const {
  MONGO_DB, MONGO_HOST, MONGO_PASSWORD, MONGO_PORT, MONGO_USER,
} = require('../config');


binaryTree = [[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]];

describe('Create Binary Tree', () => {
  before(() => {
    const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
    mongoose.connect(uri, { useNewUrlParser: true });
  });
  it('Should create a Binary Tree, and check if it was created', async () => {
    let res = await btService.create(binaryTree);
    const id = res._id.toString();
    expect(id).to.be.a('string');
    res = await btService.findById(id);
    expect(res._id.toString()).to.be.equals(id);
  });
  it('Should find all binary trees', async () => {
    const res = await btService.findAll();
    expect(res).to.be.a('array');
  });
});
