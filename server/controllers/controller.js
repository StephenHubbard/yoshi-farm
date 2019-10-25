const yoshiCaught = []
let id = 0

module.exports = {
    hatch: (req, res) => {
        const newYoshi = {...req.body, id}
        yoshiCaught.push(newYoshi)
        id++
        res.status(200).send(yoshiCaught)
    }, 
    getYoshi: (req, res) => {
        res.status(200).send(yoshiCaught)
    }
}