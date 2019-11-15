const mongo = require('../index');

const { BinaryTree } = mongo;

exports.findById = async (id) => BinaryTree.findById(id);

exports.findAll = async () => BinaryTree.find();

exports.create = async (binaryTree) => BinaryTree.create({ data: binaryTree });
