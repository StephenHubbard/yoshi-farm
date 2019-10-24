require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controllers/controller')

const app = express()

// TOP LEVEL MIDDLEWARE:
app.use(express.json())

// ENDPOINTS:

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Yoshi's marching on Mushroom Kingdom.`))