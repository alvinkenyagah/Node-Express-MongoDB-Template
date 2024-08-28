const express = require('express');
const router = express.Router()
const Product = require('../models/products.model.js')
const {getProducts, getProduct, createProduct, deleteProduct, updateProduct } = require('../controllers/product.controller.js')



router.get('/', getProducts );
router.get('/:id', getProduct );
router.post('/', createProduct );
router.delete('/:id', deleteProduct );
router.put('/:id', updateProduct );



module.exports = router