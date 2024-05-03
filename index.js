
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello there')
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


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
    console.log('connection failed!')
})
