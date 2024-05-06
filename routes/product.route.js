
const express = require('express')
const router = express.Router()
const { getProducts } = require('../controller/product.controller')
const { getSingleProduct } = require('../controller/product.controller')
const { createProduct } = require('../controller/product.controller')
const { updateProduct } = require('../controller/product.controller')
const { deleteProduct } = require('../controller/product.controller')

// get products from the store
router.get('/', getProducts)
      .get('/:id', getSingleProduct)
	  .post('/create', createProduct)
	  .put('/update/:id', updateProduct)
	  .delete('/delete/:id', deleteProduct)

module.exports = router
	 
// function handler, routes , middleware, models for the database