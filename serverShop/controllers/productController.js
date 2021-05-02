const uuid = require('uuid');
const path = require('path');
const { Product, ProductInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class ProductController {
  async create(req, res, next) {
    try {
      const {
        name,
        price,
        size,
        brandProductId,
        typeProductId
      } = req.body;
      let { info } = req.body;
      const { photo } = req.files;
      const fileName = `${uuid.v4()}.jpg`;
      await photo.mv(path.resolve(__dirname, '..', 'static', fileName));

      const product = await Product.create({
        name,
        price,
        size,
        brandProductId,
        typeProductId,
        info,
        photo: fileName
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => ProductInfo.create({ title: i.title, description: i.description, productId: product.id }));
      }

      return res.json(product);
    } catch
      (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const { brandProductId, typeProductId } = req.query;
    let { limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    const offset = page * limit - limit;
    let products;
    if (!brandProductId && !typeProductId) {
      products = await Product.findAndCountAll({ limit, offset });
    }
    if (brandProductId && !typeProductId) {
      products = await Product.findAndCountAll({ where: { brandProductId }, limit, offset });
    }
    if (!brandProductId && typeProductId) {
      products = await Product.findAndCountAll({ where: { typeProductId }, limit, offset });
    }
    if (brandProductId && typeProductId) {
      products = await Product.findAndCountAll({ where: { brandProductId, typeProductId }, limit, offset });
    }
    return res.json(products);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const product = await Product.findOne(
      {
        where: { id },
        include: [{ model: ProductInfo, as: 'info' }]
      }
    );
    return res.json(product);
  }
}

module.exports = new ProductController();
