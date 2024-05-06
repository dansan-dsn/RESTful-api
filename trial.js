
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.post('/api/products', async (req, res) => {
     try {
		const product = await Product.create(req.body)
		res.status(200).json(product)
	 } catch (error) {
		res.status(500).json({message: error.message})
	 }
})

app.get('/api/products', async (req, res) => {
	try {
		const product = await Product.find({})
		res.status(200).json(product)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
})

app.get('/api/product/:id', async (req, res) => {
	try {
		const { id } = req.params
		const product = Product.findById(id)
		res.status(200).json(product)
	} catch (error) {
		res.status(500).json({message: error.message})
	}
})

app.put('/api/product/:id', async (req, res) => {  // get and post (req.params and req.body)
	try {
		const { id } = req.params
		const product = await Product.findByIdAndUpdate(id, req.body)

		if(!product) {
			return res.status(400).json({message: 'Product not found'})
		}
        
		const updateProduct = await Product.findById(id)
		res.status(200).json(updateProduct)

	} catch (error) {
		res.status(500).json({message: error.message})
	}
})

mongoose.connect('')
.then(() => {
	console.log('connected to the db!')

	app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}...`)
	})
})
.catch(() => {
	console.log('DB disconnected!')
})
