
const express = require('express')
const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.send('Hello there')
})

// connecting to the database
mongoose.connect('mongodb+srv://ddryn970:NodeApi@nodeapi.yijbrxa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeApi')
.then(() => {
    console.log('Connected to the database!')
})
.catch(() => {
    console.log('connection failed!')
})

// server configurations
app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}...`)
})