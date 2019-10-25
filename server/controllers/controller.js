const yoshiHatchedIsle = []
const yoshiHatchedKingdom = []
let id = 0

module.exports = {
    hatchIsle: (req, res) => {
        const newYoshi = {...req.body, id}
        yoshiHatchedIsle.push(newYoshi)
        id++
        res.status(200).send(yoshiHatchedIsle)
    }, 
    hatchKingdom: (req, res) => {
        const newYoshi = {...req.body, id}
        yoshiHatchedKingdom.push(newYoshi)
        id++
        res.status(200).send(yoshiHatchedKingdom)
    }, 
    getYoshiIsle: (req, res) => {
        res.status(200).send(yoshiHatchedIsle)
    }, 
    getYoshiKingdom: (req, res) => {
        res.status(200).send(yoshiHatchedKingdom)
    }, 
    releaseIsle: (req, res) => {
        const {id} = req.params 
        const index = yoshiHatchedIsle.findIndex(el => el.id === +id)
        yoshiHatchedIsle.splice(index, 1)
        res.status(200).send(yoshiHatchedIsle)
    },
    releaseKingdom: (req, res) => {
        const {id} = req.params 
        const index = yoshiHatchedKingdom.findIndex(el => el.id === +id)
        yoshiHatchedKingdom.splice(index, 1)
        res.status(200).send(yoshiHatchedKingdom)
    }, 
    mushToggleIsle: (req, res) => {
        const {id} = req.params
        const index = yoshiHatchedIsle.findIndex(el => el.id === +id)
        yoshiHatchedIsle.splice(index, 1)
        res.status(200).send(yoshiHatchedIsle)
    }
}