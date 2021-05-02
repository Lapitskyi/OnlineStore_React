const { BrandProduct } = require('../models/models');
// eslint-disable-next-line no-unused-vars
const ApiError = require('../error/ApiError');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brandProduct = await BrandProduct.create({ name });
    return res.json(brandProduct);
  }

  async getAll(req, res) {
    const brandsProduct = await BrandProduct.findAll();
    return res.json(brandsProduct);
  }
}
module.exports = new BrandController();
