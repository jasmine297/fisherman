const reservationModel = require('../database/models/reservation.model')
const asyncHandler = require("express-async-handler");
const { isFormatIdIncorrect } = require('../validators/data.validator');

const getReservationById =  asyncHandler(async (req,res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        reservationModel.findById(req.params.id).then((reservation) => {
            if (!reservation) return res.status(404).json({message: 'No reservation found'});
            else return res.status(200).json(reservation)
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const getReservationListByFilters = asyncHandler(async (req, res) => {
    try {
        reservationModel.find(req.body).then((reservations) => {
            if (!reservations) return res.status(404).json({ message: "No reservation found with filters"})
            else return res.status(200).json(reservations)
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const updateReservationById =  asyncHandler(async (req,res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        reservationModel.findByIdAndUpdate(req.params.id, req.body, { runValidators: true }).then((reservation) => {
            if (!reservation) return res.status(404).json({message: 'No reservation found'});
            else return res.status(200).json(reservation)
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const deleteReservationById =  asyncHandler(async (req,res) => {
    try {
        if (isFormatIdIncorrect(req.params.id)) return res.status(500).json({ message: "Wrong id length"})

        reservationModel.findByIdAndDelete(req.params.id).then((reservation) => {
            if (!reservation) return res.status(404).json({message: 'No reservation found'});
            else return res.status(200).json({message: 'reservation delete'})
        })
    } catch (error) {
        return res.status(500).json({ message: error})
    }
})

const createReservation =  asyncHandler(async (req,res) => {
    try {
        const newReservation = new reservationModel(req.body)
        newReservation.save().then((response) => {
            return res.status(201).json({
                message: "New reservation created",
                result: response,
                success: true
            })
        }).catch((error) => {
            res.status(500).json({
                error: error,
                success: false
            })
        })
    } catch (error) {
        return res.status(500).json({ message: error })
    }
})

module.exports = {
    getReservationById,
    updateReservationById,
    deleteReservationById,
    createReservation,
    getReservationListByFilters
}