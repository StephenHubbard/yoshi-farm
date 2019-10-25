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
app.put('/api/yoshiIsle/:id', ctrl.mushToggleIsle)
app.delete('/api/yoshiIsle/:id', ctrl.releaseIsle)


app.post('/api/yoshiKingdom', ctrl.hatchKingdom)
app.get('/api/yoshiKingdom', ctrl.getYoshiKingdom)
app.delete('/api/yoshiKingdom/:id', ctrl.releaseKingdom)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Yoshi's marching on Mushroom Kingdom.`))