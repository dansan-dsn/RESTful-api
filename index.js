
const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/product.route')
const PORT = process.env.PORT || 3000
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api/product', productRoutes)

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

