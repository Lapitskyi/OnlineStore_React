const { TypeProduct } = require('../models/models');
// eslint-disable-next-line no-unused-vars
const ApiError = require('../error/ApiError');

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const typeProduct = await TypeProduct.create({ name });
    return res.json(typeProduct);
  }

  async getAll(req, res) {
    const typesProduct = await TypeProduct.findAll();
    return res.json(typesProduct);
  }
}
module.exports = new TypeController();
