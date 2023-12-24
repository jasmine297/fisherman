require('dotenv').config()

const reservationModel = require('../database/models/reservation')
const asyncHandler = require("express-async-handler");


const getReservationById =  asyncHandler(async (req,res) => {
    reservationModel.findById(req.params.id).then((reservation) => {
        if (!reservation) return res.status(404).json({message: 'No reservation found'});
        else return res.status(200).json(reservation)
    })
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
    reservationModel.findByIdAndUpdate(req.params.id).then((reservation) => {
        if (!reservation) return res.status(404).json({message: 'No reservation found'});
        else return res.status(200).json(req.body)
    })
})

const deleteReservationById =  asyncHandler(async (req,res) => {
    reservationModel.findByIdAndDelete(req.params.id).then((reservation) => {
        if (!reservation) return res.status(404).json({message: 'No reservation found'});
        else return res.status(200).json({message: 'reservation delete'})
    })
})

const createReservationById =  asyncHandler(async (req,res) => {
    reservationModel.create(req.params.id).then((reservation) => {
        if (!reservation) return res.status(404).json({message: 'No reservation found'});
        else return res.status(200).json(reservation)
    })
})

module.exports = {
    getReservationById,
    updateReservationById,
    deleteReservationById,
    createReservationById,
    getReservationListByFilters
}