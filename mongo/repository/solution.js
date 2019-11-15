const mongo = require('../index');

const { Solution } = mongo;

exports.findAll = async () => Solution.find({});

exports.create = async (solution) => Solution.create(solution);

exports.findById = async (id) => Solution.findById(id);
