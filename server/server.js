require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controllers/controller')

const app = express()

// TOP LEVEL MIDDLEWARE:
app.use(express.json())

// ENDPOINTS:
app.post('/api/yoshi', ctrl.hatch)
app.get('/api/yoshi', ctrl.getYoshi)
app.delete('/api/yoshi/:id', ctrl.release)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Yoshi's marching on Mushroom Kingdom.`))