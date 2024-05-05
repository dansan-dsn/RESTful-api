
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

// get products from the store
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// add products to the store
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// get one product from the store
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

// update a product in the store
app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }
 
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a product from the store

// connecting to the database
mongoose.connect('mongodb+srv://ddryn970:NodeApi@nodeapi.yijbrxa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeApi')
.then(() => {
    console.log('Connected to the database!')

    // server configurations
app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}...`)
})
})
.catch(() => {
    console.log('DB connection failed!')
})

