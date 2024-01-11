const tripModel = require('../database/models/trip.model')
const asyncHandler = require("express-async-handler");
const { isFormatIdIncorrect } = require('../validators/data.validator');
const boatModel = require('../database/models/boat.model')

const getTripById = asyncHandler(async (req, res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        tripModel.findById(req.params.id).then((trip) => {
            if (!trip) return res.status(404).json({ message: "Trip not found"})
            else return res.status(200).json(trip)
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const updateTripById = asyncHandler(async (req, res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        tripModel.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }).then((trip) => {
            if (!trip) return res.status(404).json({ message: "Trip not found"})
            else return res.status(200).json(req.body)
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const deleteTripById = asyncHandler(async (req, res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        tripModel.findByIdAndDelete(req.params.id).then((trip) => {
            if (!trip) return res.status(404).json({ message: "Trip not found"})
            else return res.status(200).json({
                message: "Trip deleted"
            }) 
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const createTrip = asyncHandler(async (req, res) => {
    try {
        boatModel.findById(req.body.boat).then((boat) => {
            console.log(boat.user.toString(), req.body.user.toString());
            if (boat && boat.user.toString() !== req.body.user.toString()) return res.status(500).json({ message: "User don't have boat"})

            const newTrip = new tripModel(req.body)
            newTrip.save().then((response) => {
                return res.status(201).json({
                    message: "New trip created",
                    result: response,
                    success: true
                })
            }).catch((error) => {
                return res.status(500).json({
                    error: error,
                    success: false
                })
            })
        })

    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const getTripListByFilters = asyncHandler(async (req, res) => {
    try {
        tripModel.find(req.body).then((trips) => {
            if (!trips || trips.length === 0) return res.status(404).json({ message: "No trip found with filters"})
            else return res.status(200).json(trips)
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const doesUserHaveBoat = (async (userId, boatId) => {
    try {
        boatModel.findById(boatId).then((boat) => {
            console.log(boat.user.toString(), userId);
            if (boat && boat.user.toString() === userId) return true;
            else return false;
        })
    } catch (error) {
        return false;
    }
})

module.exports = {
    getTripListByFilters,
    getTripById,
    updateTripById,
    deleteTripById,
    createTrip
}