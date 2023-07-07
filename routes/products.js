const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getAllProductsStatic,
  createproduct,
} = require('../controllers/products');

router.route('/').get(getAllProducts).post(createproduct);
router.route('/static').get(getAllProductsStatic);

module.exports = router;
