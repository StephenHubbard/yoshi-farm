require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controllers/controller')

const app = express()

// TOP LEVEL MIDDLEWARE:
app.use(express.json())

// ENDPOINTS:
app.post('/api/yoshiIsle', ctrl.hatchIsle)
app.get('/api/yoshiIsle', ctrl.getYoshiIsle)
app.get('/api/filter/yoshiIsle', ctrl.filterYoshiIsle)
app.put('/api/yoshiIsle/:id', ctrl.yoshiToggleIsle)
app.delete('/api/yoshiIsle/:id', ctrl.releaseIsle)

app.post('/api/yoshiKingdom', ctrl.hatchKingdom)
app.get('/api/yoshiKingdom', ctrl.getYoshiKingdom)
app.get('/api/filter/yoshiKingdom', ctrl.filterYoshiKingdom)
app.put('/api/yoshiKingdom/:id', ctrl.yoshiToggleKingdom)
app.delete('/api/yoshiKingdom/:id', ctrl.releaseKingdom)

app.listen(4001, () => console.log(`${4001} Yoshi's marching on Bowser's Castle.`))