const boatModel = require('../database/models/boat.model')
const asyncHandler = require("express-async-handler")
const { isFormatIdIncorrect } = require('../validators/data.validator')
const userModel = require('../database/models/user.model')

const getBoatById = asyncHandler(async (req, res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        boatModel.findById(req.params.id).then((boat) => {
            if (!boat) return res.status(404).json({ message: "Boat not found"})
            else return res.status(200).json(boat)
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const getBoatByBoundingBox = asyncHandler(async (req, res) => {
    try {
        boatModel.find({}).then((boats) => {
            if (!boats) return res.status(404).json({ message: "Boat not found"})
            else {
                let confirmedBoats = [];
                console.log(req.body);
                console.log(boats);
                boats.forEach(b => {
                    if (
                        (b.port_localisation[0] >= req.body.min_latitude && b.port_localisation[0] <= req.body.max_latitude) &&
                        (b.port_localisation[1] >= req.body.min_longitude && b.port_localisation[1] <= req.body.max_longitude)
                    )
                    confirmedBoats.push(b)
                })
                if (confirmedBoats.length === 0) return res.status(404).json({ message: "Boat not found"})
                else return res.status(200).json(confirmedBoats)
            }
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const updateBoatById = asyncHandler(async (req, res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        boatModel.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }).then((boat) => {
            if (!boat) return res.status(404).json({ message: "Boat not found"})
            else return res.status(200).json(boat)        
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const deleteBoatById = asyncHandler(async (req, res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        boatModel.findByIdAndDelete(req.params.id).then((boat) => {
            if (!boat) return res.status(404).json({ message: "Boat not found"})
            else return res.status(200).json({
                message: "Boat deleted"
            }) 
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const createBoat = asyncHandler(async (req, res) => {
    try {
        userModel.findById(req.body.user).then((user) => {
            console.log("user", user);
            if (user && !user.boat_licence_number) {
                return res.status(500).json({ message: "User does not have boat licence number"})
            }

            const newBoat = new boatModel(req.body)
            console.log(req.body);
            newBoat.save().then((response) => {
                return res.status(201).json({
                    message: "New boat created",
                    result: response,
                    success: true
                })
            }).catch((error) => {
                res.status(500).json({
                    error: error,
                    success: false
                })
            })
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

module.exports = {
    getBoatById,
    updateBoatById,
    deleteBoatById,
    getBoatByBoundingBox,
    createBoat
}