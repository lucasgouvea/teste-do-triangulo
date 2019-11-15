const { expect } = require('chai');
const mongoose = require('mongoose');
const solutionService = require('../../services/solution');
const steps = require('../steps');

const {
  MONGO_DB, MONGO_HOST, MONGO_PASSWORD, MONGO_PORT, MONGO_USER,
} = require('../config');

describe('Create Binary Tree', () => {
  before(() => {
    const uri = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
    mongoose.connect(uri, { useNewUrlParser: true });
  });
  it('Should create a Solution, and check if it was created', async () => {
    const solution = { steps, executionTime: 1 };
    let res = await solutionService.create(solution);
    const id = res._id.toString();
    expect(id).to.be.a('string');
    res = await solutionService.findById(id);
    expect(res._id.toString()).to.be.equals(id);
  });
  it('Should find all solutions', async () => {
    const res = await solutionService.findAll();
    expect(res).to.be.a('array');
  });
});
