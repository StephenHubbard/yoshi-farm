const yoshiHatched = []
let id = 0

module.exports = {
    hatch: (req, res) => {
        const newYoshi = {...req.body, id}
        yoshiHatched.push(newYoshi)
        id++
        res.status(200).send(yoshiHatched)
    }, 
    getYoshi: (req, res) => {
        res.status(200).send(yoshiHatched)
    }, 
    release: (req, res) => {
        const {id} = req.params 
        const index = yoshiHatched.findIndex(el => el.id === +id)
        yoshiHatched.splice(index, 1)
        res.status(200).send(yoshiHatched)
    }
}