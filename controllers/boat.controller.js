const boatModel = require('../database/models/boat')
const asyncHandler = require("express-async-handler");

const getBoatById = asyncHandler(async (req, res) => {
    boatModel.findById(req.params.id).then((boat) => {
        if (!boat) return res.status(404).json({ message: "Boat not found"})
        else return res.status(200).json(boat)
    })
})
const updateBoatById = asyncHandler(async (req, res) => {
    boatModel.findByIdAndUpdate(req.params.id).then((boat) => {
        if (!boat) return res.status(404).json({ message: "Boat not found"})
        else return res.status(200).json(req.body)
        
    })
})

const deleteBoatById = asyncHandler(async (req, res) => {
    boatModel.deleteBoatById(req.params.id).then((boat) => {
        if (!boat) return res.status(404).json({ message: "Boat not found"})
        else return res.status(200).json({
            message: " Boat deleted"
        }) 
    })
})

module.exports = {
    getBoatById,
    updateBoatById,
    deleteBoatById
}